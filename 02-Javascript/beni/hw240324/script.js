/**
 * 2) Write a function that accepts an array and returns a filtered array with only the odd numbers:
 * for this function, i use the filter method.
 * the filter method creates an array to all the items that pass a test
 * (meaning if 'true' (item passed the test), item is included in the array).
 * i first generate a function taht takes one param, that param being the 'array'.
 * inside the function, i create a new array to filter out the array passed in the param,
 * and it will contain all the items that return true to this condition:
 * num % 2 !== 0 <--- returns true only for the numbers that are odd (they meet
 * the condition of their remainder *not* being 0).
 * the function then returns the array that i have created.
 */
function oddNums(arr) {
  const odd = arr.filter((num) => num % 2 !== 0);
  return odd;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(oddNums(array1));

/**
 * 3) Write a funciton that accepts an array and checks if exists an item that is "object" in the array (using .some() method)
 * for this function, i use the some method.
 * the some method returns true if a condition is met on *one or more* of the elements.
 * so i first generate a function that takes one param (the 'array').
 * inisde the function i return the return of the some method. meaning -
 * the some method returns either 'true' or 'false', so declaring inside the function to return the
 * return of the some method, means the function will return whatever the some method returns.
 * 'true' or 'false'.
 * inside the some method, i declare a condition -
 * typeof item === "object" && item !== null && !Array.isArray(item)
 * this condition means that when the some method checks for the item in teh array, it will
 * return 'true' if one (or more) item is: with a typeof object, is not 'null' (typeof
 * null also returns object), and is not an array (typeof array is also an object..).
 */
function checkObj(arr) {
  return arr.some((item) => typeof item === "object" && item !== null && !Array.isArray(item));
}
let array2 = ["string", 123, undefined, { key: "value" }, null, true, ["", ""]];
console.log(checkObj(array2));
