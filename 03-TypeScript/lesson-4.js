"use strict";
// define a function 'magical' - that accepts tow parameters: 1) an array that contains number or string, 2) object that the values are only boolean. the function returns a boolean
function magical(array, obj) {
    // less good solution - create an extra array contains all the obj keys, then iterate keys and if one of them (at least) is in the array - return true
    // const keys = Object.keys(obj);
    // return keys.some((key) => array.includes(key));
    // better solution - just iterate once over the given array, and check for each item if it's in the obj (keys) by using "in" keywords
    for (let i = 0; i < array.length; i++) {
        // if obj includes array[i]
        if (array[i] in obj) {
            return true;
        }
    }
    return false;
}
function magicalV2(array, obj) {
    // do the same up here
    return true;
}
const Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
const arr = ["450", 400, 340, "1"];
arr[1].charAt(1);
function getNumbersArr(arr) {
    console.log(arr);
}
const obj1 = {};
obj1.firstName = 'Awni';
obj1.lastName = 'Joid';
obj1["^f45g45g"] = true;
var E;
(function (E) {
    E[E["C"] = 0] = "C";
    E[E["A"] = (() => 5)()] = "A";
    E[E["B"] = 3] = "B";
})(E || (E = {}));
var E2;
(function (E2) {
    E2[E2["Foo"] = 0] = "Foo";
    E2[E2["Bar"] = 1] = "Bar";
    E2[E2["Graph"] = 2] = "Graph";
    E2[E2["Buu"] = 3] = "Buu";
})(E2 || (E2 = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
// Class - a factory for an objects with the same structure, that has fields, functions
// PT = Point
class PT {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.biggerValue = x > y ? x : y;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    //TODO - the function returns the quadrant (רביע) of the current point
    /**
     * @returns Quadrant in case the point in some quadrant, if no point data or the point in the center of the axes - returns null
     */
    getQuadrant() {
        if (this.x > 0 && this.y > 0) {
            return Quadrant.I;
        }
        else if (this.x < 0 && this.y > 0) {
            return Quadrant.II;
        }
        else if (this.x < 0 && this.y < 0) {
            return Quadrant.III;
        }
        else if (this.x > 0 && this.y < 0) {
            return Quadrant.IV;
        }
        return null;
    }
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
    //TODO - expand this function to be able to accept also a second point (receive p2: Point)
    calculateDistance(x, y) {
        const distX = x - this.x;
        const distY = y - this.y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }
    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    calculateIncline() {
    }
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    calculateMiddlePoint(xOrPT, y) {
        if (xOrPT instanceof PT) {
            return new PT((xOrPT.getX() + this.x) / 2, (xOrPT.getY() + this.y) / 2);
        }
        else {
            if (y === undefined) {
                throw new Error('Second coordinate (y) is required when using numbers.');
            }
            return new PT((xOrPT + this.x) / 2, (y + this.y) / 2);
        }
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);
