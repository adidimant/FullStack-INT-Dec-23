"use strict";
//1
//implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
function objOrNot(value, fallback) {
    if (typeof value == "object" && value != null)
        return value;
    return fallback;
}
;
//2
//implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
function connectingObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
;
//or
function connectingObjects2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
;
//3
//Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed
function doubleNumber(value, count) {
    return Array(count).fill(value);
}
;
class Machine {
    constructor(id, field2, reportTo, warnLevel, owner) {
        this.id = id;
        this.field2 = 8;
        this.reportTo = reportTo;
        this.warnLevel = warnLevel;
        this.owner = owner;
    }
    turnOn() {
        console.log("machine id: " + this.id + "turned-on");
    }
    turnOff() {
        console.log("machine id: " + this.id + "turned-off");
    }
}
;
