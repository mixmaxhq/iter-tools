/**
 * @generated-from ./$starts-with.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../types/async-iterable';
declare function asyncStartsWith(
  value: any,
): (iterable: AsyncSourceIterable<any>) => Promise<boolean>;
declare function asyncStartsWith(value: any, iterable: AsyncSourceIterable<any>): Promise<boolean>;
export default asyncStartsWith;
