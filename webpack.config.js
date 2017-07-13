const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'awesome-utils.js',
    path: path.resolve(__dirname, 'dist'),
    library: "$AU",
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'awesome-utils' }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
};