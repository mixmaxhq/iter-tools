/**
 * @generated-from ./$includes-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import asyncInternalIncludes from '../$includes_/async-includes';
const config = {
  any: true,
  subseq: true,
};
export function asyncIncludesAnySubseq(iterable, value) {
  return asyncInternalIncludes(iterable, config, value);
}
export default asyncIterableCurry(asyncIncludesAnySubseq, {
  reduces: true,
});