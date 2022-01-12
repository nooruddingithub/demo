(function($) {
  $(document).ready(function() {

    $("#test").on("submit", function(e) {
      e.preventDefault();

      if ($("#first_name").length) {
        if ($("#first_name").val().length < 2 || $("#first_name").val().length > 50) {
          $("#first_name").parent().removeClass("success").addClass("error");
        } else {
          $("#first_name").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#last_name").length) {
        if ($("#last_name").val().length < 2 || $("#last_name").val().length > 50) {
          $("#last_name").parent().removeClass("success").addClass("error");
        } else {
          $("#last_name").parent().removeClass("error").addClass("success");
        }
      }
      if ($("#email").length) {
        if ($("#email").val() == "" || $("#email").val().length > 50) {
          $("#email").parent().removeClass("success").addClass("error");
        } else if (!validateEmail($("#email").val())) {
          $("#email").parent().removeClass("success").addClass("error");
        } else {
          $("#email").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#phone_number").length) {
        if ($("#phone_number").val().length < 10 || $("#phone_number").val().length > 12) {
          $("#phone_number").parent().removeClass("success").addClass("error");
        } else {
          $("#phone_number").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#selectbox_1").length) {
        if ($("#selectbox_1").val() == "") {
          $("#selectbox_1").parent().removeClass("success").addClass("error");
        } else {
          $("#selectbox_1").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#address_1").length) {
        if ($("#address_1").val().length < 2 || $("#address_1").val().trim().length > 50) {
          $("#address_1").parent().removeClass("success").addClass("error");
        } else {
          $("#address_1").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#city").length) {
        if ($("#city").val().length < 2 || $("#city").val().trim().length > 50) {
          $("#city").parent().removeClass("success").addClass("error");
        } else {
          $("#city").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#zip_code").length) {
        if ($("#zip_code").val().trim().length < 5 || $("#zip_code").val().trim().length > 6) {
          $("#zip_code").parent().removeClass("success").addClass("error");
        } else {
          $("#zip_code").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#textarea_1").length) {
        if ($("#textarea_1").val().trim().length < 3 || $("#textarea_1").val().trim().length > 300) {
          $("#textarea_1").parent().removeClass("success").addClass("error");
        } else {
          $("#textarea_1").parent().removeClass("error").addClass("success");
        }
      }

      if ($('input[name="gender"]').length) {
        if (!$('input[name="gender"]').is(":checked")) {
          $('input[name="gender"]').parent().removeClass("success").addClass("error");
        }
      }

      if ($("#checkbox_1").length) {
        if (!$("#checkbox_1").is(":checked")) {
          $("#checkbox_1").parent().removeClass("success").addClass("error");
        } else {
          $("#checkbox_1").parent().removeClass("error").addClass("success");
        }
      }

      if ($("#checkbox_2").length) {
        if (!$("#checkbox_2").is(":checked")) {
          $("#checkbox_2").parent().removeClass("success").addClass("error");
        } else {
          $("#checkbox_2").parent().removeClass("error").addClass("success");
        }
      }

      if (!$(".error").length) {
        call_request();
        $('input[type="submit"]').val("Please Wait...").attr("disabled", true);
      } else {
        $("html, body").animate({
          scrollTop: $(".error").offset().top
        })
      }

    });

    function call_request() {
      var data = $("#test").serialize();
      $.ajax({
        url: "/form.php",
        type: "POST",
        dataType: "json",
        data: data,
        // headers: {
        //   // 'x-config-token': token,
        // },
        success: function(data) {
          var formData = $("form").serializeArray();
          console.log(formData);
          // window.location.href = "/demo-example/form/thank-you.html";
          $("#test").get(0).reset();
          $(".thank-msg").fadeIn();
          $('input[type="submit"]').val("Submit").attr("disabled", false);
        },
        error: function(error) {
          serviceError();
        }
      });
    }

    // technical service error.
    function serviceError() {
      $(".tech-error-msg").show();
      $("html, body").animate({
        scrollTop: $(".tech-error-msg").offset().top
      }, 500);
      $('input[type="submit"]').val("Submit").attr("disabled", false);
    }

    // validation for radio button.
    $('input[name="gender"]').bind("click", function() {
      if ($('input[name="gender"]').is(":checked")) {
        $('input[name="gender"]').parent().removeClass("error").addClass("success");
      }
    });

    // validation for checkbox.
    $("#checkbox_1, #checkbox_2").bind("click", function() {
      if ($(this).is(":checked")) {
        $(this).parent().removeClass("error").addClass("success");
      } else {
        $(this).parent().removeClass("success").addClass("error");
      }
    });

    // validation for select box.
    $("#selectbox_1").on("change", function() {
      if ($(this).val() != "") {
        $(this).parent().removeClass("error").addClass("success");
      } else {
        $(this).parent().removeClass("success").addClass("error");
      }
    });

    // validation for email.
    $("#email").bind("keypress keyup focusout", function(e) {
      if ($(this).val().trim().length < 5 || $(this).val().trim().length > 50) {
        $(this).val($(this).val().substr(0, 10));
        $(this).parent().removeClass("success").addClass("error");
      } else if (!validateEmail($(this).val())) {
        $(this).parent().removeClass("success").addClass("error");
      } else {
        $(this).parent().removeClass("error").addClass("success");
      }
    });

    function validateEmail(sEmail) {
      var filter = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}\s*$/i);
      if (filter.test(sEmail)) {
        return !0;
      } else {
        return !1;
      }
    }

    // validation for phone and zip code.
    $("#phone_number, #zip_code").bind("cut copy paste", function(e) {
      e.preventDefault();
    });
    $("#phone_number").bind("keypress keyup focusout", function(e) {
      var max_length = 12;
      var current_length = $(this).val().trim().length;
      if (current_length < 10 || current_length > max_length) {
        $(this).val($(this).val().substr(0, max_length));
        $(this).parent().removeClass('success').addClass('error');
      } else {
        $(this).parent().removeClass('error').addClass('success');
      }
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46) && e.which !== 13) {
        return false;
      }
    });

    $("#zip_code").bind("keypress keyup focusout", function(e) {
      var max_length = 6;
      var current_length = $(this).val().trim().length;
      if (current_length < 5 || current_length > max_length) {
        $(this).val($(this).val().substr(0, max_length));
        $(this).parent().removeClass('success').addClass('error');
      } else {
        $(this).parent().removeClass('error').addClass('success');
      }
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46) && e.which !== 13) {
        return false;
      }
    });

    // validation for textbox.
    $("#last_name, #first_name").bind("keypress", function(e) {
      if (e.which != 8 && e.which != 0 && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122) && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46)) {
        return false;
      }
    });
    $("#city").bind("keypress", function(e) {
      if (e.which != 8 && e.which != 0 && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122) && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46) && e.which != 32) {
        return false;
      }
    });

    $("#first_name, #last_name, #address_1, #city").bind("keydown keyup focusout", function(e) {
      if ($(this).val() == "" || $(this).val().trim().length < 2 || $(this).val().trim().length > 50) {
        $(this).val($(this).val().substr(0, 50));
        $(this).parent().removeClass("success").addClass("error");
      } else {
        $(this).parent().removeClass("error").addClass("success");
      }
    });

    $("#textarea_1").bind("keydown keyup", function(e) {
      var charCount = 300 - $(this).val().length;
      $(".story-length").html('<strong>' + charCount + '</strong>' + ' of 300 characters remaining.');
      $(this).parent().find(".error-msg").hide();
      if ($(this).val() != null) {
        if ($(this).val().trim().length > 300) {
          $(this).parent().removeClass("success").addClass("error");
          $(this).parent().find(".error-msg").hide();
          $(this).parent().find(".story-length-error").show();
        } else {
          $(this).parent().removeClass("error").addClass("success");
          $(this).parent().find(".story-length-error").hide();
        }
        if ($(this).val().trim().length < 2) {
          $(this).parent().removeClass("success").addClass("error");
          $(this).parent().find(".story-length-error").hide();
          $(this).parent().find(".error-msg").show().addClass("active");
        }
      } else {
        $(this).parent().removeClass("success").addClass("error");
        $(this).parent().find(".error-msg").show();
      }
    });

    $(".msg-close").on("click", function(e) {
      $(".thank-msg").fadeOut();
    })

  });
})(jQuery)
