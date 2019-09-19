import { asyncIterableCurry } from '../../internal/async-iterable.js';
import asyncIterableSplitWith from './internal/async-iterable-split-with.js';

export default asyncIterableCurry(asyncIterableSplitWith);
