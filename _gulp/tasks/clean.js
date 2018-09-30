'use strict';
/*====================================================
=            Clean Task (run: gulp clean)            =
====================================================*/
module.exports = function() {

  gulp.task('clean', function(cb) {
    return del(path.public + '/{*.html,css,js}', cb);
  });

};