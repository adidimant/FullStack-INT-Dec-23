"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const calculateSum = (a, b, c, d) => {
    return a + b;
};
calculateSum(1, 2, undefined, 45);
const getUserAge = (user) => {
    user.gender = 'F';
    return user.age;
};
const calculateAverageAge = (users) => {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return sum / users.length;
};
const calculateAverageAgeV2 = (users) => {
    return (users.reduce((acc, user) => {
        return acc + user.age;
    }, 0)) / users.length;
};
// pension age - >=65
const filterPensionAgePeople = (users) => {
    return users.filter((user) => user.age >= 65);
};
const notProtectingFunction = (users) => {
    return users.filter((user) => user.age >= 65);
};
// an example - typescript isn't protecting me but my code will crash (since that users has no specific type in notProtectingFunction)
notProtectingFunction(6);
const getUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("server.com/api/users");
    const data = yield response.json();
    calculateAverageAge(data); // no guarentee that the server really brings us array of User
    return data;
});
//@ts-ignore - this line will fail, since we don't pass array of User
calculateAverageAge([1, "d"]);
// anonymous functions:
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// object type:
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
// another object example:
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// Union types:
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // x is array
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // x is string
        console.log("Welcome lone traveler " + x);
    }
}
// both arrays and strings have the method slice
function getFirstThree(x) {
    return x.slice(0, 3);
}
