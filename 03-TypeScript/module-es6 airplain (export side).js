"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = exports.DAYS_IN_MILLI = void 0;
exports.calculateAverage = calculateAverage;
function calculateAverage(arr) {
    return arr.reduce((acc, value) => {
        return acc + value;
    }, 0) / arr.length;
}
exports.DAYS_IN_MILLI = 1000 * 60 * 60 * 24;
function myPrivateModuleFunction() {
    return;
}
class Airplane {
    constructor(width, height, company, year, miles) {
        this.width = width;
        this.height = height;
        this.company = company;
        this.miles = miles;
        this.year = year;
    }
}
exports.Airplane = Airplane;
exports.default = Airplane;
