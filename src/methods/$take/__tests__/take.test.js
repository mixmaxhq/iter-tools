/**
 * @generated-from ./$take.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { take, toArray, wrap } from '../../..';
describe('take', () => {
  it('takes the first n items', () => {
    expect(toArray(take(2, wrap([1, 2, 3])))).toEqual([1, 2]);
  });
});
