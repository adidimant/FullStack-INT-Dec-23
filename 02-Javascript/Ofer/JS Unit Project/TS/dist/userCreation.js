// import {getUserIDFromLocalStorage,
//         getUserDBFromLocalStorage,
//         pushUserIDToLocalStorage,
//         pushUserDBToLocalStorage,
//         checkIfUserInDB,
//         checkIfEmailInDB
// } from "./tsFunctions/DBrelatedFunctions";
// import {formExtension, userDetails} from "./interfaces/interfaces";
console.log("first");
//initialize localStorage in case they are not existing
if (!localStorage.getItem("userID")) {
    var userID = [];
    localStorage.setItem("userID", JSON.stringify(userID));
}
if (!localStorage.getItem("userDB")) {
    var users = [];
    localStorage.setItem("userDB", JSON.stringify(users));
}
function submitForm(event) {
    var _a, _b;
    event.preventDefault();
    var elements = event.target
        .elements;
    console.log("elements Details: " + elements);
    var userDetail = {
        userName: elements.userName.value,
        email: elements.email.value,
        password: elements.password.value,
        phoneNumber: elements.phoneNumber.value,
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        country: elements.countryList.value,
        city: (_a = elements.city) === null || _a === void 0 ? void 0 : _a.value,
        zipCode: (_b = elements.zipCode) === null || _b === void 0 ? void 0 : _b.value,
        registeredDate: String(Date.now()),
        updatedDate: String(Date.now())
    };
    console.log("user Details: " + userDetail.city + " " + userDetail.zipCode);
    var usersIDArrayFromDB = getUserIDFromLocalStorage();
    var usersFromDB = getUserDBFromLocalStorage();
    if (checkIfUserInDB(usersIDArrayFromDB, userDetail.userName)) {
        alert("Username \"" + userDetail.userName + "\" is already taken, please select a different username");
    }
    else if (checkIfEmailInDB(usersFromDB, userDetail)) {
        alert("Email \"" + userDetail.email + "\" is already taken, please select a different Email");
    }
    else if (passwordValidation(userDetail.password, specialCharacters)) {
        alert("Password is not strong enough, Please make sure it has at least 1 upperCase letter and a special character");
    }
    else if (phoneValidation(userDetail.phoneNumber)) {
        alert("phone number is not valid, please make sure it's the correct length and starts with '05'");
    }
    else if (checkIfPhoneInDB(usersFromDB, userDetail)) {
        alert("Phone Number \"" + userDetail.phoneNumber + "\" is already taken, please select a different Phone Number");
    }
    else {
        pushUserIDToLocalStorage(usersIDArrayFromDB, userDetail.userName);
        pushUserDBToLocalStorage(usersFromDB, userDetail);
        alert("user \"" + userDetail.userName + "\" Created succesfully!");
        history.back();
    }
}
function passwordValidation(password, specialCharacters) {
    console.log(password !== password.toLowerCase());
    return !(password !== password.toLowerCase() &&
        specialCharacters.some(function (char) { return password.includes(char); }));
}
function phoneValidation(phoneNum) {
    return !(phoneNum.length == 10 &&
        !Number.isNaN(phoneNum) &&
        phoneNum.charAt(0) == "0" &&
        phoneNum.charAt(1) == "5");
}
function checkIfPhoneInDB(usersArrayFromDB, newUser) {
    return usersArrayFromDB.some(function (user) { return user.phoneNumber === newUser.phoneNumber; });
}
function checkIfUserInDB(usersIDArrayFromDB, newUserID) {
    return usersIDArrayFromDB.some(function (user) { return user == newUserID; });
}
function checkIfEmailInDB(usersArrayFromDB, newUser) {
    return usersArrayFromDB.some(function (user) { return user.email === newUser.email; });
}
function getUserIDFromLocalStorage() {
    var _a;
    var usersBefore = (_a = localStorage.getItem("userID")) !== null && _a !== void 0 ? _a : "";
    var users = JSON.parse(usersBefore);
    return users;
}
function getUserDBFromLocalStorage() {
    var _a;
    var usersBefore = (_a = localStorage.getItem("userDB")) !== null && _a !== void 0 ? _a : "";
    var users = JSON.parse(usersBefore);
    return users;
}
function pushUserIDToLocalStorage(usersArray, newUserID) {
    usersArray.push(newUserID);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
function pushUserDBToLocalStorage(usersArray, newUser) {
    usersArray.push(newUser);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
var specialCharacters = [
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
