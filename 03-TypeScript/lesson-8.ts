const obj1 = { 
  a: { 
    n: { 
      key1: 6,
      key2: {
        key3: {
          key4: 'my-str',
        }
      }
    },
    c: 6,
    d: 9,
  },
  b: '8'
};
calculateObjDeep(obj1); let values;
values = [{ 
  n: { 
    key1: 6,
    key2: {
      key3: {
        key4: 'my-str',
      }
    }
  },
  c: 6,
  d: 9,
}, '8'];
return 1 + Math.max(...[calculateObjDeep({ 
  n: { 
    key1: 6,
    key2: {
      key3: {
        key4: 'my-str',
      }
    }
  },
  c: 6,
  d: 9,
}), calculateObjDeep('8')]);
return 1 + Math.max(...[1+Math.max(...[calculateObjDeep({ 
  key1: 6,
  key2: {
    key3: {
      key4: 'my-str',
    }
  }
}), calculateObjDeep(6), calculateObjDeep(9)]), 0]);
return 1 + Math.max(...[1+Math.max(...[
  1 + Math.max(...[
    calculateObjDeep(6), calculateObjDeep({
      key3: {
        key4: 'my-str',
      }
    }), 
  ]), 0, 0]), 0]);
  return 1 + Math.max(...[1+Math.max(...[
    1 + Math.max(...[
      0, 1 + Math.max(...[calculateObjDeep({
        key4: 'my-str',
      })]), 
    ]), 0, 0]), 0]);

    return 1 + Math.max(...[1+Math.max(...[
      1 + Math.max(...[
        0, 1 + Math.max(...[1+Math.max(...[calculateObjDeep('my-str')])]), 
      ]), 0, 0]), 0]);

      return 1 + Math.max(...[1+Math.max(...[
        1 + Math.max(...[
          0, 1 + Math.max(...[1+Math.max(...[0])]), 
        ]), 0, 0]), 0]);

      return 1 + 4;

function calculateObjDeep<T>(obj: T) {
  if (typeof obj == 'object') {
    const values = Object.values(obj as object);
    return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
  }
  return 0;
}


// Dealing with two generics:

function myLogger<T, K>(param1: T, param2: T, param3: K) {
  console.log('param1 is: ', param1);
  console.log('param2 is: ', param2);
  console.log('param3 is: ', param3);
}

myLogger<string,number>("hello","Awni",10);

function myLoggerWithOr<T, K>(param1: T, param2: T | boolean, param3: K) {
  console.log('param1 is: ', param1);
  console.log('param2 is: ', param2);
  console.log('param3 is: ', param3);
}

myLoggerWithOr<string,number>("hello",true,10); // still works

type User = {
  name: string;
  age: number;
  height: number;
  weight: number;
};

myLogger<string, User>("hello", "Anwi", {
  name: 'awni',
  age: 28,
  height: 178,
  weight: 77,
});

// H.W:
// 1) implement a function that deals with two generics T,K (1 param is type T, second param is type K), if param1 is an object it return param1, otherwise - returns param2
function f1<T,K>(param1: T, param2: K): T | K {
  if (typeof param1 == 'object') {
    return param1;
  }
  return param2;
}


// 2) implement a function that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
function mergeObjects<T,K>(obj1: T, obj2: K): T & K {
  return {
    ...obj1,
    ...obj2
  };
}

// 3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed
function duplicateGeneric<T>(param1: T, duplicateNum: number): T[] {
  return new Array(duplicateNum).fill(param1);
  // or: return new Array(duplicateNum).map(() => param1);
}
/**
 4) Consider the following interface:
Implement this interface in any machine that we have created (from lesson 5-6 ts file)
 */

interface MachineInterface {
  turnOn: () => void;
  turnOff: () => void;
  reportTo: string;
  warnLevel: 0 | 1 | 2 | 3;
  owner: string;
}

class Machine_V2 implements MachineInterface {
  protected id: string;
  public readonly field2: number; // can change only inside the class, but can only read (and not modify) this field from outside the class
  reportTo: string;
  warnLevel: 0 | 1 | 2 | 3;
  owner: string;

  constructor(id: string, reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
    this.id = id;
    this.field2 = 8;
    this.reportTo = reportTo;
    this.warnLevel = warnLevel;
    this.owner = owner;
  }

  turnOn() {
    console.log("machine id: " + this.id + "turned-on");
  }

  turnOff() {
    console.log("machine id: " + this.id + "turned-off");
  }
}

const machine2_1 = new Machine_V2('adadasdasf43', 'ziv873@gmail.com', 2, 'Ami&Shults');
machine2_1.warnLevel = 1;

// Notice - no need for doing "implements MachineInterface", since PrinterMachine2 & LaserCutMachine2a extends MachineV2, so they get all the fields by default (in particular - the public fields)

class PrinterMachine2 extends Machine_V2 {
  constructor(id: string, reportTo: string, warnLevel: 0|1|2|3, owner: string) {
    super(id, reportTo, warnLevel, owner);
  }

  createTestPrint() {
    console.log("creating a test print for machine - " + this.id);
  }
}

const printerMachine2_1 = new PrinterMachine2('asdasda', 'ziv873@gmail.com', 1, 'Ami&Shults');
printerMachine2_1.reportTo = 'Adi';

class LaserCutMachine2 extends Machine_V2 {
  constructor(id: string, reportTo: string, warnLevel: 0|1|2|3, owner: string) {
    super(id, reportTo, warnLevel, owner);
  }
}

// EOH (End of HW)

// continue lesson:

// NOTE - do not confuse with the generic <Type> sign, with the Array<Type> - that tells which type is in the Array
// it is also relevant for example for async functions that return a Promise<resolved-type>
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

function identity2<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: { <Type>(arg: Type): Type } = identity2;

// generic interfaces:
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity2: GenericIdentityFn<number> = identity;

// generic classes:

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}
 
let myGenericNumber = new GenericNumber<number>(0, function (x, y) {
  return x + y;
});

// use this generic class with a string:
let stringNumeric = new GenericNumber<string>("", function (x, y) {
  return x + y;
});
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test")); // "" + "test" => "test"

function loggingIdentity2<Type>(arg: Type): Type {
  console.log(arg.length); // Property 'length' does not exist on type 'Type'.
  return arg;
}

// to fix this:
interface TypeWithLength {
  length: number;
}

function loggingIdentity3<Type extends TypeWithLength>(arg: Type): Type {
  console.log(arg.length); // Property 'length' does not exist on type 'Type'.
  return arg;
}

// or using type:
type TypeWithLengthV2 = {
  length: number;
}

function loggingIdentity4<Type>(arg: Type & TypeWithLengthV2): Type & TypeWithLengthV2 {
  console.log(arg.length); // Property 'length' does not exist on type 'Type'.
  return arg;
}

/**
Using Type Parameters in Generic Constraints
You can declare a type parameter that is constrained by another type parameter. For example, here we’d like to get a property from an object given its name. We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, so we’ll place a constraint between the two types:
 */


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a"); // 1
getProperty(x, "m"); // typescript error

// write the function getLongestKey, that recieves an object and needs to return it's longest 1st level key, and retruns the longest key
// your goals is to it in the most accurate way in TS (generic, and exactly what you expect to return - not just "string")
function getLongestKey<T>(obj: T): keyof T | null {
  if (!obj || typeof obj != 'object' || Object.keys(obj).length == 0) {
    return null;
  }

  let longestKey: string = '';

  const keys = Object.keys(obj);
  keys.forEach((key: string) => {
    if (key.length > longestKey.length) {
      longestKey = key;
    }
  });

  return longestKey as keyof T;
}

function getLongestKey2<T>(obj: T): keyof T | null {
  if (!obj || typeof obj != 'object' || Object.keys(obj).length == 0) {
    return null;
  }

  let longestKey: keyof T | '' = '';
  for (const key in obj) {
      if (key.length > (longestKey as string).length) {
          longestKey = key;
      }
  }
  return longestKey as keyof T;
}


class ObjectAnalyser<T> {
  private obj: T;

  constructor(obj: T) {
    this.obj = obj;
  }

  // getters/setters

  calculateObjDeep() {
    if (this.obj && typeof this.obj == 'object') {
      const values = Object.values(this.obj as object);
      return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
    }
    return 0;
  }

  getLongestKey(): keyof T | null {
    if (!this.obj || typeof this.obj != 'object' || Object.keys(this.obj).length == 0) {
      return null;
    }
  
    let longestKey: keyof T | '' = '';
    for (const key in this.obj) {
        if (key.length > (longestKey as string).length) {
            longestKey = key;
        }
    }
    return longestKey as keyof T;
  }

  /**
   @returns boolean indicating that all the values have the same type, if received empty value or non-object - returns null
   */
  isValuesConsistent(): boolean | null {
    if (this.obj && typeof this.obj == 'object') {
      let type;

      const values = Object.values(this.obj);
      for (let i = 0; i < values.length; i++) {
        const value = values[i];
        let currentType: typeof value | 'null' | 'array' = typeof value;
        if (value == null) {
          currentType = 'null';
        }

        if (Array.isArray(value)) {
          currentType = 'array';
        }

        if (i == 0) {
          type = currentType;
        } else if (type != currentType) {
          return false;
        }
      }
      return true;
    }
    return null;
  }
}

type Student = {
  id: string;
  fullName: string;
  birthday: Date;
  class: string;
}

type StudentInClassTrip = {
  isPayed: boolean;
  preferedFood: string;
} & Student;

const studentInClass = {
  id: '23423423',
  fullName: 'Ofer B',
  birthday: new Date(),
  class: 'H-2',
  isPayed: true,
  preferedFood: 'regular',
}

const objectAnalyzer = new ObjectAnalyser<StudentInClassTrip>(studentInClass);
const longestObjKey = objectAnalyzer.getLongestKey();
const objDepth = objectAnalyzer.calculateObjDeep();
const isAllValuesSameType = objectAnalyzer.isValuesConsistent();

// static functions as we know so far:
Math.min
Date.now()
Promise.resolve()

/**
 next lesson:
 * static classes & functions
 * declare
 * last parts from TS docs
 * import/export of modules
 */

/**
 * links:
 * https://www.typescriptlang.org/docs/handbook/2/basic-types.html
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * https://www.typescriptlang.org/docs/handbook/2/functions.html
 * https://www.typescriptlang.org/docs/handbook/2/objects.html
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 * https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 * https://www.typescriptlang.org/docs/handbook/2/classes.html
 */