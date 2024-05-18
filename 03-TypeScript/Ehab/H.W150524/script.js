var Quadrant;
(function (Quadrant) {
    Quadrant["I"] = "Quadrant I";
    Quadrant["II"] = "Quadrant II";
    Quadrant["III"] = "Quadrant III";
    Quadrant["IV"] = "Quadrant IV";
})(Quadrant || (Quadrant = {}));
// Class - a factory for an objects with the same structure, that has fields, functions
// PT = Point
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
        else {
            return null;
        }
    };
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
    //TODO - expand this function to be able to accept also a second point (receive p2: Point)
    PT.prototype.calculateDistance = function (xOrPT, y) {
        var distX, distY;
        if (xOrPT instanceof PT) {
            distX = xOrPT.getX() - this.x;
            distY = xOrPT.getY() - this.y;
        }
        else {
            if (y === undefined) {
                throw new Error('Second coordinate (y) is required when using numbers.');
            }
            distX = xOrPT - this.x;
            distY = y - this.y;
        }
        return Math.sqrt(distX * distX + distY * distY);
    };
    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    // Incline = (y1-y2) / (x1 - x2)
    PT.prototype.calculateIncline = function (xOrPT, y) {
        if (xOrPT instanceof PT) {
            return (this.y - xOrPT.getY()) / (this.x - xOrPT.getX());
        }
        else {
            if (y === undefined) {
                throw new Error('Second coordinate (y) is required when using numbers.');
            }
            return (y - this.y) / (xOrPT - this.x);
        }
    };
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    // middlePoint = (x1+x2) /2 , (y1+y2)/2
    PT.prototype.calculateMiddlePoint = function (xOrPT, y) {
        if (xOrPT instanceof PT) {
            return new PT((xOrPT.getX() + this.x) / 2, (xOrPT.getY() + this.y) / 2);
        }
        else {
            if (y === undefined) {
                throw new Error('Second coordinate (y) is required when using numbers.');
            }
            return new PT((xOrPT + this.x) / 2, (y + this.y) / 2);
        }
    };
    PT.prototype.toString = function () {
        return '(' + this.x + ' , ' + this.y + ')';
    };
    return PT;
}());
// instances (מופעים) of the clas PT
var p1 = new PT(8, 4);
var p2 = new PT(-5, 3);
var p3 = new PT(-6, -2);
var p4 = new PT(2, -5);
// getQuadrant()
console.log('getQuadrant');
console.log('The point is in the quadrant:', p1.getQuadrant());
console.log('The point is in the quadrant:', p2.getQuadrant());
console.log('The point is in the quadrant:', p3.getQuadrant());
console.log('The point is in the quadrant:', p4.getQuadrant());
// calculateDistance(xOrPT: number | PT, y?: number): number
console.log('\ncalculateDistance');
console.log('The distance between point ' + p1.toString() + ' and point ' + p2.toString() + ' is:', p1.calculateDistance(p2));
console.log('The distance between point ' + p1.toString() + ' and point ' + p2.toString() + ' is:', p1.calculateDistance(p2.getX(), p2.getY()));
// calculateIncline(xOrPT: number | PT, y?: number): number
console.log('\ncalculateIncline');
console.log('The incline Between point ' + p3.toString() + ' and point ' + p4.toString() + ' is:', p3.calculateIncline(p4));
console.log('The incline Between point ' + p3.toString() + ' and point ' + p4.toString() + ' is:', p3.calculateIncline(p4.getX(), p4.getY()));
//calculateMiddlePoint(xOrPT: number | PT, y?: number): PT 
console.log('\ncalculateMiddlePoint');
console.log('The middle point between point ' + p1.toString() + ' to point ' + p2.toString() + ' is:', p1.calculateMiddlePoint(p2).toString());
console.log('The middle point between point ' + p1.toString() + ' to point ' + p2.toString() + ' is:', p1.calculateMiddlePoint(p2.getX(), p2.getY()).toString());
