displayHour = 5;
$(document).ready(function () {
  // Displays current date at the top of the application
  var now = moment().format("dddd, MMMM Do");
  $("#currentDay").text(now);

  // create save button
  $(".save-btn").on("click", function () {
    console.log(this);
    var currentHour = $(this).parent().attr("id");
    console.log(currentHour);
    var currentText = $(this).siblings(".taskDescription").val();
    console.log(currentText);

    localStorage.setItem(currentHour, currentText);
  });

  // load local storage data into each hour

  $("#hour5 .taskDescription").val(localStorage.getItem("hour5"));
  $("#hour6 .taskDescription").val(localStorage.getItem("hour6"));
  $("#hour7 .taskDescription").val(localStorage.getItem("hour7"));
  $("#hour8 .taskDescription").val(localStorage.getItem("hour8"));
  $("#hour9 .taskDescription").val(localStorage.getItem("hour9"));
  $("#hour10 .taskDescription").val(localStorage.getItem("hour10"));
  $("#hour11 .taskDescription").val(localStorage.getItem("hour11"));
  $("#hour12 .taskDescription").val(localStorage.getItem("hour12"));
  $("#hour1 .taskDescription").val(localStorage.getItem("hour1"));
  $("#hour2 .taskDescription").val(localStorage.getItem("hour2"));
  $("#hour3 .taskDescription").val(localStorage.getItem("hour3"));
  $("#hour4 .taskDescription").val(localStorage.getItem("hour4"));


  // check to see if each hour is before, after, or equal to the current hour and style accordingly

  //update time interval
});
