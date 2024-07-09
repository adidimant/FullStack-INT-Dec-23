"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfUserInDB = checkIfUserInDB;
exports.checkIfEmailInDB = checkIfEmailInDB;
exports.getUserIDFromLocalStorage = getUserIDFromLocalStorage;
exports.getUserDBFromLocalStorage = getUserDBFromLocalStorage;
exports.pushUserIDToLocalStorage = pushUserIDToLocalStorage;
exports.pushUserDBToLocalStorage = pushUserDBToLocalStorage;
function checkIfUserInDB(usersIDArrayFromDB, newUserID) {
    return usersIDArrayFromDB.some((user) => user == newUserID);
}
function checkIfEmailInDB(usersArrayFromDB, newUser) {
    return usersArrayFromDB.some((user) => user.email === newUser.email);
}
function getUserIDFromLocalStorage() {
    var _a;
    const usersBefore = (_a = localStorage.getItem("userID")) !== null && _a !== void 0 ? _a : "";
    const users = JSON.parse(usersBefore);
    return users;
}
function getUserDBFromLocalStorage() {
    var _a;
    const usersBefore = (_a = localStorage.getItem("userDB")) !== null && _a !== void 0 ? _a : "";
    const users = JSON.parse(usersBefore);
    return users;
}
function pushUserIDToLocalStorage(usersArray, newUserID) {
    usersArray.push(newUserID);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
function pushUserDBToLocalStorage(usersArray, newUser) {
    usersArray.push(newUser);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
