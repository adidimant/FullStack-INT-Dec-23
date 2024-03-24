let time = 0;
let timerInterval = null;
const timerDisplay = document.getElementById('timer');

function updateTimer() {
  timerDisplay.textContent = time;
}

function resetTimer() {
  time = 0; // איפוס הטיימר
  updateTimer();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval); // אם הטיימר כבר פועל, אפס אותו
  timerInterval = setInterval(() => {
    time++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function showInactivityAlert() {
  alert("לא נרשמה תזוזה במשך 30 שניות!");
}

function resetInactivityTimeout() {
  clearTimeout(inactivityTimeout);
  resetTimer(); // איפוס הטיימר בכל פעם שהמשתמש מזיז את העכבר
  inactivityTimeout = setTimeout(() => {
    stopTimer();
    showInactivityAlert(); // הצגת התראה לאחר 30 שניות של אי תזוזה
  }, 30000); // 30 שניות של אי פעילות
}

let inactivityTimeout = setTimeout(() => {
  stopTimer();
  showInactivityAlert();
}, 30000);

document.addEventListener('mousemove', () => {
  resetInactivityTimeout();
});

document.addEventListener('keydown', () => {
  resetInactivityTimeout();
});

document.addEventListener('keyup', () => {
  resetInactivityTimeout();
});

// התחל את הטיימר מיד כשהדף נטען
startTimer();
