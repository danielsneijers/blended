var webpack = require('webpack');
var path = require("path");
var autoprefixer = require('autoprefixer');
var precss= require('precss');

module.exports = {
  cache: true,
  entry: [
    "./src/app/app.js",
    "./src/css/styles.css"
  ],
  devtool: 'source-map',
  publicPath: './src/',
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
        test:   /\.css$/,
        include: [
          path.resolve(__dirname, "./src/css"),
        ],
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer,precss];
  },
  plugins: []
};