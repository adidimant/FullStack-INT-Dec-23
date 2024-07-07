/**
 HW 08/05/24:
Define the enum TrafficLight, values: RED, ORANGE, GREEN, RED-ORANGE
Create a (very) simple html page (with js) that presents a circle with the current light
Every 5 seconds the light should change in the traffic-light
You should use the enum in order to get the possible light values for the traffic light

 */

enum TrafficLight {
  RED = "red",
  ORANGE = "orange",
  GREEN = "green",
  RED_ORANGE = "rgb(255,106,0)",
}

function createHTML(): void {
  document.body.innerHTML = `
    <div id="traffic-light" >
    <div id="top" style="background-color: red;"></div>
    <div id="mid"></div>
    <div id="bottom"></div>
    </div>
    `;
}
document.addEventListener("DOMContentLoaded", createHTML);

let topLight: boolean = true;
let midLight: boolean = false;
let bottomLight: boolean = false;
let beforeRedLight: boolean = false;

function changeLights(): void {
  setInterval((): void => {
    const top: HTMLElement = document.getElementById("top") as HTMLElement;
    const mid: HTMLElement = document.getElementById("mid") as HTMLElement;
    const bottom: HTMLElement = document.getElementById("bottom") as HTMLElement;
    const trafficLight: HTMLElement[] = [top, mid, bottom];
    trafficLight.forEach((light): void => {
      light.style.backgroundColor = "transparent";
    });
    if (topLight) {
      mid.style.backgroundColor = TrafficLight.ORANGE;
      topLight = false;
      midLight = true;
    } else if (midLight) {
      bottom.style.backgroundColor = TrafficLight.GREEN;
      midLight = false;
      bottomLight = true;
    } else if (bottomLight) {
      mid.style.backgroundColor = TrafficLight.RED_ORANGE;
      bottomLight = false;
      beforeRedLight = true;
    } else if (beforeRedLight) {
      top.style.backgroundColor = TrafficLight.RED;
      beforeRedLight = false;
      topLight = true;
    }
  }, 5000);
}
changeLights();
