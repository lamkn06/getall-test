const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
      publicPath: `http://localhost:${process.env.PORT}/`,
      pathinfo: false,
    },

    devServer: {
      host: '0.0.0.0',
      port: process.env.PORT,
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      watchContentBase: true,
    },
  });
};
