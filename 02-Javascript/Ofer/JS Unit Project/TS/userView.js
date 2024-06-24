"use strict";
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
const usersIDArrayFromDB = getUserIDFromLocalStorage();
const usersFromDB = getUserDBFromLocalStorage();
const container = document.querySelector(".container");
const registeredFilterStart = document.querySelector("#registeredFilterStart");
const registeredFilterEnd = document.querySelector("#registeredFilterEnd");
const updatedFilterStart = document.querySelector("#updatedFilterStart");
const updatedFilterEnd = document.querySelector("#updatedFilterEnd");
const allFilters = document.querySelectorAll(".filterBar");
let inEditMode = false;
loadTableFromUsersArray(usersFromDB);
registeredFilterStart.addEventListener("change", dateFilterChangeStart);
registeredFilterEnd.addEventListener("change", dateFilterChangeEnd);
updatedFilterStart.addEventListener("change", dateFilterChangeStart);
updatedFilterEnd.addEventListener("change", dateFilterChangeEnd);
allFilters.forEach((input) => {
    input.addEventListener("input", (e) => inputsFilter(e));
});
function dateFilterChangeStart(e) {
    var _a;
    const input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
    const timeStampDate = new Date(input).getTime();
    const newUsers = usersFromDB.filter((user) => Number(user.registeredDate) >= timeStampDate);
    deleteUsersFromTable();
    loadTableFromUsersArray(newUsers);
}
function dateFilterChangeEnd(e) {
    var _a;
    const input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
    const timeStampDate = new Date(input).getTime();
    const usersFromDBCopy = [...usersFromDB];
    const newUsers = usersFromDBCopy.filter((user) => Number(user.registeredDate) <= timeStampDate);
    deleteUsersFromTable();
    loadTableFromUsersArray(newUsers);
}
function deleteUsersFromTable() {
    const table = document.querySelector(".Table");
    const usersRows = table.querySelectorAll("tr[id]");
    usersRows.forEach((row) => {
        table.removeChild(row);
    });
}
function timeStampToDate(timestampStr) {
    const timestamp = Number(timestampStr);
    const date = new Date(timestamp);
    const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
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
function inputsFilter(e) {
    setTimeout(() => {
        var _a;
        const input = (_a = e.target.value) !== null && _a !== void 0 ? _a : "";
        console.log(input);
        let newUsers = [];
        switch (e.target.id) {
            case "userNameFilter":
                newUsers = usersFromDB.filter((user) => user.userName ? user.userName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            case "emailFilter":
                newUsers = usersFromDB.filter((user) => user.email ? user.email.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            case "phoneNumberFilter":
                newUsers = usersFromDB.filter((user) => user.phoneNumber ? user.phoneNumber.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            case "firstNameFilter":
                newUsers = usersFromDB.filter((user) => user.firstName ? user.firstName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            case "lastNameFilter":
                newUsers = usersFromDB.filter((user) => user.lastName ? user.lastName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            case "countryFilter":
                newUsers = usersFromDB.filter((user) => user.country ? user.country.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : "");
                break;
            default:
                console.log(`Something went wrong!`);
                break;
        }
        deleteUsersFromTable();
        loadTableFromUsersArray(newUsers);
    }, 500);
}
function loadTableFromUsersArray(users) {
    users.forEach((user, index) => {
        var _a, _b;
        const table = document.querySelector(".Table");
        const newRow = document.createElement("tr");
        const userNametd = document.createElement("td");
        const emailtd = document.createElement("td");
        const passwordtd = document.createElement("td");
        const phoneNumbertd = document.createElement("td");
        const firstNametd = document.createElement("td");
        const lastNametd = document.createElement("td");
        const countrytd = document.createElement("td");
        const citytd = document.createElement("td");
        const zipCodetd = document.createElement("td");
        const registeredDatetd = document.createElement("td");
        const updatedDatetd = document.createElement("td");
        const editbtntd = document.createElement("td");
        const deletetd = document.createElement("td");
        const buttonWrapper = document.createElement("button");
        buttonWrapper.setAttribute("id", `editImg${user.userName}`);
        buttonWrapper.classList.add("invisable");
        const editImg = document.createElement("img");
        editImg.classList.add("img");
        // editImg.setAttribute();
        editImg.setAttribute("src", "../images/edit1.svg");
        buttonWrapper.appendChild(editImg);
        buttonWrapper.addEventListener("click", (e) => editUser(e, users, user));
        editbtntd.appendChild(buttonWrapper);
        const deleteButtonWrapper = document.createElement("button");
        deleteButtonWrapper.classList.add("invisable");
        const deleteImg = document.createElement("img");
        deleteImg.classList.add("deleteImg");
        deleteImg.setAttribute("id", `deleteImg${user.userName}`);
        deleteImg.setAttribute("src", "../images/delete.svg");
        deleteImg.addEventListener("click", (e) => removeTdEvent(e, user));
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
    const closestTr = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest("tr");
    if (closestTr) {
        const tds = closestTr.querySelectorAll("td");
        const tdsDetails = [
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
        const saveImg = closestTr.querySelector("img");
        toggleSaveEdit(saveImg);
        closestTr === null || closestTr === void 0 ? void 0 : closestTr.classList.toggle("editMode");
        if (!closestTr.querySelector("input")) {
            tdsDetails.forEach((element) => {
                const elementText = element.textContent;
                let editInput = document.createElement("input");
                editInput.value = elementText !== null && elementText !== void 0 ? elementText : "";
                editInput.classList.add("filterBar");
                element.textContent = "";
                element.appendChild(editInput);
            });
        }
        else {
            const newUser = {
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
                updatedDate: user.updatedDate,
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
    const index = usersFromDB.findIndex((userDB) => userDB.userName == user.userName);
    usersFromDB.splice(index, 1);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
function pushUserDBToLocalStoragewithoutExtraUser(usersArray) {
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userDB", usersToString);
}
function removeAushUserIDToLocalStorage(usersArray, removeUserID) {
    const index = usersArray.findIndex((users) => users === removeUserID);
    usersArray.splice(index, 1);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}
function removeTdEvent(e, user) {
    var _a;
    const closestTr = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest("tr");
    const answer = confirm(`Are you sure you want to delete "${user.userName}"?`);
    if (answer && closestTr) {
        pushUserDBToLocalStorage(usersFromDB, user);
        removeAushUserIDToLocalStorage(usersIDArrayFromDB, user.userName);
        deleteUsersFromTable();
        loadTableFromUsersArray(usersFromDB);
    }
}
