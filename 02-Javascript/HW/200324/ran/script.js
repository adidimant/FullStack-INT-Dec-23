let time = 0;
let timerInterval = null;
const timerDisplay = document.getElementById('timer');

function updateTimer() {
  timerDisplay.textContent = time;
}

function startTimer() {
  if (timerInterval) return; 
  timerInterval = setInterval(() => {
    time++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetInactivityTimeout() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    stopTimer();
  }, 30000); 
}

let inactivityTimeout = setTimeout(() => {
  stopTimer();
}, 30000);

document.addEventListener('mousemove', () => {
  if (!timerInterval) startTimer();
  resetInactivityTimeout();
});

document.addEventListener('keydown', () => {
  if (!timerInterval) startTimer();
  resetInactivityTimeout();
});

document.addEventListener('keyup', () => {
  if (!timerInterval) startTimer();
  resetInactivityTimeout();
});


startTimer();
