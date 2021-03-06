import { $MaybePromise } from '../../../generate/async.macro';

import { $SourceIterable, $ResultIterable } from '../../types/$iterable';

declare function $groupBy<K, T>(
  key: (item: T) => $MaybePromise<K>,
): (source: $SourceIterable<T>) => $ResultIterable<[K, $ResultIterable<T>]>;

declare function $groupBy<K, T>(
  key: (item: T) => $MaybePromise<K>,
  source: $SourceIterable<T>,
): $ResultIterable<[K, $ResultIterable<T>]>;

export default $groupBy;
