'use strict';

var jstransform = require('jstransform').transform;
var visitNode = require('./visitor');
var trimTrailingSpaces = require('./trimTrailingSpaces');

module.exports = fromString;

function fromString(str, options) {
  options = processOptions(options);
  var transformed = jstransform([visitNode], str, options).code;
  return trimTrailingSpaces(transformed);
}

function processOptions(options){
  if (typeof options !== 'object') {
    options = {};
  }

  if (typeof options.factory !== 'string') {
    throw new Error('Missing options.factory function name.');
  }

  // parses the file as an ES6 module, except disabled implicit strict-mode
  if (typeof options.sourceType === 'undefined') {
    options.sourceType = 'nonStrictModule';
  }

  // defaults to true to keep existing behaviour (but inconsietent with babel and react-tools)
  if (typeof options.arrayChildren === 'undefined') {
    options.arrayChildren = true;
  }

  if (typeof options.spreadFn !== 'string') {
    options.spreadFn = 'Object.assign';
  }

  if (typeof options.unknownTagPattern !== 'string') {
    options.unknownTagPattern = '{tag}';
  }

  return options;
}