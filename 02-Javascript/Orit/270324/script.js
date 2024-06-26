function ex1() {
    let fahrenheitArr = [98, 103, 110, 80];

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    let celsiusArr = fahrenheitArr.map(convertToCelsius);
    console.log(fahrenheitArr);
    console.log(celsiusArr);
}

function ex2() {
    let origArr = [1,2,3,4,5,6,7,8,9,10];

    function reverseArray(arr) {
        return arr.reduce((reversed, current) => {
            // Add the current element to the beginning of the new array using unshift() function
            reversed.unshift(current);
            return reversed;
          }, []); // this is the array to begin with
    }

    console.log(origArr);
    console.log(reverseArray(origArr));
}

function ex3() {
    let arr = [2,4,6,8,10];
    function convertArray(array) {
        return array.reduce((object, current, currentIndex) => {
            // Add the current element to the object
            object[currentIndex] = current;
            return object;
          }, {}); // this is the object to begin with
    }
    console.log(arr);
    console.log(convertArray(arr));
}

function ex4() {
    let arr = [2,4,6,8,10];
    
    function newFind(findMe, num, index) {
        if (num == findMe) {
            console.log('hello');
            console.log(index);
            return index;
        }
    }
    console.log(arr.reduce(newFind, 4));
}
/* implement the function find() 
(that accepts an array and a condition function) - using reduce */

