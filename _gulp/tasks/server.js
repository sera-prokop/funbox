'use strict';
/*========================================================
=            Server Task (run: "gulp server")            =
========================================================*/
module.exports = function() {

  gulp.task('server', function() {
    browserSync.init(config.browserSync);
    browserSync.watch([path.public + '**/*.*', '!{**/*.css,**/_source/**}'], browserSync.reload);
  });

};