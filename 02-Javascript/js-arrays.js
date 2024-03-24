const arr = [];
arr.push(1);
arr.push(2);
// [1,2]

const arrClone = [...arr];

// prints the second item in the arr:
console.log(arr[1]);
// prints the number of items in the array:
console.log(arr.length);
// prints the item in the last position in the arr:
console.log(arr[arr.length - 1]);
// prints the item in the last position -1 of the arr:
console.log(arr[arr.length - 2]);

