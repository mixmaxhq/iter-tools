import { $iterableCurry } from '../../internal/$iterable.js';
import $internalStartsWith from '../$starts-with_/$starts-with.js';

const config = { any: false, subseq: false };

export function $startsWith(iterable, value) {
  return $internalStartsWith(iterable, config, value);
}

export default $iterableCurry($startsWith, {
  reduces: true,
});
