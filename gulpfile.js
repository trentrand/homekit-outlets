var fs = require('fs');

// Gulp Plugins
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var exec = require('gulp-exec');

var homeDir = require('os').homedir();
var scripts = [];

var accessories = ['./homebridge-rf-outlet/'];

var isProduction = (process.env.NODE_ENV === 'production');

var config = {
  example: './bridge/accessories/homebridge-rf-outlet/config-example.json',
  src: './bridge/config.json',
  dest: homeDir + '/.homebridge/'
};

var accessories = {
  src: ['./bridge/accessories/outlet.accessory.js'],
  dest: homeDir + '/.homebridge/accessories/'
}

var bridgeConfig = require(config.src).bridge;

gulp.task('clean', ['stop-homebridge'], function() {
  return gulp.src(['./bridge/dist', config.dest])
    .pipe(clean({ force: true }));
});

gulp.task('copy-config', ['clean'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('build-accessories', ['clean'], function() {
  var exec = require('child_process').exec;
  process.chdir('./bridge/accessories/');
  exec('gulp');
  process.chdir('../../');
});

gulp.task('copy-accessories', ['clean'], function() {
  return gulp.src(accessories.src)
    .pipe(gulp.dest(accessories.dest));
})

gulp.task('debug-homebridge', ['copy-config'], function() {
  gulp.src('')
    .pipe(isProduction ? shell('homebridge') :
      shell('DEBUG=* homebridge -D -P ./bridge/accessories/'));
});

gulp.task('start-homebridge', ['copy-config'], function() {
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

gulp.task('build', ['stop-homebridge', 'copy-config', 'build-accessories', 'copy-accessories']);

gulp.task('debug', ['debug-homebridge', 'watch']);

gulp.task('run', ['start-homebridge', 'watch']);
