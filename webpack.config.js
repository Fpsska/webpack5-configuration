const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// /. usage

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'

const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined // find errors

// /. variables

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 1337,
    open: true, // automatically open in new browser tab
    hot: true, // refresh styles without page reload (might be lagged)
  },
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
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
  ],
  // plugins
  module: {
    rules: [
      {
        test: /\.html$/i, // $ - end of string
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // add styles in html like separate file for prod mode
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
