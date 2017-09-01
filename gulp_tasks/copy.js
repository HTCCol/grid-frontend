const gulp = require('gulp');
const conf = require('../conf/gulp.conf');

gulp.task('copy', copy);


function copy(){
  return gulp.src(conf.path.src('content/assets/*'))
    .pipe(gulp.dest(conf.path.tmp('assets')));
}
