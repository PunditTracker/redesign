$(function() {
	$('.search i').click(function() {
		$('#search').focus();
	});

	$('.filter').click(function() {
		if (!$(this).hasClass('open')) {
			$(this).addClass('open');
		}
	});

	$('.filter .options li').click(function(e) {
		var $filter = $(this).parents('.filter');
		if (!$(this).hasClass('selected')) {
			e.stopPropagation();
			$filter.find('.selected').each(function(_,elem) {
				$(elem).removeClass('selected');
			});
			$(this).addClass('selected');
		}
		$filter.removeClass('open');
		console.log($filter.attr('class'));
	});

})
