$(document).ready(function () {
  $(".php-email-form").submit(function (e) {
    e.preventDefault();

    var form = $(this);
    var formData = form.serialize();

    $.ajax({
      type: form.attr("method"),
      url: form.attr("action"),
      data: formData,
      success: function (response) {
        if (response.trim() === "success") {
          window.location.href = "success-page.html";
        } else {
          $(".error-message")
            .fadeIn()
            .html("Error: " + response);
        }
      },
      error: function (err) {
        $(".error-message")
          .fadeIn()
          .html("Error: " + err.statusText);
      },
    });
  });
});
