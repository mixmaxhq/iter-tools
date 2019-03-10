import { ensureAsyncIterable } from './internal/async-iterable'
import { Exchange } from './internal/queues'

export default function asyncFork (iterable) {
  const iterator = ensureAsyncIterable(iterable)[Symbol.asyncIterator]()
  let iterableCounter = 0
  let noNewIterables = false
  const exchange = new Exchange()
  let done = false
  let doneValue

  function fetch () {
    return new Promise((resolve, reject) => {
      iterator.next()
        .then((newItem) => {
          if (newItem.done) {
            done = true
            doneValue = newItem.value
            return resolve()
          } else {
            exchange.push(newItem.value)
            return resolve()
          }
        })
        .catch((err) => reject(err))
    })
  }

  async function returnIterator () {
    if (noNewIterables && iterableCounter === 0) {
      if (typeof iterator.return === 'function') await iterator.return()
    }
  }

  async function * generateFork (consumer) {
    try {
      iterableCounter++
      yield '__ENSURE_FINALLY__'
      while (true) {
        if (!consumer.isEmpty()) {
          yield consumer.shift()
        } else if (done) {
          return doneValue
        } else {
          await fetch()
        }
      }
    } finally {
      iterableCounter--
      await returnIterator()
    }
  }

  function * generateForks () {
    try {
      while (true) {
        const fork = generateFork(exchange.spawnConsumer())
        fork.next() // ensure finally
        yield fork
      }
    } finally {
      noNewIterables = true
      returnIterator()
    }
  }

  return generateForks()
}
