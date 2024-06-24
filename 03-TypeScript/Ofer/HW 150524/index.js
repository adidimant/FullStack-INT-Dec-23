"use strict";
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
    getQuadrant() {
        if (this.y === 0)
            return 'onXAxis';
        else if (this.x === 0)
            return 'onYAxis';
        else if (this.x > 0 && this.y > 0)
            return 1;
        else if (this.x < 0 && this.y > 0)
            return 2;
        else if (this.x < 0 && this.y < 0)
            return 3;
        else if (this.x > 0 && this.y < 0)
            return 4;
        return 1;
    }
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
    //TODO - expand this function to be able to accept also a second point (receive p2: Point)
    calculateDistance(x, y) {
        if (y && typeof x == "number") {
            return Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
        }
        else if (x instanceof PT && !y) {
            return Math.sqrt((this.x - x.getX()) ** 2 + (this.y - x.getY()) ** 2);
        }
        else {
            console.error(`something went wrong, please pass (x,y) values or just point with type of PT`);
            return 0;
        }
    }
    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    calculateIncline(x, y) {
        if (y && typeof x == "number") {
            return (y - this.y) / (x - this.x);
        }
        else if (x instanceof PT && !y) {
            return (x.getY() - this.y) / (x.getX() - this.x);
        }
        else {
            console.error(`something went wrong, please pass (x,y) values or just point with type of PT`);
            return 0;
        }
    }
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    calculateMiddlePoint(x, y) {
        if (y && typeof x == "number") {
            return new PT((x + this.x) / 2, (y + this.y) / 2);
        }
        else if (x instanceof PT && !y) {
            return new PT((x.getX() + this.x) / 2, (x.getY() + this.y) / 2);
        }
        else {
            console.error(`something went wrong, please pass (x,y) values or just point with type of PT`);
            return 0;
        }
    }
}
const pt1 = new PT(4, 31);
const pt2 = new PT(456, 123);
console.log(pt1.calculateMiddlePoint(pt2));
