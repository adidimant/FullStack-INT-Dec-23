const farenDegrees = [80, 60, 88, 100, 54, 87, 48];

//HW Q1
function convertArrOfFarenToCels(arr: number[]): number[] {
    return arr.map((item) => Number((((item - 32) * 5) / 9).toFixed(2)));
}
console.log(convertArrOfFarenToCels(farenDegrees));

//HW Q2
const arrToReverse = [1, 2, 14, 2, 4, 32, 52, 31, 1, 5423, 123];

function reverseArrUsingReduce(array: number[]) {
    return array.reduce(
        (accumulator, item) => (accumulator.unshift(item), accumulator),// return accumulator
        [] as number[]
    );
}
console.log(reverseArrUsingReduce(arrToReverse));

//HW Q3
interface indexSignature {
    [index: string]: number|string;
}
const arrToObj = [1, 2, 14, 2, 4, 32, 52, 31, 1, 5423, 123,"walla"];

function getArrReturnObj(arr:(string|number)[] ) {
    return arr.reduce(
        (accumulator, item, index) => (accumulator[index] = item, accumulator),// return accumulator)
        {} as indexSignature
    );
}
console.log(getArrReturnObj(arrToObj));

//HW Q4

//HW Q5
interface Person {
    name: string;
    age: number;
    hasLongName?: boolean;
}

const peopleObj: Person[] = [
    { name: "Adi", age: 30 },
    { name: "Anastasia", age: 29 },
    { name: "Ofer", age: 25 },
    { name: "kakasdkasdk", age: 102 },
];
function checkIfOver6Characters(arr: Person[]) {
    return arr.map((person) => ({
        ...person,
        hasLongName: person.name.length > 6,
    }));
}
console.log(checkIfOver6Characters(peopleObj));
