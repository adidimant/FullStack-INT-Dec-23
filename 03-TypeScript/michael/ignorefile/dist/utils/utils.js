"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.maintainLastXItems = function (array, bufferSize, newItem) {
        if (array.length >= bufferSize) {
            array.shift();
        }
        array.push(newItem);
        return array;
    };
    return Utils;
}());
exports.Utils = Utils;
