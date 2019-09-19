/**
 * @generated-from ./zip.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { zip, toArray, slice, range } from '../../..';
import { OneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures.js';
describe('zip', () => {
  it('zips', () => {
    const iter = zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
  it('zips using iterables', () => {
    const iter = zip(
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
  it('zips stopping early', () => {
    const iter = zip(
      range({
        start: 1,
        end: 4,
      }),
      range({
        start: 4,
        end: 7,
      }),
      [7, 8],
    );
    expect(toArray(iter)).toEqual([[1, 4, 7], [2, 5, 8]]);
  });
  it('closes when stopping earlier', () => {
    const oneTwoThree = new OneTwoThreeIterable();
    const iter = slice(0, 2, zip(range(2), oneTwoThree));
    expect(toArray(iter)).toEqual([[0, 1], [1, 2]]);
    expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
  });
});
