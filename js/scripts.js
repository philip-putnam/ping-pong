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

// Function calls functions fifteenDivision, fiveDivision, and threeDivision returning appropriate string or the number inputted if a remainder is found from all functions.
var control = function(number) {
  tempArry = ["ping-pong", "pong", "ping"];
  if (fifteenDivision(number)) {
    return tempArry[0];
  } else if (fiveDivision(number)) {
    return tempArry[1];
  } else if (threeDivision(number)) {
    return tempArry[2];
  } else {
    return number;
  }

};


// Front-end, user interface logic

$(document).ready(function() {
  $("#pong-form").submit(function(event) {
    event.preventDefault();

    // Ensures that user can continuously input data without appending it on previous output
    $("#results").text("");

    $("#resultCol").show();
    $("#picCol").slideDown();

    // Would parseInt here to be extra safe, however due to html input type="number" it will not work, further verification to ensure that the user input is valid below (function inputValid).
    var userInput = $("input#user-num").val();

    // If branch ensures there are no invalid characters (symbols, letters, etc.). For-loop calls control function to check index to see if the number is divisible by 15, 5, or 3 and then returns it for output.
    if (!inputValid(userInput)) {
      $("#results").text("Please type a rational non-negative number!");
    } else {
      for (var index = 1; index <= userInput; index += 1) {
        $("#results").append(control(index) + " ");
      }
    }

  });

});
