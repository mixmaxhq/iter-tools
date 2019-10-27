/**
 * @generated-from ./$size.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable } from '../../internal/async-iterable';
import { getStaticSize } from './internal/get-static-size';
export async function asyncSize(iterable) {
  const _iterable = asyncEnsureIterable(iterable);

  const staticSize = getStaticSize(iterable);

  if (staticSize !== null) {
    return staticSize;
  }

  let size = 0;
  /* eslint-disable no-unused-vars */

  for await (const _ of _iterable) {
    size++;
  }
  /* eslint-enable no-unused-vars */

  return size;
}
export default asyncSize;
