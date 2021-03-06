'use strict';
const fs = require('fs-extra');
const depsFromSource = require('./deps-from-source');

module.exports = function depsFromFile(file) {
  if (fs.existsSync(file)) {
    return depsFromSource(fs.readFileSync(file, 'UTF8'));
  } else {
    return [];
  }
};
