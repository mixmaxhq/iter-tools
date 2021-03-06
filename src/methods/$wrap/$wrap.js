import { $async, $iteratorSymbol } from '../../../generate/async.macro';
import { $wrapWithMethodIterable, $ensureIterable } from '../../internal/$iterable';

$async;
export function* $wrap(source) {
  yield* $ensureIterable(source)[$iteratorSymbol]();
}

export default $wrapWithMethodIterable($wrap);
