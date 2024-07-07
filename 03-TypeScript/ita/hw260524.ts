// HW 260524:
// 1) implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K

function twoGenerics<T, K>(a: T, b: K): T | K{
    if (typeof a == "object") {
        return a;
    }
    return b
}


// 2) implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS

function mixedGenericsObjects<T = object, K = object>(obj1: T, obj2: K): T & K {
    return {...obj1, ...obj2}
}

// 3) Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed

function arrayTWithDuplicateNumber<T>(arg: T, duplicateNumber: number): T[] {
    return new Array(duplicateNumber).fill(arg);
}

// 4) Consider the following interface:
// interface MachineInterface {
//   turnOn: () => void;
//   turnOff: () => void;
//   reportTo: string;
//   warnLevel: 0 | 1 | 2 | 3;
//   owner: string;
// }
// Implement this interface in any machine that we have created (lesson 5-6 ts file)

interface MachineInterface {
    turnOn: () => void;
    turnOff: () => void;
    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;
  }



  class Machine implements MachineInterface{
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


  
  class PrinterMachine extends Machine {
    constructor(id: string, reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
      super(id, reportTo, warnLevel, owner);
    }
  
    createTestPrint() {
      console.log("creating a test print for machine - " + this.id);
    }
  }


  
  class LaserCutMachine extends Machine {
    constructor(id: string, reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
      super(id, reportTo, warnLevel, owner);
    }
  }
  



// 5) Understand the recursive solution we have implemented in class - calculateObjDeep




function myLogger<T, K>(param1: T, param2: T, param3: K) {
  console.log('param1 is: ', param1);
  console.log('param2 is: ', param2);
  console.log('param3 is: ', param3);
}
myLogger<string, number>("ita", "raskin", 58);