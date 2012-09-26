jQuery.noConflict();
(function($, extention_id) {
    var $win = $(window);
    $win.bottom();
    var base_path = 'chrome-extension://'+extention_id+'/';
	$().ready(function() {

        var $img = $('<img/>').attr('id','_creepup_ir77_').attr('src', base_path+'icon/64.png');
		if(!$img)
		    return;
        
        var hasScroll = $(document).height() > $win.height();
        
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
	});

})(jQuery, 'adodpoahopofoedfbkbmmomebddldnbo'); // param1:jQueryObject, param2:ChromeExtentionId