
function getOddNumbers(array) {
    return array.filter(function (number) {
        return number % 2 === 1;
    });
}


const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = getOddNumbers(myArr);
console.log(oddNumbers);

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 54, 123, 234, 124, 111, 400, 533, 1092];
let secArray = myArray.filter(num => num % 2 !== 1);
let trdArray = myArray.filter(num => num % 2 !== 0);
console.log(secArray);
console.log(trdArray);


// Write a funciton that accepts an array and checks if exists an item that is "object" in the array (using .some() method)


const firstArr = [1, "hello", { name: "John", age: 30 }, [1, 2, 3], null, undefined, { car: 'bmw', color: 'red', model: 2024 },
    [12, 45, 66], function helloWorld() {
        return 'hello';
    }];
let secArr = firstArr.some(element => typeof element === 'object');
console.log(secArr);

<<<<<<< HEAD
function getObj(element) {
=======
function getObj(element){
>>>>>>> parent of bc1b2a9... HW-310324-ZIV
    return element.some(element => typeof element === 'object');
}
console.log(getObj(firstArr))




// ForEach

let trdArr = firstArr.forEach(function (element, idx) {
    console.log(element, idx);
});

// findIndex

let result = firstArr.findIndex(el => typeof el != 'string')
console.log(result);

// Map

const numbers = [1, 5, 2, 14, 7, 8, 9, 12, 55];
let resultNum = numbers.map(el => el * 5);
console.log(resultNum);

// REDUCE 

let resultNum2 = numbers.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
})
console.log(resultNum2);

// Find

let findNum = numbers.find(el => el > 1);
console.log(findNum);


// Find 

const soccerPlayers = [
    { name: 'awni', age: 20 },
    { name: 'ali', age: 24 },
    { name: 'omar', age: 30 },
    { name: 'samer', age: 18 },
    { name: 'adi', age: 27 },
    { name: 'zaher', age: 17 },
];
const newPlayer = { name: 'samh', age: 26 };
soccerPlayers.push(newPlayer);
soccerPlayers.unshift({ name: 'soaad', age: 30 });
console.log(soccerPlayers);



// pop && shift :remove the last/first one , unshift && push add to the start/end of the object ! 

// EVERY

let playerAge = soccerPlayers.every(el => el.age > 15)
console.log(playerAge);




// const footballPlayers = [
//     {name:'samer', age:20},
//     {name:'ali', age:22},
//     {name:'zahe', age:25},
//     {name:'jamal', age:18},
//     {name:'mona', age:16},
//     {name:'adi', age:31},
//     {name:'ihab', age:33},
//     {name:'soha', age:19},
// ]
// let newOption = footballPlayers.forEach((el , idx) => {
//     el.team = 'Team A';

// });
// console.log(newOption);

const footballPlayers = [
    { name: 'samer', age: 20 },
    { name: 'ali', age: 22 },
    { name: 'zahe', age: 25 },
    { name: 'jamal', age: 18 },
    { name: 'mona', age: 16 },
    { name: 'adi', age: 31 },
    { name: 'ihab', age: 33 },
    { name: 'soha', age: 19 },
];

<<<<<<< HEAD

footballPlayers.forEach((el, idx) => {
    el.foot = (idx === 1 || idx === 4 || idx === 7) ? 'left'
        : 'right';
});


console.log(footballPlayers);

=======
>>>>>>> parent of bc1b2a9... HW-310324-ZIV
// footballPlayers.forEach((el, idx) => {
//     if (idx % 2 !== 1) {
//         return (el.foot = 'right');
//     }
//     return (el.foot = 'left');

// });

// footballPlayers.forEach((el, idx) => {
//     if (idx == [1] || idx == [4] || idx == [7]) {
//         return (el.foot = 'left');
//     }
//     return (el.foot = 'right');

// });
<<<<<<< HEAD
=======
footballPlayers.forEach((el, idx) => {
    el.foot = (idx === 1 || idx === 4 || idx === 7) ? 'left'
        : 'right';
});




console.log(footballPlayers);


>>>>>>> parent of bc1b2a9... HW-310324-ZIV






