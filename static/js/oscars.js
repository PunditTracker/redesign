$(function() {
	var $nav = $('.hidden-for-oscars');
	var $hero = $('.hero.oscars');
	var $sidebar = $('.oscars-categories');
	var offset = parseFloat($('.content').css('padding-top'));
	var finalHeroHeight = calculateFinalHeroHeight();

	var updateForScroll = function() {
		if ($(this).scrollTop() >= $hero.height() / 2) {
			$nav.addClass('show');
		} else if ($(this).scrollTop() <= 0 ){
			$nav.removeClass('show');
		}
		/* Transition headers between pages */
        $.each($('.oscars-category'), function(_, page) {
            var $page = $(page);
            var pageNo = parseInt($page.data('page'));
            var $header = $page.find('.oscars-header');
            var $details = $page.find('.oscars-details');
            var topOfViewport = $(window).scrollTop() + offset;
            var headerToTop = $header.offset().top - topOfViewport;
            var detailsToTop = $details.offset().top - topOfViewport;
            var pageToTop = $page.offset().top - topOfViewport;

            if (headerToTop < 0) {
                /* Set a header to fixed as it hits the top of the screen */
                $header.width($header.width());
                $header.addClass('fixed');
            } else if (pageToTop > 0) {
                /* Unfix the header when we start to see the page above it */
                $header.removeClass('fixed');
                $header.style = '';
            }

            if (detailsToTop < 0) {
                /* Set a details to fixed as it hits the top of the screen */
                var style = window.getComputedStyle($details[0], null)
                $details.css({
                	'left': $details.parent().offset().left,
                	'width': style.width
                });
                $details.addClass('fixed');
            } else if (pageToTop > 0) {
                /* Unfix the details when we start to see the page above it */
                $details.removeClass('fixed');
                $details.attr('style', '');
            }

            if (pageNo == 1) { return }

            var $prevPage = $('#cat-' + (pageNo - 1));
            var $prevHeader = $prevPage.find('.oscars-header');
            var $prevDetails = $prevPage.find('.oscars-details');
            var topOfPrevHeader = $prevHeader.offset().top;
            var topOfPrevDetails = $prevDetails.offset().top;
            var bottomOfPrevHeader = $prevHeader.offset().top + $prevHeader.outerHeight();
            var bottomOfPrevDetails = $prevDetails.offset().top + $prevDetails.outerHeight();
            var bottomOfPrevPage = $prevPage.offset().top + $prevPage.outerHeight();


            if ($prevHeader.hasClass('fixed') && !$prevHeader.hasClass('bottom') && bottomOfPrevHeader > bottomOfPrevPage) {
                /* Unfix the previous header as the current one hits it */
                $prevHeader.style = '';
                $prevHeader.addClass('bottom');
            } else if ($prevHeader.hasClass('bottom') && topOfPrevHeader > topOfViewport) {
                /* Fix the previous header as we scroll it into view */
                $prevHeader.width($prevHeader.width());
                $prevHeader.removeClass('bottom');
            }
            if ($prevDetails.hasClass('fixed') && !$prevDetails.hasClass('bottom') && bottomOfPrevDetails > bottomOfPrevPage) {
                /* Unfix the previous details as the current one hits it */
                $prevDetails.attr('style', '');
                $prevDetails.addClass('bottom');
            } else if ($prevDetails.hasClass('bottom') && topOfPrevDetails > topOfViewport) {
                /* Fix the previous details as we scroll it into view */
                var style = window.getComputedStyle($prevDetails[0], null);
                console.log(style['width'], style['padding-left'])
                $prevDetails.css({
                	'left': $prevDetails.parent().offset().left,
                	'width': parseFloat(style['width']) - parseFloat(style['padding-left'])
                });
                $prevDetails.removeClass('bottom');
            }
        });
	}

	setTimeout(updateForScroll, 4000);
	$(window).scroll(updateForScroll);

	$('a[href="#oscars-predict"]').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			'scrollTop': finalHeroHeight
		}, 500);
	});

	$('.scroll').click(function(e) {
		e.preventDefault();
		$target = $($(this).attr('href'));
		$('html, body').animate({
			'scrollTop': $target.offset().top - offset
		}, 500);
	});

	function calculateFinalHeroHeight() {
		var div = document.createElement('div');
		div.setAttribute('class', 'textDimensionCalculation hero short');
		document.body.appendChild(div);
		var height = parseFloat(window.getComputedStyle(div,null).height);
		div.parentNode.removeChild(div);
		return height + 5;
	}

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
	});

});