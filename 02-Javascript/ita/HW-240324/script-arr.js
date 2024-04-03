const numbers = [1, 3, 2, 10, 14, 20, 31];

function getOddNumbers(numbers) {
    return numbers.filter((number) => {
        if (number % 2 == 1) {
            return true;
        }
        return false;
    });
}

const result = getOddNumbers(numbers);


const peopleDetails = [
    { firstname: 'ita', lastname: 'raskin', age: 28 },
    { firstname: 'rivka', lastname: 'coen', age: 31 },
    { firstname: 'israel', lastname: 'levi', age: 20 },
    { firstname: 'shira', lastname: 'adri', age: 18 },
    { firstname: 'mali', lastname: 'raskin', age: 25 }
];

function getOddAges(peopleDetailsArr) {
    return peopleDetailsArr.filter((personDetails) => personDetails.age % 2 == 1);
}

const oddAgesPeople = getOddAges(peopleDetails);

// # 2:
 
const myArray = [{number:1}, "ziv", {boolean:true}];


const someobj = peopleDetails.some((child) => {
    if (child.constructor == Object) {
        return true;
    }
    return false;
});

const someobj1 = myArray.some((item) => {
    if (item.constructor == Object) {
        return true;
    }
    return false;
});















