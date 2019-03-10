import { asyncIterableCurry } from './internal/async-iterable'
import { createExchange } from './internal/queues'

function asyncSplitBy (getKey = (k) => k, iterable) {
  const iterator = iterable[Symbol.asyncIterator]()

  let itemIndex = 0
  let iterableCounter = 0
  let noNewIterables = false
  const { consumer, enqueue } = createExchange()
  let done = false
  let groups = []

  // using an empty object as initial key:
  // it is surely different from any possible key
  let fetchKey = {}

  // fetch new item from Iterator
  // return the item and advance the
  // main queue consumer
  // it also clone the head of the queue when the key changes
  async function fetch () {
    const newItem = await iterator.next()
    if (newItem.done) {
      done = true
      return
    }
    const key = getKey(newItem.value, itemIndex++)
    enqueue({ value: newItem.value, key })
    if (key !== fetchKey) {
      fetchKey = key
      groups.push({ consumer: consumer.clone(), key })
    }
    consumer.shift() // main consumer forllows the queue
  }

  // close the original iterator if possible
  async function returnIterator () {
    if (noNewIterables && iterableCounter === 0) {
      if (typeof iterator.return === 'function') await iterator.return()
    }
  }

  // generate subgroup where adjacent items have the same key
  // it picks up new item from the buffer. Every instance has
  // its own independent consumer
  async function * generateGroup (groupNumber) {
    try {
      iterableCounter++
      // the function generator is ready.
      // *1*: I use this trick to ensure that finally is called
      yield 'ready'

      while (true) {
        const group = groups[groupNumber]
        if (!group || group.consumer.isEmpty()) {
          if (done) return
          await fetch()
          continue
        }
        const nextItem = group.consumer.shift()
        if (nextItem.key !== group.key) {
          return // see *2*
        }
        yield nextItem.value
      }
    } finally {
      groups[groupNumber] = undefined
      iterableCounter--
      await returnIterator()
    }
  }

  // generate group returning
  function * generateGroups () {
    let groupCounter = 0
    try {
      while (true) {
        const group = generateGroup(groupCounter++)
        group.next() // see *1*
        yield group
      }
    } finally {
      noNewIterables = true
      returnIterator() // no await
    }
  }

  return generateGroups()
}

export default asyncIterableCurry(asyncSplitBy, false, 0, 1)
