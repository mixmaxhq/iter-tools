import { $isAsync, $async, $await } from '../../../generate/async.macro';
import { $iterableCurry } from '../../internal/$iterable.js';
import { $zipAll } from '../$zip-all/$zip-all.js';
import { asyncWrap } from '../$wrap/async-wrap.js';
import { simpleSlice } from '../$slice/slice.js';

const noItem = {};
const zipAllConfig = { filler: noItem };

$async;
export function $equal(iterables) {
  if (iterables.length <= 1) {
    return true;
  }

  const wrappedIterables = $isAsync ? iterables.map(asyncWrap) : iterables;

  $await;
  for (const allItems of $zipAll(wrappedIterables, zipAllConfig)) {
    const firstItem = allItems[0];
    for (const item of simpleSlice(allItems, 1, Infinity)) {
      if (item !== firstItem) {
        return false;
      }
    }
  }

  return true;
}

export default $iterableCurry($equal, {
  reduces: true,
  variadic: true,
});
