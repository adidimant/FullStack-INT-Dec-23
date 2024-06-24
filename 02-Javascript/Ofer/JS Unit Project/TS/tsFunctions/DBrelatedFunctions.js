"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushUserDBToLocalStorage = exports.pushUserIDToLocalStorage = exports.getUserDBFromLocalStorage = exports.getUserIDFromLocalStorage = exports.checkIfEmailInDB = exports.checkIfUserInDB = void 0;
function checkIfUserInDB(usersIDArrayFromDB, newUserID) {
    return usersIDArrayFromDB.some((user) => user == newUserID);
}
exports.checkIfUserInDB = checkIfUserInDB;
function checkIfEmailInDB(usersArrayFromDB, newUser) {
    return usersArrayFromDB.some((user) => user.email === newUser.email);
}
exports.checkIfEmailInDB = checkIfEmailInDB;
function getUserIDFromLocalStorage() {
    var _a;
    const usersBefore = (_a = localStorage.getItem("userID")) !== null && _a !== void 0 ? _a : "";
    const users = JSON.parse(usersBefore);
    return users;
}
exports.getUserIDFromLocalStorage = getUserIDFromLocalStorage;
function getUserDBFromLocalStorage() {
    var _a;
    const usersBefore = (_a = localStorage.getItem("userDB")) !== null && _a !== void 0 ? _a : "";
    const users = JSON.parse(usersBefore);
    return users;
}
exports.getUserDBFromLocalStorage = getUserDBFromLocalStorage;
function pushUserIDToLocalStorage(usersArray, newUserID) {
    usersArray.push(newUserID);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
exports.pushUserIDToLocalStorage = pushUserIDToLocalStorage;
function pushUserDBToLocalStorage(usersArray, newUser) {
    usersArray.push(newUser);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
exports.pushUserDBToLocalStorage = pushUserDBToLocalStorage;
