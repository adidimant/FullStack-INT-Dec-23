"use strict";
/**
 HW 08/05/24:
Define the enum TrafficLight, values: RED, ORANGE, GREEN, RED-ORANGE
Create a (very) simple html page (with js) that presents a circle with the current light
Every 5 seconds the light should change in the traffic-light
You should use the enum in order to get the possible light values for the traffic light

 */
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "red";
    TrafficLight["ORANGE"] = "orange";
    TrafficLight["GREEN"] = "green";
    TrafficLight["RED_ORANGE"] = "rgb(255,106,0)";
})(TrafficLight || (TrafficLight = {}));
function createHTML() {
    document.body.innerHTML = `
    <div id="traffic-light" >
    <div id="top" style="background-color: red;"></div>
    <div id="mid"></div>
    <div id="bottom"></div>
    </div>
    `;
}
document.addEventListener("DOMContentLoaded", createHTML);
let topLight = true;
let midLight = false;
let bottomLight = false;
let beforeRedLight = false;
function changeLights() {
    setInterval(() => {
        const top = document.getElementById("top");
        const mid = document.getElementById("mid");
        const bottom = document.getElementById("bottom");
        const trafficLight = [top, mid, bottom];
        trafficLight.forEach((light) => {
            light.style.backgroundColor = "transparent";
        });
        if (topLight) {
            mid.style.backgroundColor = TrafficLight.ORANGE;
            topLight = false;
            midLight = true;
        }
        else if (midLight) {
            bottom.style.backgroundColor = TrafficLight.GREEN;
            midLight = false;
            bottomLight = true;
        }
        else if (bottomLight) {
            mid.style.backgroundColor = TrafficLight.RED_ORANGE;
            bottomLight = false;
            beforeRedLight = true;
        }
        else if (beforeRedLight) {
            top.style.backgroundColor = TrafficLight.RED;
            beforeRedLight = false;
            topLight = true;
        }
    }, 5000);
}
changeLights();
