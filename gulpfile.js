'use strict'


var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	less = require('gulp-less'),
	nodemon = require('gulp-nodemon'),
	livereload = require('gulp-livereload');


gulp.task('reload', function () {
	livereload.reload();
});

gulp.task('reloadCSS', function () {
	gulp.src('public/stylesheets/style.css').pipe(livereload())
});


gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('buildJS', function(){
	return gulp.src(['/app.js'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public'));
});

gulp.task('buildCSS', function(){
	return gulp.src('./public/stylesheets/main.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./public'))
		.pipe(livereload())
});

gulp.task('scripts', function() {

    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
})

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('./*.js', ['lint']);
	gulp.watch('./public/stylesheets/**', ['reloadCSS']);
	gulp.watch('./views/**', ['reload']);
	gulp.watch('./public/js/controllers/**', ['reload']);
	gulp.watch('./public/js/directives/**', ['reload']);
});

gulp.task('build', function(){
	gulp.start.apply(gulp, ['buildJS']);
	gulp.start.apply(gulp, ['buildCSS']);
	gulp.start.apply(gulp, ['buildHTML']);
})

