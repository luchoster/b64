const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

const plugins = options => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'BROWSER': JSON.stringify(true)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor0', 'vendor1']
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      }
    })
  ]
})

module.exports = {
  plugins
}
