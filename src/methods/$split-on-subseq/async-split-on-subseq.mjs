/**
 * @generated-from ./$split-on-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncSplitOnAnySubseq } from '../$split-on-any-subseq/async-split-on-any-subseq';
export function asyncSplitOnSubseq(source, separatorSubseq) {
  return asyncSplitOnAnySubseq(source, [separatorSubseq]);
}
export default asyncIterableCurry(asyncSplitOnSubseq);
