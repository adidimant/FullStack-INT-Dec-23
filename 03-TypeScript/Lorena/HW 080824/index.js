"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "red";
    TrafficLight["RED_ORANGE"] = "rgb(223, 127, 18)";
    TrafficLight["GREEN"] = "green";
    TrafficLight["ORANGE"] = "orange";
    TrafficLight["GREY"] = "rgb(104, 103, 103)";
})(TrafficLight || (TrafficLight = {}));
const redLight = document.querySelector(".redLight");
const orangeLight = document.querySelector(".orangeLight");
const greenLight = document.querySelector(".greenLight");
let redLightOn = false;
let redOrangelightOn = false;
let orangeLightOn = false;
let greenLightOn = false;
redLight.style.backgroundColor = TrafficLight.RED;
redLightOn = true;
setInterval(() => {
    if (redLightOn) {
        orangeLight.style.backgroundColor = TrafficLight.RED_ORANGE;
        redOrangelightOn = true;
        redLightOn = false;
    }
    else if (redOrangelightOn) {
        orangeLight.style.backgroundColor = TrafficLight.GREY;
        redLight.style.backgroundColor = TrafficLight.GREY;
        greenLight.style.backgroundColor = TrafficLight.GREEN;
        redOrangelightOn = false;
        greenLightOn = true;
    }
    else if (greenLightOn) {
        greenLight.style.backgroundColor = TrafficLight.GREY;
        orangeLight.style.backgroundColor = TrafficLight.ORANGE;
        greenLightOn = false;
        orangeLightOn = true;
    }
    else if (orangeLightOn) {
        orangeLight.style.backgroundColor = TrafficLight.GREY;
        redLight.style.backgroundColor = TrafficLight.RED;
        orangeLightOn = false;
        redLightOn = true;
    }
}, 3000);
