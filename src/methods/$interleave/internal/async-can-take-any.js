import { map } from '../../$map/map.js';
import raceTo from './race-to.js';

const makeCanTakeAny = buffers => () => {
  return raceTo(
    Boolean,
    false,
    map(buffers, async buffer => ((await buffer.canTake()) ? buffer : null)),
  );
};

export default makeCanTakeAny;
