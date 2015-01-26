$(function() {
	function setSidebarStyling() {
		var $sidebar = $('.sidebar'),
			$inner = $('.inner'),
			$wrapper = $sidebar.parent(),
			$navbar = $('nav'),
			navbarAndMargin = parseFloat($('.no-hero').css('padding-top')),
			bottomOfNavbar = $navbar.offset().top + navbarAndMargin,
			bottomOfWindow = $(window).scrollTop() + $(window).height(),
			bottomOfWrapper = $wrapper.offset().top + $wrapper.outerHeight(),
			topOfSidebar = $sidebar.offset().top,
			topOfInner = $inner.offset().top,
			bottomOfInner = topOfInner + $inner.outerHeight(),
			topSoFixedTop = bottomOfNavbar - topOfSidebar,
			topSoFixedBottom = Math.min(bottomOfWindow, bottomOfWrapper) - topOfSidebar - $inner.outerHeight();

		if (bottomOfInner > bottomOfWrapper) {
			$sidebar.css({'padding-top': topSoFixedBottom})
		} else if (topOfInner >= bottomOfNavbar || (bottomOfInner < bottomOfWindow && bottomOfInner < bottomOfWrapper && $inner.height() < ($(window).height() - navbarAndMargin))) {
	  		$sidebar.css({'padding-top': topSoFixedTop});
	  	} else if (bottomOfInner < bottomOfWindow || bottomOfInner > bottomOfWrapper) {
			$sidebar.css({'padding-top': topSoFixedBottom})
		}
	};

	$(window).resize(function() {
		setSidebarStyling();
	});

	$(window).scroll(function() {
		setSidebarStyling();
	});
	setSidebarStyling();
});