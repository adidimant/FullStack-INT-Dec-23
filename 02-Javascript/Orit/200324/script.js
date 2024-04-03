function efesKodem(num) {
    if (num > 9) {
      return num;
    } else {
      return '0' + num;
    }
  }
  let sec = 0;
  sec = parseInt(sec);
  let seconds = document.getElementById('seconds');
  let minutes = document.getElementById('minutes');
  let hours = document.getElementById('hours');
  let timer;
  function startTimer() {
    timer = setInterval(function () {
      sec ++;
      document.getElementById('seconds').innerText = efesKodem(sec%60);
      document.getElementById('minutes').innerText = efesKodem(Math.floor(sec/60));
      document.getElementById('hours').innerText = efesKodem(Math.floor(sec/60/60));
    }, 1000);
  }
  
  
  document.addEventListener("load", startTimer());
  document.getElementById('pauseButton').addEventListener('click', function() {
      clearInterval(timer);
      //console.log(sec + ' Interval paused.');
  });
  
  document.getElementById('resumeButton').addEventListener('click', function() {
      startTimer();
      //console.log(sec + ' Interval resumed.');
  });