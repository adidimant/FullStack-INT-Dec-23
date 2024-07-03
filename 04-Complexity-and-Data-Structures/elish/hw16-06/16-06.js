"use strict";
//analyze the complexity of the three functions:
function printNested(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        for (let j = 0; j < arr.length; j++) { //O(n)
            console.log(arr[i]); //O(1)
        }
    }
}
// total O(n) * O(n) * O(1) => O(n^2)
function printNested2(arr) {
    for (let i = 0; i < arr.length; i++) { //O(n)
        for (let j = 0; j < arr.length; j++) { //O(n)
            for (let k = 0; k < arr.length; k++) { //O(n)
                console.log(arr[i]); // O(1)
            }
        }
    }
}
// total O(n * n * n) * O(1) =>  O(n^3)
// n - arr1.length, k - arr2.length
function printNested3(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { //O(n)
        for (let j = 0; j < arr2.length; j++) { //O(m)
            for (let k = 0; k < arr1.length; k++) { //O(n)
                console.log(arr1[i]); //O(1)
                console.log(arr2[j]); //O(1)
                console.log(arr1[k]); //O(1)
            }
        }
    }
}
// total //O(n) * O(k) *O(n) * O(3)  => O(n *k *n*3) => O(n^2 *k)
