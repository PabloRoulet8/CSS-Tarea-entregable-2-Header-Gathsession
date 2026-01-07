const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./dist'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './favicon.ico' },
        { from: './icon.png' },
        { from: './icon.svg' },
        { from: './site.webmanifest' },
        { from: './img', to: 'img' }, // Copy all images
        // Add other static assets as needed
      ],
    }),
  ],
  output: {
    filename: 'js/[name].js', // Consistent output filename for JS in dev
  },
});
