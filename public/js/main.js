jQuery(function($) {'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Initiat WOW JS
	new WOW().init();

	// recipeSearch filter
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if( $('.masonery_area').length ) {
			$('.masonery_area').masonry();//Masonry
		}

		var $portfolio_selectors = $('.recipeSearch-filter >li>a');
		
		if($portfolio_selectors.length) {
			
			var $recipeSearch = $('.recipeSearch-items');
			$recipeSearch.isotope({
				itemSelector : '.recipeSearch-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$recipeSearch.isotope({ filter: selector });
				return false;
			});
		}

	});


	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});



	// Progress Bar
	$.each($('div.progress-bar'),function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});       

});

$(document).ready(function() {
    $('#autocomplete').on("keypress", function(e) {
        if (e.keyCode == 13) {
        	  var ingredient = $('#autocomplete').val();
		      var thehtml = '<li class="btn btn-lg btn-primary groceryItem">' + ingredient + "</li>";
		      $('#outputcontent').append(thehtml);
		      //Push ingredient into JS groceries Array
		      $('#autocomplete').val('');
		      return false;
        }
	});
	$('#grocerySearchIcon').on("click", function(e) {
    	  var ingredient = $('#autocomplete').val();
	      var thehtml = '<li class="btn btn-lg btn-primary groceryItem">' + ingredient + "</li>";
	      $('#outputcontent').append(thehtml);
	      //Push ingredient into JS groceries Array
	      $('#autocomplete').val('');
	});

	$('#outputcontent').on('click', '.groceryItem', function() {
		var thisItem = $(this).text();
		//Search JS groceries array for 'thisItem', remove it
		$(this).remove();
	});

});