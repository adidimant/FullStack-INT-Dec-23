// implement a function that deals with two generics T,K, if T is an object it return T, otherwise - retur
function returnTypeBasedOnObj<T, K>(input: T, defValue: K): T | K {
    if (typeof input === "object" && input !== null && !Array.isArray(input)) {
        return input;
    }
    return defValue;
}

const obj = { a: 1, b: 2 };
const num = 42;
const str = "hello World";
const arr = [1, 2, 3];


const res1 = returnTypeBasedOnObj(obj, num);
const res2 = returnTypeBasedOnObj(num, str);
const res3 = returnTypeBasedOnObj(str, arr);
const res4 = returnTypeBasedOnObj(arr, str);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);


//implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them (connect them together to one object) - be accurate with TS

function mergeObjs<T, K>(obj1: T, obj2: K): T & K {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { e: 5, f: 6, z: 7, y: 8 };

const mergeObj = mergeObjs(obj1, obj2);

console.log(mergeObjs);



//Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, with the length of the duplicate number needed

function duplicate<T>(item: T, count: number): T[] {
    return Array(count).fill(item);
};

const duplicateNums = duplicate(5, 3);
const duplicateStrs = duplicate('Hello', 3);

console.log(duplicateNums);
console.log(duplicateStrs);


// Implement this interface in any machine that we have created (lesson 5-6 ts file)

interface MachineInterface {
    turnOn: () => void;
    turnOff: () => void;
    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;
}

class Matchin implements MachineInterface {
    protected id: string;
    public readonly filed2: number;

    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;

    constructor(id: string, reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
        this.id = id;
        this.filed2 = 8;
        this.reportTo = reportTo;
        this.warnLevel = warnLevel;
        this.owner = owner;
    }

    turnOn() {
        console.log("Machine ID: " + this.id + " turned on");
    }

    turnOff() {
        console.log("Machine ID: " + this.id + " turned off");
    }

    
}


const myMachin = new Matchin("12345", "Admin", 1, "Awni j");

console.log(myMachin.reportTo);
console.log(myMachin.warnLevel);
console.log(myMachin.owner);
console.log(myMachin.filed2);


myMachin.turnOn();
myMachin.turnOff();



