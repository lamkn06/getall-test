const path = require('path');
const compression = require('compression');
const webpack = require('webpack');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const history = require('connect-history-api-fallback');

const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack/webpack.dev.js');

const env = process.env.NODE_ENV;
const bodyParser = require('body-parser');

try {
  dotenv.config();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(require('cookie-parser')());

  if (env !== 'production') {
    const compiler = webpack(webpackConfig(env));
    const devMiddleware = WebpackDevMiddleware(compiler);
    const hotMiddleware = WebpackHotMiddleware(compiler);

    app.use(history());
    app.use(devMiddleware);
    app.use(hotMiddleware);
  } else {
    const publicPath = '/';
    const outputPath = path.resolve(process.cwd(), 'build');

    app.use(compression());
    app.use(publicPath, express.static(outputPath));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(outputPath, 'index.html')),
    );
  }

  const PORT = process.env.PORT || 9001;
  app.listen(PORT, async () => {
    console.log(
      `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`,
    );
  });
} catch (e) {
  console.error(e);
}
