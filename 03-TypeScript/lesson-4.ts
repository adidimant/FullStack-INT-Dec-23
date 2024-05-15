// define a function 'magical' - that accepts tow parameters: 1) an array that contains number or string, 2) object that the values are only boolean. the function returns a boolean
function magical (array: Array<number | string>, obj: { [key: string]: boolean }): boolean {
  // less good solution - create an extra array contains all the obj keys, then iterate keys and if one of them (at least) is in the array - return true
  // const keys = Object.keys(obj);
  // return keys.some((key) => array.includes(key));

  // better solution - just iterate once over the given array, and check for each item if it's in the obj (keys) by using "in" keywords
  for (let i = 0; i < array.length; i++) {
    // if obj includes array[i]
    if (array[i] in obj) {
      return true;
    }
  }
  return false;
}

// OR:
type ObjBooleanValue = {
  [key: string]: boolean;
}
function magicalV2 (array: (number | string)[], obj: ObjBooleanValue) {
  // do the same up here
  return true;
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const arr = ["450", 400, 340, "1"];

arr[1].charAt(1)

function getNumbersArr(arr: Array<number>) {
  console.log(arr);
}

const obj1 = {} as any;
obj1.firstName = 'Awni';
obj1.lastName = 'Joid';
obj1["^f45g45g"] = true;

enum E {
  C, // C will get 0 (starts enumerating from 0)
  A = (() => 5)(),
  B = 1+2
}

enum E2 {
  Foo = 0,
  Bar,
  Graph,
  Buu,
}
 

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
 
/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;
 
function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");


enum Enum {
  A,
}
 
let a = Enum.A;
let nameOfA = Enum[a]; // "A"


// Class - a factory for an objects with the same structure, that has fields, functions

// PT = Point
class PT {
  private x: number;
  private y: number;
  private biggerValue: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.biggerValue = x > y ? x : y;
  }

  getX(): number {
    return this.x;
  }

  setX(x: number): void {
    this.x = x;
  }

  getY(): number {
    return this.y
  }

  setY(y: number) {
    this.y = y;
  }

  //TODO - the function returns the quadrant (רביע) of the current point
  getQuadrant() {
    
  }

  // Gets another x, y. returns the distance between our current point to the gives point x,y
  // distance = sqrt((x1-x2)^2 + (y1-y2)^2)
  //TODO - expand this function to be able to accept also a second point (receive p2: Point)
  calculateDistance(x: number, y: number): number {
    const distX = x - this.x;
    const distY = y - this.y;
    const distance = Math.sqrt(distX * distX + distY * distY);
    return distance;
  }

  //TODO the funciton should be able to get x,y OR another point p2 - and return the incline between our point to the other point
  calculateIncline() {

  }

  //TODO - the function should be able to get x,y OR another point p2 - and returns the middle Point
  calculateMiddlePoint() {

  }



}

// instances (מופעים) of the clas PT

const p1 = new PT(8, 4);
const p2 = new PT(50, 70);

