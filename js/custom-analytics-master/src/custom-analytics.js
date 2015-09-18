/*!
* @preserve
* jquery.scrolldepth.js | v0.7.1
* Copyright (c) 2014 Rob Flaherty (@robflaherty)
* Licensed under the MIT and GPL licenses.
*
* Modified and repurposed by Ben Chartoff (@bchartoff) 1/2014
*/

(function($){
    // **********************************
    // ***** Start: Private Members *****
    var pluginName = 'custom_analytics';
    
    // List obtained from https://developer.mozilla.org/en-US/docs/Web/Events
    // Both `unimplemented` and `deprecated` events have been removed from this list
    // List up-to-date as of 1/26/2015
    var STANDARD_EVENTS = ["abort","afterprint","animationend","animationiteration","animationstart","audioprocess","beforeprint","beforeunload","beginEvent","blocked","blur","cached","canplay","canplaythrough","change","chargingchange","chargingtimechange","checking","click","close","complete","complete","compositionend","compositionstart","compositionupdate","contextmenu","copy","cut","dblclick","devicelight","devicemotion","deviceorientation","deviceproximity","dischargingtimechange","DOMContentLoaded","downloading","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","ended","endEvent","error","focus","fullscreenchange","fullscreenerror","gamepadconnected","gamepaddisconnected","hashchange","input","invalid","keydown","keypress","keyup","languagechange","levelchange","load","load","loadeddata","loadedmetadata","loadend","loadstart","message","message","message","message","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","noupdate","obsolete","offline","online","open","open","orientationchange","pagehide","pageshow","paste","pause","pointerlockchange","pointerlockerror","play","playing","popstate","progress","progress","ratechange","readystatechange","repeatEvent","reset","resize","scroll","seeked","seeking","select","show","stalled","storage","submit","success","suspend","SVGAbort","SVGError","SVGLoad","SVGResize","SVGScroll","SVGUnload","SVGZoom","timeout","timeupdate","touchcancel","touchend","touchenter","touchleave","touchmove","touchstart","transitionend","unload","updateready","upgradeneeded","userproximity","versionchange","visibilitychange","volumechange","waiting","wheel"]


    var calculateMarks = function(docHeight) {
        return {
          '25%' : parseInt(docHeight * 0.25, 10),
          '50%' : parseInt(docHeight * 0.50, 10),
          '75%' : parseInt(docHeight * 0.75, 10),
          // 1px cushion to trigger 100% event in iOS
          '100%': docHeight - 5
        };
    };

    var checkMarks = function(options, marks, scrollDistance, timing) {
    // Check each active mark
    $.each(marks, function(key, val) {
          if ( $.inArray(key, cache) === -1 && scrollDistance >= val ) {
            sendScrollEvent(options,'Percentage', key, scrollDistance, timing);
            cache.push(key);
          }
        });
    };

    var checkElements = function(options,elements, scrollDistance, timing) {
        $.each(elements, function(index, elem) {
          if ( $.inArray(elem, cache) === -1 && $(elem).length ) {
            if ( scrollDistance >= $(elem).offset().top ) {
              sendScrollEvent(options,'Elements', elem, scrollDistance, timing);
              cache.push(elem);
            }
          }
        });
    };

    var rounded = function (scrollDistance) {
        // Returns String
        return (Math.floor(scrollDistance/250) * 250).toString();
    };

    var sendScrollEvent = function(options, action, label, scrollDistance, timing) {
        console.log('send', 'event', 'Scroll Depth', action, label, 1, {'nonInteraction': options.nonInteraction});

        if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
          lastPixelDepth = scrollDistance;
          console.log('send', 'event', 'Scroll Depth', 'Pixel Depth', rounded(scrollDistance), 1, {'nonInteraction': options.nonInteraction});
        }

        if (options.userTiming && arguments.length > 3) {
          console.log('send', 'timing', 'Scroll Depth', action, timing, label);
        }

    };

    /*
    * Throttle function borrowed from:
    * Underscore.js 1.5.2
    * http://underscorejs.org
    * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    * Underscore may be freely distributed under the MIT license.
    */

    var throttle = function(func, wait) {
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
    // ***** Fin: Private Members *****
    // ********************************

    // *********************************
    // ***** Start: Public Methods *****
    var methods = {
        init : function(options) {
            //"this" is a jquery object on which this plugin has been invoked.
            return this.each(function(index){
                var $this = $(this);
                var data = $this.data(pluginName);
                // If the plugin hasn't been initialized yet
                if (!data){
                    var settings = {
                    };
                    if(options) { $.extend(true, settings, options); }

                    $this.data(pluginName, {
                        target : $this,
                        settings: settings
                    });
                }
            });
        },
        track : function(options){
            var category = options.category;
            var action = options.action;
            var label = options.label;
            var value = options.value;
            if (typeof category === 'undefined' || typeof action === 'undefined'){
               throw "Call to track() must include value for 'category' and 'action'.";
            }
            else if (STANDARD_EVENTS.indexOf(action) == -1){
                throw action + " is not a valid name for an event.";
            }

            if (action == "scroll"){
                throw "For scroll events, please use the 'scrollTrack' method, with no 'action' specified"
            }

            this.on(action, function(){
                if(typeof label !== 'undefined'){
                    if (typeof  value !== 'undefined'){
                        console.log("category: ",category,"action: ",action,"label: ",label,"value: ",value);
                    }
                    else{
                        console.log("category: ",category,"action: ",action,"label: ",label);
                    }
                }
                else{
                    if (typeof value !== 'undefined'){
                        console.log("category: ",category,"action: ",action,"value: ",value);
                    }
                    else{
                        console.log("category: ",category,"action: ",action);
                    }
                }
            });
        },
        scrollTrack: function(options){
            var cache = [],
                lastPixelDepth = 0,
                defaults = {
                    elements: [],
                    minHeight: 0,
                    percentage: false,
                    userTiming: true,
                    pixelDepth: true,
                    nonInteraction: true
                };
            if(! $.isWindow(this[0])){
                $.extend({}, defaults, {elements: this});
            }
            else{
                $.extend({}, defaults, {percentage: true});
            }

            var startTime = +new Date;
            options = $.extend({}, defaults, options);



        }
    };
    // ***** Fin: Public Methods *****
    // *******************************

    // *****************************
    // ***** Start: Supervisor *****
    $.fn[pluginName] = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' + method + ' does not exist in jQuery.' + pluginName );
        }
    };
    // ***** Fin: Supervisor *****
    // ***************************
})( jQuery );