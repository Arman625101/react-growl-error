const path = require('path');

module.exports = {
  SRC: path.resolve('js'),
  APP: path.resolve('js/index'),
  DIST: path.resolve('dist'),
  TEMPLATE: path.resolve('webpack/template.html'),
  POSTCSS: path.resolve('postcss.config.js'),
};
