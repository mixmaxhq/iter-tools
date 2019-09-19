import iterableStartsWith from './iterable-starts-with.js';
import stringStartsWith from './string-starts-with.js';

function startsWith(iterable, config, value) {
  return typeof iterable === 'string'
    ? stringStartsWith(iterable, config, value)
    : iterableStartsWith(iterable, config, value);
}

export default startsWith;
