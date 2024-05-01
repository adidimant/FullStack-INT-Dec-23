console.log("test");
console.log();
var usersIDArrayFromDB = getUserIDFromLocalStorage();
var usersFromDB = getUserDBFromLocalStorage();
loadTableFromDb();
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
function loadTableFromDb() {
    usersFromDB.forEach(function (user) {
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
        var editbtntd = document.createElement('td');
        var editbtn = document.createElement('button');
        editbtn.classList.add("editBtn");
        editbtntd.appendChild(editbtn);
        var deletetd = document.createElement("td");
        deletetd.classList.add("flexedCenter");
        var deleteCheckBox = document.createElement("input");
        deleteCheckBox.setAttribute("type", "checkBox");
        deleteCheckBox.classList.add("deleteCheckBox");
        deletetd.appendChild(deleteCheckBox);
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
        editbtn.textContent = "Edit";
        timeStampToDate(user.registeredDate);
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
