'use strict';

const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');
const reactPreset = require('babel-preset-react');
const Es2015Preset = require('babel-preset-es2015');

module.exports = {
  process(src, filename) {
    if (babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename,
        presets: [jestPreset, reactPreset, Es2015Preset],
        retainLines: true,
      }).code;
    }
    return src;
  },
};