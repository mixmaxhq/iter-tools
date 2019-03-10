import { iterableCurry } from './internal/iterable'
import { WeakExchange } from './internal/queues'
import consume from './consume'

function groupBy (getKey = (k, i) => k, iterable) {
  let iterator
  let idx = 0
  const weakExchange = new WeakExchange()
  let consumer

  let done = false
  let item
  let nGroups = 0
  let groupsConsumed = false

  function fetch (expectedKey = {}) {
    const { done: _done, value } = iterator.next()

    done = _done

    if (!done) {
      const key = getKey(value, idx++)
      item = { value, key }

      if (expectedKey !== key) {
        consumer = weakExchange.spawnConsumer()
      }
      weakExchange.push(item)
    }
  }

  function fetchGroup (key) {
    while (!done && item.key === key) fetch(key)
  }

  function * generateGroup (key, consumer, idx) {
    try {
      yield '__ENSURE_FINALLY__'

      do {
        if (consumer.peek().key !== key) {
          break
        }

        const cachedItem = consumer.shift()

        if (consumer.isEmpty()) {
          fetch(key)
        }

        yield cachedItem.value
      } while (!done)
    } finally {
      if (groupsConsumed && !done && idx === nGroups && typeof iterator.return === 'function') {
        iterator.return()
      }
    }
  }

  function * generateGroups () {
    try {
      iterator = iterable[Symbol.iterator]()

      consumer = weakExchange.spawnConsumer()

      fetch()

      while (!done) {
        const { key } = item
        const group = generateGroup(key, consumer, nGroups++)
        group.next() // ensure finally
        yield [key, group]
        fetchGroup(key)
      }
    } finally {
      groupsConsumed = true
    }
  }

  return generateGroups()
}

export default iterableCurry(groupBy, false, 0, 1)
