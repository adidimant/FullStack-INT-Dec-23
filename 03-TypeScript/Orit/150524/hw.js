"use strict";
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
    getQuadrant() {
        if (this.x > 0) {
            if (this.y > 0) {
                return "The quadrant is Q1";
            }
            else if (this.y < 0) {
                return "The quadrant is Q4";
            }
            else {
                return "The point lies between Q1 and Q4";
            }
        }
        else if (this.x < 0) {
            if (this.y > 0) {
                return "The quadrant is Q2";
            }
            else if (this.y < 0) {
                return "The quadrant is Q3";
            }
            else {
                return "The point lies between Q2 and Q3";
            }
        }
        else if (this.y != 0) { //because right now this.x is obviously 0...
            if (this.y > 0) {
                return "The point lies between Q1 and Q2";
            }
            else if (this.y < 0) {
                return "The point lies between Q3 and Q4";
            }
        }
        return "The point is at the center of the axes";
    }
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    calculateDistance(x, y) {
        const distX = x - this.x;
        const distY = y - this.y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        return distance;
    }
    //TODO - expand this function to be able to accept also a second point (receive p2: Point)
    calculateDistancev2(x1, y1) {
        let distX;
        let distY;
        if (x1 instanceof PT) {
            distX = x1.getX() - this.x;
            distY = x1.getY() - this.y;
        }
        else if (typeof x1 === 'number' && typeof y1 === 'number') {
            distX = x1 - this.x;
            distY = y1 - this.y;
        }
        else {
            throw new Error('Invalid arguments provided');
        }
        return Math.sqrt(distX * distX + distY * distY);
    }
    //TODO the function should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    calculateIncline(x1, y1) {
        let distX;
        let distY;
        if (x1 instanceof PT) {
            distX = x1.getX() - this.x;
            distY = x1.getY() - this.y;
        }
        else if (typeof x1 === 'number' && typeof y1 === 'number') {
            distX = x1 - this.x;
            distY = y1 - this.y;
        }
        else {
            throw new Error('Invalid arguments provided');
        }
        if (distX == 0) {
            return Infinity; // The function returns a number, so can't return string. I found this is a special "number".
        }
        return distY / distX;
    }
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    calculateMiddlePoint(x, y) {
        const x1 = this.x;
        const y1 = this.y;
        let x2;
        let y2;
        if (x instanceof PT) {
            x2 = x.getX();
            y2 = x.getY();
        }
        else if (typeof x === 'number' && y && typeof y === 'number') {
            x2 = x;
            y2 = y;
        }
        else {
            throw new Error('Invalid arguments provided');
        }
        const x3 = (x1 + x2) / 2;
        const y3 = (y1 + y2) / 2;
        return new PT(x3, y3);
    }
}
// instances (מופעים) of the clas PT
const p1 = new PT(8, 4);
const p2 = new PT(50, 70);
