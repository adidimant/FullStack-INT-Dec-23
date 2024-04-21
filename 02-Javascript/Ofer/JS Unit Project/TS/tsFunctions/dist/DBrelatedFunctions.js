"use strict";
exports.__esModule = true;
exports.pushUserDBToLocalStorage = exports.pushUserIDToLocalStorage = exports.getUserDBFromLocalStorage = exports.getUserIDFromLocalStorage = exports.checkIfEmailInDB = exports.checkIfUserInDB = void 0;
function checkIfUserInDB(usersIDArrayFromDB, newUserID) {
    return usersIDArrayFromDB.some(function (user) { return user == newUserID; });
}
exports.checkIfUserInDB = checkIfUserInDB;
function checkIfEmailInDB(usersArrayFromDB, newUser) {
    return usersArrayFromDB.some(function (user) { return user.email === newUser.email; });
}
exports.checkIfEmailInDB = checkIfEmailInDB;
function getUserIDFromLocalStorage() {
    var _a;
    var usersBefore = (_a = localStorage.getItem("userID")) !== null && _a !== void 0 ? _a : "";
    var users = JSON.parse(usersBefore);
    return users;
}
exports.getUserIDFromLocalStorage = getUserIDFromLocalStorage;
function getUserDBFromLocalStorage() {
    var _a;
    var usersBefore = (_a = localStorage.getItem("userDB")) !== null && _a !== void 0 ? _a : "";
    var users = JSON.parse(usersBefore);
    return users;
}
exports.getUserDBFromLocalStorage = getUserDBFromLocalStorage;
function pushUserIDToLocalStorage(usersArray, newUserID) {
    usersArray.push(newUserID);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
exports.pushUserIDToLocalStorage = pushUserIDToLocalStorage;
function pushUserDBToLocalStorage(usersArray, newUser) {
    usersArray.push(newUser);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
exports.pushUserDBToLocalStorage = pushUserDBToLocalStorage;
