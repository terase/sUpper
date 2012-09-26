jQuery.noConflict();
jQuery.holdReady(true);
/**
 * Factory
 */
function Factory(o) {
  var f = Factory.f, i, len, n, prop;
  f.prototype = o;
  n = new f;
  for (i=1, len=arguments.length; i<len; ++i)
    for (prop in arguments[i])
      n[prop] = arguments[i][prop];
  return n;
}
Factory.f = function(){};

/**
 * Contents
 */
var sUpperProto = {

    extention_id : chrome.runtime.id,

    put : function($) {
	
	    var $win = $(window);
	    $win.bottom();
	    var base_path = 'chrome-extension://'+this.extention_id+'/';

        $().ready(function() {

	        var $img = $('<img/>').attr('id','_creepup_ir77_').attr('src', base_path+'icon/64.png');
	        if(!$img)
	            return;
	        
	        var hasScroll = $(document).height() > $win.height();
	        console.log("hasScroll:"+hasScroll);
	        $('body').append($img);

	        var x = $win.scrollLeft() + $win.width() - $img.width() - "80",
	            y = $win.scrollTop() + $win.height() - $img.height() - "80";
	        $img.css({position : 'fixed', left : x + 'px', top : y + 'px'});

	        hasScroll ? $img.show() : $img.hide();
	        $img.on('click', function() {
	            $("html,body").animate({ scrollTop : 0 }, 'fast');
	            hasScroll ? $(this).show() : $(this).hide();
	        });

            $win.on("bottom", function () {
	            var $handler = $(this);
	            if(!$handler.data('loading')) {
                    $handler.data('loading', true);
	                hasScroll ? $img.show() : $img.hide();
                    $handler.data('loading', false);
	            }
            });

            $win.on("scroll", function () {
	            hasScroll = $(document).height() > $win.height();
                hasScroll ? $img.show() : $img.hide();
            });
        });

    }
	
};

// Main
var sUpper = Factory(sUpperProto);
sUpper.put(jQuery);
jQuery.holdReady(false);

