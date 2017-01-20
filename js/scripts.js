$(document).ready(function() {
  $("#pong-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#user-num").val();

    $(".results").text(userInput);

  });

});
