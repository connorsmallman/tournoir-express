var gulp = require('gulp');
var rimraf = require('rimraf');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var hbsfy = require('hbsfy');

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', gutil.log)
    .pipe(source('tournoir.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('bundle', function () {
  var bundler = browserify('./src/main.js', { 
    debug: true 
  })
  .transform(babelify)
  .transform(hbsfy);

  return bundle_js(bundler);
});

gulp.task('sass', function () {
  gulp.src('./src/main.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch(['./src/**/*.js', './src/**/*.hbs'], ['bundle']);
});

gulp.task('watch', ['sass:watch','js:watch']);
gulp.task('default', ['sass','bundle','copy:fonts','watch']);
