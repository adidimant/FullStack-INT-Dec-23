var PT = /** @class */ (function () {
    function PT(x, y) {
        this.x = x;
        this.y = y;
        this.biggerValue = x > y ? x : y;
    }
    PT.prototype.getX = function () {
        return this.x;
    };
    PT.prototype.setX = function (x) {
        this.x = x;
    };
    PT.prototype.getY = function () {
        return this.y;
    };
    PT.prototype.setY = function (y) {
        this.y = y;
    };
    //TODO - the function returns the quadrant (רביע) of the current point
    PT.prototype.getQuadrant = function () {
        var negaOrPosiX = Math.sign(this.x);
        var negaOrPosiY = Math.sign(this.y);
        if (negaOrPosiX == 1 && negaOrPosiY == 1) {
            return 1;
        }
        else if (negaOrPosiX == -1 && negaOrPosiY == 1) {
            return 2;
        }
        else if (negaOrPosiX == -1 && negaOrPosiY == -1) {
            return 3;
        }
        else if (negaOrPosiX == 1 && negaOrPosiY == -1) {
            return 4;
        }
        else if (negaOrPosiX == 0 && negaOrPosiY == 0) {
            return 0;
        }
        else if (negaOrPosiX == 0 && negaOrPosiY !== 0) {
            return 'y axis';
        }
        else if (negaOrPosiX !== 0 && negaOrPosiY == 0) {
            return 'x axis';
        }
    };
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    // calculateDistance(x: number, y: number): number {
    //     return Math.sqrt((this.x-x) **2 + (this.y-y) **2)
    // }
    PT.prototype.calculateDistance = function (p1) {
        return Math.sqrt(Math.pow((this.x - p1.x), 2) + Math.pow((this.y - p1.y), 2));
    };
    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    // calculateIncline(x: number, y: number): number {
    //     return (this.x - x) / (this.y - y)
    // }
    PT.prototype.calculateIncline = function (p) {
        return (this.x - p.x) / (this.y - p.y);
    };
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    // calculateMiddlePoint(x: number, y: number) :PT{
    //     let x1 = (this.x + x) / 2
    //     let y1 = (this.y + y) / 2
    //     let midSection = new PT(x1, y1)
    //     return midSection
    // }
    PT.prototype.calculateMiddlePoint = function (p) {
        var x1 = (this.x + p.x) / 2;
        var y1 = (this.y + p.y) / 2;
        var midSection = new PT(x1, y1);
        return midSection;
    };
    return PT;
}());
// instances (מופעים) of the clas PT
var p1 = new PT(8, 4);
var p2 = new PT(50, 70);
var p3 = new PT(-2, -3);
var p4 = new PT(0, -4);
var p5 = new PT(25, -15);
var p6 = new PT(-7, 16);
var p7 = new PT(0, 0);
console.log(p1.getQuadrant());
console.log(p3.getQuadrant());
console.log(p5.getQuadrant());
console.log(p6.getQuadrant());
console.log(p7.getQuadrant());
console.log(p4.getQuadrant());
console.log(p2.calculateDistance(p1));
console.log(p1.calculateIncline(p2));
console.log(p1.calculateMiddlePoint(p2));
