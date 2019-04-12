import { scripts as config } from './tasks/config';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'intersection_observer/js/app': `${config.srcRoot}intersection_observer/js/index.js`,
    'stickyfill/js/app': `${config.srcRoot}stickyfill/js/index.js`,
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
};
