var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('assets/scss/*.scss')
        .pipe(sass({
          sourcemap: false
        }))
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function () {
	gulp.src('assets/js/main.js')
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'))
});

gulp.task('watch', function () {
	var server = livereload();
	gulp.watch('assets/scss/**/*.scss', ['styles']);
	gulp.watch('assets/js/*.js', ['scripts']);
	gulp.watch('assets/css/**').on('change', function(file) {
		server.changed(file.path);
	});
});


gulp.task('default', ['watch']);