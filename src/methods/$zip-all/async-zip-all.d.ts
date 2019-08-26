/**
 * @generated-from ./$zip-all.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncGeneratorIterator } from '../../internal/async-iterable';
declare function asyncZipAll<F, T = any>(
  options: {
    filler?: F;
  },
  ...iterables: Array<AsyncInputIterable<T>>
): AsyncGeneratorIterator<Array<T | F>>;
declare function asyncZipAll<T = any>(
  ...iterables: Array<AsyncInputIterable<T>>
): AsyncGeneratorIterator<Array<T | undefined>>;
export default asyncZipAll;