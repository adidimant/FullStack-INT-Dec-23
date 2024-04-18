console.log("123");
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
    event.preventDefault();
    var elements = event.target.elements;
    var userDetails = {
        userName: elements.userName.value,
        email: elements.email.value,
        password: elements.password.value,
        phoneNumber: elements.phoneNumber.value,
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        country: elements.countryList.value,
        registeredDate: String(Date.now()),
        updatedDate: String(Date.now())
    };
    var usersIDArrayFromDB = getUserIDFromLocalStorage();
    var userFromDB = getuserDBFromLocalStorage();
    if (checkIfUserInDB(usersIDArrayFromDB, userDetails.userName)) {
        alert("Username \"" + userDetails.userName + "\" is already taken, please select a different username");
    }
    else {
        pushUserIDToLocalStorage(usersIDArrayFromDB, userDetails.userName);
        pushUserDBToLocalStorage(userFromDB, userDetails);
    }
}
function checkIfUserInDB(usersIDArrayFromDB, newUserID) {
    return usersIDArrayFromDB.some(function (user) { return user == newUserID; });
}
function getUserIDFromLocalStorage() {
    var _a;
    var usersBefore = (_a = localStorage.getItem("userID")) !== null && _a !== void 0 ? _a : "";
    var users = JSON.parse(usersBefore);
    return users;
}
function getuserDBFromLocalStorage() {
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
