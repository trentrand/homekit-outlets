var gulp = require('gulp');
var clean = require('gulp-clean')
var ts = require('gulp-typescript');
var fs = require('fs');

var tsConfigPath = './tsconfig.json';

var tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
var tsProject = ts.createProject(tsConfigPath);

gulp.task('clean', function() {
  return gulp.src(['./index.js'])
    .pipe(clean({ force: true }));
});

gulp.task('default', ['clean'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsConfig.compilerOptions.outDir));
});
