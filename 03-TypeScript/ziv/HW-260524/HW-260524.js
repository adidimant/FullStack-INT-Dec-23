"use strict";
/* W 260524: */
/* 1) implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K */
function returnObjectOrElse(value, fallback) {
    if (typeof value === 'object' && value !== null) {
        return value;
    }
    else {
        return fallback;
    }
}
// דוגמאות שימוש:
// כאשר T הוא אובייקט
const obj = { a: 1, b: 2 };
const fallbackString = "fallback";
const result1 = returnObjectOrElse(obj, fallbackString);
console.log(result1); // פלט: { a: 1, b: 2 }
// כאשר T אינו אובייקט
const num = 42;
const fallbackArray = [1, 2, 3];
const result2 = returnObjectOrElse(num, fallbackArray);
console.log(result2); // פלט: [1, 2, 3]
//Answer in class //
function f1(param1, param2) {
    if (typeof param1 == 'object') {
        return param1;
    }
    return param2;
}
/* ---------------------------------------------------------------- */
/* 2) implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS */
// הגדרת הפונקציה mergeObjects עם טיפוסים גנריים T ו-K
function mergeObjects(obj8, obj9) {
    // שימוש באופרטור ההתפשטות כדי לשלב את obj1 ו-obj2
    return Object.assign(Object.assign({}, obj8), obj9);
}
const obj8 = { a: 1, b: 2 };
const obj9 = { c: 3, d: 4 };
const merged = mergeObjects(obj1, obj9);
console.log(merged); // פלט: { a: 1, b: 2, c: 3, d: 4 }
const person2 = { name: 'Alice' };
const details = { age: 25, city: 'Wonderland' };
const mergedPersonDetails = mergeObjects(person, details);
console.log(mergedPersonDetails); // פלט: { name: 'Alice', age: 25, city: 'Wonderland' }
//Answer in class //
function mergeObjects1(obj1, obj2) {
    // שימוש באופרטור ההתפשטות כדי לשלב את obj1 ו-obj2
    return Object.assign(Object.assign({}, obj1), obj2);
}
/* 3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed */
function duplicateArray(item, duplicateNumber) {
    return Array(duplicateNumber).fill(item);
}
// דוגמאות שימוש:
const numberArray = duplicateArray(5, 3);
console.log(numberArray); // פלט: [5, 5, 5]
const stringArray = duplicateArray("hello", 4);
console.log(stringArray); // פלט: ["hello", "hello", "hello", "hello"]
const objectArray = duplicateArray({ name: "Alice" }, 2);
console.log(objectArray); // פלט: [{ name: "Alice" }, { name: "Alice" }]
//Answer in class //
function duplicateArray1(item, duplicateNumber) {
    return Array(duplicateNumber).fill(item);
}
class Machine1 {
    constructor(reportTo, warnLevel, owner) {
        this.reportTo = reportTo;
        this.warnLevel = warnLevel;
        this.owner = owner;
    }
    turnOn() {
        console.log("Machine is now ON");
    }
    turnOff() {
        console.log("Machine is now OFF");
    }
}
// דוגמאות שימוש:
const myMachine1 = new Machine1("Supervisor", 1, "John Doe");
myMachine1.turnOn(); // פלט: Machine is now ON
console.log(myMachine1.reportTo); // פלט: Supervisor
console.log(myMachine1.warnLevel); // פלט: 1
console.log(myMachine1.owner); // פלט: John Doe
myMachine1.turnOff(); // פלט: Machine is now OFF
/* 5) Understand the recursive solution we have implemented in class - calculateObjDeep */
/* קוד הפונקציה:
function calculateObjDeep<T>(obj: T): number {
    if (typeof obj === 'object' && obj !== null) {
      const values = Object.values(obj as object);
      return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
    }
    return 0;
  }
  
  הסבר:
הגדרת הפונקציה:

הפונקציה calculateObjDeep היא גנרית (מסומנת על ידי <T>) ומחזירה מספר (number). הפונקציה מקבלת פרמטר obj מהטיפוס הגנרי T.
function calculateObjDeep<T>(obj: T): number {

בדיקת סוג האובייקט:

הפונקציה בודקת האם הפרמטר obj הוא אובייקט ולא null.
if (typeof obj === 'object' && obj !== null) {

שליפת ערכי האובייקט:

אם obj הוא אובייקט, הפונקציה שולפת את כל ערכיו בעזרת Object.values. האובייקט מושלך ל-tipus object כדי ש-Object.values יוכל לעבוד עליו.
const values = Object.values(obj as object);

חישוב העומק המקסימלי ברקורסיה:

הפונקציה מחשבת את העומק המקסימלי של האובייקט על ידי קריאה רקורסיבית על כל ערך שלו בעזרת map. התוצאה היא 1 (העומק הנוכחי) ועוד העומק המקסימלי של כל ערך באובייקט.
return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));

מקרה בסיסי:

אם obj אינו אובייקט או שהוא null, הפונקציה מחזירה 0, מכיוון שאובייקט זה לא תורם לעומק.
return 0;
*/
// class assignment //
function myLogger(param1, param2, param3) {
    console.log('param1 is: ', param1);
    console.log('param2 is: ', param2);
    console.log('param3 is: ', param3);
}
myLogger('Ziv', 'Elharar', 100);
