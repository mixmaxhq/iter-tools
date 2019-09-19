import { $firstOr } from '../$first-or/$first-or.js';

export function $first(iterable) {
  return $firstOr(iterable, undefined);
}

export default $first;
