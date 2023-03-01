var countDown = setInterval(function() {
    var timer = document.getElementById("timer");
    var seconds = parseInt(timer.textContent);
    seconds--;
    timer.textContent = seconds;
    if (seconds == 0) {
      clearInterval(countDown);
      alert("Time's up!");
    }
  }, 1000);
  