$(document).ready(function(){
	$("#contactForm").submit(function() {
		$.ajax({
		   type: "POST",
		   url : "mail.php",
		   data: $("#contactForm").serialize(),
		   success: function(data) {
			   //alert(data);
				$('#contactForm')[0].reset();
				$('#succ').css({'color':'#eecd0d', 'font-size':'14px'});
				$('#succ').fadeIn(500).fadeOut(5000);
				$('#succ').html(data);
			}
		 });
		return false;
	});
	

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function() {
        $(".navbar-toggle:visible").click();
    });
	$(".nav li a").bind('click', function(event) {
		var $anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
  
	$(".faq-slider").slick({
		infinite: false,
        dots: false,
        arrows: true,
        autoplay: false,
		adaptiveHeight: false,
        slidesToScroll: 1,
        slidesToShow: 3,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				arrows: true,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				arrows: true,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				arrows: true,
			  }
			}
		]
    });
	
	// Configure/customize these variables.
    var showChar = 305;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show More";
    var lesstext = "Show Less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
	
});



