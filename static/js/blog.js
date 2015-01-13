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

		console.log('hi', topOfInner, bottomOfNavbar, bottomOfInner, bottomOfWindow, bottomOfWrapper)
		if (bottomOfInner > bottomOfWrapper) {
			$sidebar.css({'padding-top': topSoFixedBottom})
	  		console.log('a bottom');
		} else if (topOfInner >= bottomOfNavbar || (bottomOfInner < bottomOfWindow && bottomOfInner < bottomOfWrapper && $inner.height() < $(window).height())) {
	  		$sidebar.css({'padding-top': topSoFixedTop});
	  		console.log('b top');
	  	} else if (bottomOfInner < bottomOfWindow || bottomOfInner > bottomOfWrapper) {
			$sidebar.css({'padding-top': topSoFixedBottom})
	  		console.log('c bottom');
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