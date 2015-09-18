/*!
* @preserve
* jquery.scrolldepth.js | v0.7.1
* Copyright (c) 2014 Rob Flaherty (@robflaherty)
* Licensed under the MIT and GPL licenses.
*
* Modified by Ben Chartoff (@bchartoff) 2014
*/


var defaults = {
  minHeight: 0,
  elements: [],
  percentage: true,
  userTiming: true,
  pixelDepth: true,
  nonInteraction: true
};

var $window = $(window),
  cache = [],
  lastPixelDepth = 0;
  // universalGA,
  // classicGA,
  // standardEventHandler;

/*
 * Plugin
 */

$.scrollDepth = function(options) {

  var startTime = +new Date;

  options = $.extend({}, defaults, options);

  // Return early if document height is too small
  if ( $(document).height() < options.minHeight ) {
    return;
  }


  function sendEvent(action, label, scrollDistance, timing) {
        ga('send', 'event', 'Scroll Depth', action, label, 1, {'nonInteraction': options.nonInteraction});

        if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
          lastPixelDepth = scrollDistance;
          ga('send', 'event', 'Scroll Depth', 'Pixel Depth', rounded(scrollDistance), 1, {'nonInteraction': options.nonInteraction});
        }

        if (options.userTiming && arguments.length > 3) {
          ga('send', 'timing', 'Scroll Depth', action, timing, label);
        }

  }

  function calculateMarks(docHeight) {
    return {
      '25%' : parseInt(docHeight * 0.25, 10),
      '50%' : parseInt(docHeight * 0.50, 10),
      '75%' : parseInt(docHeight * 0.75, 10),
      // 1px cushion to trigger 100% event in iOS
      '100%': docHeight - 5
    };
  }

  function checkMarks(marks, scrollDistance, timing) {
    // Check each active mark
    $.each(marks, function(key, val) {
      if ( $.inArray(key, cache) === -1 && scrollDistance >= val ) {
        sendEvent('Percentage', key, scrollDistance, timing);
        cache.push(key);
      }
    });
  }

  function checkElements(elements, scrollDistance, timing) {
    $.each(elements, function(index, elem) {
      if ( $.inArray(elem, cache) === -1 && $(elem).length ) {
        if ( scrollDistance >= $(elem).offset().top ) {
          sendEvent('Elements', elem, scrollDistance, timing);
          cache.push(elem);
        }
      }
    });
  }

  function rounded(scrollDistance) {
    // Returns String
    return (Math.floor(scrollDistance/250) * 250).toString();
  }

  /*
   * Throttle function borrowed from:
   * Underscore.js 1.5.2
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   */

  function throttle(func, wait) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }

  /*
   * Scroll Event
   */

  $window.on('scroll.scrollDepth', throttle(function() {
    /*
     * We calculate document and window height on each scroll event to
     * account for dynamic DOM changes.
     */

    var docHeight = $(document).height(),
      winHeight = window.innerHeight ? window.innerHeight : $window.height(),
      scrollDistance = $window.scrollTop() + winHeight,

      // Recalculate percentage marks
      marks = calculateMarks(docHeight),

      // Timing
      timing = +new Date - startTime;

    // If all marks already hit, unbind scroll event
    if (cache.length >= 4 + options.elements.length) {
      $window.off('scroll.scrollDepth');
      return;
    }

    // Check specified DOM elements
    if (options.elements) {
      checkElements(options.elements, scrollDistance, timing);
    }

    // Check standard marks
    if (options.percentage) {
      checkMarks(marks, scrollDistance, timing);
    }
  }, 500));

};



