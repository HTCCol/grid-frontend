const gulp = require('gulp');
const eslint = require('gulp-eslint');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src([conf.path.src('**/*.js'), "!src/content/**"])
    .pipe(eslint({
      rules:{
        "linebreak-style": 0
      }
    }))
    .pipe(eslint.format())
    .pipe(gulp.dest(conf.path.tmp()));
}
