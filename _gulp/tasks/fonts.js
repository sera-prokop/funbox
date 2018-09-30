'use strict';
/*====================================================
=            Fonts Task (run: gulp fonts)            =
====================================================*/
module.exports = function() {

  gulp.task('fonts:unzip', function() {
    return gulp.src('./fonts/transfonter.org*.zip')
      .pipe(decompress())
      .pipe(gulp.dest(path.source + '/temp'));
  });

  gulp.task('fonts:copy', function() {
    return gulp.src(path.source + '/temp/*.{eot,svg,ttf,woff,woff2}')
      .pipe(gulp.dest(path.public + '/fonts'));
  });

  gulp.task('fonts:css', function() {
    return gulp.src(path.source + '/temp/stylesheet.*ss')
      .pipe(rename({ extname: '.scss' }))
      .pipe(rename({ basename: 'fonts' }))
      .pipe(replace('url(\'', 'url(\'../fonts/'))
      .pipe(gulp.dest(path.source + '/scss/common'))
      .pipe(shell('echo "/*=============================\n=            Fonts            =\n=============================*/" > ' + path.source + '/scss/common/fonts.scss~'))
      .pipe(shell('sed \'/^$/d\' ' + path.source + '/scss/common/fonts.scss >> ' + path.source + '/scss/common/fonts.scss~'))
      .pipe(shell('sed \'4d\' ' + path.source + '/scss/common/fonts.scss~ > ' + path.source + '/scss/common/fonts.scss'))
      .pipe(shell('rm ' + path.source + '/scss/common/fonts.scss~'));
  });

  gulp.task('clean:temp', function(cb) {
    return del(path.source + '/temp', cb);
  });

  gulp.task('fonts', gulp.series('fonts:unzip',gulp.parallel('fonts:copy','fonts:css'),'clean:temp'));

};
