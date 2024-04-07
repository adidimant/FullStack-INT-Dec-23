let timer;
let isHere = true;
let counter = 0;
const user = document.querySelector(".user");
const seconds = document.querySelector(".seconds");

function startTimer() {
  if (!isHere) {
    return;
  }
  counter++;
  seconds.textContent = `${counter} seconds`;
}

function stopTimer() {
  isHere = false;
  user.textContent = "User is not here!";
}

function updateUser() {
  isHere = true;
  user.textContent = "User is here!";
  clearTimeout(timer);
  timer = setTimeout(stopTimer, 30000);
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(startTimer, 1000);
});

document.addEventListener("mousemove", () => {
  updateUser();
});

document.addEventListener("keydown", () => {
  updateUser();
});