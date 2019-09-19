import range from '../range/range.js';
import $zip from '../$zip/$zip.js';

export function $enumerate(iterable, start = 0) {
  return $zip(range(start, Infinity, 1), iterable);
}

export default $enumerate;
