const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
})