import { GeneratorIterator } from '../../internal/iterable.js';
import { AsyncGeneratorIterator } from '../../internal/async-iterable.js';

export declare class OneTwoThreeIterable {
  next(): IteratorResult<number>;
  return(): void;

  [Symbol.iterator](): GeneratorIterator<number>;
}

export declare class AsyncOneTwoThreeIterable {
  next(): Promise<IteratorResult<number>>;
  return(): Promise<void>;

  [Symbol.asyncIterator](): AsyncGeneratorIterator<number>;
}
