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
/**
 * class assignment:
 * create a Utils static class (all functions are static)
*/
class Utils {
    //// just stop the code and sleep according to ms parameter
    static sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res) => setTimeout(res, ms));
        });
    }
    // converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
    static convertToBool(value) {
        if (value === null || value === undefined) {
            return false;
        }
        if (typeof value === "boolean") {
            return value;
        }
        if (typeof value === "number") {
            return value !== 0;
        }
        if (typeof value === "string") {
            const falsyValue = ['0', 'false', 'f', 'F'];
            return !falsyValue.includes(value.toLowerCase());
        }
        return true;
    }
    // prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
    static cleanText(paragraph) {
        // to remove whitespace from the start and end of the string
        let cleanText = paragraph.trim();
        // to remove all characters except letters, numbers, and spaces
        cleanText = cleanText.replace(/[^a-zA-Z0-9 ]/g, '');
        cleanText = cleanText.toLowerCase();
        // to replace one or more whitespace characters with a single space
        cleanText = cleanText.replace(/\s+/g, ' ');
        return cleanText;
    }
    // execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
    static executeSafe(func) {
        try {
            func();
        }
        catch (error) {
            console.error("An Error occurred while executing the function:", error);
        }
    }
    // receives and objected and returns an exact copy (other) object
    static deepClone(obj) {
        //JSON.stringify(obj): Converts the object into a JSON string.
        //JSON.parse(...): Parses the JSON string back into a new object
        return JSON.parse(JSON.stringify(obj));
    }
    // execute the received function with a little latency - according to the wait parameter
    static debounce(func, wait) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }
    // merges obj1 & obj2
    static mergeObjects(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    // returns a random integer between min & max
    static getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
        // or 
        // min = Math.ceil(min);
        // max = Math.floor(max);
        // return Math.floor(Math.random() * (max - min + 1)) + min
    }
    // returns true if str is palindrome, false otherwise (example: 'abba' is palindrom, 'aba' as well. not palindrom: 'abc')
    static isPalindrome(str) {
        str = str.toLowerCase().replace(/(\W)|(_)/g, "").split("");
        for (var i = 0; i < str.length; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    // the key of the object should be the index in the array, the value - should be the value in the array
    static arrayToObject(arr) {
        const obj = {};
        //adds each element to the object using the index as the key and the array element as the value
        arr.forEach((value, index) => {
            obj[index] = value;
        });
        return obj;
    }
    // make first letter big
    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // returns the difference between dates in days
    static dateDiffInDays(date1, date2) {
        let diff = (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
        return Math.abs(Math.round(diff));
    }
    // returns current date in the following format: `${year}-${month}-${day}`
    static getCurrentDate() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Add 1 as months are zero-based
        const year = currentDate.getFullYear();
        return `${year}-${month}-${day}`;
        //Or 
        // const currentDate = new Date();
        // const formattedDate = currentDate.toLocaleDateString('en-US', {
        //     day: '2-digit',
        //     month: 'long',
        //     year: 'numeric',
        // });
        // console.log(`Today's date is ${formattedDate}`)
    }
    // returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
    // limit the number of the number of the calls to the function
    // hint - you can put things on the function object!
    static throttle(func, limitCalls, limitTime) {
        let callsInWindow = 0;
        let lastCallTime = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCallTime >= limitCalls) {
                callsInWindow = 0;
            }
            else if (callsInWindow < limitCalls) {
                callsInWindow++;
                lastCallTime = now;
                func.apply(this, args);
            }
            else {
                return ("Function call limit reached.");
            }
        };
    }
    // create a new UUID, you can use the internet
    // read about: the UUID usages, how difficult is to get a collision on the same UUID
    static generateUUID() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
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
    // returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
    // looks like: { cleanText: 6, convertToBool: 4 }
    // make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
    static getStatistics() {
        const statistics = {};
        function track(func, name) {
            if (!statistics[name]) {
                statistics[name] = 0;
            }
            return function (...args) {
                statistics[name]++;
                return func.apply(this, args);
            };
        }
        function getStats() {
            return Object.assign({}, statistics);
        }
        return {
            track,
            getStats,
        };
    }
}
