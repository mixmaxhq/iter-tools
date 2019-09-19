import { iterableCurry } from '../../internal/iterable.js';
import factorial from '../../internal/factorial.js';
import { map } from '../$map/map.js';
import { range } from '../range/range.js';
import { permutations } from '../permutations/permutations.js';
import { isSorted } from '../$is-sorted/is-sorted.js';

function combinationsSize(len, r) {
  if (len === 0 || r === 0 || r > len) return 0;
  return Number(factorial(len) / (factorial(r) * factorial(len - r)));
}

export function combinations(iterable, r) {
  const arr = [...iterable];
  const len = arr.length;
  let _size = null;

  r = r === undefined ? len : r;

  return {
    *[Symbol.iterator]() {
      const toIndex = i => arr[i];

      for (let indices of permutations(range(0, len), r)) {
        if (isSorted(indices)) {
          yield [...map(indices, toIndex)];
        }
      }
    },

    get size() {
      return _size === null ? (_size = combinationsSize(len, r)) : _size;
    },
  };
}

export default iterableCurry(combinations, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});
