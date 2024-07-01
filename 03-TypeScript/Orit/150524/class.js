"use strict";
function magical(arr, obj) {
    for (let key in obj) {
        if (arr.includes(key)) {
            console.log(`${key} exists in the array`);
            return true;
        }
        else {
            return false;
        }
    }
}
function magical2(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            return true;
        }
    }
    return false;
}
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
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x1, y1) {
        const distX = this.x - x1;
        const distY = this.y - y1;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }
    calculateDistance2(x1, y1) {
        if (typeof x1 === 'object') {
        }
        const distX = this.x - x1;
        const distY = this.y - y1;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);
