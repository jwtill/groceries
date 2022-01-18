$(document).ready(function() {
  $("#user-input").submit( function() {
    event.preventDefault();
    let groceryList = [];
    const input = $("#grocery-list").val().toUpperCase();
    groceryList = input.split(" ");
    groceryList.sort();
    groceryList.forEach(function (food) {
      $("#result").append("<li>" + food + "</li>");
      $("#user-input").hide();
    });

  });
  
});