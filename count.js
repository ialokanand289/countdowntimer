var timeInSecs, countdown;

function startTimer() {
  // Get the user input from the timer input field
  var input = document.getElementById("timer").value;

  // Convert the user input to seconds
  var timeArr = input.split(":");
  timeInSecs = (+timeArr[0]) * 60 * 60 + (+timeArr[1]) * 60 + (+timeArr[2]);

  // Update the countdown every second
  countdown = setInterval(function() {
    // Calculate the hours, minutes and seconds remaining
    var hours = Math.floor(timeInSecs / (60 * 60));
    var minutes = Math.floor((timeInSecs % (60 * 60)) / 60);
    var seconds = timeInSecs % 60;

    // Display the countdown
    document.getElementById("countdown").innerHTML = hours.toString().padStart(2, '0') + ":" +
      minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

    // Decrement the timeInSecs by 1 second
    timeInSecs--;

    // If the countdown is finished, display a message and clear the interval
    if (timeInSecs < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Time's up!";
    }
  }, 1000);
}
