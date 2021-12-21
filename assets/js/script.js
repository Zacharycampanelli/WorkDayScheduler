displayHour = 5;
$(document).ready(function () {
  // Displays current date at the top of the application
  var now = moment().format("dddd, MMMM Do");
  $("#currentDay").text(now);

  // create save button
  $(".save-btn").on("click", function () {
    console.log(this);
    var currentHour = $(this).siblings(".hourCol").text();
    console.log(currentHour);
    var currentText = $(this).siblings(".taskDescription").val();
    console.log(currentText);

    localStorage.setItem(currentHour, currentText);
  });


  // load local storage data into each hour

  // check to see if each hour is before, after, or equal to the current hour and style accordingly

  //update time interval
});
