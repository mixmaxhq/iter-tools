import { $SourceIterable, $ResultIterable } from '../../types/$iterable';

declare function $cycleTimes<T>(n: number, iterable: $SourceIterable<T>): $ResultIterable<T>;

declare function $cycleTimes<T>(n: number): (iterable: $SourceIterable<T>) => $ResultIterable<T>;

export default $cycleTimes;
