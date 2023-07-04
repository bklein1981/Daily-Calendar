$(function () {
  // Time variables
  var todaysDate = dayjs().format("dddd, MMMM D");
  var currentTime = dayjs().hour();
  // Dom traversal variables
  var rootEL = $("#root");
  var currentTimeEL = $("#currentDay");
  var hour9El = document.getElementById("hour-9");
  console.log(hour9El.getAttribute("id"));
  //Array of time blocks
  var timeArray = [
    dayjs().hour(9),
    dayjs().hour(10),
    dayjs().hour(11),
    dayjs().hour(12),
    dayjs().hour(13),
    dayjs().hour(14),
    dayjs().hour(15),
    dayjs().hour(16),
    dayjs().hour(17),
  ];

  //Event listener for the save button.
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var userInput = $(this).parents().children().eq(1).val();
    //localStorage.setItem( );
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, userInput);
  });

  //load from local storage
  $(".time-block").each(function () {
    var key = $(this).attr("id");
    var savedInput = localStorage.getItem(key);
    $(this).children().eq(1).val(savedInput);
  });

  //Sets current date to Calendar header.
  currentTimeEL.text(todaysDate);

  //Sets the time blocks in the DOM.
  for (var i = 0; i < timeArray.length; i++) {
    $(rootEL).children().eq(i).children().eq(0).text(timeArray[i].format("hA"));
  }

  //Adjusts the calendar's class to reflect whether past, present, or future.
  for (var i = 0; i < timeArray.length; i++) {
    var arrayTime = dayjs(timeArray[i]).format("HH");
    if (arrayTime < currentTime) {
      $(rootEL).children(0).eq(i).addClass("past");
    } else if (arrayTime > currentTime) {
      $(rootEL).children(0).eq(i).addClass("future");
    } else {
      $(rootEL).children(0).eq(i).addClass("present");
    }
  }
});
