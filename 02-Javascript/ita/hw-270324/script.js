// Task number 1
const temperatureFareneight = [78, 72, 73, 77, 76, 75, 74, 74];

function TemperatureConverter() {
    return temperatureFareneight.map((number) => Math.round((number-32)/1.8));
}

// Task number 2
function Reverse() {
    return temperatureFareneight.reduce((acc, item) => [item].concat(acc), []);
}

function Reverse1() {
    return temperatureFareneight.unshift
} 

// Task number 3
const fruits = ["Banana", "Orange", "Apple", "Mango"];

function IndexValueobj() {
    return fruits.reduce((acc, val, index) => {
        acc[index] = val;
        return acc;
      }, {});
}


// Task number 4
function FindWithReduse() 


// Task number 5
const peopleDetails = [
    { firstname: 'Ita', age: 30, height: 163 },
    { firstname: 'Israel', age: 23, height: 171 },
    { firstname: 'Shalom Dov', age: 46, height: 168 },
    { firstname: 'Rivka', age: 19, height: 150 }
];


function nameLength() {
    return peopleDetails.map((obj) => {
        if (obj.firstname.length >= 6) {
            return ({...obj, hasLongName: true});
        }
        return ({...obj, hasLongName: false});
    }) 
} 

function nameLengthV2() {
    return peopleDetails.map((obj) => ({...obj, hasLongName: obj.firstname.length >= 6}));
} 







