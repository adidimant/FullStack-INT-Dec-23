console.log("test");
console.log();

interface userDetails {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    city?: string;
    zipCode?: string;
    readonly registeredDate: string;
    updatedDate: string;
}
const usersIDArrayFromDB = getUserIDFromLocalStorage();
const usersFromDB = getUserDBFromLocalStorage();

loadTableFromDb()

function timeStampToDate(timestampStr: string){
    const timestamp = Number(timestampStr)
    const date = new Date(timestamp)
    const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return formattedDate
}
function getUserIDFromLocalStorage() {
    const usersBefore = localStorage.getItem("userID") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}

function getUserDBFromLocalStorage() {
    const usersBefore = localStorage.getItem("userDB") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}


function loadTableFromDb() {
    usersFromDB.forEach((user: userDetails) => {
        const table = document.querySelector(".Table") as HTMLTableElement;
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
        const editbtntd = document.createElement('td');

        const editbtn = document.createElement('button');
        editbtn.classList.add("editBtn");
        editbtntd.appendChild(editbtn);

        const deletetd = document.createElement("td");
        deletetd.classList.add("flexedCenter")
        const deleteCheckBox = document.createElement("input");
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
        citytd.textContent = user.city ?? "";
        zipCodetd.textContent = user.zipCode ?? "";
        registeredDatetd.textContent = timeStampToDate(user.registeredDate);
        updatedDatetd.textContent = timeStampToDate(user.updatedDate);
        editbtn.textContent = "Edit";
        timeStampToDate(user.registeredDate)

        newRow.appendChild(userNametd)
        newRow.appendChild(emailtd)
        newRow.appendChild(passwordtd)
        newRow.appendChild(phoneNumbertd)
        newRow.appendChild(firstNametd)
        newRow.appendChild(lastNametd)
        newRow.appendChild(countrytd)
        newRow.appendChild(citytd)
        newRow.appendChild(zipCodetd)
        newRow.appendChild(registeredDatetd)
        newRow.appendChild(updatedDatetd)
        newRow.appendChild(editbtntd)
        newRow.appendChild(deletetd)
        table.appendChild(newRow)

    });
}
