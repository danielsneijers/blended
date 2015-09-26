var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  cache: true,
  entry: [
    "./src/app/app.js",
    "./src/scss/styles.scss"
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve("./dist"),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test:   /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader?sourceMap!sass-loader?sourceMap')
      }
    ]
  },
  postcss: function () {
    return { 
      defaults: [autoprefixer],
      cleaner:  [autoprefixer({ browsers: ["last 2 versions"] })]
    };
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};