import assert from 'static-type-assert';
import { GeneratorIterator } from '../internal/iterable.js';
import { range } from '..';

declare var Ø: never;

assert<GeneratorIterator<number>>(range(Ø as number));

assert<GeneratorIterator<number>>(range(Ø as { start: 2 }));

assert<GeneratorIterator<number>>(range());
