"use strict";
//Q1
function twoGenericsReturnTOrK(checkObj) {
    if (typeof checkObj == "object")
        return `T`;
    else
        return "K";
}
console.log(twoGenericsReturnTOrK(234));
//Q2
function combineTwoObj(obj1, obj2) {
    if (typeof obj1 == "object" && typeof obj2 == "object") {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    else
        return null;
}
console.log(combineTwoObj({ key1: "asd" }, { obj2: 2435 }));
//Q3
function duplicateFirstParam(gen, num) {
    const arrayToReturn = [];
    for (let i = 0; i < num; i++) {
        arrayToReturn.push(gen);
    }
    return arrayToReturn;
}
console.log(duplicateFirstParam({ key: `value` }, 20));
class Machine {
    constructor(reportTo, warnLevel, owner, id, type) {
        this.reportTo = reportTo;
        this.owner = owner;
        this.warnLevel = warnLevel;
        this.id = id;
        this.type = type !== null && type !== void 0 ? type : `not Specified`;
    }
    turnOn() {
        console.log("machine id: " + this.id + " turned-on");
    }
    turnOff() {
        console.log("machine id: " + this.id + " turned-off");
    }
}
const newMachine = new Machine("Ofer Ben Ami", 2, "adsa", "1313113456");
console.log(newMachine.turnOn());
// function calculateObjDeepRecursive<T>(obj: T): number {
// 	if (typeof obj == "object") {
// 		const values = Object.values(obj as object);
// 		return 1 + Math.max(...values.map((value) => calculateObjDeepRecursive(value)));
// 	}
// 	return 0;
// }
// function calculateObjDeep<T>(obj:T):number{
//   if(typeof obj == "object"){
//     console.log(Object.values(obj as object).map((value) => calculateObjDeep(value)))
//   }
//   return 0
// }
const obj = {
    key1: `234`,
    key2: {
        key3: {
            key4: {
                key: {
                    lama: '1',
                },
                kama: 1,
            }
        },
        key11: `asdd`
    }
};
// calculateObjDeep(obj)
