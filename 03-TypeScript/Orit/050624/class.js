"use strict";
class ObjectAnalyser2 {
    constructor(obj) {
        this.obj = obj;
    }
    // getters/setters
    static calculateObjDeep(obj) {
        if (obj && typeof obj == 'object') {
            const values = Object.values(obj);
            return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
        }
        return 0;
    }
    static getLongestKey(obj) {
        if (!obj || typeof obj != 'object' || Object.keys(obj).length == 0) {
            return null;
        }
        let longestKey = '';
        for (const key in obj) {
            if (key.length > longestKey.length) {
                longestKey = key;
            }
        }
        return longestKey;
    }
    /**
     @returns boolean indicating that all the values have the same type, if received empty value or non-object - returns null
     */
    static isValuesConsistent(obj) {
        if (obj && typeof obj == 'object') {
            let type;
            const values = Object.values(obj);
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                let currentType = typeof value;
                if (value == null) {
                    currentType = 'null';
                }
                if (Array.isArray(value)) {
                    currentType = 'array';
                }
                if (i == 0) {
                    type = currentType;
                }
                else if (type != currentType) {
                    return false;
                }
            }
            return true;
        }
        return null;
    }
    /* function gets a generic. if it's an object it counts all the values. */
    static countTotalValues(obj) {
        function countValues(o) {
            if (o === null || typeof o !== 'object') {
                return 0;
            }
            let insideCount = 0;
            for (const key in o) {
                if (Object.prototype.hasOwnProperty.call(o, key)) {
                    let value = o[key];
                    if (typeof value === 'number') {
                        insideCount++;
                    }
                    else if (typeof value === 'object') {
                        insideCount += countValues(value);
                    }
                }
            }
            return insideCount;
        }
        return countValues(obj);
    }
}
const studentInClass1 = {
    id: '23423423',
    fullName: 'Ofer B',
    birthday: new Date(),
    class: 'H-2',
    isPayed: true,
    preferedFood: 'regular',
};
//const objectAnalyzer = new ObjectAnalyser<StudentInClassTrip>(studentInClass);
const objectToAnalyze;
const longestObjKey1 = ObjectAnalyser2.getLongestKey(objectToAnalyze);
const objDepth1 = ObjectAnalyser2.calculateObjDeep(objectToAnalyze);
const isAllValuesSameType1 = ObjectAnalyser2.isValuesConsistent(objectToAnalyze);
