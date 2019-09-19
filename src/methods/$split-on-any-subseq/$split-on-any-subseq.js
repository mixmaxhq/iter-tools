import { $iterableCurry } from '../../internal/$iterable.js';
import $internalSplitOn from '../$split-on_/$split-on.js';

const config = { any: true, subseq: true };

function $splitOnAnySubseq(iterable, subseqs) {
  return $internalSplitOn(iterable, config, subseqs);
}

export default $iterableCurry($splitOnAnySubseq);
