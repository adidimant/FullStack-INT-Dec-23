var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var userEnum;
(function (userEnum) {
    userEnum[userEnum["userName"] = 0] = "userName";
    userEnum[userEnum["email"] = 1] = "email";
    userEnum[userEnum["password"] = 2] = "password";
    userEnum[userEnum["phoneNumber"] = 3] = "phoneNumber";
    userEnum[userEnum["firstName"] = 4] = "firstName";
    userEnum[userEnum["lastName"] = 5] = "lastName";
    userEnum[userEnum["country"] = 6] = "country";
    userEnum[userEnum["city"] = 7] = "city";
    userEnum[userEnum["zipCode"] = 8] = "zipCode";
})(userEnum || (userEnum = {}));
var usersIDArrayFromDB = getUserIDFromLocalStorage();
var usersFromDB = getUserDBFromLocalStorage();
var currentlyShowedUsers = __spreadArrays(usersFromDB);
var container = document.querySelector(".container");
var registeredFilterStart = document.querySelector("#registeredFilterStart");
var registeredFilterEnd = document.querySelector("#registeredFilterEnd");
var updatedFilterStart = document.querySelector("#updatedFilterStart");
var updatedFilterEnd = document.querySelector("#updatedFilterEnd");
var allFilters = document.querySelectorAll(".filterBar");
var inEditMode = false;
loadTableFromUsersArray(usersFromDB);
registeredFilterStart.addEventListener("change", dateFilterChangeStart);
registeredFilterEnd.addEventListener("change", dateFilterChangeEnd);
updatedFilterStart.addEventListener("change", dateFilterChangeStart);
updatedFilterEnd.addEventListener("change", dateFilterChangeEnd);
allFilters.forEach(function (input) {
    input.addEventListener("input", inputsFilter);
});
function dateFilterChangeStart(e) {
    var _a;
    var input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
    var timeStampDate = new Date(input).getTime();
    var newUsers = currentlyShowedUsers.filter(function (user) { return Number(user.registeredDate) >= timeStampDate; });
    deleteUsersFromTable();
    loadTableFromUsersArray(newUsers);
}
function dateFilterChangeEnd(e) {
    var _a;
    var input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
    var timeStampDate = new Date(input).getTime();
    var usersFromDBCopy = __spreadArrays(usersFromDB);
    var newUsers = usersFromDBCopy.filter(function (user) { return Number(user.registeredDate) <= timeStampDate; });
    deleteUsersFromTable();
    loadTableFromUsersArray(newUsers);
}
function deleteUsersFromTable() {
    var table = document.querySelector(".Table");
    var usersRows = table.querySelectorAll("tr[id]");
    usersRows.forEach(function (row) {
        table.removeChild(row);
    });
}
function timeStampToDate(timestampStr) {
    var timestamp = Number(timestampStr);
    var date = new Date(timestamp);
    var formattedDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formattedDate;
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
function inputsFilter(e) {
    setTimeout(function () {
        var _a;
        var input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
        var newUsers = [];
        currentlyShowedUsers = __spreadArrays(usersFromDB);
        switch (e.target.id) {
            case "userNameFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.userName.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            case "emailFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.email.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            case "phoneNumberFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.phoneNumber.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            case "firstNameFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.firstName.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            case "lastNameFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.lastName.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            case "countryFilter":
                newUsers = currentlyShowedUsers.filter(function (user) { return user.country.toLocaleLowerCase().includes(input.toLocaleLowerCase()); });
                break;
            default:
                console.log("Something went wrong!");
                break;
        }
        deleteUsersFromTable();
        loadTableFromUsersArray(newUsers);
    }, 500);
}
function loadTableFromUsersArray(users) {
    users.forEach(function (user, index) {
        var _a, _b;
        var table = document.querySelector(".Table");
        var newRow = document.createElement("tr");
        var userNametd = document.createElement("td");
        var emailtd = document.createElement("td");
        var passwordtd = document.createElement("td");
        var phoneNumbertd = document.createElement("td");
        var firstNametd = document.createElement("td");
        var lastNametd = document.createElement("td");
        var countrytd = document.createElement("td");
        var citytd = document.createElement("td");
        var zipCodetd = document.createElement("td");
        var registeredDatetd = document.createElement("td");
        var updatedDatetd = document.createElement("td");
        var editbtntd = document.createElement("td");
        var deletetd = document.createElement("td");
        var buttonWrapper = document.createElement("button");
        buttonWrapper.setAttribute("id", "editImg" + user.userName);
        buttonWrapper.classList.add("invisable");
        var editImg = document.createElement("img");
        editImg.classList.add("img");
        // editImg.setAttribute();
        editImg.setAttribute("src", "../images/edit1.svg");
        buttonWrapper.appendChild(editImg);
        buttonWrapper.addEventListener("click", function (e) { return editUser(e, users, user); });
        editbtntd.appendChild(buttonWrapper);
        var deleteButtonWrapper = document.createElement("button");
        deleteButtonWrapper.classList.add("invisable");
        var deleteImg = document.createElement("img");
        deleteImg.classList.add("deleteImg");
        deleteImg.setAttribute("id", "deleteImg" + user.userName);
        deleteImg.setAttribute("src", "../images/delete.svg");
        deleteImg.addEventListener("click", function (e) { return removeTdEvent(e, user); });
        deletetd.appendChild(deleteImg);
        userNametd.textContent = user.userName;
        emailtd.textContent = user.email;
        passwordtd.textContent = user.password;
        phoneNumbertd.textContent = user.phoneNumber;
        firstNametd.textContent = user.firstName;
        lastNametd.textContent = user.lastName;
        countrytd.textContent = user.country;
        citytd.textContent = (_a = user.city) !== null && _a !== void 0 ? _a : "";
        zipCodetd.textContent = (_b = user.zipCode) !== null && _b !== void 0 ? _b : "";
        registeredDatetd.textContent = timeStampToDate(user.registeredDate);
        updatedDatetd.textContent = timeStampToDate(user.updatedDate);
        // editbtn.textContent = "Edit";
        timeStampToDate(user.registeredDate);
        newRow.setAttribute("id", user.userName);
        newRow.appendChild(userNametd);
        newRow.appendChild(emailtd);
        newRow.appendChild(passwordtd);
        newRow.appendChild(phoneNumbertd);
        newRow.appendChild(firstNametd);
        newRow.appendChild(lastNametd);
        newRow.appendChild(countrytd);
        newRow.appendChild(citytd);
        newRow.appendChild(zipCodetd);
        newRow.appendChild(registeredDatetd);
        newRow.appendChild(updatedDatetd);
        newRow.appendChild(editbtntd);
        newRow.appendChild(deletetd);
        table.appendChild(newRow);
    });
}
function editUser(e, users, user) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var closestTr = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest("tr");
    if (closestTr) {
        var tds = closestTr.querySelectorAll("td");
        var tdsDetails = [
            tds[userEnum.userName],
            tds[userEnum.email],
            tds[userEnum.password],
            tds[userEnum.phoneNumber],
            tds[userEnum.firstName],
            tds[userEnum.lastName],
            tds[userEnum.country],
            tds[userEnum.city],
            tds[userEnum.zipCode],
        ];
        var saveImg = closestTr.querySelector("img");
        toggleSaveEdit(saveImg);
        closestTr === null || closestTr === void 0 ? void 0 : closestTr.classList.toggle("editMode");
        if (!closestTr.querySelector("input")) {
            tdsDetails.forEach(function (element) {
                var elementText = element.textContent;
                var editInput = document.createElement("input");
                editInput.value = elementText !== null && elementText !== void 0 ? elementText : "";
                editInput.classList.add("filterBar");
                element.textContent = "";
                element.appendChild(editInput);
            });
        }
        else {
            var newUser = {
                userName: (_b = tdsDetails[userEnum.userName].querySelector("input").value) !== null && _b !== void 0 ? _b : "",
                email: (_c = tdsDetails[userEnum.email].querySelector("input").value) !== null && _c !== void 0 ? _c : "",
                password: (_d = tdsDetails[userEnum.password].querySelector("input").value) !== null && _d !== void 0 ? _d : "",
                phoneNumber: (_e = tdsDetails[userEnum.phoneNumber].querySelector("input").value) !== null && _e !== void 0 ? _e : "",
                firstName: (_f = tdsDetails[userEnum.firstName].querySelector("input").value) !== null && _f !== void 0 ? _f : "",
                lastName: (_g = tdsDetails[userEnum.lastName].querySelector("input").value) !== null && _g !== void 0 ? _g : "",
                country: (_h = tdsDetails[userEnum.country].querySelector("input").value) !== null && _h !== void 0 ? _h : "",
                city: (_j = tdsDetails[userEnum.city].querySelector("input").value) !== null && _j !== void 0 ? _j : "",
                zipCode: (_k = tdsDetails[userEnum.zipCode].querySelector("input").value) !== null && _k !== void 0 ? _k : "",
                registeredDate: user.registeredDate,
                updatedDate: user.updatedDate
            };
            if (newUser.userName != user.userName ||
                newUser.email != user.email ||
                newUser.password != user.password ||
                newUser.phoneNumber != user.phoneNumber ||
                newUser.firstName != user.firstName ||
                newUser.lastName != user.lastName ||
                newUser.country != user.country ||
                newUser.city != user.city ||
                newUser.zipCode != user.zipCode) {
                user.updatedDate = String(Date.now());
            }
            user.userName = newUser.userName;
            user.email = newUser.email;
            user.password = newUser.password;
            user.phoneNumber = newUser.phoneNumber;
            user.firstName = newUser.firstName;
            user.lastName = newUser.lastName;
            user.country = newUser.country;
            user.city = newUser.city;
            user.zipCode = newUser.zipCode;
            deleteUsersFromTable();
            pushUserDBToLocalStoragewithoutExtraUser(users);
            loadTableFromUsersArray(users);
        }
    }
}
function toggleSaveEdit(saveImg) {
    if (saveImg.src.includes("edit1")) {
        saveImg.src = "../images/save.png";
    }
    else {
        saveImg.src = "../images/edit1.svg";
    }
}
function pushUserDBToLocalStorage(usersArray, user) {
    var index = usersFromDB.findIndex(function (userDB) { return userDB.userName == user.userName; });
    usersFromDB.splice(index, 1);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
function pushUserDBToLocalStoragewithoutExtraUser(usersArray) {
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
function removeAushUserIDToLocalStorage(usersArray, removeUserID) {
    var index = usersArray.findIndex(function (users) { return users === removeUserID; });
    usersArray.splice(index, 1);
    var usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
function removeTdEvent(e, user) {
    var _a;
    var closestTr = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest("tr");
    var answer = confirm("Are you sure you want to delete \"" + user.userName + "\"?");
    if (answer && closestTr) {
        pushUserDBToLocalStorage(usersFromDB, user);
        removeAushUserIDToLocalStorage(usersIDArrayFromDB, user.userName);
        deleteUsersFromTable();
        loadTableFromUsersArray(usersFromDB);
    }
}
