let currentImg = 1;
let intervalId;

function showImg(n) {
  const images = document.querySelectorAll(".carousel-img");
  if (n > images.length) {
    currentImg = 1;
  } else if (n < 1) {
    currentImg = images.length;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  images[currentImg - 1].classList.add("active");
}

function changeImg(n) {
  clearInterval(intervalId);
  showImg((currentImg += n));
  startAutoChange();
}

function startAutoChange() {
  intervalId = setInterval(() => {
    changeImg(1);
  }, 5000);
}

startAutoChange();
