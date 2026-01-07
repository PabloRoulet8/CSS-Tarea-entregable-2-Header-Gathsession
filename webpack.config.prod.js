const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Keep this as it's specifically configured for prod
const CopyPlugin = require('copy-webpack-plugin'); // Keep this as it's specifically configured for prod

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Use source maps for production without exposing original source code
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body', // Inject scripts into the body
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' }, // This might be redundant if MiniCssExtractPlugin handles it
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
  output: {
    filename: 'js/[name].[contenthash].js', // Ensure consistent output filename for JS
  },
});
