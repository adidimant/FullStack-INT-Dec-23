"use strict";
/**
 * class assignment:
 * create a Utils static class (all functions are static)
 */
// converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
function convertToBool(value) {
    return true;
}
// prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
function cleanText(paragraph) {
    return "";
}
// returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
// looks like: { cleanText: 6, convertToBool: 4 }
// make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
function getStatistics() {
}
// execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
function executeSafe(func) {
}
// receives and objected and returns an exact copy (other) object
function deepClone(obj) {
}
// execute the received function with a little latency - according to the wait parameter
function debounce(func, wait) {
}
// returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
// limit the number of the number of the calls to the function
// hint - you can put things on the function object!
function throttle(func, limitCalls, limitTime) {
}
// merges obj1 & obj2
function mergeObjects(obj1, obj2) {
}
// just stop the code and sleep according to ms parameter
function sleep(ms) {
}
// the key of the object should be the index in the array, the value - should be the value in the array
function arrayToObject(arr) {
}
// create a new UUID, you can use the internet
// read about: the UUID usages, how difficult is to get a collision on the same UUID
function generateUUID() {
}
// returns a random integer between min & max
function getRandomInt(min, max) {
}
// returns true if str is palindrome, false otherwise (example: 'abba' is palindrom, 'aba' as well. not palindrom: 'abc')
function isPalindrome(str) {
}
// returns current date in the following format: `${year}-${month}-${day}`
function getCurrentDate() {
    return `${year}-${month}-${day}`;
}
// make first letter big
function capitalizeFirstLetter(string) {
}
// returns the difference between dates in days
function dateDiffInDays(date1, date2) {
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
