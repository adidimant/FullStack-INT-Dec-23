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
    document.body.innerHTML = "\n    <div id=\"traffic-light\" >\n    <div id=\"top\" style=\"background-color: red;\"></div>\n    <div id=\"mid\"></div>\n    <div id=\"bottom\"></div>\n    </div>\n    ";
}
document.addEventListener("DOMContentLoaded", createHTML);
var topLight = true;
var midLight = false;
var bottomLight = false;
var beforeRedLight = false;
function changeLights() {
    setInterval(function () {
        var top = document.getElementById("top");
        var mid = document.getElementById("mid");
        var bottom = document.getElementById("bottom");
        var trafficLight = [top, mid, bottom];
        trafficLight.forEach(function (light) {
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
