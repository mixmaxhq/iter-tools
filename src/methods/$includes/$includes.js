import { $iterableCurry } from '../../internal/$iterable.js';
import $internalIncludes from '../$includes_/$includes.js';

const config = { any: false, subseq: false };

export function $includes(iterable, value) {
  return $internalIncludes(iterable, config, value);
}

export default $iterableCurry($includes, {
  reduces: true,
});
