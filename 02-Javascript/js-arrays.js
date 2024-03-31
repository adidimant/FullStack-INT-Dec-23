const arr = [];
arr.push(1);
arr.push(2);
// [1,2]

// get the first item in the array:
let firstItem = arr[0];

const arrClone = [...arr];

// prints the second item in the arr:
console.log(arr[1]);
// prints the number of items in the array:
console.log(arr.length);
// prints the item in the last position in the arr:
console.log(arr[arr.length - 1]);
// prints the item in the last position -1 of the arr:
console.log(arr[arr.length - 2]);

const arr2 = [1, true, 'hello', {name: 'Lorena'}, [1,2,3], () => {console.log('hello')}, null, NaN, undefined];

for (let i=0; i < arr2.length ; i++) {
  if (arr2[i] == null || arr[i] == undefined) {
    continue; // stop this iteration & continue to the next iteration of the for loop
  }
  console.log(arr2[i]);
}

// running from the end to the beginning of the array
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr2[i] != null && arr2[i] != undefined) {
    console.log(arr2[i]);
  }
}

const arr3 = [5,6,7];
const arr4 = [9,8,7];
const arr5 = [...arr1, ...arr2]; // concat both arrays
// or we also can use:
const arr6 = arr4.concat(arr5);

arr4.push(5); // [9,8,7,5]
arr4.pop(); //[9,8,7]
let lastArr4Item = arr4.pop(); // arr4: [9,8], lastArr4Item: 7

// copy all of arr3 content from index 0 to (last index -1):
const arr7 = arr3.copyWithin(0, 0, arr3.length -2);

// fills the first two items in the array with undefined:
arr3.fill(undefined, 0, 2);

const soccerGardenChildrens = [
  { id: '3083457384', gender: 'Male'},
  { id: '3083457384', gender: 'Male'},
  { id: '3083457384', gender: 'Male'},
  { id: '3083457384', gender: 'Male'},
  { id: '3083457384', gender: 'Male'},
  { id: '3083457384', gender: 'Female'},
];

const isAllBoys = soccerGardenChildrens.every((child) => {
  if (child.gender == "Male") {
      return true;
  }
 return false;
 });
 // we can do also:
 const isAllBoys2 = soccerGardenChildrens.every((child) => child.gender == "Male");

 const hasAnyBoy = soccerGardenChildrens.some((child) => {
  if (child.gender == "Male") {
      return true;
  }
  return false;
 });

 const allWomen = soccerGardenChildrens.filter((child) => {
  if (child.gender == "Female") {
    return true;
  }
  return false;
 }); // returns an array of all women

// returns the first item that fulfills the condition of the function
const firstMale = soccerGardenChildrens.find((child) => {
  if (child.gender == "Male") {
      return true;
  }
  return false;
 });

 const isExistMale = !!firstMale;

 // find the index of the first element in the array that fulfilles the condition. if not found - returns -1
 const firstMaleIndex = soccerGardenChildrens.findIndex((child) => {
  if (child.gender == "Male") {
      return true;
  }
  return false;
 });

// swap between arr[2] arr[8]:
const temp = arr[2];
arr[2] = arr[8];
arr[8] = temp;

const simpleArr = [5, 6, 7, 14, 15, 9, 10, 9, 13];

// forEach:
// print all items+1 with their indexes
simpleArr.forEach((item, index) => {
  console.log(index, item + 1);
});

// increment by 1 all array items:

simpleArr.forEach((index) => {
  simpleArr[index]++;
});

simpleArr.includes(7) // true

const complexArr = [[12, 35], [78,66], [5,6]];
complexArr.flat();

const complexArr2 = [[12, [35]], [78,66], [5,6]];
complexArr2.flat(2); // needs two levels of flatting in order to create the proper array

const complexArr3 = [[12, 35], [78,66], [5,6]];
// check if one of the mini-arrays contains 123
complexArr3.some((miniArr) => miniArr.includes(123));

simpleArr.indexOf(7); // 2

// returns true/false if is array
Array.isArray(simpleArr);

const stringRepresentation = '(' + simpleArr.join('),(') + ')'; // '(5),(6),(7),(14),(15),(9),(10),(9),(13)'

const registeredStudents = ['Moshe', 'Eyal', 'Ita', 'Lorena', 'Awni', 'Adi'];
const lastStudent = registeredStudents.pop(); // remove the last item in the array (and return in)
const summary = "The registered students are: " + registeredStudents.join(',') + ' and ' + lastStudent; // 'The regsitered students are: Moshe, Eyal, Ita, ... and Adi'

// running from the end to the beginning
for (let i =arr.length -1; i >= 0; i--) {

}
// running from the beginning to the end
for (let i =0; i< arr.length; i++) {
    console.log(i);
}

// or (same to the for loop above):
for (const i of simpleArr.keys()) {
  console.log(i);
}

const simpleArr2 = [5, 6, 7, 14, 15, 9, 10, 9, 13, 7];
simpleArr2.indexOf(7); // 2
simpleArr2.lastIndexOf(7); // 9

// map:
// map all items to their value + 100:
const increasedArray = simpleArr.map((value) => {
  return value + 100;
}); // [105, 106, 107, 114, 115, 109, 110, 109, 113, 107]

// map the array to oddEvenAnswers (each cell contains true if odd, otherwise false):
const oddEvenAnswers = simpleArr.map((value) => value % 2 == 1); // [true, false, true, false, true, true, false, true, true, true]

simpleArr.reverse(); // [7, 13, 9, 10, 9, 15, 14, 7, 6, 5]

simpleArr.shift(); // removes the first element and returns it (returns 7)

const simpleArr3 = [6, 7, 14, 15, 9, 10, 9, 13, 7];
simpleArr3.slice(0,4); // [6, 7, 14, 15]

simpleArr.slice(2,4); // [14,5] - get the third and fourth items

[1,2,3,4,5,89,10, 3,6,1,0].sort((a,b) => a-b); // [0, 1, 1, 2, 3, 3, 4, 5, 6, 10, 89]

let simpleArr4 = [10, 13, 14, 15, 6, 7, 7, 9, 9];
simpleArr.splice(1) // returns [13, 14, 15, 6, 7, 7, 9, 9], but simpleArr becomes [10]
// assuming we didn't run the simpleArr.splice(1) before:
simpleArr.splice(3, 1) // returns 15, but simpleArr = [10, 13, 14, 6, 7, 7, 9, 9]

// pushing an item the beginning of the array:
simpleArr.unshift(1); // simpleArr = [1, 10, 13, 14, 6, 7, 7, 9, 9]

// reduce example:
const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

// total is the accumolator value (the first reduce inner function parameter):
function getSum(total, num) {
  return total + Math.round(num);
}

// Additional lesson material:

const result = arr1.every((value, index) => value.category == 'goodCategory');
const result2 = arr1.some((value, index) => value.category == 'goodCategory');

const hasHighSalary = (person, average) => person.salary > average;

// function that filters all the high-salary persons (high-salary is bigger than the company/industry average)
const INDUSTRY_AVERAGE = 20000;
const result3 = arr1.filter((person) => {
  if (person) {
    return hasHighSalary(person, INDUSTRY_AVERAGE);
  }
  return false;
});





