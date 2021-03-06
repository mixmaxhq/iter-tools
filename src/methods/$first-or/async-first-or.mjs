/**
 * @generated-from ./$first-or.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable, asyncIterableCurry } from '../../internal/async-iterable';
export async function asyncFirstOr(iterable, whenEmpty) {
  const iter = asyncEnsureIterable(iterable)[Symbol.asyncIterator]();
  const { value, done } = await iter.next();
  if (done) return whenEmpty;
  if (typeof iter.return === 'function') await iter.return();
  return value;
}
export default asyncIterableCurry(asyncFirstOr, {
  reduces: true,
});
