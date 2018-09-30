'use strict';
/*================================================================
=            JavaScript Task (run: "gulp javascript")            =
================================================================*/
module.exports = function() {

  gulp.task('javascript', function() {
    return gulp.src(path.source + '/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ['es2015'] })).on('error', notify.onError({ title: 'Ошибка в JS!' }))
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.public + '/js'));
  });

};