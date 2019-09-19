import { asyncWrapWithMethodIterable } from '../../internal/async-iterable.js';

import { asyncToArray } from '../$to-array/async-to-array.js';
import { cycle } from './cycle.js';

export async function* asyncCycle(iterable) {
  yield* cycle(await asyncToArray(iterable));
}

export default asyncWrapWithMethodIterable(asyncCycle);
