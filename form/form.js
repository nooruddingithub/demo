(function($) {
  $(document).ready(function() {

    // form validation on submit.
    $("form").on("submit", function(e) {
      e.preventDefault();
      var clikedForm = $(this);

      if (clikedForm.find('input[name="first_name"]').length) {
        if (clikedForm.find('input[name="first_name"]').hasClass("required")) {
          if (clikedForm.find('input[name="first_name"]').val().length < 2 || clikedForm.find('input[name="first_name"]').val().length > 50) {
            clikedForm.find('input[name="first_name"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="first_name"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="last_name"]').length) {
        if (clikedForm.find('input[name="last_name"]').hasClass("required")) {
          if (clikedForm.find('input[name="last_name"]').val().length < 2 || clikedForm.find('input[name="last_name"]').val().length > 50) {
            clikedForm.find('input[name="last_name"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="last_name"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="email"]').length) {
        if (clikedForm.find('input[name="email"]').hasClass("required")) {
          if (clikedForm.find('input[name="email"]').val() == "" || clikedForm.find('input[name="email"]').val().length > 50) {
            clikedForm.find('input[name="email"]').parent().removeClass("valid").addClass("error");
          } else if (!validateEmail(clikedForm.find('input[name="email"]').val())) {
            clikedForm.find('input[name="email"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="email"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="phone_number"]').length) {
        if (clikedForm.find('input[name="phone_number"]').hasClass("required")) {
          if (clikedForm.find('input[name="phone_number"]').val().length < 10 || clikedForm.find('input[name="phone_number"]').val().length > 12) {
            clikedForm.find('input[name="phone_number"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="phone_number"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('select[name="selectbox_1"]').length) {
        if (clikedForm.find('select[name="selectbox_1"]').hasClass("required")) {
          if (clikedForm.find('select[name="selectbox_1"]').val() == "") {
            clikedForm.find('select[name="selectbox_1"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('select[name="selectbox_1"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="address_1"]').length) {
        if (clikedForm.find('input[name="address_1"]').hasClass("required")) {
          if (clikedForm.find('input[name="address_1"]').val().length < 2 || clikedForm.find('input[name="address_1"]').val().length > 50) {
            clikedForm.find('input[name="address_1"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="address_1"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="address_2"]').length) {
        if (clikedForm.find('input[name="address_2"]').hasClass("required")) {
          if (clikedForm.find('input[name="address_2"]').val().length < 2 || clikedForm.find('input[name="address_2"]').val().length > 50) {
            clikedForm.find('input[name="address_2"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="address_2"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="city"]').length) {
        if (clikedForm.find('input[name="city"]').hasClass("required")) {
          if (clikedForm.find('input[name="city"]').val().length < 2 || clikedForm.find('input[name="city"]').val().trim().length > 50) {
            clikedForm.find('input[name="city"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="city"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="zip_code"]').length) {
        if (clikedForm.find('input[name="zip_code"]').hasClass("required")) {
          if (clikedForm.find('input[name="zip_code"]').val().trim().length < 5 || clikedForm.find('input[name="zip_code"]').val().trim().length > 6) {
            clikedForm.find('input[name="zip_code"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="zip_code"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('textarea[name="textarea_1"]').length) {
        if (clikedForm.find('textarea[name="textarea_1"]').hasClass("required")) {
          if (clikedForm.find('textarea[name="textarea_1"]').val().length < 3 || clikedForm.find('textarea[name="textarea_1"]').val().length > 300) {
            clikedForm.find('textarea[name="textarea_1"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('textarea[name="textarea_1"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="gender"]').length) {
        if ($('input[name="gender"]').hasClass("required")) {
          if (!$('input[name="gender"]').is(":checked")) {
            $('input[name="gender"]').parents(".form-item").removeClass("valid").addClass("error");
          }
        }
      }

      if (clikedForm.find('input[name="checkbox_1"]').length) {
        if (clikedForm.find('input[name="checkbox_1"]').hasClass("required")) {
          if (!clikedForm.find('input[name="checkbox_1"]').is(":checked")) {
            clikedForm.find('input[name="checkbox_1"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="checkbox_1"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      if (clikedForm.find('input[name="checkbox_2"]').length) {
        if (clikedForm.find('input[name="checkbox_2"]').hasClass("required")) {
          if (!clikedForm.find('input[name="checkbox_2"]').is(":checked")) {
            clikedForm.find('input[name="checkbox_2"]').parent().removeClass("valid").addClass("error");
          } else {
            clikedForm.find('input[name="checkbox_2"]').parent().removeClass("error").addClass("valid");
          }
        }
      }

      // error handling.
      if (clikedForm.find(".error").length) {
        $("html, body").animate({
          scrollTop: clikedForm.find(".error").offset().top
        });
        var errdiv = clikedForm.find(".error")[0];
        $(errdiv).find("input").focus();
      }

      // form submission.
      if (!clikedForm.find(".error").length) {
        clikedForm.find('input[type="submit"]').val("Please Wait...").attr("disabled", true);
        $.ajax({
          type: "POST",
          url: "form.php",
          data: $(this).serialize(),
          headers: {
            // 'x-config-token': token,
          },
          success: function(data) {
            var formData = clikedForm.serializeArray();
            console.log(formData);
            clikedForm.find('input[type="submit"]').val("Submit").attr("disabled", false);
            // window.location.href = "/project-layout/form/thank-you.html";
            clikedForm.find(".thank-msg").fadeIn();
            clikedForm.get(0).reset();
          },
          error: function(error) {
            serviceError();
          }
        });
      }

    });

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
      if ($('input[name="gender"]').hasClass("required")) {
        if ($('input[name="gender"]').is(":checked")) {
          $('input[name="gender"]').parents(".form-item").removeClass("error").addClass("valid");
        }
      }
    });

    // validation for checkbox.
    $('input[name="checkbox_1"],input[name="checkbox_2"]').bind("click", function() {
      if ($(this).hasClass("required")) {
        if ($(this).is(":checked")) {
          $(this).parent().removeClass("error").addClass("valid");
        } else {
          $(this).parent().removeClass("valid").addClass("error");
        }
      }
    });

    // validation for select box.
    $('select[name="selectbox_1"]').on("change", function() {
      if ($(this).hasClass("required")) {
        if ($(this).val() != "") {
          $(this).parent().removeClass("error").addClass("valid");
        } else {
          $(this).parent().removeClass("valid").addClass("error");
        }
      }
    });

    // validation for email.
    $('input[name="email"]').bind("keypress keyup", function(e) {
      var min_length = 5;
      var max_length = $(this).val($(this).val().substr(0, 50));
      var current_length = $(this).val().trim().length;
      if ($(this).val() != "") {
        if ($(this).hasClass("required")) {
          if (current_length < min_length || current_length > max_length) {
            $(this).parent().removeClass("valid").addClass("error");
          } else if (!validateEmail($(this).val())) {
            $(this).parent().removeClass("valid").addClass("error");
          } else {
            $(this).parent().removeClass("error").addClass("valid");
          }
        } else {
          if (current_length < min_length || current_length > max_length) {
            $(this).removeClass("valid").addClass("error");
          } else if (!validateEmail($(this).val())) {
            $(this).removeClass("valid").addClass("error");
          } else {
            $(this).removeClass("error").addClass("valid");
          }
        }
      } else {
        $(this).removeClass("valid");
        $(this).removeClass("error");
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
    $('input[name="phone_number"],input[name="zip_code"]').bind("cut copy paste", function(e) {
      e.preventDefault();
    });
    $('input[name="phone_number"]').bind("keypress keyup", function(e) {
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57) && e.which !== 46 && e.which !== 13) {
        return false;
      }
      var min_length = 10;
      var max_length = $(this).val($(this).val().substr(0, 12));
      var current_length = $(this).val().trim().length;
      if ($(this).val() != "") {
        if ($(this).hasClass("required")) {
          if (current_length < min_length || current_length > max_length) {
            $(this).parent().removeClass("valid").addClass("error");
          } else {
            $(this).parent().removeClass("error").addClass("valid");
          }
        } else {
          if (current_length < min_length || current_length > max_length) {
            $(this).removeClass("valid").addClass("error");
          } else {
            $(this).removeClass("error").addClass("valid");
          }
        }
      } else {
        $(this).removeClass("valid");
        $(this).removeClass("error");
      }
    });

    $('input[name="zip_code"]').bind("keypress keyup", function(e) {
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46) && e.which !== 13) {
        return false;
      }
      var min_length = 5;
      var max_length = $(this).val($(this).val().substr(0, 6));
      var current_length = $(this).val().trim().length;
      if ($(this).val() != "") {
        if ($(this).hasClass("required")) {
          if (current_length < min_length || current_length > max_length) {
            $(this).parent().removeClass("valid").addClass("error");
          } else {
            $(this).parent().removeClass("error").addClass("valid");
          }
        } else {
          if (current_length < min_length || current_length > max_length) {
            $(this).removeClass("valid").addClass("error");
          } else {
            $(this).removeClass("error").addClass("valid");
          }
        }
      } else {
        $(this).removeClass("valid");
        $(this).removeClass("error");
      }
    });

    // validation for textbox.
    $('input[name="first_name"], input[name="last_name"]').bind("keypress", function(e) {
      if (e.which != 8 && e.which != 0 && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122) && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46)) {
        return false;
      }
    });
    $('input[name="city"]').bind("keypress", function(e) {
      if (e.which != 8 && e.which != 0 && (e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 122) && (e.which < 48 || e.which > 57) && (e.which !== 46 || e.which == 46) && e.which != 32) {
        return false;
      }
    });

    $('input[name="first_name"],input[name="last_name"],input[name="address_1"],input[name="address_2"],input[name="city"]').bind("keypress keyup", function(e) {
      var min_length = 2;
      var max_length = $(this).val($(this).val().substr(0, 50));
      var current_length = $(this).val().trim().length;
      if ($(this).val() != "") {
        if ($(this).hasClass("required")) {
          if (current_length < min_length || current_length > max_length) {
            $(this).parent().removeClass("valid").addClass("error");
          } else {
            $(this).parent().removeClass("error").addClass("valid");
          }
        } else {
          if (current_length < min_length || current_length > max_length) {
            $(this).removeClass("valid").addClass("error");
          } else {
            $(this).removeClass("error").addClass("valid");
          }
        }
      } else {
        $(this).removeClass("valid");
        $(this).removeClass("error");
      }
    });

    $('textarea[name="textarea_1"]').bind("keydown keyup", function(e) {
      var max_length = 300;
      var min_length = 2;
      var current_length = $(this).val().trim().length;
      var charCount = max_length - current_length;
      $(".story-length").html('<strong>' + charCount + '</strong>' + ' of 300 characters remaining.');
      $(this).parent().find(".error-msg").hide();
      if ($(this).val() != null) {
        if ($(this).val().trim().length > max_length) {
          $(this).parent().removeClass("valid").addClass("error");
          $(this).parent().find(".error-msg").hide();
          $(this).parent().find(".story-length-error").show();
        } else {
          $(this).parent().removeClass("error").addClass("valid");
          $(this).parent().find(".story-length-error").hide();
        }
        if ($(this).val().trim().length < min_length) {
          $(this).parent().removeClass("valid").addClass("error");
          $(this).parent().find(".story-length-error").hide();
          $(this).parent().find(".error-msg").show().addClass("active");
        }
      } else {
        $(this).parent().removeClass("valid").addClass("error");
        $(this).parent().find(".error-msg").show();
      }
    });

    $(".msg-close").on("click", function(e) {
      $(".thank-msg").fadeOut();
    })

  });
})(jQuery)
