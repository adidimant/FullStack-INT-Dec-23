document.addEventListener("DOMContentLoaded", function() {
    // משתנים לטיימר
    var startTime, endTime, elapsedTime;
    var timerInterval;
    var timerElement = document.getElementById("timer");
    var timerRunning = false;

    // התחלת הטיימר
    function startTimer() {
        startTime = new Date();
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }

    // עצירת הטיימר
    function stopTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
    }

    // עדכון התצוגה של הטיימר
    function updateTimer() {
        endTime = new Date();
        elapsedTime = Math.floor((endTime - startTime) / 1000);
        var hours = Math.floor(elapsedTime / 3600);
        var minutes = Math.floor((elapsedTime % 3600) / 60);
        var seconds = elapsedTime % 60;
        timerElement.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    }

    // הוספת אפס בראש המספר אם המספר פחות מ־10
    function pad(number) {
        return (number < 10 ? "0" : "") + number;
    }

    // מאזין לתנועת העכבר
    document.addEventListener("mousemove", function() {
        if (!timerRunning) {
            startTimer();
        }
        else {
            clearInterval(timerInterval);
            startTimer();
        }
    });

    // מאזין להקלדת מקלדת
    document.addEventListener("keydown", function() {
        if (!timerRunning) {
            startTimer();
        }
        else {
            clearInterval(timerInterval);
            startTimer();
        }
    });

    // מאזין לכשהמשתמש לא מזיז את העכבר
    var idleTime = 0;
    var idleInterval = setInterval(timerIncrement, 1000); // כל שנייה

    function timerIncrement() {
        idleTime++;
        if (idleTime >= 30) { // 30 שניות
            stopTimer();
            clearInterval(idleInterval);
        }
    }

});