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

 
