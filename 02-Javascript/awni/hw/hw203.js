document.addEventListener('DOMContentLoaded', (event) => {
    let timeoutId;
    let activityTimer = 0;
    const activityThreshold = 30; 
    let timerStoppedDueToInactivity = false;

    // Update the timer display
    function updateDisplay() {
        if(activityTimer >= activityThreshold) {
            document.getElementById('timer').textContent = `Timer: ${activityTimer} seconds - User is not here`;
        } else {
            document.getElementById('timer').textContent = `Timer: ${activityTimer} seconds - User is here`;
        }
    }

    // Reset the activity timer
    function resetActivityTimer() {
        activityTimer = 0;
        timerStoppedDueToInactivity = false;
        updateDisplay();
    }

    // Start or continue the timer
    function startTimer() {
        clearTimeout(timeoutId); 

        function incrementTimer() {
            if (!timerStoppedDueToInactivity) {
                activityTimer++;
                updateDisplay();
            }

            if (activityTimer >= activityThreshold) {
                clearTimeout(timeoutId);
                console.log('Timer stopped due to inactivity.');
                timerStoppedDueToInactivity = true;
            } else {
                timeoutId = setTimeout(incrementTimer, 1000);
            }
        }

        if (timerStoppedDueToInactivity) {
            resetActivityTimer();
        }

        timeoutId = setTimeout(incrementTimer, 1000);
    }

    // Reset and start the timer on mouse movement, key press, or scroll
    function onActivity() {
        if (timerStoppedDueToInactivity) {
            console.log('Activity detected, timer restarting...');
        }
        resetActivityTimer();
        startTimer();
    }

    document.addEventListener('mousemove', onActivity);
    document.addEventListener('keydown', onActivity);
    document.addEventListener('keyup', onActivity);
    window.addEventListener('scroll', onActivity); 

    updateDisplay(); 
});
