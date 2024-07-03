"use strict";
// HW 260524:
// 1) implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
function twoGenerics(a, b) {
    if (typeof a == "object") {
        return a;
    }
    return b;
}
// 2) implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
function mixedGenericsObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// 3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed
function arrayTWithDuplicateNumber(arg, duplicateNumber) {
    return new Array(duplicateNumber).fill(arg);
}
class Machine {
    constructor(id, reportTo, warnLevel, owner) {
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
class PrinterMachine extends Machine {
    constructor(id, reportTo, warnLevel, owner) {
        super(id, reportTo, warnLevel, owner);
    }
    createTestPrint() {
        console.log("creating a test print for machine - " + this.id);
    }
}
class LaserCutMachine extends Machine {
    constructor(id, reportTo, warnLevel, owner) {
        super(id, reportTo, warnLevel, owner);
    }
}
// 5) Understand the recursive solution we have implemented in class - calculateObjDeep
function myLogger(param1, param2, param3) {
    console.log('param1 is: ', param1);
    console.log('param2 is: ', param2);
    console.log('param3 is: ', param3);
}
myLogger("ita", "raskin", 58);
