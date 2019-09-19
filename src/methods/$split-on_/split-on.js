import iterableSplitOn from './iterable-split-on.js';
import stringSplitOn from './string-split-on.js';

function splitOn(iterable, options, on) {
  return typeof iterable === 'string'
    ? stringSplitOn(iterable, options, on)
    : iterableSplitOn(iterable, options, on);
}

export default splitOn;
