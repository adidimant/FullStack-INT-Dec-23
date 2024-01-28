let a = 7;
let b = a**2;
let c = a + b;
let d = (a + b + c) / 3;
// more calculations on b;

console.log(a); // 7
console.log(b); // 49
console.log(c); // 56
console.log(d); // 37.33

// 7 exists in some cell in the RAM (Random access memory) memory, that a is pointing to
// a is variable that points to some cell in the RAM memory, and the value there is 7

// hard disk = persistent, RAM = volatile

let e = 1;
e = 9;
e = a ** 9;

console.log(e); // 40,353,600

a = 1; // type of a -> number
a = '9'; // type of a -> string
a = undefined; // type of a -> undefined
a = '9'/'a'; // typeof a -> NaN
a = true; // type of a -> boolean
a = null; // type of a -> null

console.log(e); // still 40,353,600

// backend languages options:
// node.js, java, python, C#, GO, ruby on rails

/**
 * Your task:
 * Using google, find the way in javascript to interact with the user for requireing an input from the user
 * Your goal - read two numbers inputs from the user, save it in variables a & b, then calculate a**b, and print it to the console
 */

let a = prompt('please write any number', '');
a = parseInt(a);
let b = parseInt(prompt('please write the second number', ''));
let c = a ** b;
console.log(c);

/**
 * The code above takes two inputs from the user, convert each one of them into a number and calculates a to the power of b.
 * Take code above, improve it by adding some validation that checks if typeof a is number and typeof b is number
 * if both are numbers - only then perform the calculation of c, and console.log(c)
 */

// typeof a => returns 'number' or 'string' etc.

/* Ziv's solution: */

let a = prompt("Please write any number", "");
let b = prompt("Please write any second number", "");

// בדיקה האם שני הקלטים הם מספרים
if (!isNaN(a) && !isNaN(b)) {
  a = parseInt(a);
  b = parseInt(b);
  console.log("Both inputs are numbers.");

  // חישוב c כאשר שני הקלטים הם מספרים
  let c = a ** b;
  console.log("The sum of the two numbers is: " + c);
} else { // isNaN(a) || isNaN(b)
  console.log("At least one of the inputs is not a number.");
  // טיפול כאן למקרה של קלט שאינו מספר
}

// Write a function that recieves any number, and returns the last digit

// 928
// 1799
function getLastDigit(number) {
  let value = number % 10;
  return value;
}

console.log(getLastDigit(1799));