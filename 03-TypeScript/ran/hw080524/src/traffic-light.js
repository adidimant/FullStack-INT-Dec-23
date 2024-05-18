"use strict";
// הגדרת enum של TrafficLight
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "red";
    TrafficLight["ORANGE"] = "orange";
    TrafficLight["GREEN"] = "green";
    TrafficLight["RED_ORANGE"] = "red-orange";
})(TrafficLight || (TrafficLight = {}));
// רשימת האורות בסדר הרצוי
const lightSequence = [TrafficLight.RED, TrafficLight.RED_ORANGE, TrafficLight.GREEN, TrafficLight.ORANGE];
let currentLightIndex = 0;
function changeLight() {
    const trafficLightElement = document.getElementById('traffic-light');
    if (!trafficLightElement)
        return;
    const currentLight = lightSequence[currentLightIndex];
    switch (currentLight) {
        case TrafficLight.RED:
            trafficLightElement.style.backgroundColor = 'red';
            break;
        case TrafficLight.ORANGE:
            trafficLightElement.style.backgroundColor = 'orange';
            break;
        case TrafficLight.GREEN:
            trafficLightElement.style.backgroundColor = 'green';
            break;
        case TrafficLight.RED_ORANGE:
            trafficLightElement.style.backgroundColor = 'red';
            // יוצרים הבהוב עם אדום וכתום
            setTimeout(() => {
                trafficLightElement.style.backgroundColor = 'orange';
            }, 2500);
            break;
    }
    currentLightIndex = (currentLightIndex + 1) % lightSequence.length;
}
// שינוי האור כל 5 שניות
setInterval(changeLight, 5000);
// התחלת הרמזור
changeLight();
