var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');

var homeDir = require('os').homedir();
var scripts = [];

var config = {
  src: './bridge/config.json',
  dest: homeDir + '/.homebridge/',
};
var bridgeConfig = require(config.src).bridge;

gulp.task('clean', ['stop-homebridge'], function() {
  return gulp.src(['./bridge/dist', config.dest])
    .pipe(clean({ force: true }));
});

gulp.task('copy-config', ['clean'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('start-homebridge', ['copy-config'], function() {
  gulp.src('')
    .pipe(shell('homebridge'));
});

gulp.task('stop-homebridge', function() {
  gulp.src('')
    .pipe(shell('lsof -P -ti :' + bridgeConfig.port + ' | xargs kill'));
});

gulp.task('watch', function() {
  gulp.watch(config.src, [''])
  gulp.watch(scripts, ['']);
});

gulp.task('default', ['stop-homebridge', 'copy-config', 'start-homebridge', 'watch']);
