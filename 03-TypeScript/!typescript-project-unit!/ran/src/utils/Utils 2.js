"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static maintainLastXItems(array, bufferSize, newItem) {
        if (array.length >= bufferSize) {
            array.shift();
        }
        array.push(newItem);
        return array;
    }
    static isSDKEnabled() {
        // This could be expanded to check local storage or other conditions
        return true;
    }
}
exports.Utils = Utils;
