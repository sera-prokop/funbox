'use strict';
/*======================================================
=            Настройки и параметры плагинов            =
======================================================*/
module.exports = {

/*==============================================
=            Параметры Browser-Sync            =
==============================================*/
  browserSync: {
      server: path.public,
      open: true,
      notify: false,
      logFileChanges: false,
      logSnippet: false,
      ogLevel: "silent",
      ghostMode: {
          clicks: true,
          forms: true,
          scroll: true
      }
  },


/*===================================================
=            Параметры gulp-autoprefixer            =
===================================================*/
  autoprefixer: [
    'last 2 versions',
    'ie 11'
  ],


/*===================================================
=            Параметры gulp-real-favicon            =
===================================================*/
  realFavicon: {
    masterPicture: path.source + '/favicon/favicon.png',
    dest: path.public + '/favicon',
    iconsPath: 'favicon',
    design: {
      ios: {
        pictureAspect: 'noChange',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#00aba9',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: true,
            medium: true,
            big: true,
            rectangle: true
          }
        }
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
        manifest: {
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 50,
        themeColor: '#5bbad5'
      }
    },
    settings: {
      compression: 1,
      scalingAlgorithm: 'Lanczos',
      errorOnImageTooSmall: false
    },
    markupFile: path.source + '/favicon/faviconData.json'
  }

};