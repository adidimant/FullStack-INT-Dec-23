analyze the complexity of the three functions:

function printNested (arr: number[]) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
console.log(arr[i]);
}
}
}

function printNested2 (arr: number[]) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
for (let k = 0; k < arr.length; k++) {
console.log(arr[i]);
}
}
}
}

// n - arr1.length, k - arr2.length
function printNested3 (arr1: number[], arr2: number[]) {
for (let i = 0; i < arr1.length; i++) {
for (let j = 0; j < arr2.length; j++) {
for (let k = 0; k < arr1.length; k++) {
console.log(arr1[i]);
console.log(arr2[j]);
console.log(arr1[k]);
}
}
}
}
