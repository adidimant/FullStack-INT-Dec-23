"use strict";
/**
 * class assignment:
 * create a Utils static class (all functions are static)
 */
const FALSE_VALUES = [0, '0', false, 'false', 'FALSE', 'False', 'F', 'f', null, undefined];
class Utils {
    // returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
    // looks like: { cleanText: 6, convertToBool: 4 }
    // make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
    static incrementStatistic(funcName) {
        if (Utils.statistics[funcName]) {
            Utils.statistics[funcName]++;
        }
        else {
            Utils.statistics[funcName] = 1;
        }
    }
    static getStatistics() {
        return Utils.statistics;
    }
    // converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
    static convertToBool(value) {
        Utils.incrementStatistic('convertToBool');
        return !(FALSE_VALUES.includes(value) || Number.isNaN(value));
    }
    // prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
    static cleanText(paragraph) {
        Utils.incrementStatistic('cleanText');
        let newParagraph = paragraph.trim(); // cleans spaces before and after text
        // Missing:
        // 1) replace extra duplicate spaces, remove tabs?
        // 2) remove duplicate word bounderies - like ',,', ';;'
        // 3) remove duplicate '/n' (line breaks)
        return newParagraph;
    }
    // execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
    static executeSafe(func) {
        Utils.incrementStatistic('executeSafe');
        try {
            func();
        }
        catch (err) {
            console.error(`Error occured during function execution`, err);
        }
    }
    // receives and objected and returns an exact copy (other) object
    static deepClone(obj) {
        return Object.assign({}, obj);
    }
    // execute the received function with a little latency - according to the wait parameter
    static debounce(func, wait) {
        Utils.incrementStatistic('debounce');
        setTimeout(func, wait);
    }
    // returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
    // limit the number of the number of the calls to the function
    // hint - you can put things on the function object!
    static throttle(func, limitCalls, limitTime) {
    }
    // merges obj1 & obj2
    static mergeObjects(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    // just stop the code and sleep according to ms parameter
    static sleep(ms) {
    }
    // the key of the object should be the index in the array, the value - should be the value in the array
    static arrayToObject(arr) {
        return arr.reduce((acc, value, index) => {
            acc[index] = value;
            return acc;
        }, {});
    }
    // create a new UUID, you can use the internet
    // read about: the UUID usages, how difficult is to get a collision on the same UUID
    static generateUUID() {
    }
    // returns a random integer between min & max
    static getRandomInt(min, max) {
        if (max > min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            console.error("The first parameter should be a minimum number and the second parameter a maximum number");
        }
    }
    // returns true if str is palindrome, false otherwise (example: 'abba' is palindrom, 'aba' as well. not palindrom: 'abc')
    static isPalindrome(str) {
    }
    // returns current date in the following format: `${year}-${month}-${day}`
    static getCurrentDate() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        return `${year}-${month}-${day}`;
    }
    // make first letter big
    static capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // returns the difference between dates in days
    static dateDiffInDays(date1, date2) {
        const date1milliseconds = date1.getTime();
        const date2milliseconds = date2.getTime();
        let differenceBetweenDatesInmilliseconds;
        if (date1milliseconds > date2milliseconds) {
            differenceBetweenDatesInmilliseconds = date1milliseconds - date2milliseconds;
        }
        else {
            differenceBetweenDatesInmilliseconds = date2milliseconds - date1milliseconds;
        }
        const differenceInDays = differenceBetweenDatesInmilliseconds / 1000 / 60 / 60 / 24;
        return Math.floor(differenceInDays);
    }
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    static flattenArray(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
    }
}
(() => {
    Utils.statistics = {};
})();
