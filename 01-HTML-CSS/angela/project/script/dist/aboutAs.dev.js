"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.infoItem');
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