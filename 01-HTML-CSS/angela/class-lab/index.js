document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.displayResult');
    const buttons = document.querySelectorAll('.numbers');
    let expression = '';

    function updateDisplay() {
        display.textContent = expression;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;
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