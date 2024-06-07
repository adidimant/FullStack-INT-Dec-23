class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class MyClass2 {
  protected x = 0;
  protected printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass2.x);
MyClass2.printX();

const myClassInstance = new MyClass2();
myClassInstance.x // can't access (protected)
myClassInstance.printX // can't access (protected)

class MyClass3 extends MyClass2 {
  private field1: any;
  constructor() {
    super();
    this.field1 = this.printX();
  }
}

class MyClass4 {
  private static x = 0;
  private field1: number;

  constructor(field1: number) {
    MyClass4.x = field1;
    this.field1 = field1;
  }
}
console.log(MyClass4.x);


class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

class Animal {
  static name: string; // can't use static 'name' field in a class - since it's coming built-in as static attribute in JS classes
  private type: string;
  private birthday: Date;
  private owner: string;

  constructor(name: string, type: string, birthday: Date, owner: string) {
    this.type = type;
    this.birthday = birthday;
    this.owner = owner;
  }

  // getters/setters & more public/protected functions
}

const animalClassName = Animal.name; // 'Animal'

// static blocks - run only once , at the loading of the function.
// if we want a code block that will run every instance creation - we'll put it in the constructor

declare function loadLastInstances(): any[]
// ---cut---
class Foo {
    static count = 0;
    const a = Foo.count == 0 ? console.log("0") : console.log(1);

    constructor() {
      // runs on every instance creation
    }

    get count() {
        return Foo.count;
    }

    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.count += lastInstances.length;
        }
        catch {}
    }
}

const foo1 = new Foo();
const foo2 = new Foo();
const foo3 = new Foo();
const foo4 = new Foo();

/**
 * class assignment:
 * create a Utils static class (all functions are static)
 */

// converts '1', 1, 'true', true, or any existing object/array/string/number to true; '0', 0, false, 'f', 'F', 'false' and others to false
function convertToBool(value: any): boolean {

}

// prepares string for the newspaper: clean text from extra spaces, extra line breaks, extra redundant word boundaries (like: ',,', ';;', ',;')
function cleanText(paragraph: string): string {

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
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
