"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static maintainLastXItems(array, bufferSize, newItem) {
        if (array.length >= bufferSize) {
            array.shift(); // הסרת הפריט הראשון מהמערך 
            array.push(newItem);
        }
        else
            array.push(newItem);
    }
    ;
}
exports.Utils = Utils;
;
