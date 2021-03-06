/**
 * @generated-from ./$group.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { AsyncIterable, AsyncResultIterable } from '../../../types/async-iterable';
import { asyncGroup } from '../../..';
declare const Ø: never;
assert<AsyncResultIterable<[string, AsyncResultIterable<string>]>>(asyncGroup(Ø as string));
assert<AsyncResultIterable<[number, AsyncResultIterable<number>]>>(
  asyncGroup(Ø as AsyncIterable<number>),
);
