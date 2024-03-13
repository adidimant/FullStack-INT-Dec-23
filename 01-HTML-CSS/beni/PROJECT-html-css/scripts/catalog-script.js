const carContainer = document.querySelectorAll(".car-container");
let delay = 0;

carContainer.forEach((container) => {
  container.style.animationDelay = `${delay}s`;
  container.style.webkitAnimationDelay = `${delay}s`;
  delay += 0.04;
});
