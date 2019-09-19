import { $async, $await } from '../../../generate/async.macro';

import { $iterableCurry } from '../../internal/$iterable.js';
import { $map } from '../$map/$map.js';

$async;
export function* $flatMap(iterable, func) {
  $await;
  for (const item of $map(iterable, func)) {
    yield* item;
  }
}

export default $iterableCurry($flatMap);
