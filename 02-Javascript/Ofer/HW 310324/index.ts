//HW Q1
interface CarObj {
    color: string;
    type: string;
    registration: Date;
    capacity: number;
    isDrivable?: boolean;
    seatNumber?: number;
}

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

function filterAbove5keys(arr: CarObj[]) {
    return arr.filter((item) => Object.keys(item).length >= 5);
}

console.log(filterAbove5keys(objArr));

//HW Q2

const response = await fetch("https://randomuser.me/api/?results=50");
const data = await response.json();
console.log(data);

//HW Q2.1
interface FullNameAndId {
    fullName: string;
    id: number;
}

function returnFullNameAndIdFromAPI(data: any) {
    const fullNameAndId: FullNameAndId[] = [];
    try {
        data.results.forEach((item: any) => {
            fullNameAndId.push({
                fullName: `${item.name.first} ${item.name.last}`,
                id: item.id.value,
            });
        });
        return fullNameAndId;
    } catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}

console.log(returnFullNameAndIdFromAPI(data));

//HW Q2.2
interface UserNamePassword {
    userName: string;
    password: string;
}

const specialCharacters: string[] = [
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

function usersWithComplexPassword(data: any) {
    const userNameAndPassword: UserNamePassword[] = [];
    try {
        data.results.forEach((item: any) => {
            const password: string = item.login.password;
            if (
                password.length >= 6 &&
                specialCharacters.some((char) => password.includes(char))
            )
                userNameAndPassword.push({
                    userName: item.login.username,
                    password: password,
                });
        });
        return userNameAndPassword;
    } catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}

console.log(usersWithComplexPassword(data));



//HW 2.3
interface NameAndAge {
    fullName: string;
    age: number;
}
function youngestPeople(data:any, howMuchPeople:number){
    const fullNameAndAge: NameAndAge[] = [];
    try {
        data.results.forEach((item: any) => {
            fullNameAndAge.push({
                fullName: `${item.name.first} ${item.name.last}`,
                age: item.dob.age,
            });
        });
        fullNameAndAge.sort((currItem,nextItem) => currItem.age - nextItem.age) //sort the people by age
        return fullNameAndAge.slice(0,howMuchPeople)// returns "howMuchPeople" number of the youngest people
    } catch (error) {
        console.error(`error has been occurred: \n ${error}`);
    }
}

console.log(youngestPeople(data, 10 ))
export {};
