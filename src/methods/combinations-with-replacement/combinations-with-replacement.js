import { iterableCurry } from '../../internal/iterable.js';
import factorial from '../../internal/factorial.js';
import { map } from '../$map/map.js';
import { range } from '../range/range.js';
import { product } from '../product/product.js';
import { isSorted } from '../$is-sorted/is-sorted.js';

function combinationsWithReplacementSize(len, r) {
  if (len === 0 || r === 0 || r > len) return 0;
  return Number(factorial(len + r - 1) / (factorial(r) * factorial(len - 1)));
}

export function combinationsWithReplacement(iterable, r) {
  const arr = [...iterable];
  const len = arr.length;
  let _size = null;

  r = r === undefined ? len : r;

  return {
    *[Symbol.iterator]() {
      const toIndex = i => arr[i];

      for (let indices of product(...map(range(0, r), () => range(0, len)))) {
        if (isSorted(indices)) {
          yield [...map(indices, toIndex)];
        }
      }
    },

    get size() {
      return _size === null ? (_size = combinationsWithReplacementSize(len, r)) : _size;
    },
  };
}

export default iterableCurry(combinationsWithReplacement, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});
