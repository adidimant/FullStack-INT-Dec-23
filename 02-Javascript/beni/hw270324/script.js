/**
 * 1) Write a mapping function that gets an array of tempratures in fareneight and returns the array of tempratures in celsious.
 *
 * i can do it by using an arrow function inside the map method, or by creating an anonymous function outside and using it as the map param.
 * for this exercise, i choose the latter.
 * first, i create a 'convert' constant which i will use as an anonymous function. (const convert = () => {})
 * it returns a formula to convert fareneight to celsius, using it's param as the fareneight input temperature.
 * the formula subtracts 32, multiplies by 5, divides it by 9, runs 'toFixed()' function on the result to get rid of the decimals, and adds a '°' symbol, making it a string. example:
 * ((param - 32) * 5 / 9).toFixed(0) + "°"; <-- returns a string because of the last code.
 * then, i create a 'fareneightToCelsius' function that takes one param (an array).
 * inside the function i declare a new 'celsiusArr' array which will contain all the celsius-converted fareneight temperatures.
 * to do that, i assing to that array (celsiusArr) the array that was inputted in the function's param (celsiusArr = param-of-the-main-function), and then i run the map method on it.
 * the map method iterates over an array's elements, each iteration it runs the code inside it and returns the result of that code,
 * ultimately returning a new array with each element being the return value of each iteration. so in my example: 'celsiusArr = param-of-the-main-function.map()'.
 * the map function will take the 'convert' function to run on each element and return whatever the 'convert' function returns, adding it to the 'celsiusArr' array.
 * i then return the finished 'celsiusArr'.
 */
const convert = (tempF) => {
  return (((tempF - 32) * 5) / 9).toFixed(0) + "°"; // <-- prettier extension adds unnecessary parentheses to the formula -->(<-- (tempF - 32) * 5 -->)<-- / 9
};
function fareneightToCelsius(array) {
  const celsiusArr = array.map(convert);
  return celsiusArr;
}
const fareneightTemperatures = [68, 80, 112, 94, 90];
const celsiusTemperatures = fareneightToCelsius(fareneightTemperatures);
console.log("fareneight: ", fareneightTemperatures);
console.log("celsius: ", celsiusTemperatures);

/**
 * 2) implement the function reverse() (that accepts an array and returns reversed array) using: reduce() and unshift().
 *
 * this time, i will not use an anonymous function using a constant. instead, i will use an arrow function inside the 'reduce' method.
 * the reduce method takes a callback function argument and an optional value second argument.
 * the callback function's first argument is an accumulator, it is accumulated according to what the function returns.
 * the callback function's second argument is the current element being processed in the array.
 * i can use that logic to create a reverse function this way:
 * first i will create a function that takes an array as the param.
 * inside the function, i return the reduce method on the param of the main function <-- return param.reduce();
 * in the first argument, i will pass a callback function that takes in it's parameters:
 * the accumulator ('newArr' - the new array which i will add new items to each iteration) and the element that is currently being processed (item).
 * each iteration, the callback function runs 'unshift(the-item-that-is-being-processed)' on the newArr accumulator <-- newArr.unshift(item);
 * i then return the newArr, and in the next iteration the newArr will contain the items that were unshifted before.
 * in the second argument of the reduce method, i give it an inital value of an empty array, declaring that 'newArr' is an empty array when the method is initialized.
 */
function reverseFromReduce(array) {
  return array.reduce((newArr, item) => {
    newArr.unshift(item);
    return newArr;
  }, []);
}
const array1 = ["a", "b", "c", "d", "e", "f"];
const reversedArray1 = reverseFromReduce(array1);
console.log("array1:", array1);
console.log("reversed array1:", reversedArray1);

/**
 * 3) using reduce, implement a function that accepts an array and returns an object that each key:value in the object is the index:value from array (hint: the inital value of the reduce should be {}).
 *
 * the third argument of the 'reduce' method's callback function is the index of the current element being processed in the array.
 * it will start from 1 if no initial value is provided to the reduce method (gotta be careful here).
 * to implement this, i will first create a function that takes an array as the param.
 * inisde the function i return the reduce method on the param <-- return param.reduce();
 * inside the reduce method's callback function, i provide the accumulator (newObj), the item being processed (item), *AND* the current index (index).
 * the callback function will create a new key in the object, that key being the index, and assing the item being processed as the value for that key <-- newObj[index] = item;
 * it will then return the accumulated object <-- return newObj;
 * the second argument of the reduce method will be {}. declaring that 'newObj' is {}.
 */
function arrayToObj(array) {
  return array.reduce((newObj, item, index) => {
    newObj[index] = item;
    return newObj;
  }, {});
}
const objFromArray1 = arrayToObj(array1);
console.log("object from array1:", objFromArray1);

/**
 * 4) implement the function find() (that accepts an array and a condition function) - using reduce.
 *
 * first i create a main function that accpets an array and a condition function.
 * inside the main function, i return the reduce method, activated on the array param of the main function <-- return array.reduce();
 * i give the callback function of the reduce method 2 arguments, the status (accumulator), and the item (item being processed in the iteration).
 * inside the callback function, i start with an if statement that checks if the status is NOT 'not found'. if it is NOT 'not found', it will continue to return whatever is in the status (accumulator).
 * i proceed with another if statement that checks if the condition function param passed in the main function, is true when triggered on the item being iterated on.
 * if it is true, it returns the item, changing the status accumulator from 'not found' to the item.
 * then, if it didn't return with these 2 if statements, it just returns the status as it is, as it is still 'not found'.
 * in the second argument of the reduce method, i declare the status accumulator to be 'not found'.
 * so with this logic, the reduce will return the item when the condition in the main function is true, otherwise it will return 'not found'.
 *
 * for the condition function, i will make something simple to check if it's param is smaller than some number <-- checkNum(num) { return num < some-numebr};
 */
function findInArray(array, condition) {
  return array.reduce((status, item) => {
    if (status !== "not found") {
      return status;
    }
    if (condition(item)) {
      return item;
    }
    return status;
  }, "not found");
}
function checkNum(num) {
  return num < 22 && num > 20;
}
const nums = [30, 54, 6, 21, 2, 5];
const find = findInArray(nums, checkNum);
console.log("nums", nums);
console.log("find checkNum in nums:", find);

/**
 * 5) implement a function that accepts an array of objects with people details and using map() returns an array of the same objects
 * but with additional key "hasLongName": true/false, when it is true if the person has a name with over 6 letters.
 * example: input: [{ name: 'Adi', age: 30}, { name: 'Anastasia', age: 29}],
 * the function should return: [{ name: 'Adi', age: 30, hasLongName: false}, { name: 'Anastasia', age: 29, hasLongName: true}]
 *
 * again, 2 options here with an anonymous function from the outside. here i will use an arrow function in the map method.
 * the map method iterates over an array's elements and returns a new array containing the result of a code taht was triggered in each iteration on each element.
 * first i will create a function that accepts an array <-- function checkName(array);
 * inside the function i create a new array called newArr <-- const newArr = [];
 * instead of making it an empty array, i will have to assign it a map method that runs on the array passed to the main function <-- const newArr = param.map();
 * inside the map method i will create a function that checks if the current person element that is being processed has a name longer than 6 letters,
 * example: <-- array.map(person => { if (person.name.length > 6) { return {...person, hasLongName: true} }); <-- else same but with false.
 * i then return the new array in the main function <-- function checkName(array) { const newArr = map-fn{..}; return newArr; }
 * UPDATE:
 * i can just return the map method instead of creating a new array and returning it at the end, since the map already returns a new array.
 * so i just need to delete the 'const newArr = ' and return the entire 'array.map()' function <-- return array.map(all-the-code-i-wrote).
 */
function checkName(array) {
  return array.map((person) => {
    if (person.name.length > 6) {
      return { ...person, hasLongName: true };
    } else return { ...person, hasLongName: false };
  });
}
const people = [
  { name: "Adi", age: 30 },
  { name: "Anastasia", age: 29 },
  { name: "Benjamin", age: 24 },
  { name: "Azul", age: 17 },
];
const hasLongName = checkName(people);
console.log("people:", people);
console.log("people with hasLongName:", hasLongName);
