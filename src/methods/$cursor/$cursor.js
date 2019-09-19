import { $async, $await } from '../../../generate/async.macro';

import { $iterableCurry } from '../../internal/$iterable.js';
import CircularBuffer from '../../internal/circular-buffer.js';
import { $concat } from '../$concat/$concat.js';
import { repeat } from '../repeat/repeat.js';

$async;
export function* $cursor(iterable, { size, trailing, filler }) {
  const circular = new CircularBuffer(size);

  circular.fill(filler);

  if (trailing) {
    let index = 0;
    $await;
    for (const item of $concat(iterable, repeat(filler, size - 1))) {
      circular.push(item);
      if (index + 1 >= size) {
        yield circular.readOnlyCopy;
      }
      index++;
    }
  } else {
    $await;
    for (const item of iterable) {
      circular.push(item);
      yield circular.readOnlyCopy;
    }
  }
}

export default $iterableCurry($cursor);
