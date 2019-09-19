const camelcase = require('camelcase');
const { makeRe } = require('picomatch');
const { join, relative, basename, dirname } = require('path');
const completeExtname = require('path-complete-extname');
const { compareNames } = require('../../names');


const methodNameMatcher = makeRe('src/methods/*/*.js', { capture: true });
const getMethodName = path => {
  const match = methodNameMatcher.exec(path);
  return match && match[2];
};

const stripExt = path => join(dirname(path), basename(path, completeExtname(path)));

module.exports = (generatedPaths, destPath) =>
  `/**
 * @generated
 * It should not be necessary to edit this file directly.
 * The template for this file is: generate/templates/types-index-file.js
 */

/// <reference lib="es2018" />
/// <reference lib="esnext.asynciterable" />

${[...generatedPaths]
  .map(path => [getMethodName(path), path])
  .sort(([a], [b]) => compareNames(a, b))
  .map(([name, path]) => `export { default as ${camelcase(name)} } from './${stripExt(relative(dirname(destPath), path))}';`)
  .join('\n')}

export * from './index-interfaces';
`;
