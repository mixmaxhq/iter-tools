import { $iterableCurry } from '../../internal/$iterable.js';
import $internalStartsWith from '../$starts-with_/$starts-with.js';

const config = { any: true, subseq: false };

export function $startsWithAny(iterable, value) {
  return $internalStartsWith(iterable, config, value);
}

export default $iterableCurry($startsWithAny, {
  reduces: true,
});
