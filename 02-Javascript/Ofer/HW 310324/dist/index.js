const objArr = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2012-02-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "private",
        registration: new Date("2017-11-03"),
        capacity: 7,
        isDrivable: true,
        seatNumber: 5,
    },
    {
        color: "black",
        type: "bus",
        registration: new Date("2013-02-03"),
        capacity: 44,
    },
    {
        color: "blue",
        type: "private",
        registration: new Date("2021-02-03"),
        capacity: 7,
        isDrivable: false,
    },
    {
        color: "white",
        type: "minivan",
        registration: new Date("2014-02-03"),
        capacity: 7,
    },
    {
        color: "blue",
        type: "private",
        registration: new Date("2022-02-03"),
        capacity: 7,
        isDrivable: false,
        seatNumber: 5,
    },
    {
        color: "purple",
        type: "private",
        registration: new Date("2023-02-03"),
        capacity: 7,
        seatNumber: 6,
    },
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2015-02-03"),
        capacity: 7,
        isDrivable: true,
        seatNumber: 20,
    },
];
function filterAbove5keys(arr) {
    return arr.filter((item) => Object.keys(item).length >= 5);
}
console.log(filterAbove5keys(objArr));
//HW Q2
const response = await fetch("https://randomuser.me/api/?results=50");
const data = await response.json();
console.log(data);
function returnFullNameAndIdFromAPI(data) {
    const fullNameAndId = [];
    try {
        data.results.forEach((item) => {
            fullNameAndId.push({
                fullName: `${item.name.first} ${item.name.last}`,
                id: item.id.value,
            });
        });
        return fullNameAndId;
    }
    catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}
console.log(returnFullNameAndIdFromAPI(data));
const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "`",
    "~",
    "{",
    "}",
    "'",
    '"',
    "/",
    ",",
    "+",
    "=",
    "_",
    "|",
    "[",
    "]",
];
function usersWithComplexPassword(data) {
    const userNameAndPassword = [];
    try {
        data.results.forEach((item) => {
            const password = item.login.password;
            if (password.length >= 6 &&
                specialCharacters.some((char) => password.includes(char)))
                userNameAndPassword.push({
                    userName: item.login.username,
                    password: password,
                });
        });
        return userNameAndPassword;
    }
    catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}
console.log(usersWithComplexPassword(data));
function youngestPeople(data, howMuchPeople) {
    const fullNameAndAge = [];
    if (howMuchPeople >= data.results.length + 1)
        throw new Error(`The number of "howMuchPeople" is higher then the data length, please select a number under ${data.results.length + 1} `);
    try {
        data.results.forEach((item) => {
            fullNameAndAge.push({
                fullName: `${item.name.first} ${item.name.last}`,
                age: item.dob.age,
            });
        });
        fullNameAndAge.sort((currItem, nextItem) => currItem.age - nextItem.age); //sort the people by age
        return fullNameAndAge.slice(0, howMuchPeople); // returns "howMuchPeople" number of the youngest people
    }
    catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}
console.log(youngestPeople(data, 40));
