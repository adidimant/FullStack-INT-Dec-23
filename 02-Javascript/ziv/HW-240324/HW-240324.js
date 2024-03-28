//question 1 //

// Write a function that accepts an array and returns a filtered array with only the odd numbers //

const numbers = [1, 999928, 3, 4, 5, 6]
function isOdd(num) {
  return num % 2 === 1;
}

function filterOdds(array) {

  return array.filter(isOdd);
}


const oddNumbers = filterOdds(numbers);

console.log(oddNumbers)

// ----------------------------------------------------------------------


  // question 2 //

 // Write a funciton that accepts an array and checks if exists an item that is "object" in the array (using .some() method) //

  const myArray = [{number:1}, "ziv", {boolean:true}];

  function hasObject(array) {
    return array.some(
      function(item) {
        return typeof item === 'object';
    });
  }

  // or:

  function isObject(item) {
    return typeof item === 'object';
  }

  function hasObject2(array) {
    return array.some(isObject);
  }

  console.log(hasObject(myArray)); 














const users = [
  { id: '1', gender: 'Odd' },
  { id: '2', gender: 'double'},
  { id: '3', gender: 'Odd'},
  { id: '4', gender: 'double'},
  { id: '5', gender: 'Odd'},
  { id: '6', gender: 'double'},
  { id: '7', gender: 'Odd'},
  { id: '8', gender: 'double'},
  { id: '9', gender: 'Odd'},
  { id: '10', gender: 'double'},
];


const isAllnumbersOdd = scorenumbers.filter((child) => {    
  if (child.gender == "Odd") {
    return true;
  }
  return false;
});


