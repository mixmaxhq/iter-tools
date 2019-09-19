import iterableIncludes from './iterable-includes.js';
import stringIncludes from './string-includes.js';

function includes(iterable, config, value) {
  return typeof iterable === 'string'
    ? stringIncludes(iterable, config, value)
    : iterableIncludes(iterable, config, value);
}

export default includes;
