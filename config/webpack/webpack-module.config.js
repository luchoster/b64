const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = options => ({
  "resolve": {
    "alias": {
      // "react": "preact-compat",
      // "react-dom": "preact-compat"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
          // use: ['sass-loader']
        })
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.(jpe?g|jpg|png|gif|svg|ico)$/i,
        use: ['file-loader']
      }
    ]
  }
})

module.exports = {
  loaders
}
