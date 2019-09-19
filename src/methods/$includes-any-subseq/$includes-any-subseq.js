import { $iterableCurry } from '../../internal/$iterable.js';
import $internalIncludes from '../$includes_/$includes.js';

const config = { any: true, subseq: true };

export function $includesAnySubseq(iterable, value) {
  return $internalIncludes(iterable, config, value);
}

export default $iterableCurry($includesAnySubseq, {
  reduces: true,
});
