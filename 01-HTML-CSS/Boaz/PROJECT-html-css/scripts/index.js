document.addEventListener('DOMContentLoaded', () => {
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

// Hide all images except the first one
images.forEach((img, index) => {
img.style.opacity = '0';
img.style.display = 'none';
if (index === 0) {
img.style.opacity = '1';
img.style.display = 'block';
}
});

setInterval(() => {
images[currentImageIndex].classList.remove('active'); // Remove the active class from the current image
images[currentImageIndex].style.opacity = '0';
images[currentImageIndex].style.display = 'none';
currentImageIndex = (currentImageIndex + 1) % totalImages;
images[currentImageIndex].style.opacity = '1';
images[currentImageIndex].style.display = 'block';
images[currentImageIndex].classList.add('active'); // Add the active class to the new current image

}, 3000); // Change every 3 seconds
});