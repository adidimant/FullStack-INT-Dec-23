//question 1 //
const scorenumbers = [
    { id: '1', gender: 'Odd'},
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

  // question 2 //

  function isAllnumbersOdd2(array) {
    return array.some(function(item) {
        return typeof item === 'object';
    });
}

console.log(isAllnumbersOdd2(scorenumbers)); // Output: true


