/**
 * Overall goal: we are writing an algorithm (a program/function) that gets some input, with length n (or two/three input with another lengths):
  function ourAlgorithm(arr: any[]) { // arr.length => n
    // our solution is here inside - it should be as efficient as possible (minimum operations in O())
  }
 */

// Reference - https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/

// Complexity = order of: number of operations
// 1) When summing order of operations - the bigger one wins (O(n^2) + O(n) => O(n^2))
//  If n>m, then: O(n+m) => O(n), because if n>m then O(n+n) > O(n+m), but O(n+n) = O(2n) => O(n). so: O(n+m) => O(n)
// 2) Swallow multiplications with numbers (consts): O(15n) => O(n); 15n^2 => O(n^2)
// 3) O(1) - finite number of operations, not depend of the input size (n)
// The complexity of any constant number of operations (any number of operations that you can bound) - O(1), example: O(100) => O(1)
// 4) we consider the O(xx) to the worst case, im looking at my algorithm solution and thinking what's worst case that will cause the highest number of operations?


console.log(1); // O(1)

const arr = [6,4,7,675,2445];  // n items

for (let i=0; i<arr.length; i++) { // O(n)
  console.log(arr[i]);
}

// example:
for (let i=0; i<3; i++) { // O(3) => O(1)
  console.log(i);
}

// example 2:
for (let i=0; i<arr.length; i++) { // O(3n) => O(3*n) => O(n)
  console.log(arr[i]);
  console.log(arr[i]);
  console.log(arr[i]);
}

// O(1) - finite number of operations that isn't depend on n at all - can be 1, can be 100,000 => it is still O(100000 * 1) => O(1)
// O(n) - The number of operations is linear with n, it means that the order of operations is n or n * some constant number

// you get two arrays of numbers, your function should return true if there's any element that exists on both arrays
function findCommonItem (arr1: number[], arr2: number[]): boolean {
  let value: number | undefined;
  // loop over arr1
  // for each item - loop over all arr2
  // if a match was found - put this in value
  // if value is not undefined - return value
  for (let i = 0; i< arr1.length; i++) { // O(n)
    for (let j = 0; j < arr2.length; j++) { // O(m)
      if (arr1[i] == arr2[j]) { // O(1)
        value = arr1[i];
      }
    }
  }

  return typeof value == 'number';  // O(1)
  // In total: O(n * m * 1) + O(1) => O(n*m) + O(1) => O(n*m)
}

function findCommonItemImproved (arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i< arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }

  return false;
  // In total: also O(n*m) worst-case, but in reality - we probably improved a bit since in most cases in life the equal items aren't at the end of th arrays
}

// search an item an an array
function searchItemInArray(arr: number[], item: number): boolean {
  return typeof arr.find((value) => value == item) == 'number'; // O(1) * O(n) => O(n)

  // or:
  for (let i =0; i< arr.length; i++) { // O(n)
    if (arr[i] == item) {
      return true;
    }
  }
  return false;
}

searchItemInArray([6,5,4,3,5], 6);

// print all items in array
function printAllItemsInArray(arr: number[]): void {
  for (let i =0; i< arr.length; i++) { // O(n)
    console.log(arr[i]);
  }
}

// get another input from server:
// we note n => length of arr
// we note k => length of newItems input from server
async function printAllItemsInArray2(arr: number[]): void {
  for (let i =0; i< arr.length; i++) { // O(n)
    console.log(arr[i]);
  }

  const newItemsResponse = await fetch("https://my-server.com/api/getKNewItems"); // O(1)
  const newItems = await newItemsResponse.json(); // items - array of length k. // O(k)?
  
  for (let i =0; i<newItems.length; i++) { // O(k)
    console.log(newItems[i]);
  }

  // In total: O(n) + O(1) + O(k)? + O(k) => O(n) + O(k)? + O(k) => O(n) + O(k) =>  O(n+k)
}

// length of array pre-known maximum size of - 3000:
function printAllItemsInArray3(arr: number[]): void {
  for (let i =0; i< arr.length; i++) { // O(3000)
    console.log(arr[i]); // O(1)
  }

  // In total: O(3000 * 1) => O(1)
}

function findMaxInArray (arr: number[]): number | null {
  if (!arr.length) { // O(1)
    return null;
  }

  for (let i = 0; i< arr.length; i++) { // O(n)
    let isFoundBigger = false; // O(1)
    for (let j=0; j<arr.length; j++) { // O(n)
      if (arr[i] < arr[j]) { // O(1)
        isFoundBigger = true;
      }
    }
    if (!isFoundBigger) { // O(1)
      return arr[i];
    }
  }

  return null; // O(1)
  // In total: O(1) + O(n) * (O(1) + O(n)*O(1) + O(1)) + O(1) => O(n) * (O(1) + O(n) + O(1)) => O(n) * O(n) => O(n*n) => O(n^2)
}

function findMaxInArrayV2 (arr: number[]): number | null {
  if (!arr.length) { // O(1)
    return null;
  }

  return arr.sort()[arr.length-1]; // O(sort) + O(1) => O(sort) => O(n*logn)
  // In total: O(1) + O(n*logn) => O(nlogn)

  // logn < n   => n * logn < n * n
}

function findMaxInArrayV3 (arr: number[]): number | null {
  if (!arr.length) { // O(1)
    return null;
  }

  let max = arr[0]; // O(1)
  if (arr.length > 1) { // O(1)
    for (let i = 1; i< arr.length; i++) { // O(n-1) => O(n + (-1)) => O(n)
      if (arr[i] > max) { // O(1)
        max = arr[i];
      }
    }
  }
  return max; // O(1)

  // In total: O(1) + O(1) + O(1) + O(n) * O(1) + O(1) => O(n) * O(1) => O(n)
}


// HW - analyze the complexity of the following function:
function printNested (arr: number[]) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for (let j = 0; j < arr.length; j++) { // O(n)
      console.log(arr[i]);
    }
  }

  // In total: O(n^2)
}

// HW - analyze the complexity of the following function:
function printNested2 (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(arr[i]);
      }
    }
  }
}

// HW - analyze the complexity of the following function:
// n - arr1.length, k - arr2.length
function printNested3 (arr1: number[], arr2: number[]) {
  for (let i = 0; i < arr1.length; i++) { // O(n)
    for (let j = 0; j < arr2.length; j++) { // O(k)
      for (let k = 0; k < arr1.length; k++) { // O(n)
        console.log(arr1[i]); // O(1)
        console.log(arr2[j]); // O(1)
        console.log(arr1[k]); // O(1)
      }
    }
  }
  // In total: O(n) * O(k) *  O(n) * O(3) => O(n*k*n*3) => O(n*k*n) => O(n^2 * k)
}
/**
y = 2x
y = 12
x=3 => y =6
x=18 => y =36

y = O(n^2 * k) => n=10, k=6 => ~600

*/

/**
 * O(1) - Best
 * O(logn) - very good
 * O(n) - good
 * O(n*logn) - fair
 * O(n^c) - bad
 * O(c^n) or O(n!) - worst
 */

// next lesson - findMaxTenElements

function findMaxTenElements(arr: number[]): number[] {
   const sorted = arr.sort((a,b) => a-b); // O(n*logn)
   return sorted.slice(arr.length-10, arr.length); // O(1)
   // In total: O(n*logn)
}


//[1000,6,7,8,5,4,6,7]
//[-7-,-9,-20,-11]

function findMaxTenElementsV2(arr: number[]): number[] {
  if (arr.length > 10) { // O(1)
    const biggestIndexes: number[] = []; // the max size of this array is - 10   // O(1)
    const maxItems: number[] = []; // O(1)
    for (let i =0; i < 10; i++) { // O(10) => O(1)
      let maximum = -Infinity;
      let maximumIndex;
      for (let j=0; j<arr.length; j++) { // O(n)
        if (arr[j] > maximum && !biggestIndexes.includes(j)) { // O(1)
          maximum = arr[j]; // O(1)
          maximumIndex = j;
        }
      }
      maxItems.push(maximum); // O(1)
      biggestIndexes.push(maximumIndex); // O(1)
    }
    return maxItems;

    // In total: O(1) + O(1) * O(n) * O(1) + O(1) => O(1) + O(n) => O(n)
  } else {
  return arr; // O(1)
  }
}

// after class - paly

const isPalyndrom = (str: string) => {
  // n - length of the string
  // abbba - palyndrom
  // aca
  // anan - not
  // akc - not
  // 'stttr' - not

  for (let i =0; i< str.length / 2; i++) { // O(n/2)
    let j = str.length-1-i; // O(1)
    if (str.charAt(i) != str.charAt(j)) { // O(1)
      return false;
    }
  }

  return true; // O(1)

  // In total: O(n/2) * O(1) => O(n/2) => O(n * 1/2) => O(n)
};


