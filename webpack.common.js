const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Agrega esta línea

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'js/[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Usa MiniCssExtractPlugin.loader en lugar de style-loader
          'css-loader',   // Interprets @import and url() like import/require() and resolves them
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Usa MiniCssExtractPlugin.loader en lugar de style-loader
          'css-loader',
        ],
      },
    ],
  },
  plugins: [ // Agrega el array de plugins
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css', // Define el nombre de archivo para el CSS extraído
    }),
  ],
};
