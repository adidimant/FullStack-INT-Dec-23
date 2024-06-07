//Convert code to static code//

class ObjectAnalyser1 {
    static calculateObjDeep(obj: any): number {
      if (obj && typeof obj == 'object') {
        const values = Object.keys(obj).map(key => obj[key]);
        return 1 + Math.max(0, ...values.map((value) => ObjectAnalyser1.calculateObjDeep(value)));
      }
      return 0;
    }
  
    static getLongestKey<T>(obj: T): keyof T | null {
      if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) {
        return null;
      }
  
      let longestKey: keyof T | '' = '';
      for (const key in obj) {
        if (key.length > (longestKey as string).length) {
          longestKey = key as keyof T;
        }
      }
      return longestKey as keyof T;
    }
  
    static isValuesConsistent<T>(obj: T): boolean | null {
      if (obj && typeof obj === 'object') {
        let type: string | undefined;
  
        const values = Object.keys(obj);
        for (let i = 0; i < values.length; i++) {
          const value = values[i];
          let currentType: string = typeof value;
          if (value === null) {
            currentType = 'null';
          } else if (Array.isArray(value)) {
            currentType = 'array';
          }
  
          if (i === 0) {
            type = currentType;
          } else if (type !== currentType) {
            return false;
          }
        }
        return true;
      }
      return null;
    }
  
    static countKeys<T>(obj: T): number {
      if (!obj || typeof obj !== 'object') {
        return 0;
      }
      return Object.keys(obj).length;
    }
  }
  
  type Student1 = {
    id: string;
    fullName: string;
    birthday: Date;
    class: string;
  }
  
  type StudentInClassTrip1 = {
    isPayed: boolean;
    preferedFood: string;
  } & Student1;
  
  const studentInClass1: StudentInClassTrip1 = {
    id: '23423423',
    fullName: 'Ofer B',
    birthday: new Date(),
    class: 'H-2',
    isPayed: true,
    preferedFood: 'regular',
  }
  
  const longestObjKey1 = ObjectAnalyser1.getLongestKey(studentInClass1);
  const objDepth1 = ObjectAnalyser1.calculateObjDeep(studentInClass1);
  const isAllValuesSameType1 = ObjectAnalyser1.isValuesConsistent(studentInClass1);
  const numberOfKeys = ObjectAnalyser1.countKeys(studentInClass1);
  
  console.log('Longest Key:', longestObjKey1);
  console.log('Object Depth:', objDepth1);
  console.log('Are all values consistent:', isAllValuesSameType1);
  console.log('Number of Keys:', numberOfKeys);
  