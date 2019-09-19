import { $iterableCurry } from '../../internal/$iterable.js';
import $internalStartsWith from '../$starts-with_/$starts-with.js';

const config = { any: false, subseq: true };

export function $startsWithSubseq(iterable, value) {
  return $internalStartsWith(iterable, config, value);
}

export default $iterableCurry($startsWithSubseq, {
  reduces: true,
});
