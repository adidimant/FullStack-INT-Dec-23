"use strict";
// =======================> HW06/05 <===========================  
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "RED";
    TrafficLight["ORANGE"] = "ORANGE";
    TrafficLight["GREEN"] = "GREEN";
    TrafficLight["RED_ORANGE"] = "RED-ORANGE";
})(TrafficLight || (TrafficLight = {}));
let currentLight = TrafficLight.RED;
const trafficLightElement = document.getElementById('traffic-light');
function changeLight() {
    switch (currentLight) {
        case TrafficLight.RED:
            currentLight = TrafficLight.RED_ORANGE;
            trafficLightElement.style.backgroundColor = 'darkorange';
            break;
        case TrafficLight.RED_ORANGE:
            currentLight = TrafficLight.GREEN;
            trafficLightElement.style.backgroundColor = 'green';
            break;
        case TrafficLight.GREEN:
            currentLight = TrafficLight.ORANGE;
            trafficLightElement.style.backgroundColor = 'orange';
            break;
        case TrafficLight.ORANGE:
            currentLight = TrafficLight.RED;
            trafficLightElement.style.backgroundColor = 'red';
            break;
    }
}
setInterval(changeLight, 5000);
changeLight();
// main class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//sub class
class Employee extends Person {
    constructor(id, name, postion) {
        super(id, name);
        this.postion = postion;
    }
}
const person1 = new Person(1, "Awni");
const emp = new Employee(10, "awni", "web Developer");
console.log(person1.register());
console.log(emp.id);
console.log(emp.name);
console.log(emp.register());
console.log(emp.postion);
////////////////////////////////////////////////////////////////////////////////////////
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // only Numbers
let strArray = getArray(["awni", "ali", "alla"]); // only String
// =======================> HW15/05 <===========================  
