/*  Ex1: 
    Write a mapping function that gets an array of temprature in fareneight and returns 
    the array of tempratures in celsious.
    C=(F−32)× 9/5
*/
const temperatureArr = [86,60,75,40];
function fahrenheitToCelsius(fahrenheitArr){
    return fahrenheitArr.map(item => '\n'+item+'℉ == '+Math.round((item - 32) * 5 / 9)+'°C');
}
console.log('Ex1:\nTempratures in celsious: '+fahrenheitToCelsius(temperatureArr));

/*  Ex2:
    implement the function reverse() (that accepts an array and returns reversed array) 
    using: reduce() and unshift().
    reduce() method is used to iterate over the input array.
        syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    unshift() method is used to add the element to the beginning of the array. 
*/
const arr = [21,22,23,24,25];
function reverse(arr) {
    return arr.reduce((result, currentValue) => {
        result.unshift(currentValue);
        return result;
    }, []);
}
console.log('Ex2:\nThe array is: '+arr+'\nThe reverse array is: ' +reverse(arr));


/* Ex3: 
    using reduce, implement a function that accepts an array and returns 
    an object that each key:value in the object is the index:value from array 
    (hint: the inital value of the reduce should be {}).
*/
const arrEx3 = [31,32,33,34,35];
function arrayToObject(arr) {
    return arr.reduce((obj, value, index) => {
        obj[index] = value;
        return obj;
    }, {});
}
console.log('Ex3:\nArray To Object:\nArray: ' +arrEx3+'\nObject:',arrayToObject(arrEx3));
/*
    - We use the reduce method on the input array.
    - The obj starts with an empty object {}.
    - In each iteration, we assign the current value of the array to the key of the current index in the obj object.
    - Finally, we return the obj, which contains the desired object with key-value pairs where 
      keys are the indexes of the array and values are the elements of the array.
*/


/*  Ex4
    implement the function find() (that accepts an array and a condition function) - using reduce.
*/
function find(arr,condition){
    let found =false;
    return arr.reduce((result,value)=>{
        if(!found && condition(value)){
            result=value;
            found=true;
        }
        return result;
    },result=undefined);
}
const numbers = [1, 9, 13, 4, 20, 6];
const isEven = num => num % 2 === 0;
console.log('Ex4:\nThe first element that met the condition is: '+find(numbers,isEven));
/*
    - found => A boolean variable is initialized to false.
    - We use the reduce method on the input array.
    - if(!found && condition(value)) => As long as the condition is not met.
    - If the condition is met: updates the result variable to a value that meets the condition and the found 
      variable to true so that the condition is no longer met.
    - If the condition does not change the value of result then the reduce returns the initial value  
      set for the variable result which is undefined.
*/

/*  Ex5
    implement a function that accepts an array of objects with people details and using map() 
    returns an array of the same objects but with additional key "hasLongName": true/false, 
    when it is true if the person has a name with over 6 letters. 
    example: input: [{ name: 'Adi', age: 30}, { name: 'Anastasia', age: 29}], the function should 
    return: [{ name: 'Adi', age: 30, hasLongName: false}, { name: 'Anastasia', age: 29, hasLongName: true}]
*/
let people  = [{ name: 'Adi', age: 30}, { name: 'Anastasia', age: 29}];
function addHasLongName(people) {
    return people.map(person => {
        return {...person,hasLongName: person.name.length > 6};
    });
}
console.log('Ex5:\npeople: ',people);
console.log('people with hasLongName:\n',(addHasLongName(people)));