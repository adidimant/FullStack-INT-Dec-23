"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "red";
    TrafficLight["ORANGE"] = "orange";
    TrafficLight["GREEN"] = "green";
    TrafficLight["RED_ORANGE"] = "red-orange";
})(TrafficLight || (TrafficLight = {}));
let currentLight = TrafficLight.RED; // מצב התחלה של הרמזור
function changeLight() {
    switch (currentLight) {
        case TrafficLight.RED:
            currentLight = TrafficLight.GREEN;
            break;
        case TrafficLight.GREEN:
            currentLight = TrafficLight.ORANGE;
            break;
        case TrafficLight.ORANGE:
            currentLight = TrafficLight.RED_ORANGE;
            break;
        case TrafficLight.RED_ORANGE:
            currentLight = TrafficLight.RED;
            break;
    }
    updateLight();
}
function updateLight() {
    const lightElement = document.getElementById("traffic-light");
    if (lightElement) {
        lightElement.style.backgroundColor = currentLight;
    }
}
updateLight();
// שינוי הצבע כל 5 שניות
setInterval(changeLight, 5000);
