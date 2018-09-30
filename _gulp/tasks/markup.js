'use strict';
/*========================================================
=            Markup Task (run: "gulp markup")            =
========================================================*/
module.exports = function() {

  gulp.task('markup', function() {
    return gulp.src([path.source + '/pug/*.pug', '!/**/some-page.pug'])
      .pipe(pug())
      .on('error', notify.onError(function(error) {
        return {
          title: 'Ошибка в PUG!',
          message:  error.message
        };
      }))
      .pipe(prettify({indent_char: '\t', indent_size: 1}))
      .pipe(gulp.dest(path.public));
  });

};