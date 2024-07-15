"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils1 = void 0;
class Utils1 {
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
exports.Utils = Utils1;
;
