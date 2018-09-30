'use strict';

/*============================
=            Пути            =
============================*/
global.path = {
  task:   require('./_gulp/tasks.js'), /* список тасков */
  source: './_source', /* корневая папка с исходниками */
  public: './dev', /* корневая папка с готовыми файлами */
};


/*======================================
=            Модули Node.js            =
======================================*/
global.fs          = require('fs'); /* пишет файл манифеста для фавиконок */
global.del         = require('del'); /* удаляет файлы и папки */
global.gulp        = require('gulp'); /* gulp v4.0 Alpha */
global.merge       = require('merge-stream'); /* соединяет потоки */
global.buffer      = require('vinyl-buffer'); /* дает доступ к данным в буфере */
global.browserSync = require('browser-sync').create(); /* локальный сервер */


/*====================================
=            Gulp плагины            =
====================================*/
global.pug          = require('gulp-pug'); /* работа с шаблонизатором Pug */
global.sass         = require('gulp-sass'); /* работа с препроцессором Sass */
global.csso         = require('gulp-csso'); /* минификация CSS и оптимизация структуры */
global.babel        = require('gulp-babel'); /* компилирует ES2015 в ES5 */
global.shell        = require('gulp-shell'); /* выполняет любые команды в терминале */
global.notify       = require('gulp-notify'); /* выводит оповещения при ошибках */
global.rename       = require('gulp-rename'); /* переименовывает файлы */
global.concat       = require('gulp-concat'); /* конкатенирует файлы */
global.uglify       = require('gulp-uglify'); /* минифицирует js файлы */
global.replace      = require('gulp-replace'); /* заменяет символы в файлах на заданные */
global.cssUnit      = require('gulp-css-unit'); /* перевод размеров в любые единицы */
global.sassGlob     = require('gulp-sass-glob'); /* импортирует scss */
global.prettify     = require('gulp-html-prettify') /* делает правильную структуру HTML */
global.sourcemaps   = require('gulp-sourcemaps'); /* добавляет сорсмапы */
global.decompress   = require('gulp-decompress'); /* распаковывает архивы */
global.realFavicon  = require('gulp-real-favicon'); /* генерирует фавиконки */
global.autoprefixer = require('gulp-autoprefixer'); /* добавляет css-префиксы */


/*=============================================
=            Настройки и параметры            =
=============================================*/
global.config = require('./_gulp/config.js'); /* настройки плагинов */


/*----------  Перебор массива с путями тасок  ----------*/
path.task.forEach(function(TaskPath) {
  require(TaskPath)();
});


/*==================================================
=            Default Task (run: "gulp")            =
==================================================*/
gulp.task('default', gulp.series('clean',
  gulp.parallel('markup','styles','javascript'),
  gulp.parallel('watch','server')
));
