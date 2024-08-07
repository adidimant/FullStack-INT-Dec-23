"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Utils {
    constructor() {
        this.FALSE_VALUES = ['0', 0, false, 'f', 'F', 'false', 'False', 'FALSE', null, undefined];
    }
    static addToStatCounter(key) {
        if (Utils.stat.hasOwnProperty(key)) {
            // If the key already exists, increment the value by 1
            Utils.stat[key]++;
        }
        else {
            // If the key doesn't exist, set the value to 1
            Utils.stat[key] = 1;
        }
    }
    // converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
    static convertToBool(value) {
        this.addToStatCounter(Utils.convertToBool.name);
        return !(this.FALSE_VALUES.includes(value) || Number.isNaN(value));
        /*if (value === '1' || value === 1 || value ==='true' || value === true || (value !== undefined && value !== null)) {
            return true;
        } else {
            return false;
        }*/
    }
    // prepares string for the newspaper: clean text from extra spaces, extra line breaks, 
    // extra redundant word boundaries (like: ',,', ';;', ',;')
    static cleanText(paragraph) {
        this.addToStatCounter(Utils.cleanText.name);
        let tidyParagraph = paragraph.replace(/\s+/g, ' ').trim();
        tidyParagraph = tidyParagraph.replace(/\n{2,}/g, '\n').trim();
        //tidyParagraph = tidyParagraph.replace(/([,;/'"])\1+/g, '$1').trim();
        tidyParagraph = tidyParagraph.replace(/([,;:])(?=\1)/g, '$1').trim();
        return tidyParagraph;
    }
    // returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
    // looks like: { cleanText: 6, convertToBool: 4 }
    // make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
    static getStatistics() {
        this.addToStatCounter(Utils.getStatistics.name);
        return Utils.stat;
    }
    // execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
    static executeSafe(func) {
        this.addToStatCounter(Utils.executeSafe.name);
        if (typeof func === 'function') {
            try {
                func();
            }
            catch (error) {
                console.error("An error occurred:", error.message);
            }
        }
    }
    // receives and objected and returns an exact copy (other) object
    static deepClone(obj) {
        this.addToStatCounter(Utils.deepClone.name);
        // check of obj is not object or null. could be number or string or function or boolean
        if (typeof obj !== 'object' || obj == null) {
            return obj;
        }
        const clone = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            // Recursively clone nested objects and arrays
            clone[key] = Utils.deepClone(obj[key]);
        }
        return clone;
    }
    // execute the received function with a little latency - according to the wait parameter
    static debounce(func, wait) {
        return __awaiter(this, void 0, void 0, function* () {
            this.addToStatCounter(Utils.debounce.name);
            yield new Promise((resolve) => {
                setTimeout(resolve, wait);
            });
            func();
        });
    }
    // returns a throtteled function, that calling to that function is actually calling to 'func' function, 
    // but with the limitations of the amount & time
    // limit the number of the number of the calls to the function
    // hint - you can put things on the function object!
    static throttle(func, limitCalls, limitTime) {
        this.addToStatCounter(Utils.throttle.name);
        if (limitCalls > 0 && limitTime) {
            yield new Promise((resolve) => {
                setTimeout(resolve, limitTime);
            });
            func();
        }
    }
}
Utils.timers = {};
/*static initialize() {
    Utils.stat = 0;
}*/
(() => {
    Utils.stat = {}; // Reset the stat property
})();
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
