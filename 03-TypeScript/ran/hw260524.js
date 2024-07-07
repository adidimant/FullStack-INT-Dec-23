"use strict";
function handleGenerics(value, alternative) {
    return (typeof value === 'object' && value !== null) ? value : alternative;
}
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function duplicate(item, duplicateCount) {
    return new Array(duplicateCount).fill(item);
}
class Machine {
    constructor(reportTo, warnLevel, owner) {
        this.reportTo = reportTo;
        this.warnLevel = warnLevel;
        this.owner = owner;
    }
    turnOn() {
        console.log('Machine is now ON');
    }
    turnOff() {
        console.log('Machine is now OFF');
    }
}
const myMachine = new Machine('Admin', 2, 'John Doe');
myMachine.turnOn();
myMachine.turnOff();
function calculateObjDeep(obj) {
    let depth = 1;
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const currentDepth = calculateObjDeep(obj[key]) + 1;
            if (currentDepth > depth) {
                depth = currentDepth;
            }
        }
    }
    return depth;
}
const exampleObj = {
    level1: {
        level2: {
            level3: {
                level4: {}
            }
        }
    }
};
console.log(calculateObjDeep(exampleObj)); // Output: 4
