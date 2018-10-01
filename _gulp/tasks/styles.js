'use strict';
/*========================================================
=            Styles Task (run: "gulp styles")            =
========================================================*/
module.exports = function() {

  gulp.task('styles', function() {
    return gulp.src(path.source + '/scss/main.scss')
      .pipe(sassGlob())
      .pipe(sourcemaps.init())
      .pipe(sass()).on('error', notify.onError({ title: 'Ошибка в SCSS!' }))
      .pipe(autoprefixer({ browsers: config.autoprefixer }))
      // .pipe(cssUnit({ type: 'px-to-rem', rootSize: 16 }))
      .pipe(csso({ restructure: true }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.public + '/css'))
      .pipe(browserSync.stream());
  });

};
