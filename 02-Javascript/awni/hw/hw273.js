// 1) Write a mapping function that gets an array of temprature in fareneight and returns the array of tempratures in celsious.

function convertFahToCel(fahArray) {
    return fahArray.map(f => (5 / 9) * (f - 32));
};

const fahrTemperratures = [30, 38, 20, 18, 28, 18, 5, 0];
const celTemperratures = convertFahToCel(fahrTemperratures);
console.log(celTemperratures);


// 2) implement the function reverse() (that accepts an array and returns reversed array) using: reduce() and unshift()

function reverseArray(array) {
    return array.reduce((v, a) => { v.unshift(a); return v; }, []);
}

const originalArray = [1, 2, 3, 4, 5, 77, 88, 325, 11, 34, 56];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);


// 3) using reduce, implement a function that accepts an array and returns an object that each key:value in the object is the index:value from array (hint: the inital value of the reduce should be {}).


function arrToObj(array) {
    return array.reduce((obj, element, idx) => {
        obj[idx] = element;
        return obj;
    }, {});
}

const sampleArr = ['apple', 'banana', 'orange', 'grape', [34, 54, 22, 50, 120, [12, 44, 2223, 456, 10091]]];
const ArrAsObj = arrToObj(sampleArr);

console.log(ArrAsObj);


// 4) implement the function find() (that accepts an array and a condition function) - using reduce.

function find(array, conditionFunc) {
    return array.reduce((foundElement, currentElement) => {
        if (foundElement) return foundElement;
        if (conditionFunc(currentElement)) return currentElement;
        return undefined;
    }, undefined);
}

const numbers = [1, 2, 3, 4, 5];
const foundNumber = find(numbers, element => element > 3);

console.log(foundNumber);



// 5) implement a function that accepts an array of objects with people details and using map() 
// returns an array of the same objects but with additional key "hasLongName": true/false, when it is true 
// if the person has a name with over 6 letters. example: input: [{ name: 'Adi', age: 30}, { name: 'Anastasia', age: 29}], 
// the function should return: [{ name: 'Adi', age: 30, hasLongName: false}, { name: 'Anastasia', age: 29, hasLongName: true}]


function addHasLongNameKey(people) {
    return people.map(person => ({
        ...person,  hasLongName: person.name.length > 6
    }));
}

// Example usage
const people = [
    { name: 'Adi', age: 30 },
    { name: 'Anastasia', age: 29 },
    { name: 'ali', age: 30 },
    { name: 'abedalrahman', age: 32 },
    { name: 'samer', age: 43 },
    { name: 'jalilah', age: 21 },
    { name: 'moatasem', age: 34 },
    { name: 'awni', age: 18 },
    { name: 'ihab', age: 23 },
    { name: 'abdallah', age: 33 },

];

const updatedPeople = addHasLongNameKey(people);
console.log(updatedPeople);


