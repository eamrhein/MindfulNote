const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './frontend/mindfulnote.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react'],
      },
    }],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MinifyPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pdt/),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'source-map',
};
