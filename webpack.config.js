const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// /. usage

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'

const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined // find errors

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, 'src', 'index.js'), // __dirname - full pathway (not include current file)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js', // [contenthash] - generate piece of name by hash
    clean: true, // delete prev output path
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  // plugins
  module: {
    rules: [
      {
        test: /\.html$/i, // $ - end of string
        loader: 'html-loader',
      },
    ],
  },
}
