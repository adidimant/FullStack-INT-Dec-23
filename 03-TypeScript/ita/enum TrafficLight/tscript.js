var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "red";
    TrafficLight["ORANGE"] = "orange";
    TrafficLight["GREEN"] = "green";
    TrafficLight["RED_ORANGE"] = "red-orange";
})(TrafficLight || (TrafficLight = {}));
var currentLight = TrafficLight.RED; // Initial state
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
    var lightElement = document.getElementById("traffic-light");
    if (lightElement) {
        lightElement.style.backgroundColor = currentLight;
    }
}
// Initial update
updateLight();
// Change light every 5 seconds
setInterval(changeLight, 5000);
