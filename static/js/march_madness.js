$(function() {
	var $nav = $('.hidden-for-madness');
	var $hero = $('.hero.madness');
	var offset = parseFloat($('.content').css('padding-top'));

    setTimeout(function() {
        if($(window).scrollTop() <= 0) {
            $hero.addClass('shrink');
        }
    }, 6000);

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

    $(document).on('click', '.game.active >.inner > li', function() {
    	var $winner = $($(this).data('winner'));
    	var $parentGame = $winner.parent().parent();
    	$winner.addClass('active');
    	if ($winner.siblings().hasClass('active')) {
    		$parentGame.addClass('active')
    	}
    	$winner.html($(this).html());
    	$(this).siblings().removeClass('selected');
    	$(this).addClass('selected');

    });
});