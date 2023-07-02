// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  // Time variables
  var todaysDate = dayjs().format("dddd, MMMM D");
  var currentTime = dayjs().hour();
  // Dom traversal variables
  var rootEL = $("#root");
  var currentTimeEL = $("#currentDay");

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
    dayjs().hour(21),
  ];


  
// Getting and setting local storage items
$("hour-9 .description").val(localStorage.getItem("hour9"));;

$('.saveBtn').on("click", function (event) {
  event.preventDefault();
  
  localStorage.setItem("hour9", hour9);

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
     $(rootEL).children(0).eq(i).addClass("past")
    } else if (arrayTime > currentTime) {
      $(rootEL).children(0).eq(i).addClass("future")
    } else {
      $(rootEL).children(0).eq(i).addClass("present")
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 
  // var saveButtonClicked = saveButtonEL.on("click", function () {
  //   console.log("save button clicked");
  // });





});
