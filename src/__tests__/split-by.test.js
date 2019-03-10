/* eslint-env node, jest */
const { splitBy, asyncSplitBy, map, toArray, asyncToArray } = require('..')

describe('splitBy', function () {
  it('splits all', function () {
    const iterable = splitBy('ABBC')
    expect(Array.from(iterable)).toEqual([['A'], ['B'], ['B'], ['C']])
  })

  it('creates empty iterables', function () {
    const iterable = splitBy(char => char === 'x', 'x')
    expect(Array.from(map(toArray, iterable))).toEqual([[], []])
  })

  it('splits', function () {
    const [a, b, c] = splitBy(char => char === 'x', 'AAAxBCDExF')
    expect(Array.from(a)).toEqual(['A', 'A', 'A'])
    expect(Array.from(b)).toEqual(['B', 'C', 'D', 'E'])
    expect(Array.from(c)).toEqual(['F'])
  })
})
