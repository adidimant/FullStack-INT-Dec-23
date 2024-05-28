//Q1
function twoGenericsReturnTOrK<T, K>(checkObj: T | K): "T" | "K" {
	if (typeof checkObj == "object") return `T`;
	else return "K";
}

console.log(twoGenericsReturnTOrK(234));

//Q2
function combineTwoObj<T, K>(obj1: T, obj2: K): (T & K) | null {
	if (typeof obj1 == "object" && typeof obj2 == "object") {
		return { ...obj1, ...obj2 };
	} else return null;
}

console.log(combineTwoObj({ key1: "asd" }, { obj2: 2435 }));

//Q3
function duplicateFirstParam<T>(gen: T, num: number): T[] {
	const arrayToReturn: T[] = [];
	for (let i = 0; i < num; i++) {
		arrayToReturn.push(gen);
	}
	return arrayToReturn;
}
console.log(duplicateFirstParam({key:`value`}, 20));


//Q4
type WarnLevel =  0 | 1 | 2 | 3;
interface MachineInterface {
  turnOn: () => void;
  turnOff: () => void;
  reportTo: string;
  warnLevel: WarnLevel;
  owner: string;
}

class Machine implements MachineInterface {
  private readonly id: string;
  public readonly reportTo: string;
  public readonly owner:string;
  public  warnLevel:WarnLevel;
  public readonly type?: string;

  constructor(reportTo: string, warnLevel:WarnLevel, owner: string, id: string, type?: string){
    this.reportTo = reportTo;
    this.owner = owner;
    this.warnLevel = warnLevel;
    this.id = id;
    this.type = type ?? `not Specified`;
  }

  turnOn():void {
    console.log("machine id: " + this.id + " turned-on");
  }

  turnOff(): void {
    console.log("machine id: " + this.id + " turned-off");
  }
}

const newMachine = new Machine("Ofer Ben Ami", 2, "adsa", "1313113456");
console.log(newMachine.turnOn());


// function calculateObjDeepRecursive<T>(obj: T): number {
// 	if (typeof obj == "object") {
// 		const values = Object.values(obj as object);
// 		return 1 + Math.max(...values.map((value) => calculateObjDeepRecursive(value)));
// 	}
// 	return 0;
// }


// function calculateObjDeep<T>(obj:T):number{
//   if(typeof obj == "object"){
//     console.log(Object.values(obj as object).map((value) => calculateObjDeep(value)))
//   }
//   return 0
// }

const obj = {
  key1:`234`,
  key2: {
    key3:{
      key4:{
        key: {
          lama: '1',
        },
        kama: 1,
      }
    },
    key11: `asdd`
  }
}
// calculateObjDeep(obj)
