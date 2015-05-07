var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var definitionsRoot = 'type-definitions/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  definitions: definitionsRoot + '**/*.d.ts',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  sourceMapRelativePath: '../' + appRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};