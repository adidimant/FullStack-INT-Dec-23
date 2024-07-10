"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    constructor() {
    }
    static maintainLastXItems(arr, bufferSize, newItem) {
        if (arr.length >= bufferSize) {
            arr.shift(); //Remove the first item
        }
        arr.push(newItem);
        return arr;
    }
}
exports.Utils = Utils;
