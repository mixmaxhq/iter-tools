import $zip from '../$zip/$zip.js';
import { $filter } from '../$filter/$filter.js';
import { $map } from '../$map/$map.js';

export function $compress(iterable, compress) {
  return $map($filter($zip(iterable, compress), entry => entry[1]), entry => entry[0]);
}

export default $compress;
