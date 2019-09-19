/**
 * @generated-from ./$interleave.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { GeneratorIterator, Promise } from '../internal/iterable';
import InterleaveBuffer from '../methods/$interleave/internal/buffer.js';
import { interleave } from '..'; // Without options
// ############

assert<GeneratorIterator<string | number>>(
  interleave(function*(
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }
  })(['foo'], [2]),
);
assert<GeneratorIterator<string | number | Function>>(
  interleave(function*(
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
    b3: InterleaveBuffer<Function>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }

    assert<Promise<boolean>>(b3.canTake());
    assert<Promise<Function | undefined>>(b3.take());

    if (b3.canTake()) {
      assert<Promise<Function>>(b3.take());
      yield b3.take();
    }
  })(['foo'], [2], [(_: any) => _]),
);
assert<GeneratorIterator<string | number | Function | {}>>(
  interleave(function*(
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
    b3: InterleaveBuffer<Function>,
    b4: InterleaveBuffer<{}>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }

    assert<Promise<boolean>>(b3.canTake());
    assert<Promise<Function | undefined>>(b3.take());

    if (b3.canTake()) {
      assert<Promise<Function>>(b3.take());
      yield b3.take();
    }

    assert<Promise<boolean>>(b4.canTake());
    assert<Promise<{} | undefined>>(b4.take());

    if (b4.canTake()) {
      assert<Promise<{}>>(b4.take());
      yield b4.take();
    }
  })(['foo'], [2], [(_: any) => _], [{}]),
); // With options
// ############

assert<GeneratorIterator<string | number>>(
  interleave(function*(
    options: {},
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }
  },
  {})(['foo'], [2]),
);
assert<GeneratorIterator<string | number | Function>>(
  interleave(function*(
    options: {},
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
    b3: InterleaveBuffer<Function>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }

    assert<Promise<boolean>>(b3.canTake());
    assert<Promise<Function | undefined>>(b3.take());

    if (b3.canTake()) {
      assert<Promise<Function>>(b3.take());
      yield b3.take();
    }
  },
  {})(['foo'], [2], [(_: any) => _]),
);
assert<GeneratorIterator<string | number | Function | {}>>(
  interleave(function*(
    options: {},
    canTakeAny: Function,
    b1: InterleaveBuffer<string>,
    b2: InterleaveBuffer<number>,
    b3: InterleaveBuffer<Function>,
    b4: InterleaveBuffer<{}>,
  ) {
    assert<Promise<boolean>>(b1.canTake());
    assert<Promise<string | undefined>>(b1.take());

    if (b1.canTake()) {
      assert<Promise<string>>(b1.take());
      yield b1.take();
    }

    assert<Promise<boolean>>(b2.canTake());
    assert<Promise<number | undefined>>(b2.take());

    if (b2.canTake()) {
      assert<Promise<number>>(b2.take());
      yield b2.take();
    }

    assert<Promise<boolean>>(b3.canTake());
    assert<Promise<Function | undefined>>(b3.take());

    if (b3.canTake()) {
      assert<Promise<Function>>(b3.take());
      yield b3.take();
    }

    assert<Promise<boolean>>(b4.canTake());
    assert<Promise<{} | undefined>>(b4.take());

    if (b4.canTake()) {
      assert<Promise<{}>>(b4.take());
      yield b4.take();
    }
  },
  {})(['foo'], [2], [(_: any) => _], [{}]),
);
