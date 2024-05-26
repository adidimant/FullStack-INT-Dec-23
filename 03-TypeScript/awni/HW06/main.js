// =======================> HW06/05 <===========================  
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "RED";
    TrafficLight["ORANGE"] = "ORANGE";
    TrafficLight["GREEN"] = "GREEN";
    TrafficLight["RED_ORANGE"] = "RED-ORANGE";
})(TrafficLight || (TrafficLight = {}));
var currentLight = TrafficLight.RED;
var trafficLightElement = document.getElementById('traffic-light');
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
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
//sub class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, postion) {
        var _this = _super.call(this, id, name) || this;
        _this.postion = postion;
        return _this;
    }
    return Employee;
}(Person));
var person1 = new Person(1, "Awni");
var emp = new Employee(10, "awni", "web Developer");
console.log(person1.register());
console.log(emp.id);
console.log(emp.name);
console.log(emp.register());
console.log(emp.postion);
////////////////////////////////////////////////////////////////////////////////////////
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]); // only Numbers
var strArray = getArray(["awni", "ali", "alla"]); // only String
// =======================> HW15/05 <===========================  
