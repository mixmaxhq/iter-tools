import { $iterableCurry } from '../../internal/$iterable.js';
import $internalStartsWith from '../$starts-with_/$starts-with.js';

const config = { any: true, subseq: true };

export function $startsWithAnySubseq(iterable, value) {
  return $internalStartsWith(iterable, config, value);
}

export default $iterableCurry($startsWithAnySubseq, {
  reduces: true,
});
