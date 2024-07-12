"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * maintainLastXItems
     * @param {Array<T>} arr
     * @param {number} bufferSize
     * @param {T} newItem
     * @returns {Array<T>}
     */
    Utils.maintainLastXItems = function (arr, bufferSize, newItem) {
        if (arr.length < bufferSize) {
            arr.push(newItem);
        }
        else {
            arr.shift();
            arr.push(newItem);
        }
        return arr;
    };
    return Utils;
}());
exports.Utils = Utils;
