// 1 - Write a mapping function that gets an array of temprature in fareneight and returns the array of tempratures in celsious.

const fahrenheitTemperatures = [32, 68, 86, 104];

function fahrenheitToCelsius(fahrenheitArray) {
    return fahrenheitArray.map(
        function(fahrenheit) {
        return (fahrenheit - 32) * (5/9);  //(5/9): בחלק זה, אנו מחלקים את התוצאה מהשלב הראשון ב-5/9. זהו המערך הסטנדרטי להמרת טמפרטורה מפרנהייט לצלזיוס. פורמולה זו מתייחסת ליחס בין היחידות של כל אחת מהסולמות.
    });
}

const celsiusTemperatures = fahrenheitToCelsius(fahrenheitTemperatures);

onsole.log(celsiusTemperatures); // [0, 20, 30, 40]


// 2 - 2) implement the function reverse() (that accepts an array and returns reversed array) using: reduce() and unshift()

const originalArray = [1, 2, 3, 4, 5];

function reverse(array) {
    return array.reduce(function(reversedArray, currentValue) {
        reversedArray.unshift(currentValue);
        return reversedArray;
    }, []);
}

const reversedArray = reverse(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]


// 3 - using reduce, implement a function that accepts an array and returns an object that each key:value in the object is the index:value from array (hint: the inital value of the reduce should be {}).

const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

function arrayToObject(arr) {
    return arr.reduce(function(obj, value, index) {
        obj[index] = value;
        return obj;
    }, {});
}

const object = arrayToObject(array);
console.log(object); // {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K'}

//4 - implement the function find() (that accepts an array and a condition function) - using reduce.

const numbers = [1, 2, 3, 4, 5];

function find(array, conditionFn) {
    return array.reduce(function(foundItem, currentItem) {
        if (foundItem !== undefined) {
            return foundItem;
        }
        if (conditionFn(currentItem)) {
            return currentItem;
        }
        return undefined;
    }, undefined);
}

function isEven(number) {
    return number % 2 === 0;
}

const foundNumber = find(numbers, isEven);
console.log(foundNumber); //  2


//5 - implement a function that accepts an array of objects with people details and using map() returns an array of the same objects but with additional key "hasLongName": true/false, when it is true if the person has a name with over 6 letters. example: input: [{ name: 'Adi', age: 30}, { name: 'Anastasia', age: 29}], the function should return: [{ name: 'Adi', age: 30, hasLongName: false}, { name: 'Anastasia', age: 29, hasLongName: true}]

const people = [
    { name: 'omri', age: 34 },
    { name: 'naftali', age: 56 },
    { name:'dekel' , age: 56 },
    { name:'nati' , age: 34 },
    { name:'daniel' , age: 30 },
    { name:'shon' , age: 27 },
    { name:'ziv' , age: 24 },
    { name:'avigail' , age: 7 },
    { name:'tamar' , age: 6 },
    { name:'hadasa' , age: 5 },
    { name:'israel' , age: 1 },

];

function addHasLongName(array) {
    return array.map(function(person) {
        return {
            ...person,
            hasLongName: person.name.length > 6
        };
    });
}

const peopleWithLongName = addHasLongName(people);
console.log(peopleWithLongName);
