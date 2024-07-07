"use strict";
// analyze the complexity of the three functions:
function printNested(arr) {
    for (let i = 0; i < arr.length; i++) { // o(n)
        for (let j = 0; j < arr.length; j++) { // o(n)
            console.log(arr[i]); // o(1)
        }
    }
}
// o(n) * 0(n) * o(1) => o(n^2)
function printNested2(arr) {
    for (let i = 0; i < arr.length; i++) { // o(n)
        for (let j = 0; j < arr.length; j++) { // o(n)
            for (let k = 0; k < arr.length; k++) { // o(n)
                console.log(arr[i]); // o(1)
            }
        }
    }
}
// o(n) * 0(n) * o(n) * o(1) => o(n^3)
// n - arr1.length, k - arr2.length
function printNested3(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // o(n)
        for (let j = 0; j < arr2.length; j++) { // o(k)
            for (let k = 0; k < arr1.length; k++) { // o(n)
                console.log(arr1[i]); // o(1)
                console.log(arr2[j]); // o(1)
                console.log(arr1[k]); // o(1)
            }
        }
    }
}
// o(n) * 0(k) * o(n) * o(1) * o(1) * o(1) =>  𝑂(𝑛2 * k)
function findMaxTenElements(arr) {
    // בודקים אם אורך המערך קטן או שווה ל-10
    if (arr.length <= 10) {
        // אם כן, ממיינים את המערך בסדר יורד ומחזירים את התוצאה
        return arr.sort((a, b) => b - a);
    }
    // אם אורך המערך גדול מ-10, ממיינים את המערך בסדר יורד
    arr.sort((a, b) => b - a);
    // מחזירים את עשרת האיברים הראשונים מהמערך הממויין
    return arr.slice(0, 10);
}
//----------------------------------------------------------------//
function findMaxTenElements1(arr) {
    if (arr.length <= 10) {
        return arr.sort((a, b) => b - a);
    }
    const maxValues = [];
    for (let i = 0; i < 10; i++) {
        let maxIndex = -1;
        let maxValue = -Infinity;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > maxValue && !maxValues.includes(arr[j])) {
                maxValue = arr[j];
                maxIndex = j;
            }
        }
        if (maxIndex !== -1) {
            maxValues.push(maxValue);
        }
    }
    return maxValues;
}
// דוגמה לשימוש
const numbers = [1, 23, 12, 9, 30, 2, 50, 24, 5, 8, 18, 20, 15, 33, 45];
const topTen = findMaxTenElements(numbers);
console.log(topTen); // ידפיס את עשרת האיברים הגדולים ביותר
//----------------------------------------------------------------//
const isPalindrome1 = (str) => {
    // להסיר רווחים ולהמיר את כל התווים לאותיות קטנות
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // לבדוק אם המחרוזת הנוכחית זהה למחרוזת המתהפכת שלה
    return cleanStr === cleanStr.split('').reverse().join('');
};
// In total: O(n)
// דוגמה לשימוש
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('abc')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
