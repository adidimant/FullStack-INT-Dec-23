"use strict";
console.log("test");
const farenDegrees = [80, 60, 88, 100, 54, 87, 48];
//HW Q1
function convertArrOfFarenToCels(arr) {
    return arr.map((item) => Number((((item - 32) * 5) / 9).toFixed(2)));
}
console.log(convertArrOfFarenToCels(farenDegrees));
// function returnObj(arr: number[]): numberDictionary {
//     let key1= -1;
//     // return arr.reduce((accumulator, currentValue) => , {});
// }
// console.log(returnObj(farenDegrees))
//HW Q4
// function findUsingReduce(arr: number[],) {
//     const initialValue = 0
//     return arr.reduce((accumulator, currentValue)=> ,initialValue)
// }
const peopleObj = [{ name: 'Adi', age: 30 }, { name: 'Anastasia', age: 29 }, { name: 'Ofer', age: 25 }, { name: 'kakasdkasdk', age: 102 }];
function checkIfOver6Characters(arr) {
    return arr.map(person => {
        if (person.name.length > 6)
            return Object.assign(Object.assign({}, person), { hasLongName: true });
        return Object.assign(Object.assign({}, person), { hasLongName: false });
    });
}
console.log(checkIfOver6Characters(peopleObj));
