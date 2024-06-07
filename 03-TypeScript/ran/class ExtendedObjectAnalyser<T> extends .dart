class ExtendedObjectAnalyser<T> extends ObjectAnalyser<T> {
  constructor(obj: T) {
    super(obj);
  }

  getMinValue(): number | null {
    if (typeof this.obj !== 'object' || this.obj === null) {
      return null;
    }

    const values = Object.values(this.obj);
    let minValue: number | null = null;

    for (const value of values) {
      if (typeof value === 'number') {
        if (minValue === null || value < minValue) {
          minValue = value;
        }
      } else if (typeof value === 'object' && value !== null) {
        const nestedMin = new ExtendedObjectAnalyser<any>(value).getMinValue();
        if (nestedMin !== null && (minValue === null || nestedMin < minValue)) {
          minValue = nestedMin;
        }
      }
    }

    return minValue;
  }
}

const complexObject = {
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

const extendedAnalyzer = new ExtendedObjectAnalyser(complexObject);
const longestKey = extendedAnalyzer.getLongestKey();
const objDepth = extendedAnalyzer.calculateObjDeep();
const isConsistent = extendedAnalyzer.isValuesConsistent();
const minValue = extendedAnalyzer.getMinValue();

console.log('Longest Key:', longestKey);
console.log('Object Depth:', objDepth);
console.log('Values Consistent:', isCons​⬤