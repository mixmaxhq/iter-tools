import { iterableCurry } from './internal/iterable'
import { WeakExchange } from './internal/queues'
import consume from './consume'

const SPLIT = {}

function * splitAll (iterable) {
  for (const item of iterable) {
    yield [item]
  }
}

function splitBy (predicate, iterable) {
  if (!predicate) {
    return splitAll(iterable)
  }

  let iterator
  let idx = 0
  const weakExchange = new WeakExchange()

  let done = false
  let nGroups = 0
  let groupsConsumed = false
  let lastGroupConsumed

  function fetch () {
    const { done: _done, value } = iterator.next()

    const newItem = {
      done: (done = _done),
      value: predicate(value, idx++) ? SPLIT : value
    }

    weakExchange.push(newItem)

    return newItem
  }

  function fetchGroup () {
    let item
    while (!item || !(item.done || item.value === SPLIT)) item = fetch()
  }

  function * generateGroup (consumer, idx) {
    try {
      yield '__ENSURE_FINALLY__'

      while (true) {
        if (consumer.isEmpty()) fetch()

        const item = consumer.shift()
        if (item.value === SPLIT || item.done) break

        yield item.value
      }

      lastGroupConsumed = true
    } finally {
      if (groupsConsumed && !done && idx === nGroups && typeof iterator.return === 'function') {
        iterator.return()
      }
    }
  }

  function * generateGroups () {
    try {
      iterator = iterable[Symbol.iterator]()

      do {
        const consumer = weakExchange.spawnConsumer()
        lastGroupConsumed = false
        const group = generateGroup(consumer, nGroups++)
        group.next() // ensure finally
        yield group
        if (!lastGroupConsumed) fetchGroup()
      } while (!done)
    } finally {
      groupsConsumed = true
    }
  }

  return generateGroups()
}

export default iterableCurry(splitBy, false, 0, 1)
