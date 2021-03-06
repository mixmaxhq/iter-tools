/**
 * @generated-from ./$reduce.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';
declare function reduce<T>(
  reducer: (result: T, item: T, i: number) => T,
): (iterable: SourceIterable<T>) => T;
declare function reduce<O, T>(
  reducer: (result: O, item: T, i: number) => O,
): (iterable: SourceIterable<T>) => O;
declare function reduce<O, T>(
  initial: O,
  reducer: (result: O, item: T, i: number) => O,
): (iterable: SourceIterable<T>) => O;
declare function reduce<T>(
  reducer: (result: T, item: T, i: number) => T,
  iterable: SourceIterable<T>,
): T;
declare function reduce<O, T>(
  reducer: (result: O, item: T, i: number) => O,
  iterable: SourceIterable<T>,
): O;
declare function reduce<O, T>(
  initial: O,
  reducer: (result: O, item: T, i: number) => O,
  iterable: SourceIterable<T>,
): O;
export default reduce;
