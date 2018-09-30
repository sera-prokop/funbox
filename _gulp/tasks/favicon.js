'use strict';
/*==========================================================
=            Favicon Task (run: "gulp favicon")            =
==========================================================*/
module.exports = function () {

  gulp.task('favicon:create', function(done) {
    realFavicon.generateFavicon(config.realFavicon, function() {
      done();
    });
  });

  gulp.task('favicon-inject:comment', shell.task('echo "//-=====================================\n =           Favicon Inject            =\n =======================================" > ' + path.source + '/pug/partial/favicon-inject.pug~'));
  gulp.task('rm:favicon-inject', shell.task('mv ' + path.source + '/pug/partial/favicon-inject.pug~ ' + path.source + '/pug/partial/favicon-inject.pug'));


  gulp.task('favicon:inject', function() {
  return gulp.src([ path.source + '/pug/partial/favicon-inject.pug' ])
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(path.source + '/favicon/faviconData.json')).favicon.html_code))
    .pipe(replace('<link ', 'link('))
    .pipe(replace('<meta ', 'meta('))
    .pipe(replace('>', ')'))
    .pipe(replace('"', "'"))
    .pipe(gulp.dest(path.source + '/pug/partial'));
  });

  gulp.task('favicon', gulp.series('favicon:create','favicon-inject:comment','rm:favicon-inject','favicon:inject'));

};
