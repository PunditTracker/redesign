$(function() {
	function setSidebarStyling() {
		var $sidebar = $('.sidebar');
		var $inner = $('.sidebar > .inner');
		var $wrapper = $sidebar.parent();
		var $navbar = $('nav');
		var navbarAndMargin = parseFloat($('.content').css('padding-top'));
		var bottomOfNavbar = $navbar.offset().top + navbarAndMargin;
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		var topOfWrapper = $wrapper.offset().top;
		var bottomOfWrapper = topOfWrapper + $wrapper.outerHeight();
		var topOfSidebar = $sidebar.offset().top;
		var topOfInner = $inner.offset().top;
		var bottomOfInner = topOfInner + $inner.outerHeight();
		var topSoFixedTop = Math.max(0,bottomOfNavbar - topOfSidebar);
		var topSoFixedBottom = Math.min(bottomOfWindow, bottomOfWrapper) - topOfSidebar - $inner.outerHeight();

		if (bottomOfInner > bottomOfWrapper) {
			console.log("A");
			$sidebar.css({'padding-top': topSoFixedBottom})
		} else if (topOfInner >= bottomOfNavbar || topOfWrapper > $(window).scrollTop() || (bottomOfInner < bottomOfWindow && bottomOfInner < bottomOfWrapper && $inner.height() < ($(window).height() - navbarAndMargin))) {
			console.log("B");
	  		$sidebar.css({'padding-top': topSoFixedTop});
	  	} else if (bottomOfInner < bottomOfWindow || bottomOfInner > bottomOfWrapper) {
	  		console.log("C");
	  		console.log(topSoFixedBottom, Math.min(bottomOfWindow, bottomOfWrapper), bottomOfWindow, bottomOfWrapper, topOfSidebar, $inner.outerHeight());
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