$(document).ready(function() {	

	$('.hamburger').on('click', function() {
		if ($('.responsive-menu').hasClass('showing')){
			$(this).html('<i class="fa fa-bars fa-2x"></i>');
		} else {
			$(this).html('<i class="fa fa-times fa-2x"></i>');
		}

		$('.responsive-menu').toggleClass('showing');
	});

	$('.responsive-menu').on('click', 'li', function() {
		$('.responsive-menu').removeClass('showing');
		$('.hamburger').html('<i class="fa fa-bars fa-2x"></i>');
	});

});
