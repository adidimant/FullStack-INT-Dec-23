/**
 * class assignment:
 * create a Utils static class (all functions are static)
 */

// converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
class Utils {
    private static statistics: { [key: string]: number } = {};

    static {
        // Initialize statistics object with all function names and 0 calls
        Utils.statistics['convertToBool'] = 0;
        Utils.statistics['cleanText'] = 0;
        Utils.statistics['executeSafe'] = 0;
        Utils.statistics['deepClone'] = 0;
        Utils.statistics['debounce'] = 0;
        Utils.statistics['throttle'] = 0;
        Utils.statistics['mergeObjects'] = 0;
        Utils.statistics['sleep'] = 0;
        Utils.statistics['arrayToObject'] = 0;
        Utils.statistics['generateUUID'] = 0;
        Utils.statistics['getRandomInt'] = 0;
        Utils.statistics['isPalindrome'] = 0;
        Utils.statistics['getCurrentDate'] = 0;
        Utils.statistics['capitalizeFirstLetter'] = 0;
        Utils.statistics['dateDiffInDays'] = 0;
        Utils.statistics['isInViewport'] = 0;
        Utils.statistics['flattenArray'] = 0;
    }

    static convertToBool(value: any): boolean {
        // אם הערך הוא true, מחזיר true
        if (value === true || value === 'true' || value === '1' || value === 1) {
            return true;
        }

        // אם הערך הוא false, מחזיר false
        if (value === false || value === 'false' || value === '0' || value === 0 || value === 'f' || value === 'F') {
            return false;
        }

        // אם הערך הוא אובייקט או מערך, מחזיר true
        if (typeof value === 'object' && value !== null) {
            return true;
        }

        // אם הערך הוא מחרוזת שאינה ריקה, מחזיר true
        if (typeof value === 'string' && value.trim() !== '') {
            return true;
        }

        // עבור כל מקרה אחר, מחזיר false
        return false;
    }

    static cleanText(paragraph: string): string {
        // Remove extra spaces and line breaks
        let cleaned = paragraph.replace(/\s+/g, ' ').trim();

        // Remove redundant word boundaries like ',,', ';;', ',;'
        cleaned = cleaned.replace(/[,;]{2,}/g, match => match[0]);

        return cleaned;
    }

    static executeSafe(func: () => any): any {
        Utils.statistics['executeSafe']++;  // Increment call count
        try {
            return func();
        } catch (error) {
            console.error("An error occurred:", error);
            // ניתן להוסיף פעולות נוספות כאן במידת הצורך, כמו לשלוח את השגיאה לשרת או להציג הודעה למשתמש
        }
    }

    static deepClone<T>(obj: T): T {
        Utils.statistics['deepClone']++;  // Increment call count
        return JSON.parse(JSON.stringify(obj));
    }

    static debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
        Utils.statistics['debounce']++;  // Increment call count
        let timeout: ReturnType<typeof setTimeout>;

        return function (...args: any[]) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }

    static throttle(func: (...args: any[]) => void, limitCalls: number, limitTime: number): (...args: any[]) => void {
        Utils.statistics['throttle']++;  // Increment call count
        let calls = 0;
        let startTime = Date.now();

        return function (...args: any[]) {
            const currentTime = Date.now();
            if (currentTime - startTime > limitTime) {
                startTime = currentTime;
                calls = 0;
            }

            if (calls < limitCalls) {
                calls++;
                return func(...args);
            }
        };
    }

    static mergeObjects<T, U>(obj1: T, obj2: U): T & U {
        Utils.statistics['mergeObjects']++;  // Increment call count
        return { ...obj1, ...obj2 };
    }

    static sleep(ms: number): Promise<void> {
        Utils.statistics['sleep']++;  // Increment call count
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    static arrayToObject<T>(arr: T[]): { [key: number]: T } {
        Utils.statistics['arrayToObject']++;  // Increment call count
        return arr.reduce((acc, value, index) => {
            acc[index] = value;
            return acc;
        }, {} as { [key: number]: T });
    }

    static generateUUID(): string {
        Utils.statistics['generateUUID']++;  // Increment call count
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    static getRandomInt(min: number, max: number): number {
        Utils.statistics['getRandomInt']++;  // Increment call count
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static isPalindrome(str: string): boolean {
        Utils.statistics['isPalindrome']++;  // Increment call count
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    static getCurrentDate(): string {
        Utils.statistics['getCurrentDate']++;  // Increment call count
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    } 

     static capitalizeFirstLetter(string: string): string {
        Utils.statistics['capitalizeFirstLetter']++;  // Increment call count
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static dateDiffInDays(date1: Date, date2: Date): number {
        Utils.statistics['dateDiffInDays']++;  // Increment call count
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        return diffDays;
    }


    static isInViewport(element: HTMLElement): boolean {
        Utils.statistics['isInViewport']++;  // Increment call count
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static flattenArray(arr: any[]): any[] {
        Utils.statistics['flattenArray']++;  // Increment call count
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(Utils.flattenArray(val)) : acc.concat(val), []);
    }

    static getStatistics(): { [key: string]: number } {
        return { ...Utils.statistics };  // Return a copy of the statistics object
    }
}

// דוגמאות לשימוש:
console.log(Utils.convertToBool('1')); // true
console.log(Utils.convertToBool(1)); // true
console.log(Utils.convertToBool('true')); // true
console.log(Utils.convertToBool(true)); // true
console.log(Utils.convertToBool('0')); // false
console.log(Utils.convertToBool(0)); // false
console.log(Utils.convertToBool('false')); // false
console.log(Utils.convertToBool(false)); // false
console.log(Utils.convertToBool('f')); // false
console.log(Utils.convertToBool('F')); // false
console.log(Utils.convertToBool({})); // true
console.log(Utils.convertToBool([])); // true
console.log(Utils.convertToBool('some string')); // true
console.log(Utils.convertToBool('')); // false


// prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')

/* function cleanText(paragraph: string) {

} */

// דוגמה לשימוש:
const text = "This is,,    a test paragraph with     extra spaces,\n\nextra line breaks,, and redundant word boundaries like ;; and ,;.";
const cleanedText = Utils.cleanText(text);
console.log(cleanedText); 
// Output: "This is, a test paragraph with extra spaces, extra line breaks, and redundant word boundaries like ; and ,."
//-------------------------------------------------------------------------------------------------------------------//


// returns an object that in the keys we have the name of the funcs, the values are the number of calls to that function.
// looks like: { cleanText: 6, convertToBool: 4 }
// make sure to initialize this statistics object in a static { } block, and that this object is not exposed outside as public
function getStatistics() {

} 

// דוגמה לשימוש:
console.log(Utils.getStatistics()); 
// Output example: { cleanText: 1, convertToBool: 1 }

//-------------------------------------------------------------------------------------------------------------------//

// execute the received function on a safe way, it means that if we have an error in the function - it won't break the application - but still will do console.error with the detailed error
function executeSafe() {

}

// דוגמה לשימוש:
const text1 = "This is,,    a test paragraph with     extra spaces,\n\nextra line breaks,, and redundant word boundaries like ;; and ,;.";
console.log(Utils.cleanText(text)); 
console.log(Utils.convertToBool('true')); 

// שימוש ב-executeSafe
Utils.executeSafe(() => {
    console.log("This function works fine.");
});

Utils.executeSafe(() => {
    throw new Error("This function throws an error.");
});

console.log(Utils.getStatistics()); 
// Output example: { cleanText: 1, convertToBool: 1, executeSafe: 2 }

//-------------------------------------------------------------------------------------------------------------------//

// receives and objected and returns an exact copy (other) object
function deepClone() {

}

// שימוש בפונקציה deepClone
const originalObject = { a: 1, b: { c: 2, d: [3, 4] } };
const clonedObject = Utils.deepClone(originalObject);
console.log(clonedObject);  // Output: { a: 1, b: { c: 2, d: [3, 4] } }
// Output example: { cleanText: 1, convertToBool: 1, executeSafe: 2, deepClone: 1 }

//-------------------------------------------------------------------------------------------------------------------//

// execute the received function with a little latency - according to the wait parameter
function debounce() {

}

// שימוש בפונקציה debounce
const debouncedFunction = Utils.debounce(() => {
    console.log("This is a debounced function.");
}, 2000);

debouncedFunction();  // יקרא לפונקציה אחרי 2000ms אם אין קריאה נוספת
setTimeout(debouncedFunction, 1000);  // יקרא לפונקציה אחרי 2000ms מהקריאה האחרונה
setTimeout(debouncedFunction, 3000);  // יקרא לפונקציה אחרי 2000ms מהקריאה האחרונה

//-------------------------------------------------------------------------------------------------------------------//

// returns a throtteled function, that calling to that function is actually calling to 'func' function, but with the limitations of the amount & time
// limit the number of the number of the calls to the function
// hint - you can put things on the function object!
function throttle() {
  
}
// שימוש בפונקציה throttle
const throttledFunction = Utils.throttle((msg: string) => {
    console.log("Throttled function call:", msg);
}, 2, 3000);

throttledFunction("First call");  // מיד תתבצע
throttledFunction("Second call");  // מיד תתבצע
throttledFunction("Third call");  // תדחה כי עברו פחות מ-3000ms ויש כבר 2 קריאות

setTimeout(() => throttledFunction("Fourth call"), 1000);  // תדחה כי עברו פחות מ-3000ms ויש כבר 2 קריאות
setTimeout(() => throttledFunction("Fifth call"), 2000);   // תדחה כי עברו פחות מ-3000ms ויש כבר 2 קריאות
setTimeout(() => throttledFunction("Sixth call"), 3000);   // תתבצע כי עברו 3000ms מתחילת הקריאה הראשונה

//-------------------------------------------------------------------------------------------------------------------//

// merges obj1 & obj2
function mergeObjects() {
  
}

/* שימוש בפונקציה mergeObjects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = Utils.mergeObjects(obj1, obj2);
console.log(mergedObject);  // Output: { a: 1, b: 2, c: 3, d: 4 } */

//-------------------------------------------------------------------------------------------------------------------//

// just stop the code and sleep according to ms parameter
function sleep() {
  
}

// שימוש בפונקציה sleep
(async () => {
    console.log('Sleeping for 2 seconds...');
    await Utils.sleep(2000);
    console.log('Woke up after 2 seconds');
})();

//-------------------------------------------------------------------------------------------------------------------//

// the key of the object should be the index in the array, the value - should be the value in the array
function arrayToObject() {
  
}

/* דוגמה לשימוש בפונקציה arrayToObject:
const arr = [10, 20, 30, 40];
const obj = Utils.arrayToObject(arr);
console.log(obj);  // Output: { 0: 10, 1: 20, 2: 30, 3: 40 } */

//-------------------------------------------------------------------------------------------------------------------//

// create a new UUID, you can use the internet
// read about: the UUID usages, how difficult is to get a collision on the same UUID
function generateUUID() { 

}

/* דוגמה לשימוש בפונקציה generateUUID:
const uuid = Utils.generateUUID();
console.log(uuid); // ידפיס ייחודי UUID */

//-------------------------------------------------------------------------------------------------------------------//

// returns a random integer between min & max
function getRandomInt() {
  
}

// דוגמה לשימוש:
const randomNumber = Utils.getRandomInt(1, 100);
console.log(randomNumber); // ידפיס מספר שלם אקראי בין 1 ל-100

//-------------------------------------------------------------------------------------------------------------------//

// returns true if str is palindrome, false otherwise (example: 'abba' is palindrom, 'aba' as well. not palindrom: 'abc')
function isPalindrome() {
  
}

// דוגמה לשימוש:
console.log(Utils.isPalindrome('abba')); // true
console.log(Utils.isPalindrome('aba')); // true
console.log(Utils.isPalindrome('abc')); // false

//-------------------------------------------------------------------------------------------------------------------//

// returns current date in the following format: `${year}-${month}-${day}`
/* function getCurrentDate() {  
  return `${year}-${month}-${day}`;
} */

// דוגמה לשימוש:
const currentDate = Utils.getCurrentDate();
console.log(currentDate); // Output: '2024-6-9' (לדוגמה)

//-------------------------------------------------------------------------------------------------------------------//

// make first letter big
function capitalizeFirstLetter() {
  
}

// דוגמה לשימוש:
const inputString = "hello world";
const capitalizedString = Utils.capitalizeFirstLetter(inputString);
console.log(capitalizedString); // Output: "Hello world"
 
//-------------------------------------------------------------------------------------------------------------------//

// returns the difference between dates in days
/* function dateDiffInDays(date1, date2) {
  
} */

// דוגמה לשימוש:
const date1 = new Date('2024-06-10');
const date2 = new Date('2024-06-15');
const differenceInDays = Utils.dateDiffInDays(date1, date2);
console.log(differenceInDays); // Output: 5


//-------------------------------------------------------------------------------------------------------------------//

/*function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
} */

// דוגמה לשימוש בפונקציה isInViewport
/* const element = document.getElementById('myElement');

if (Utils.isInViewport(element)) {
    console.log('The element is in the viewport!');
} else {
    console.log('The element is not in the viewport!');
} */


//-------------------------------------------------------------------------------------------------------------------//

/* function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
} */

// דוגמה לשימוש:
const nestedArray = [1, [2, [3, 4]], 5, [6]];
const flatArray = Utils.flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]