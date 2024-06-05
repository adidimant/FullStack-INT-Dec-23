//1
//implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K

function objOrNot<T , K>(value:T, fallback:K):T | K {
    if (typeof value == "object" && value != null)
        return value;
    return fallback;
};

//2
//implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS
function connectingObjects<T, K>(obj1:T , obj2:K):T & K {
    return{...obj1, ...obj2};
};

//or

function connectingObjects2<T extends object, K extends object>(obj1:T ,obj2:K ):T & K {
    return{...obj1, ...obj2};
};

//3
//Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed

function doubleNumber<T>(value:T , count:number):T[] {
    return Array(count).fill(value);
};

//The fill function is a function that receives a number and the number of times to duplicate the number

//4

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
    public reportTo: string;
    public warnLevel: 0 | 1 | 2 | 3;
    public owner: string;
  
    constructor(id: string ,field2:number, reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
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
  };

  
  

