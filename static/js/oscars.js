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
		/* Transition headers between pages */
        // $.each($('.oscars-category'), function(_, page) {
        //     var $page = $(page);
        //     var pageNo = parseInt($page.data('page'));
        //     var $header = $page.find('.left-side');
        //     var topOfViewport = $(window).scrollTop() + offset;
        //     var headerToTop = $header.offset().top - topOfViewport;
        //     var pageToTop = $page.offset().top - topOfViewport;

        //     if (headerToTop < 0) {
        //         /* Set a header to fixed as it hits the top of the screen */
        //         $header.width($header.width());
        //         $header.addClass('fixed');
        //     } else if (pageToTop > 0) {
        //         /* Unfix the header when we start to see the page above it */
        //         $header.removeClass('fixed');
        //         $header.style = '';
        //     }

        //     if (pageNo == 1) { return }

        //     var $prevPage = $('#cat-' + (pageNo - 1));
        //     var $prevHeader = $prevPage.find('.left-side');
        //     var topOfPrevHeader = $prevHeader.offset().top;
        //     var bottomOfPrevHeader = $prevHeader.offset().top + $prevHeader.outerHeight();
        //     var bottomOfPrevPage = $prevPage.offset().top + $prevPage.outerHeight();


        //     if ($prevHeader.hasClass('fixed') && !$prevHeader.hasClass('bottom') && bottomOfPrevHeader > bottomOfPrevPage) {
        //         /* Unfix the previous header as the current one hits it */
        //         $prevHeader.style = '';
        //         $prevHeader.addClass('bottom');
        //     } else if ($prevHeader.hasClass('bottom') && topOfPrevHeader > topOfViewport) {
        //         /* Fix the previous header as we scroll it into view */
        //         $prevHeader.width($prevHeader.width());
        //         $prevHeader.removeClass('bottom');
        //     }
        // });
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
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		var $next = $($(this).data('next'));
		var scrollTop = $next.offset().top - offset;
		$('html, body').animate({
			'scrollTop': scrollTop
		});
        $navItem = $('#nav-' + $(this).data('cat'));
        $navItem.addClass('done');
        console.log($navItem)
	});

});