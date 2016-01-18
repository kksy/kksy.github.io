$(document).ready(function() {

	var nav = $('nav');
	var navHeight = nav.outerHeight();
	 
	// smooth scrolling
	$('a[href*=#]').on('click', function(event) {
    var target = $($(this).attr('href'));

    if(target.length) {
        event.preventDefault();
        $('html, body').animate({
        		// subtract nav height as it's fixed
            scrollTop: target.offset().top - navHeight
        }, 700);
    }
	});

});
