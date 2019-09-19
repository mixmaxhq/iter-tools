import { $iterableCurry } from '../../internal/$iterable.js';
import $internalIncludes from '../$includes_/$includes.js';

const config = { any: false, subseq: true };

export function $includesSubseq(iterable, value) {
  return $internalIncludes(iterable, config, value);
}

export default $iterableCurry($includesSubseq, {
  reduces: true,
});
