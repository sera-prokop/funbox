'use strict';
/*======================================================
=            Watch Task (run: "gulp watch")            =
======================================================*/
module.exports = function() {

  gulp.task('watch', function() {
    gulp.watch(path.source + '/pug/**/*.pug', gulp.series('markup'));
    gulp.watch(path.source + '/scss/**/*.scss', gulp.series('styles'));
    gulp.watch(path.source + '/js/*.js', gulp.series('javascript'));
    gulp.watch(path.source + '/favicon/favicon.png', gulp.series('favicon'));
    gulp.watch('./../../../Downloads/transfonter.org*.zip', gulp.series('fonts'));
  });

};