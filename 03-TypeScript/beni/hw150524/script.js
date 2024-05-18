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
            return "quadrant 1";
        }
        if (this.x < 0 && this.y > 0) {
            return "quadrant 2";
        }
        if (this.x < 0 && this.y < 0) {
            return "quadrant 3";
        }
        return "quadrant 4";
    };
    // Gets another x, y. returns the distance between our current point to the gives point x,y
    // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
    //TODO - expand this function to be able to accept also a second point (receive p2: Point)
    PT.prototype.calculateDistance = function (xP, y) {
        if (xP instanceof PT) {
            var a_1 = xP.getX() - this.x;
            var b_1 = xP.getY() - this.y;
            return Math.sqrt(a_1 * a_1 + b_1 * b_1);
        }
        var a = xP - this.x;
        var b = y - this.y;
        return Math.sqrt(a * a + b * b);
    };
    //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
    PT.prototype.calculateIncline = function (xP, y) {
        if (xP instanceof PT) {
            var a_2 = this.y - xP.getY();
            var b_2 = this.x - xP.getX();
            if (a_2 == 0 || b_2 == 0) {
                return Infinity;
            }
            return a_2 / b_2;
        }
        var a = y - this.y;
        var b = xP - this.x;
        if (a == 0 || b == 0) {
            return Infinity;
        }
        return a / b;
    };
    //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
    PT.prototype.calculateMiddlePoint = function (xP, y) {
        if (xP instanceof PT) {
            var mx_1 = (this.x + xP.getX()) / 2;
            var my_1 = (this.y + xP.getY()) / 2;
            return new PT(mx_1, my_1);
        }
        var mx = (this.x + xP) / 2;
        var my = (this.y + y) / 2;
        return new PT(mx, my);
    };
    return PT;
}());
var p1 = new PT(5, 2);
var p2 = new PT(12, 4);
console.log(p1.calculateMiddlePoint(235, 132));
