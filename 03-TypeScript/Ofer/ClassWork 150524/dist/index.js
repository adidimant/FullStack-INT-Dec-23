"use strict";
console.log(`test`);
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
    calculateDistance(x, y) {
        const d = Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2));
        console.log(d);
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);
p1.calculateDistance(p2.getX(), p2.getY());
