import { $async, $iteratorSymbol } from '../../../generate/async.macro';
import { $wrapWithMethodIterable, $ensureIterable } from '../../internal/$iterable.js';

$async;
export function* $wrap(iterable) {
  yield* $ensureIterable(iterable)[$iteratorSymbol]();
}

export default $wrapWithMethodIterable($wrap);
