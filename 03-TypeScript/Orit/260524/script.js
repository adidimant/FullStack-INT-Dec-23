"use strict";
function ex1(T, K) {
    if (typeof T == "object" && T !== null) {
        return T;
    }
    return K;
}
function ex2(arg1, arg2) {
    //extends object: we can do this to make sure the type is n object
    if (typeof arg1 == "object" && typeof arg2 == "object") {
        return Object.assign(Object.assign({}, arg1), arg2);
    }
    throw new Error("Both T and K need to be objects.");
}
function ex3(arg1, duplicateNumber) {
    const TArray = [];
    for (let i = 0; i < duplicateNumber; i++) {
        TArray.push(arg1);
    }
    return TArray;
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
/*HW 260524:
1) implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
2) implement a function that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed
4) Consider the following interface:
interface MachineInterface {
  turnOn: () => void;
  turnOff: () => void;
  reportTo: string;
  warnLevel: 0 | 1 | 2 | 3;
  owner: string;
}
Implement this interface in any machine that we have created (lesson 5-6 ts file)
5) Understand the recursive solution we have implemented in class - calculateObjDeep
*/
