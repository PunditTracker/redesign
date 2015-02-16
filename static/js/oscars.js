$(function() {
	var $nav = $('.hidden-for-oscars');
	var $hero = $('.hero.oscars');
	var $sidebar = $('.oscars-categories');
	var offset = parseFloat($('.content').css('padding-top'));

    setTimeout(function() {
        if($(window).scrollTop() <= 0) {
            $hero.addClass('shrink');
        }
    }, 3000)

	var updateForScroll = function() {
		if ($(this).scrollTop() >= $hero.height() / 2) {
			$nav.addClass('show');
		} else if ($(this).scrollTop() <= 0 ){
			$nav.removeClass('show');
		}
	}

	setTimeout(updateForScroll, 4000);
	$(window).scroll(updateForScroll);
    window.addEventListener('orientationchange', updateForScroll);

	$('.scroll').click(function(e) {
		e.preventDefault();
		$target = $($(this).attr('href'));
		$('html, body').animate({
			'scrollTop': $target.offset().top - offset
		}, 500);
	});

	$('.nominee').hover(function() {
		var $target = $($(this).data('target'));
		$target.siblings().addClass('hidden');
		$target.removeClass('hidden');
	});

	$('.nominee').click(function() {
		$navItem = $('#nav-' + $(this).data('cat'));
        $navItem.addClass('done');
        $(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		var next = $(this).data('next');

		var scrollTop = $(next).offset().top - (next == "#submit" ? $nav.height() : offset);
		$('html, body').animate({
			'scrollTop': scrollTop
		});
		$('.go-to-submit').addClass('show');
	});

});