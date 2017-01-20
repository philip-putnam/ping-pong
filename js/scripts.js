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

    var userInput = $("input#user-num").val();

    if (!inputValid(userInput)) {
      $(".results").text("Please type a rational non-negative number!");
    } else {
      $(".results").text(userInput);
    }

  });

});
