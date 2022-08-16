const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),      
  ],
  module: {
    rules: [
      {
        test: /\\.(png|jpe?g|gif|mp3)$/i,
        use: ['file-loader'],
      },
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 9999
  }
};