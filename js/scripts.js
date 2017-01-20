// Back-end, business logic

// Function ensuring that there are not non-number characters in user-number, regular expression (regEx) used checked for non-number (^), is greedy (+), and just in case is global (g) and case-insensitive (i) to cover all the bases. Returns inputValid returns false if the input is invalid, true if valid.
var inputValid = function(number) {
  if (number.match(/[^0-9]+/gi)) {
    return false;
  } else {
    return true;
  }
};

// Function that returns true if an argument passed into it leaves a remainder (%) of zero when divided by 15, began with 15 as numbers divisible by 15 are also divisible by 5 and 3. This needed to take precedence over those.
var fifteenDivision = function (number) {
  if ((number % 15) === 0) {
    return true;
  } else {
    return false;
  }
};

// Function that returns true if an arugment passed into it leaves a remainder (%) of zero when divided by 5.
var fiveDivision = function(number) {
  if ((number % 5) === 0) {
    return true;
  } else {
    return false;
  }

};

// Function that returns true if an arugment passed into it leaves a remainder (%) of zero when divided by 3.
var threeDivision = function(number) {
  if ((number % 3) === 0) {
    return true;
  } else {
    return false;
  }
};

// Front-end, user interface logic

$(document).ready(function() {
  $("#pong-form").submit(function(event) {
    event.preventDefault();

    // Ensures that user can continuously input data without appending it on previous output
    $("#results").text("");

    $(".results").show();

    // Would parseInt here to be extra safe, however due to html input type="number" it will not work, further verification to ensure that the user input is valid below (function inputValid).
    var userInput = $("input#user-num").val();

// If branch to ensure userInput is a valid number (inputValid), then a for-loop cycling through up to the number starting from indices one. Nested if-branch checks fifteenDivision first to see if index divided by 15 is 0, if so output's "ping-pong", same for fiveDivision and threeDivision with their corresponding outputs, else it returns the value of index.
    if (!inputValid(userInput)) {
      $("#results").text("Please type a rational non-negative number!");
    } else {
      for (var index = 1; index <= userInput; index += 1) {
        if (fifteenDivision(index)) {
          $("#results").append("ping-pong" + " ");
        } else if (fiveDivision(index)) {
          $("#results").append("pong" + " ");
        } else if (threeDivision(index)) {
          $("#results").append("ping" + " ");
        } else {
          $("#results").append(index + " ");
        }
      }
    }

  });

});
