import { iterableCurry } from '../../internal/iterable.js';
import iterableSplitWith from './internal/iterable-split-with.js';
import stringSplitWith from './internal/string-split-with.js';

function splitWith(iterable, predicate) {
  return typeof iterable === 'string'
    ? stringSplitWith(iterable, predicate)
    : iterableSplitWith(iterable, predicate);
}

export default iterableCurry(splitWith);
