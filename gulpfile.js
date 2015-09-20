var gulp = require('gulp');
var gutil = require("gulp-util");
var connect = require('gulp-connect');
var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task('default', ['copy', 'webpack-dev-server']);
gulp.task('dist', ['copy', 'webpack:build']);
gulp.task('serve', ['dist', 'server']);

gulp.task("webpack-dev-server", function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.HotModuleReplacementPlugin()
	);
	myConfig.entry = myConfig.entry.concat(
		'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
	);
  var compiler = webpack(myConfig);

  new WebpackDevServer(compiler, {
   	contentBase: './src/',
   	publicPath: '/',
		hot: true,
		inline: true,
		stats: {
			colors: true,
			progress: true,
		},
		historyApiFallback: true
  }).listen(8080, "localhost", function(err) {
    if(err) 
    	throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task("webpack:build", function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(myConfig, function(err, stats) {
		if(err) 
			throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('copy', function(){
	gulp.src(['src/index.html', 'src/img/**/*.*'], { base: './src' })
		.pipe(gulp.dest('dist'));	
});

gulp.task('server', function() {
  connect.server({
  	port: 3000,
  	root: 'dist',
  });
});