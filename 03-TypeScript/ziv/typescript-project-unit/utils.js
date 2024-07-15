"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static maintainLastXItems(array, bufferSize, newItem) {
        if (array.length >= bufferSize) {
            array.shift();
        }
        array.push(newItem);
    }
}
exports.Utils = Utils;
/*
הפונקציה maintainLastXItems מקבלת שלושה פרמטרים:
array - מערך של פריטים מהסוג הגנרי T.
bufferSize - מספר מקסימלי של פריטים שהמערך יכול להכיל.
newItem - הפריט החדש שיש להוסיף למערך.
אם אורך המערך גדול או שווה ל- bufferSize, הפונקציה מסירה את הפריט הראשון במערך באמצעות הפונקציה shift().
לאחר מכן, הפונקציה מוסיפה את הפריט החדש לסוף המערך באמצעות הפונקציה push().
הפונקציה מחזירה את המערך המעודכן.
*/ 
