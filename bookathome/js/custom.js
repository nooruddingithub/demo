$(document).ready(function(){
    var myHeader = $('.topSticky');
    myHeader.data( 'position', myHeader.position() );
    $(window).scroll(function(){
        var hPos = myHeader.data('position'), scroll = getScroll();
        if ( hPos.top < scroll.top ){
            myHeader.addClass('sticky');
        }
        else {
            myHeader.removeClass('sticky');
        }
    });
    function getScroll () {
        var b = document.body;
        var e = document.documentElement;
        return {
            left: parseFloat( window.pageXOffset || b.scrollLeft || e.scrollLeft ),
            top: parseFloat( window.pageYOffset || b.scrollTop || e.scrollTop )
        };
    }
});

$(document).ready(function(){
    $("#menuzord").menuzord({
        align: "left", //left, right
        //indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
        //indicatorSecondLevel: "<i class='fa fa-angle-right'></i>",
        effect: "slide",
        //animation: "none",

    });
});

$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

$(document).ready(function() {
	$(".fancybox").fancybox({
	
	}); 
 
}); 


$(document).ready(function() {
	$('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 70,
        itemMargin: 0,
        asNavFor: '#slider'
    });
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",   
    });
}); 	
	

$(document).ready(function(){
      $("ul.filterMenu li ul:first").show();
      $("ul.filterMenu h3").addClass("selected");
      $("ul.filterMenu .filterTitle").click(function() {
            if($(this).next('ul').css('display') == 'none'){
                        if($(this).next('ul').find('a').hasClass('is-active') ){
                              $(this).next('ul').find('.is-active').parent('li:first').find('span').css('display','inline');
                        }
                  $(this).addClass('selected');
                  $(this).next('ul').slideDown();
            }else {
                  $(this).removeClass('selected');
                  $(this).next('ul').find('.filter-cross').css('display','none');
                  $(this).next('ul').slideUp();
            }
      });

});	


$(document).ready(function(){
	$(".filterIcon").click(function(){ 
		$("#filterMenu").slideToggle(200);
	});
});

	
		
	
		

	
