/**
 * @generated-from ./$group.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { Iterable, ResultIterable } from '../../../types/iterable';
import { group } from '../../..';
declare const Ø: never;
assert<ResultIterable<[string, ResultIterable<string>]>>(group(Ø as string));
assert<ResultIterable<[number, ResultIterable<number>]>>(group(Ø as Iterable<number>));
