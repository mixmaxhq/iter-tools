import { variadicCurryWithValidation } from './curry.js';
import { MethodIterable } from './iterable.js';

export function isString(s) {
  return typeof s === 'string';
}

export function ensureString(i) {
  if (i == null) {
    return '';
  } else if (!isString(i)) {
    throw new TypeError('The argument is not a string or null');
  }
  return i;
}

export function isValidStringArgument(i) {
  return i == null || isString(i);
}

function makeFunctionConfig(fn, fnConfig = {}) {
  const { validateArgs, variadic, reduces, optionalArgsAtEnd, minArgs, maxArgs } = fnConfig;

  return {
    fn,
    validateArgs: validateArgs || (_ => {}),
    variadic: !!variadic,
    reduces: !!reduces,
    optionalArgsAtEnd: !!optionalArgsAtEnd,
    minArgs: minArgs === undefined ? fn.length - 1 : minArgs,
    maxArgs: maxArgs === undefined ? fn.length - 1 : maxArgs,
    isIterable: isValidStringArgument,
    iterableType: 'string',
    applyOnIterableArgs: ensureString,
    IterableClass: MethodIterable,
  };
}

export const stringCurry = (fn, config) => {
  return variadicCurryWithValidation(makeFunctionConfig(fn, config));
};
