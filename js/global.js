(function($) {
  $(document).ready(function() {

    // header sticky always function.
    var headerwrapper = $(".header-wrapper");
    $(headerwrapper).wrap('<div></div>');

    function headerStickyFun() {
      var headerHeight = $(headerwrapper).outerHeight();
      if (!$(headerwrapper).hasClass('position-fixed')) {
        $(headerwrapper).addClass('position-fixed');
        $(headerwrapper).parent().css({
          'padding-top': headerHeight
        });
      } else {
        $(headerwrapper).parent().css({
          'padding-top': '0'
        });
      }
    }
    headerStickyFun();
    window.addEventListener("scroll", function(e) {
      headerStickyFun();
    });
    window.addEventListener("resize", function(e) {
      headerStickyFun();
    });

    // header sticky when scroll up.
    var e = $(document).scrollTop();
    var t = $(".header-wrapper").outerHeight();
    $(window).scroll(function() {
      var n = $(document).scrollTop();
      if (n > t) {
        $("body").addClass("scrolldown");
      } else {
        $("body").removeClass("scrolldown");
      }
      if (n > e) {
        $("body").removeClass("scrollup");
      } else {
        $("body").addClass("scrollup");
      }
      e = $(document).scrollTop();
    });

    // function for hamberger icon.
    $(".hamburger").on("click", function() {
      if (!$(this).hasClass('active')) {
        $(this).addClass("active");
        $("body").addClass("menubodyfixed");
        $('.menuwrapper').css('max-height', $(window).innerHeight() - $(".header-wrapper").outerHeight());
      } else {
        $(this).removeClass("active");
        $("body").removeClass("menubodyfixed");
        $('.menuwrapper').css('max-height', '0');
      }
    });

    // function for hamberger close.
    $(".hamburger-close").on("click", function() {
      $(".hamburger").trigger("click")
    });

    // add indicator icon for submenu.
    $("ul.mainmenu li").each(function() {
      if ($(this).has("ul").length) {
        $(this).find("> a").append('<span class="menuindicator"></span>');
      }
    });

    $("ul.mainmenu li ul li").each(function() {
      if ($(this).has("ul").length) {
        $(this).parent().addClass("second-level");
      }
    });

    // on click indicator submenu open.
    $(".menuindicator").click(function(e) {
      e.preventDefault();
      if ($(this).parent().parent().parent("ul").hasClass("second-level")) {
        if (!$(this).parent().parent().hasClass("active")) {
          $(this).parent().parent().addClass("active");
          $(this).parent().siblings("ul").addClass("submenuopen");
        } else {
          $(this).parent().parent().removeClass("active");
          $(this).parent().siblings("ul").removeClass("submenuopen");
        }
      } else {
        if (!$(this).parent().parent().hasClass("active")) {
          $(".menuindicator").parent().parent().siblings("li").removeClass("active");
          $(this).parent().parent().addClass("active");
        } else {
          $(".menuindicator").parent().parent().siblings("li").removeClass("active");
          $(this).parent().parent().removeClass("active");
        }
      }
    });

    // menu active when click.
    var pathName = window.location.pathname;
    $("ul.mainmenu li").each(function() {
      var href = $(this).children('a').attr('href');
      if (href && pathName.indexOf(href) > -1) {
        $(this).addClass("menuactive");
        if ($(this).parents("ul").parent("li").length) {
          $(this).parents("ul").parent("li").addClass("menuactive");
        }
      }
    });

    // Start Footer Sticky Function.
    var fStickyItem = document.querySelector(".footer-top"); // footer sticky item.
    var fBtmItem = document.querySelector(".footer-bottom"); // normal element below sticky item if any.
    $(fStickyItem).wrap('<div></div>');

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function fStickyFun() {
      var fStickyHeight = $(fStickyItem).outerHeight() + 'px';
      if ($(fBtmItem).is(":visible")) {
        if ($(fBtmItem).isInViewport()) {
          $(fStickyItem).removeClass("fsticky");
          $(fStickyItem).parent().css({
            'padding-top': '0'
          });
        } else {
          $(fStickyItem).addClass("fsticky");
          $(fStickyItem).parent().css({
            'padding-top': fStickyHeight
          });
        }
      } else {
        $(fStickyItem).addClass("fsticky");
        $(fStickyItem).parent().css({
          'padding-top': fStickyHeight
        });
      }
    }
    fStickyFun();
    window.addEventListener("scroll", function(event) {
      fStickyFun();
    });
    window.addEventListener("resize", function(event) {
      fStickyFun();
    });

    // tabs function.
    // $(".tabcontent").hide();
    // $(".tabcontent:first").show();
    // $(".tabs li:first").addClass("tabactive");

    // onload tab active.
    var tabValue = "item-2";

    function changeTab(tabValue) {
      if ($(".tabcontent").length) {
        $(".tabs li").removeClass("active");
        $(".tabs li[id='" + tabValue + "']").addClass("active");
        if (tabValue == "all") {
          $('.tabcontent').show();
        } else {
          $(".tabcontent:not(." + tabValue + ")").hide();
          $(".tabcontent." + tabValue).show();
        }
      }
    }
    changeTab(tabValue);

    // onclick tab active.
    $(".tabs li").on("click", function(e) {
      if (!$(this).hasClass("active")) {
        // $(".tabs li").removeClass("active");
        // $(this).addClass("active");
        // var ourClass = $(this).attr("href").substr(1);
        var tabValue = $(this).attr("id");
        // if (tabValue == 'all') {
        //   $('.tabcontent').show();
        // } else {
        //   $('.tabcontent:not(.' + tabValue + ')').hide();
        //   $('.tabcontent.' + tabValue).show();
        // }
        changeTab(tabValue);
      }
    });

    // accordion function.
    $(".accordioncontent").hide();
    $(".accordiontitle, .acctrigger").on("click", function(e) {
      e.preventDefault();
      var showAccorContent = $(this).attr("id");
      if (!$(this).hasClass("active")) {
        $(".accordiontitle").removeClass("active");
        $(".accordioncontent").slideUp();
        $(this).addClass("active");
        // $('.accordioncontent.' + showAccorContent).slideDown("fast");
        $(this).parent().find(".accordioncontent").slideDown("fast");

        // scroll to top function call.
        setTimeout(function() {
          smoothScrollToTop(".accordiontitle.active", 100);
        }, 500);
      } else {
        $(this).removeClass("active");
        // $('.accordioncontent.' + showAccorContent).slideUp("fast");
        $(this).parent().find(".accordioncontent").slideUp("fast");
      }
    });

    // popup function.
    $(".popupshow").on("click", function(e) {
      e.preventDefault();

      // show popup with ID.
      var popupid = $(this).attr("id");
      $('.popupoverlay.' + popupid).addClass("popupactive");

      // show popup with href.
      var popuphref = $(this).attr("href");
      $(popuphref).addClass("popupactive");

      if ($(".popupoverlay").hasClass("popupactive")) {
        $("body").addClass("popupbodyfixed")
      }
      if ($(popuphref).hasClass("popupvideo")) {
        try {
          $(popuphref + " .vjs-big-play-button").click()
        } catch (e) {}
      }
    });
    $(".popupcontainer").on("click", function(e) {
      e.stopPropagation();
    });
    $(".popupclose").on("click", function(e) {
      $(".popupoverlay").removeClass("popupactive");
      $("body").removeClass("popupbodyfixed");
      $(".vjs-play-control.vjs-playing").click();
    });
    $('.popupshow[data-gjs-type="link"]').on("click", function(e) {
      e.stopPropagation();
    });

    // session storage function.
    if (sessionStorage.getItem("firstVisit") != "1") {
      if ($("#indpopup").length) {
        sessionStorage.setItem("firstVisit", "1");
        $("#indpopup").addClass("popupactive");
        if ($(".popupoverlay").is(":visible")) {
          $("body").addClass("bodyfixed");
        }
      }
    }

    // share link.
    // $(".menu li a").on("click", function(e) {
    //   e.preventDefault();
    //   if (!$(this).parent().hasClass("active")) {
    //     // $(".menu li a").parent().removeClass("active");
    //     $(this).parent().addClass("active").siblings().removeClass('active');
    //   } else {
    //     // $(this).parent().removeClass("active");
    //   }
    // });

    // smooth scrolling when click on item.
    // $("a.page-scroll").bind("click", function(e) {
    //   e.preventDefault();
    //   var $anchor = $(this);
    //   $("html, body").stop().animate({
    //     scrollTop: $($anchor.attr('href')).offset().top
    //   }, 500);
    // });

    // On page scroll menu active.
    $(window).on('scroll', function() {
      var scrollDistance = $(window).scrollTop();
      var menuHeight = $(".headersticky").outerHeight();
      $(".section-scroll").each(function(i) {
        if ($(this).position().top - menuHeight <= scrollDistance) {
          $(this).css({
            'padding-top': menuHeight
          });
          $(".menu li").removeClass("active");
          $(".menu li").eq(i).addClass("active");
        } else {
          $(".menu li").eq(i).removeClass("active");
          $(this).css({
            'padding-top': '0'
          });
        }
      });
    });

    // text replace function.
    $(".test").html(function() {
      return $(this).html().replace("Text", "Text<span>*</span>");
    });

    // tooltips function.
    $(".tooltiplink").each(function() {
      $(this).wrap('<span class="tooltipwrapper"></span>');
      var tooltipid = $(this).attr("id");
      $(".tooltipbox." + tooltipid).remove().clone().appendTo(this);
    });

    // hover function.
    // $(".tooltiplink").hover(function(e) {
    //   $(this).addClass("hover");
    // }, function() {
    //   $(this).removeClass("hover");
    // });

    // clickable div
    $(".clickdiv").on("click", function() {
      var link = $(this).find("a");
      var href = link.attr("href");
      if (link.attr("target") === "_blank") {
        window.open(href);
      } else {
        window.location = href;
      }
      return false;
    })

    // scroll to top function.
    function smoothScrollToTop(id_or_Name, timelength) {
      var timelength = timelength || 500;
      $('html, body').animate({
        scrollTop: $(id_or_Name).offset().top - 50
      }, timelength, function(e) {
        // window.location.hash = id_or_Name;
      });
    }

  });
})(jQuery)

// Run JavaScript Only After Entire Page Has Loaded
$(window).bind("load", function() {
  // code here
});
