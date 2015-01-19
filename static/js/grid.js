$(function() {
	var $pick = $('.pick'),
		$madness = $('.march-madness'),
		$window = $(window);

	$window.scroll(function() {
		if ($window.scrollTop() + $window.height() > $madness.offset().top + $madness.height()) {
			$pick.addClass('fade-in-up')
		}
	})
})