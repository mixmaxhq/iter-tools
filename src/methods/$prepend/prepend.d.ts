/**
 * @generated-from ./$prepend.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function prepend<T, V>(value: V, source: SourceIterable<T>): ResultIterable<V | T>;
declare function prepend<V>(value: V): <T>(source: SourceIterable<T>) => ResultIterable<V | T>;
export default prepend;
