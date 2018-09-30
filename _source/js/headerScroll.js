/*=====================================
=            Scroll Header            =
=====================================*/
;(function( window, document, undefined ) {

  'use strict';

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[ key ] = b[ key ];
      }
    }
    return a;
  }

  function throttle( fn, threshhold, scope ) {
    threshhold || ( threshhold = 250 );
    var previous, deferTimer;
    return function () {
      var context = scope || this,
          current = Date.now(),
          args    = arguments;
      if ( previous && current < previous + threshhold ) {
        clearTimeout( deferTimer );
        deferTimer = setTimeout( function () {
        previous   = current;
        fn.apply( context, args );
        }, threshhold );
      } else {
        previous = current;
        fn.apply( context, args );
      }
    };
  }

  function classReg( className ) {
    return new RegExp( '(^|\\s+)' + className + '(\\s+|$)' );
  }

  function hasClass( el, cl ) {
    return classReg( cl ).test( el.className );
  }

  function addClass( el, cl ) {
    if ( !hasClass( el, cl ) ) {
      el.className = el.className + ' ' + cl;
    }
  }

  function removeClass( el, cl ) {
    el.className = el.className.replace( classReg( cl ), ' ' );
  }

  function headsUp( selector, options ) {
    this.selector = document.querySelector( selector );
    this.options  = extend( this.defaults, options );
    this.init();
  }

  headsUp.prototype = {
    defaults : {
      delay       : 300,
      sensitivity : 20
    },

    init : function( selector ) {

      var self         = this,
          options      = self.options,
          selector     = self.selector,
          oldScrollY   = 0,
          winHeight;

      function resizeHandler() {
        winHeight = window.innerHeight;
        return winHeight;
      }

      function scrollHandler() {

        var newScrollY = window.pageYOffset,
            docHeight  = document.body.scrollHeight,
            pastDelay  = newScrollY > options.delay,
            goingDown  = newScrollY > oldScrollY,
            fastEnough = newScrollY < oldScrollY - options.sensitivity,
            rockBottom = newScrollY < 0 || newScrollY + winHeight >= docHeight;

        if ( pastDelay && goingDown ) {
          addClass( selector, 'scroll' );
        } else if ( !goingDown && fastEnough && !rockBottom || !pastDelay ) {
          removeClass( selector, 'scroll' );
        }

        oldScrollY = newScrollY;
      }

      if ( selector ) {

        resizeHandler();

        window.addEventListener( 'resize', throttle( resizeHandler ), false );

        window.addEventListener( 'scroll', throttle( scrollHandler, 100 ), false );
      }
    }
  };

  window.headsUp = headsUp;

})( window, document );

new headsUp('.header_container');
