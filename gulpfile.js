var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	uncss = require('gulp-uncss'),
	livereload = require('gulp-livereload'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify')
	imagemin = require('gulp-imagemin'),
	glob = require('glob'),
	notify = require("gulp-notify");

gulp.task('styles', function () {
	gulp.src('_assets/scss/*.scss')
		.pipe(sass({
			sourcemap: false
		}))
		.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
		// .pipe(uncss({
		// 	html: glob.sync('_site/**/*.html'),
		// 	ignore: ['[^"\r\n]*slick[^"\r\n]*']
		// }))
		// .pipe(notify("uncss finished"))
		.pipe(minifyCSS())
		.pipe(notify("css minified"))
		.pipe(gulp.dest('assets/css'));
});


gulp.task('scripts', function () {
	gulp.src([
			'_assets/js/waypoints.min.js',
			'_assets/js/bootstrap.js',
			'_assets/js/main.js',
			'_assets/js/slick.js',
			'_assets/js/modernizr.js'
		])
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'))
});

// Images
gulp.task('imagemin', function () {
	gulp.src('_assets/img/**/*.{jpg,png,gif}')
	.pipe(imagemin({
		optimizationLevel: 7
	}))
	.pipe(gulp.dest('assets/img'));
});

gulp.task('watch', function () {
	var server = livereload();
	gulp.watch('_assets/scss/**/*.scss', ['styles']);
	gulp.watch('_assets/js/*.js', ['scripts']);
	gulp.watch('_assets/img/**', ['imagemin']);
	gulp.watch('_assets/css/**').on('change', function(file) {
		server.changed(file.path);
	});
});


gulp.task('default', ['imagemin', 'watch']);
