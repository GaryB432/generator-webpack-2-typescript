var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/app.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([{from: 'src/public'}])],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
