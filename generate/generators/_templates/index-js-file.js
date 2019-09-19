const camelcase = require('camelcase');
const { makeRe } = require('picomatch');
const { relative, dirname } = require('path');
const { compareNames } = require('../../names');

const methodNameMatcher = makeRe('src/methods/*/*.js', { capture: true });
const getMethodName = path => {
  const match = methodNameMatcher.exec(path);
  if (!match || match[2] === null) {
    console.log(path);
  }
  return match && match[2];
};

module.exports = (generatedPaths, destPath) =>
  `/**
 * @generated
 * It should not be necessary to edit this file directly.
 * The template for this file is: generate/templates/index-file.js
 */

${[...generatedPaths]
  .map(path => [getMethodName(path), path])
  .sort(([a], [b]) => compareNames(a, b))
  .map(([name, path]) => `export { default as ${camelcase(name)} } from './${relative(dirname(destPath), path)}';`)
  .join('\n')}
`;
