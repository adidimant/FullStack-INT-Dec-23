"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var display = document.querySelector('.displayResult');
  var buttons = document.querySelectorAll('.numbers');
  var expression = '';

  function updateDisplay() {
    display.textContent = expression;
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var value = button.textContent;

      if (value === '=') {
        try {
          expression = eval(expression).toString();
        } catch (error) {
          expression = 'Error';
        }
      } else {
        expression += value;
      }

      updateDisplay();
    });
  });

  function clear() {
    expression = '';
    updateDisplay();
  }

  clear();
});