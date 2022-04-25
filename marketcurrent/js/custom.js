$(document).ready(function(){
  $("a.page-scroll").bind('click', function(event) {
    var $anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$(document).ready(function(){
  $(".navbar-collapse ul li a").click(function() {
      $(".navbar-toggle:visible").click();
  });
});  