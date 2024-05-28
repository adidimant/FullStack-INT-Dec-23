// implement a function that deals with two generics T,K, if T is an object it return T, otherwise - returns K
function f1<T,k>(obj: T, val: k): T | k{
    if (typeof obj === 'object'){
        return obj;
    }
    return val;
}

//implement a funciton that deals with two generic objects T,K. and returns the mixed objects of them 
//(connect them together to one object) - be accurate with TS
function f2<T,k>(obj1: T, obj2: k): T & k{
    return {...obj1, ...obj2};
}

//Create a function that recieves some generic T and a duplicate number, and returns an array of (the same) T, 
//with the length of the duplicate number needed
function f3<T>(arg: T, duplicate: number): T[]{
    const result: T[]=[];
    for(let i =0;i<duplicate;i++){
        result.push(arg);
    }
    return result;
}

//Consider the following interface:
interface MachineInterface {
    turnOn: () => void;
    turnOff: () => void;
    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;
}
//Implement this interface in any machine that we have created (lesson 5-6 ts file)

class Machine implements MachineInterface{
    protected id: string;
    public readonly field2: number; // can change only inside the class, but can only read (and not modify) this field from outside the class
    public reportTo: string
    public warnLevel: 0 | 1 | 2 | 3;
    public owner: string;

    constructor(id: string) {
      this.id = id;
      this.field2 = 8;
    }
  
    turnOn(): void {
      console.log("machine id: " + this.id + "turned-on");
    }
  
    turnOff(): void{
      console.log("machine id: " + this.id + "turned-off");
    }
}

class PrinterMachine extends Machine implements MachineInterface{
    constructor(id: string) {
        super(id);
    }
    createTestPrint() {
        console.log("creating a test print for machine - " + this.id);
    }
}
  
class LaserCutMachine extends Machine implements MachineInterface {
    constructor(id: string) {
        super(id);
    }
}
  