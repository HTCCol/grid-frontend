// If the app environment is not set, we default to development
var ENV = process.env.APP_ENV || 'development';

// Here, we use dotenv  to load our env vars in the .env, into process.env
if (ENV === 'development') {
  require('dotenv').load();
}

const gulp = require('gulp');
const fs = require('fs');
const ngConfig = require('gulp-ng-config');
const conf = require('../conf/gulp.conf');
const config = require('../config.js');
const rename = require('gulp-rename');
gulp.task('ng-config', ng_config);

function ng_config() {
  fs.writeFileSync('./config.json',
    JSON.stringify(config[ENV]));
  return gulp.src('./config.json')
    .pipe(ngConfig(conf.ngModule + ".config"))
    .pipe(rename("config.module.js"))
    .pipe(gulp.dest('./src/app/config/'));
}
