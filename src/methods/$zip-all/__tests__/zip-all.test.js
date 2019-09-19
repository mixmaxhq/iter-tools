/**
 * @generated-from ./$zip-all.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { zipAll, toArray, slice, range } from '../../..';
import { OneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures.js';
describe('zipAll', () => {
  it('zips', () => {
    const iter = zipAll([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
  it('zips using iterables', () => {
    const iter = zipAll(
      range({
        start: 1,
        end: 4,
      }),
      range({
        start: 4,
        end: 7,
      }),
      [7, 8, 9],
    );
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
  it('fills with undefined when some iterables are exhausted', () => {
    const iter = zipAll(
      range({
        start: 1,
        end: 4,
      }),
      range({
        start: 4,
        end: 6,
      }),
      [7, 8],
    );
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, undefined, undefined]]);
  });
  it('fills with filler when some iterables are exhausted', () => {
    const iter = zipAll(
      {
        filler: null,
      },
      range({
        start: 1,
        end: 4,
      }),
      range({
        start: 4,
        end: 6,
      }),
      [7, 8],
    );
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, null, null]]);
  });
  it('closes when stopping earlier', () => {
    // broken if transpiled with es5 loose
    const oneTwoThree = new OneTwoThreeIterable();
    const iter = slice(0, 2, zipAll(range(2), oneTwoThree));
    expect(toArray(iter)).toEqual([[0, 1], [1, 2]]);
    expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
  });
});
