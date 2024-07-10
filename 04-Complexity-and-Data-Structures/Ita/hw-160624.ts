analyze the complexity of the three functions:

function printNested (arr: number[]) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for (let j = 0; j < arr.length; j++) { // O(n)
      console.log(arr[i]); //O(1)
    }
  }
}

// O(n) * O(n) * O(1) => O(n^2) 

function printNested2 (arr: number[]) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for (let j = 0; j < arr.length; j++) { // O(n)
      for (let k = 0; k < arr.length; k++) { // O(n)
        console.log(arr[i]);  //O(1)
      }
    }
  }
}

// O(n) *O(n) * O(n) * O(1) => O(n^3)

// n - arr1.length, k - arr2.length
function printNested3 (arr1: number[], arr2: number[]) {
  for (let i = 0; i < arr1.length; i++) {   // O(n)
    for (let j = 0; j < arr2.length; j++) {  // O(k)
      for (let k = 0; k < arr1.length; k++) {  // O(n)
        console.log(arr1[i]); //O(1)
        console.log(arr2[j]); //O(1)
        console.log(arr1[k]); //O(1)
      }
    }
  }
}

// O(n) * O(k) * O(n) * O(3) =>  O(n) * O(k) * (O(3n)  => O(3*n) => O(n)) => O(k*n^2)

function findMaxTenElements(arr: number[]): number[] {
  const sortArr = arr.sort(); O(n*logn)
  const MaxTenElements = sortArr.slice(-10); 
  return MaxTenElements; 
}

function findMaxTenElements1(arr: number[]): number[] {
  let arrMax = arr.slice(10)
  if (arr.length > 10) { // O(1)
    for (let i = 10; i< arr.length; i++) {
      for (let i = 0; i< arrMax.length; i++) 
      if (arr[i] > arrMax[i]) { // O(1)
        arrMax[i] = arr[i];

      }
    }
  }
  return arrMax; // O(1)
}