
$(document).ready(function () {
  // Displays current date at the top of the application
  var now = moment().format("dddd, MMMM Do");
  $("#currentDay").text(now);

  // create save button
  $(".saveBtn").on("click", function () {
    console.log(this);
    var currentHour = $(this).parent().attr("id");
    console.log(currentHour);
    var currentText = $(this).siblings(".description").val();
    console.log(currentText);

    localStorage.setItem(currentHour, currentText);
  });

  // load local storage data into each hour

  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));

  // check to see if each hour is before, after, or equal to the current hour and style accordingly

  function testHour() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      var thisHourBlock = parseInt($(this).attr("id").split("hour")[1]);
      if (thisHourBlock < 5) {
        thisHourBlock += 12;
      }
      console.log(
        currentHour,
        thisHourBlock,
        typeof currentHour,
        typeof thisHourBlock
      );
      console.log(currentHour, thisHourBlock);
      if (currentHour > thisHourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (currentHour < thisHourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else if (currentHour == thisHourBlock) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    });
  }
  //update time interval
  testHour();
});
