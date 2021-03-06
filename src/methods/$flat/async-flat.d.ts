/**
 * @generated-from ./$flat.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncSourceIterable,
  AsyncDefinedSourceIterable,
  AsyncResultIterable,
} from '../../types/async-iterable';
type AsyncFlattened<T> = T extends Array<infer U> ? U : T extends ReadonlyArray<infer U> ? U : T extends AsyncDefinedSourceIterable<infer U> ? U : T; // prettier-ignore

declare function asyncFlat<U>(depth: 0, source: U): AsyncResultIterable<AsyncFlattened<U>>; // prettier-ignore

declare function asyncFlat<U>(depth: 1, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<U>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 2, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 3, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 4, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 5, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 6, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 7, source: U): AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 0): <U>(source: U) => AsyncResultIterable<AsyncFlattened<U>>; // prettier-ignore

declare function asyncFlat(depth: 1): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<U>>>; // prettier-ignore

declare function asyncFlat(depth: 2): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>; // prettier-ignore

declare function asyncFlat(depth: 3): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>; // prettier-ignore

declare function asyncFlat(depth: 4): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 5): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 6): <U>(source: U) => AsyncResultIterable<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>; // prettier-ignore

declare function asyncFlat(
  depth: 7,
): <U>(
  source: U,
) => AsyncResultIterable<
  AsyncFlattened<
    AsyncFlattened<
      AsyncFlattened<
        AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>
      >
    >
  >
>;
declare function asyncFlat(
  shouldFlat: (item: any) => boolean | Promise<boolean>,
  depth: number,
  iter: AsyncSourceIterable<any>,
): AsyncResultIterable<any>;
declare function asyncFlat(source: AsyncSourceIterable<any>): AsyncResultIterable<any>;
declare function asyncFlat(
  depth: number,
  source: AsyncSourceIterable<any>,
): AsyncResultIterable<any>;
declare function asyncFlat(
  depth?: number,
): (source: AsyncSourceIterable<any>) => AsyncResultIterable<any>;
export default asyncFlat;
