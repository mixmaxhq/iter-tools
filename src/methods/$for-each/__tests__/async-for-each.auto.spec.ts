/**
 * @generated-from ./async-for-each.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncForEach } from '../../..';
describe('asyncForEach', () => {
  it('iterates over an iterable', async () => {
    const arr: Array<number> = [];
    await asyncForEach(item => arr.push(item), [1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
  it('iterates over an iterable using a promise', async () => {
    const arr: Array<number> = [];
    await asyncForEach(
      item => {
        arr.push(item);
        return Promise.resolve(0);
      },
      [1, 2, 3],
    );
    expect(arr).toEqual([1, 2, 3]);
  });
  it('iterates over an iterable (curried)', async () => {
    const arr: Array<number> = [];
    const forEachPush = asyncForEach((item: number) => arr.push(item));
    await forEachPush([1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
});
