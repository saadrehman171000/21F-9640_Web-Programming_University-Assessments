$(document).ready(function() {
    $("#view-time-btn").click(function() {
      $("#welcome-screen").fadeOut(500); // Fade out the welcome screen
      $("#clock-screen").fadeIn(1000); // Fade in the clock screen
  
      updateTime(); // Update the time immediately
      setInterval(updateTime, 1000); // Update the time every second
    });
  
    function updateTime() {
      var now = new Date();
      var hours = formatTime(now.getHours());
      var minutes = formatTime(now.getMinutes());
      var seconds = formatTime(now.getSeconds());
  
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  });
  