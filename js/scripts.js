// Back-end, business logic

var inputValid = function(number) {
  if (number.match(/[^0-9]+/gi)) {
    return false;
  } else {
    return true;
  }
};


// Front-end, user interface logic

$(document).ready(function() {
  $("#pong-form").submit(function(event) {
    event.preventDefault();

    // Would parseInt here to be extra safe, however due to html input type="number" it will not work, further verification to ensure that the user input is valid below (function inputValid).
    var userInput = $("input#user-num").val();

    if (!inputValid(userInput)) {
      $(".results").text("Please type a rational non-negative number!");
    } else {
      for (var index = 1; index <= userInput; index += 1) {
        $(".results").append(index + " ");
      }
    }

  });

});
