import { $async, $await } from '../../../generate/async.macro';

import { $iterableCurry } from '../../internal/$iterable.js';

$async;
export function* $filter(iterable, func) {
  let c = 0;
  $await;
  for (const item of iterable) {
    if ($await(func(item, c++))) {
      yield item;
    }
  }
}

export default $iterableCurry($filter);
