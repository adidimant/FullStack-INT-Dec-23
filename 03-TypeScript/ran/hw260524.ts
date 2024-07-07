function handleGenerics<T, K>(value: T, alternative: K): T | K {
    return (typeof value === 'object' && value !== null) ? value : alternative;
  }

  function mergeObjects<T extends object, K extends object>(obj1: T, obj2: K): T & K {
    return { ...obj1, ...obj2 };
  }

  function duplicate<T>(item: T, duplicateCount: number): T[] {
    return new Array(duplicateCount).fill(item);
  }

  interface MachineInterface {
    turnOn: () => void;
    turnOff: () => void;
    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;
  }
  
  class Machine implements MachineInterface {
    reportTo: string;
    warnLevel: 0 | 1 | 2 | 3;
    owner: string;
  
    constructor(reportTo: string, warnLevel: 0 | 1 | 2 | 3, owner: string) {
      this.reportTo = reportTo;
      this.warnLevel = warnLevel;
      this.owner = owner;
    }
  
    turnOn() {
      console.log('Machine is now ON');
    }
  
    turnOff() {
      console.log('Machine is now OFF');
    }
  }
  
  const myMachine = new Machine('Admin', 2, 'John Doe');
  myMachine.turnOn();
  myMachine.turnOff();

  type AnyObject = { [key: string]: any };

function calculateObjDeep(obj: AnyObject): number {
  let depth = 1;
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const currentDepth = calculateObjDeep(obj[key]) + 1;
      if (currentDepth > depth) {
        depth = currentDepth;
      }
    }
  }
  return depth;
}

const exampleObj = {
  level1: {
    level2: {
      level3: {
        level4: {}
      }
    }
  }
};

console.log(calculateObjDeep(exampleObj)); // Output: 4