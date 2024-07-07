"use strict";
// implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
function f1(obj, val) {
    if (typeof obj === 'object') {
        return obj;
    }
    return val;
}
//implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them 
//(connect them together to one object) - be accurate with TS
function f2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
//Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, 
//with the length of the duplicate number needed
function f3(arg, duplicate) {
    return new Array(duplicate).fill(arg);
}
//Implement this interface in any machine that we have created (lesson 5-6 ts file)
class Machine {
    constructor(id) {
        this.id = id;
        this.field2 = 8;
    }
    turnOn() {
        console.log("machine id: " + this.id + "turned-on");
    }
    turnOff() {
        console.log("machine id: " + this.id + "turned-off");
    }
}
class PrinterMachine extends Machine {
    constructor(id) {
        super(id);
    }
    createTestPrint() {
        console.log("creating a test print for machine - " + this.id);
    }
}
class LaserCutMachine extends Machine {
    constructor(id) {
        super(id);
    }
}
