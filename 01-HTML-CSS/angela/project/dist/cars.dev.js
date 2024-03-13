"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.info-container-item');
  var windowHeight = window.innerHeight;

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0 && !element.classList.contains('slide-in')) {
        element.classList.add('slide-in');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
  checkPosition();
});

function closepreloader() {
  document.getElementById("preloader").style.display = 'none';
}

window.addEventListener("load", function () {
  setTimeout(closepreloader, 3000);
});
closepreloader();