const path = require('path')
const R    = require('ramda')

const WebpackConfig = require('./config/webpack')

const defaultConfig = {
  performance: { hints: false },
  devtool: 'eval',
  context: __dirname,
  entry: {
    app: './app/app.js',
    vendor0: [
      'react',
      'react-dom',
      'react-router',
    ],
    vendor1: ['moment']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/public')
  }
}

const config = options => R.mergeAll([
  defaultConfig,
  WebpackConfig.loaders(options),
  WebpackConfig.devServer(options),
  WebpackConfig.plugins(options)
])

module.exports = env => {
  _options = {
    devServer: {
      port: 3000,
      hot: true
    }
  }

  return (env === 'development') ? config(_options) : config()
}
