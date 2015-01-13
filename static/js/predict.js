$(function() {
	var doKeyup = function(clauseNo, val) {
		var $placeholder = $('.final-clause-placeholder[data-clause="' + clauseNo + '"]'),
			$finalClause = $('.final-clause[data-clause="' + clauseNo + '"]');
		if (val !== '') {
			$placeholder.addClass('hidden');
		} else {
			$placeholder.removeClass('hidden');
		}
		$finalClause.text(val);
	};

	$('.clause').keyup(function() {
		doKeyup($(this).data('clause'), $(this).val());
	});

	$('.joiners li button').click(function(e) {
		e.preventDefault();
		var op = $(this).data('op'),
			$joiner = $('.joiner[data-op="' + op + '"]'),
			$joiners = $('.joiners button'),
			$secondWrapper = $('.second-clause-wrapper'),
			$secondClause = $('.clause[data-clause="2"]'),
			$secondPlaceholder = $('.final-clause-placeholder[data-clause="2"]');
		$('.joiner').addClass('hidden');
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$joiners.removeClass('off');
			$secondWrapper.addClass('hidden');
			doKeyup(2, '');
			$secondPlaceholder.addClass('hidden');
			setTimeout(function() {
				$secondClause.val('');
			}, 200);
		} else {
			$joiners.removeClass('on');
			$joiner.removeClass('hidden');
			$secondWrapper.removeClass('hidden');
			doKeyup(2, $secondClause.val());
			$joiners.addClass('off')
			$(this).addClass('on');
			$secondClause.focus();
		}
	});

	$('.clause[data-clause="2"]').focus(function(e) {
		console.log($('.joiners button.on').length)
		if ($('.joiners button.on').length == 0) {
			$('.joiners button[data-op="if"]').click();
		}
	})

	$('#tag-name').keydown(function(e) {
	    if(e.which == 13) {
		    e.preventDefault();
	    	$('.active-tags').append(
	    		'<li class="tag">' + $(this).val() + '<i class="fa fa-times"></i></li>'
    		);
			console.log($(this).val())
	        $(this).val('');
	    }
	});

	$(document).on('click', '.tag', function() {
		$(this)[0].remove();
	});
});
