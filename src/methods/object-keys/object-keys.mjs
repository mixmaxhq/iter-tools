import { wrapWithMethodIterable } from '../../internal/iterable';

const { hasOwnProperty } = Object.prototype;

export function* objectKeys(obj) {
  if (obj == null) {
    return;
  }

  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      yield key;
    }
  }
}

export default wrapWithMethodIterable(objectKeys, {
  validateArgs(args) {
    if (!(args[0] == null || typeof args[0] === 'object')) {
      throw new Error('the argument to objectKeys was not an object, null, or undefined');
    }
  },
});
