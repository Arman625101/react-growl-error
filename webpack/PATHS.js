const path = require('path');

module.exports = {
  SRC: path.resolve('src'),
  APP: path.resolve('src/index.jsx'),
  DEMO: path.resolve('demo/index.jsx'),
  DIST: path.resolve('dist'),
  TEMPLATE: path.resolve('webpack/template.html'),
  POSTCSS: path.resolve('postcss.config.js'),
};
