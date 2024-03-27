function filterOddNumbersFromArray(array) {
  return array.filter(item => item % 2 !== 0);
}

// דוגמא לשימוש
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersArray = filterOddNumbersFromArray(originalArray);
console.log(oddNumbersArray); // ידפיס: [1, 3, 5, 7, 9]


