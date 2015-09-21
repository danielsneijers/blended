var webpack = require("webpack"),
		path = require("path"),
		ExtractTextPlugin = require("extract-text-webpack-plugin");

// Karma configuration
// Generated on Mon May 11 2015 14:13:57 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({
	  basePath: "",
	  frameworks: ["jasmine"],
	  files: [
	  	'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			"./spec/**/*.spec.js",
	  ],
	  preprocessors: {
			"./spec/**/*.spec.js": ["webpack"]
	  },
		webpack: {
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
		},
		webpackMiddleware: {
			noInfo: true
		},
		plugins: [
			require("karma-webpack"),
			require("karma-jasmine"),
			require("karma-phantomjs-launcher")
		],
    reporters: ["dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
	 });
};