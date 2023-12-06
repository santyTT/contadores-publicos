$(document).ready(function(){
	var altura = $('.wrapper').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.wrapper').addClass('navbar');
		} else {
			$('.navbar').removeClass('navbar');
		}
	});

}) 
