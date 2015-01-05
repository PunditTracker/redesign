$(function() {
	$('.search i').click(function() {
		$('#search').focus();
	});

	function setSidebarStyling() {
		var $sidebar = $('.sidebar'),
			$inner = $('.inner'),
			$wrapper = $sidebar.parent(),
			$navbar = $('nav'),
			navbarAndMargin = parseFloat($('.no-hero').css('margin-top')),
			bottomOfNavbar = $navbar.offset().top + navbarAndMargin,
			bottomOfWindow = $(window).scrollTop() + $(window).height(),
			bottomOfWrapper = $wrapper.offset().top + $wrapper.outerHeight(),
			topOfSidebar = $sidebar.offset().top,
			topOfInner = $inner.offset().top,
			bottomOfInner = topOfInner + $inner.outerHeight(),
			topSoFixedTop = bottomOfNavbar - topOfSidebar,
			topSoFixedBottom = Math.min(bottomOfWindow, bottomOfWrapper) - topOfSidebar - $inner.outerHeight();

		if (bottomOfInner < bottomOfWindow || bottomOfInner > bottomOfWrapper) {
			$sidebar.css({'padding-top': topSoFixedBottom})
		}
	  	if (topOfInner >= bottomOfNavbar) {
	  		$sidebar.css({'padding-top': topSoFixedTop});
	  	}
	};

	$(window).resize(function() {
		setSidebarStyling();
	});

	$(window).scroll(function() {
		setSidebarStyling();
	});
	setSidebarStyling();

})
