(function($) {
  $(document).ready(function() {
    // find page name
    pageName = document.URL.split("/")[document.URL.split("/").length - 1].replace(/-/g, " ") != "" ? document.URL.split("/")[document.URL.split("/").length - 1].replace(/-/g, " ") : "home";
    window.pfAnalyticsData = {
      "pfPage": {
        "pageName": pageName
      }
    };

    // header navigation analytics
    $(".utility-d-1 .utility-hcp").attr("sc:linkname", "global header|navigation|healthcare professionals");
    $(".utility-d-1 .isiopen-d").attr("sc:linkname", "global header|navigation|important safety information");
    $(".tooltiplink a").on("click", function() {
      s.tl(this, "o", "global header|navigation|indication")
    });
    $(".utility-d-1 .utility-fda").attr("sc:linkname", "global header|navigation|view information on braftovi for other fda-approved uses");
    $(".utility-d-2 li:eq(0) a").attr("sc:linkname", "global header|navigation|braftovi: prescribing information");
    $(".utility-d-2 li:eq(1) a").attr("sc:linkname", "global header|navigation|braftovi: medication guide");
    $(".utility-d-2 li:eq(2) a").attr("sc:linkname", "global header|navigation|mektovi: prescribing information");
    $(".utility-d-2 li:eq(3) a").attr("sc:linkname", "global header|navigation|mektovi: medication guide");
    $(".utility-m .popupshow").attr("sc:linkname", "global header|navigation|indication");
    $(".utility-m .isiopen-m").attr("sc:linkname", "global header|navigation|important safety information");
    $(".mobile-info-link-hcp a").attr("sc:linkname", "global header|navigation|healthcare professionals");
    $(".mobile-info-link-fda a").attr("sc:linkname", "global header|navigation|view information on braftovi for other fda-approved uses");
    $(".mobile-info-link-braftovi a, .mobile-info-link-mektovi a").each(function() {
      var headTitle = $(this).parent().find("strong").text().toLowerCase();
      var linkTitle = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|" + headTitle + linkTitle)
    });
    $(".header-logo").attr("sc:linkname", "global header|navigation|logo");
    $(".sign-up-link").attr("sc:linkname", "global header|navigation|sign up");
    $(".main-menu>li>a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|" + title)
    });
    $(".about-braftovi>li>a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|about braftovi + mektovi|" + title)
    });
    $(".personal-stories>li>a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|personal stories|" + title)
    });
    $(".patient-support>li>a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|patient support|" + title)
    });
    $(".resource-library>li>a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global header|navigation|resource library|" + title)
    });

    // isi analytics
    $(document).on("click", ".right-wrapper .btnisiexpand", function() {
      if (!$(this).hasClass("isiclose")) {
        s.tl(this, "o", "important safety information and indication|button navigation|close")
      } else {
        s.tl(this, "o", "important safety information and indication|button navigation|show more")
      }
    });
    $(document).on("click", ".m-isisticky .isiheader h4", function() {
      s.tl(this, "o", "important safety information and indication|button navigation|show more")
    });
    $(".isi-full-braftovi-pi").attr("sc:linkname", "important safety information and indication|link navigation|braftovi prescribing information");
    $(".isi-full-braftovi-mg").attr("sc:linkname", "important safety information and indication|link navigation|braftovi medication guide");
    $(".isi-full-mektovi-pi").attr("sc:linkname", "important safety information and indication|link navigation|mektovi prescribing information");
    $(".isi-full-mektovi-patient-info").attr("sc:linkname", "important safety information and indication|link navigation|mektovi patient information");
    $(".isibody a[href^=tel]").each(function() {
      var phonenumber = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "important safety information and indication|click to call|" + phonenumber)
    });

    // footer navigation analytics
    $(".footer-nav a").each(function() {
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global footer|navigation|" + title)
    });
    $(".footer-logo").attr("sc:linkname", "global footer|navigation|logo");
    $(".footer-medwatch").attr("sc:linkname", "global footer|link navigation|visit medwatch");
    $(".footer-copy a[href^=tel]").each(function() {
      var phonenumber = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", "global footer|navigation|" + phonenumber)
    });

    // popup analytics
    $("#indpopup .popupclose.top").on("click", function() {
      s.tl(this, "o", "what is braftovi + mektovi?|button navigation|cross icon")
    });
    $("#indpopup .popupclose.btn-primary").on("click", function() {
      s.tl(this, "o", "what is braftovi + mektovi?|button navigation|close")
    });
    $(document).on("click", "#external-link-modal .modal-header .close", function() {
      s.tl(this, "o", "you are now leaving braftovimektovi.com|button navigation|close")
    });
    $(document).on("click", "#external-link-modal .modal-footer .btn-primary", function() {
      s.tl(this, "o", "you are now leaving braftovimektovi.com|button navigation|continue")
    });

    // left navigation analytics
    if ($(".section-left").length) {
      var activePage = $(".main-menu>li.active>a").text().toLowerCase();
      $(".submenu-left a").each(function() {
        var title = $(this).text().toLowerCase();
        $(this).attr("sc:linkname", pageName + "|left rail navigation|" + title)
      });
      $(".callout-download a").attr("sc:linkname", "learn more about braftovi + mektovi|button navigation|download");
      $(".view-pi p a:eq(0)").attr("sc:linkname", "learn more about braftovi + mektovi|link navigation|mektovi prescribing information");
      $(".view-pi p a:eq(1)").attr("sc:linkname", "learn more about braftovi + mektovi|link navigation|mektovi prescribing information")
    }

    // home analytics
    if ($(".homepage").length) {
      $(".home-content .btn-primary").attr("sc:linkname", "home|content|get a discussion guide");
      $(".callout-signup .btn-secondary").attr("sc:linkname", "home|content|sign up")
    }
    $(".callout-section .callout-wrapper a").each(function() {
      var component = $(this).parent().find("h4").text().toLowerCase();
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", pageName + "|" + component + "|" + title)
    });
    $(".callout-support a").each(function() {
      var component = $(this).parent().find("h4").text().toLowerCase();
      var title = $(this).text().toLowerCase();
      $(this).attr("sc:linkname", pageName + "|" + component + "|" + title)
    });
    if ($(".error-content").length) {
      $(".callout-section .callout-wrapper a").each(function() {
        var component = $(this).parent().find("h4").text().toLowerCase();
        var title = $(this).text().toLowerCase();
        $(this).attr("sc:linkname", "error page|" + component + "|" + title)
      })
    }

    // video analytics
    $(".video-player-full a").each(function() {
      var component = $(this).parent().find(".video-description h4").text().toLowerCase();
      $(this).attr("sc:linkname", component + "|button navigation|video play")
    });
    $(".videopopup .popupclose.top").on("click", function() {
      var component = $(this).parents(".popupcontainer").find(".popupbody h4").text().toLowerCase();
      s.tl(this, 'o', component + "|button navigation|video close")
    });

    // side effect analytics
    if ($(".side-effects-content").length) {
      $(".side-effect-accordion td").on("click", function() {
        var title = $(this).find("h4").text().toLowerCase();
        s.tl(this, "o", pageName + "|most common side effects|" + title)
      });
      $(".side-effect-callout p a").attr("sc:linkname", pageName + "|you may report side effects to the fda|visit medwatch");
      $(".side-effect-callout p a[href^=tel]").each(function() {
        var phonenumber = $(this).text().toLowerCase();
        $(this).attr("sc:linkname", pageName + "|you may report side effects to the fda|" + phonenumber)
      })
    }

    // download resources analytics
    if ($(".downloadable-resources").length) {
      $(".learn-more-section a").attr("sc:linkname", "file download | click on downloadable resources | learn more about braftovi and mektovi");
      $(".folletocta a").attr("sc:linkname", "file download | click on downloadable resources | folleto del paciente");
      $(".callout-support-content a").each(function() {
        var component = $(this).parent().find(".para-text").text().toLowerCase();
        var title = $(this).text().toLowerCase();
        $(this).attr("sc:linkname", pageName + "|" + component + "|" + title)
      })
    }
    var $iosAttr = JSON.stringify({
      "pfAnalyticsAttrData": {
        "pfMobileAppDownload": {
          "mobileAppName": "apple",
          "mobileAppPlatform": "iOS"
        }
      }
    });
    var $androidAttr = JSON.stringify({
      "pfAnalyticsAttrData": {
        "pfMobileAppDownload": {
          "mobileAppName": "google",
          "mobileAppPlatform": "Android"
        }
      }
    });
    $('.app-store-btn-img .badge-app-store a').attr('sc:pf-data', $iosAttr);
    $('.app-store-btn-img .badge-google-play a').attr('sc:pf-data', $androidAttr)
  })
})(jQuery)
