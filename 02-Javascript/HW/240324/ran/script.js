function filterOddNumbersFromArray(array) {
  return array.filter(item => item % 2 !== 0);
}


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = filterOddNumbersFromArray(originalArray);
console.log(oddNumbersArray); 


function containsObject(arr) {
  return arr.some(item => typeof item === 'object' && item !== null);
}


const exampleArray = [3, "hello", true, { name: "John" }, 42];


const result = containsObject(exampleArray);

console.log(result);
