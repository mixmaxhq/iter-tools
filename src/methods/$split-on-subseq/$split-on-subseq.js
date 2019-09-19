import { $iterableCurry } from '../../internal/$iterable.js';
import $internalSplitOn from '../$split-on_/$split-on.js';

const config = { any: false, subseq: true };

function $splitOnSubseq(iterable, subseq) {
  return $internalSplitOn(iterable, config, subseq);
}

export default $iterableCurry($splitOnSubseq);
