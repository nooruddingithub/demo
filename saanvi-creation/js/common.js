$(document).ready(function(){
	
	// sticky header
	$(".header").stick_in_parent();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 5) {
			$(".header").addClass("sticky slideInDown");
		} else {
			$('.header').removeClass("sticky slideInDown");
		}
	});
	
	// menu
	$("#menuzord").menuzord({
		align: "left", //left, right
		indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
		indicatorSecondLevel: "<i class='fa fa-angle-right'></i>",
		effect: "slide",
		animation: "none"
	});
			
	// banner slider
	$(".banner").slick({
		dots: true,
		arrows: false,
		autoplay: true,
		pauseOnFocus:false,
		slidesToScroll: 1,
		slidesToShow: 1,
		fade: true
		//cssEase: 'linear',
		//lazyLoad: 'ondemand'
	});
	
	// Popular Collection
	$('.popular-collection').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	// Feature Collection
	$('.feature-collection').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});     
	
	// Smooth page scroll
	$("a.page-scroll").bind('click', function(event) {
		var $anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
	
	// back to top function
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".onscollshowhide").fadeIn();
		} else {
			$('.onscollshowhide').fadeOut();
		}
	});

});

