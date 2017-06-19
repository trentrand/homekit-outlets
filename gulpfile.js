var fs = require('fs');

// Gulp Plugins
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var exec = require('gulp-exec');
var rename = require("gulp-rename");

var homeDir = require('os').homedir();
var scripts = [];

var isProduction = (process.env.NODE_ENV === 'production');

var config = {
  example: './bridge/accessories/homebridge-rf-outlet/config-example.json',
  src: './bridge/config.json',
  dest: homeDir + '/.homebridge/',
  filePath: this.dest + 'config.json'
};

var accessories = {
  filename: ['homebridge-rf-outlet.js'],
  src: ['./bridge/accessories/homebridge-rf-outlet/index.js'],
  dest: homeDir + '/.homebridge/accessories/'
}

var bridgeConfig = require(config.src).bridge;

gulp.task('clean', ['stop-homebridge'], function() {
  return gulp.src([config.filePath, accessories.dest])
    .pipe(clean({ force: true }));
});

gulp.task('copy-config', ['clean'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('copy-accessories', ['clean'], function() {
  return gulp.src(accessories.src)
    .pipe(rename(accessories.filename))
    .pipe(gulp.dest(accessories.dest));
})

gulp.task('debug-homebridge', ['copy-config', 'copy-accessories'], function() {
  gulp.src('')
    .pipe(isProduction ? shell('homebridge') :
      shell('DEBUG=* homebridge -D -P ./bridge/accessories/'));
});

gulp.task('start-homebridge', ['stop-homebridge'], function() {
  gulp.src('')
    .pipe(isProduction ? shell('homebridge') :
      shell('homebridge -P ./bridge/accessories/'));
});

gulp.task('stop-homebridge', function() {
  gulp.src('')
    .pipe(shell('lsof -P -ti :' + bridgeConfig.port + ' | xargs kill'));
});

gulp.task('watch', function() {
  gulp.watch(config.src, [''])
  gulp.watch(scripts, ['']);
});

gulp.task('build', ['stop-homebridge', 'copy-config', 'copy-accessories']);

gulp.task('debug', ['debug-homebridge', 'watch']);

gulp.task('run', ['start-homebridge', 'watch']);
