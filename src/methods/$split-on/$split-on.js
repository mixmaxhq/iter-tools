import { $iterableCurry } from '../../internal/$iterable.js';
import $internalSplitOn from '../$split-on_/$split-on.js';

const config = { any: false, subseq: false };

function $splitOn(iterable, value) {
  return $internalSplitOn(iterable, config, value);
}

export default $iterableCurry($splitOn);
