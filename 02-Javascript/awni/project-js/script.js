document.addEventListener("DOMContentLoaded", async function() {
    setupTabs();
    setupFormListeners();
    refreshData();
    autoRefresh();
});

function setupTabs() {
    const userCreation = document.getElementById("createUserContent");
    const userView = document.getElementById("userViewContainer");

    document.getElementById("userCreateTab").addEventListener("click", () => {
        userCreation.style.display = "block";
        userView.style.display = "none";
    });

    document.getElementById("userViewTab").addEventListener("click", () => {
        userCreation.style.display = "none";
        userView.style.display = "block";
    });
}

function setupFormListeners() {
    const filters = ["username", "email", "phone", "fullname", "country", "city", "registeredDate", "updatedDate"];
    filters.forEach(filter => {
        document.getElementById(filter + "Filter").addEventListener("input", debounce(applyFilters, 300));
    });

    const createUserForm = document.querySelector(".userCreateContainer");
    createUserForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        await createUser();
        clearFormInputs();
    });
}

async function createUser() {
    const newUser = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value,
        zipcode: document.getElementById("zipcode").value,
        registeredDate: new Date(),
        updatedDate: new Date()
    };

    const contactList = await getContactList();
    if (contactList.some(user => user.username === newUser.username || user.email === newUser.email)) {
        alert("Username or email already exists.");
        return;
    }

    contactList.push(newUser);
    await saveContactList(contactList);
    alert("User created successfully!");
    refreshData();
}

async function applyFilters() {
    const filters = {
        username: document.getElementById("usernameFilter").value.toLowerCase(),
        email: document.getElementById("emailFilter").value.toLowerCase(),
        phone: document.getElementById("phoneFilter").value.toLowerCase(),
        fullName: document.getElementById("fullnameFilter").value.toLowerCase(),
        country: document.getElementById("countryFilter").value.toLowerCase(),
        city: document.getElementById("cityFilter").value.toLowerCase(),
        registeredDate: document.getElementById("registeredDateFilter").value.toLowerCase(),
        updatedDate: document.getElementById("updatedDateFilter").value.toLowerCase()
    };

    const users = await getContactList();
    const filteredUsers = users.filter(user => matchFilters(user, filters));
    renderUserRows(filteredUsers);
}

function matchFilters(user, filters) {
    return Object.keys(filters).every(key => {
        if (key === 'fullName') {
            return (user.firstname.toLowerCase() + " " + user.lastname.toLowerCase()).includes(filters.fullName);
        }
        if (user[key] !== undefined) {
            return user[key].toString().toLowerCase().includes(filters[key]);
        }
        return true;
    });
}

function renderUserRows(users) {
    const tableBody = document.querySelector(".tbodyTable");
    tableBody.innerHTML = '';
    users.forEach((user, index) => {
        tableBody.insertAdjacentHTML('beforeend', renderUserRow(user, index));
    });
}

function renderUserRow(user, index) {
    return `<tr>
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.country}</td>
        <td>${user.city}</td>
        <td>${new Date(user.registeredDate).toLocaleString()}</td>
        <td>${new Date(user.updatedDate).toLocaleString()}</td>
        <td><button onclick="editUser(${index})"><i class='bx bx-edit'></i></button></td>
        <td><button onclick="removeUser(${index})"><i class='bx bx-trash'></i></button></td>
    </tr>`;
}

async function getContactList() {
    return new Promise(resolve => {
        const contactList = JSON.parse(localStorage.getItem("list")) || [];
        resolve(contactList);
    });
}

function saveContactList(contactList) {
    return new Promise(resolve => {
        localStorage.setItem("list", JSON.stringify(contactList));
        resolve();
    });
}

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function clearFormInputs() {
    ["username", "email", "phone", "firstname", "lastname", "street", "city", "state", "country", "zipcode"].forEach(id => {
        document.getElementById(id).value = "";
    });
}

function editUser(index) {
    const users = JSON.parse(localStorage.getItem("list")) || [];
    if (!users[index]) {
        console.error('User at index', index, 'does not exist.');
        return;
    }
    const user = users[index];
    const tableBody = document.querySelector(".tbodyTable");
    const rows = tableBody.getElementsByTagName('tr');
    const row = rows[index];
    row.innerHTML = `
        <td>${index + 1}</td>
        <td><input type="text" value="${user.username}"></td>
        <td><input type="email" value="${user.email}"></td>
        <td><input type="tel" value="${user.phone}"></td>
        <td><input type="text" value="${user.firstname}"></td>
        <td><input type="text" value="${user.lastname}"></td>
        <td><input type="text" value="${user.country}"></td>
        <td><input type="text" value="${user.city}"></td>
        <td>${new Date(user.registeredDate).toLocaleString()}</td>
        <td>${new Date(user.updatedDate).toLocaleString()}</td>
        <td><button onclick="saveUser(${index})">Save</button></td>
        <td><button onclick="refreshData()">Cancel</button></td>
    `;
}

function saveUser(index) {
    const users = JSON.parse(localStorage.getItem("list")) || [];
    const tableRow = document.querySelectorAll(".tbodyTable tr")[index];
    const inputs = tableRow.querySelectorAll("input");

    const updatedUser = {
        username: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        firstname: inputs[3].value,
        lastname: inputs[4].value,
        country: inputs[5].value,
        city: inputs[6].value,
        registeredDate: users[index].registeredDate, 
        updatedDate: new Date() 
    };

    users[index] = updatedUser;
    localStorage.setItem("list", JSON.stringify(users));
    refreshData();
}

let undoTimeout;
let lastRemovedUser = null;
let lastRemovedIndex = -1;

function removeUser(index) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const users = JSON.parse(localStorage.getItem("list")) || [];
    lastRemovedUser = users.splice(index, 1)[0];
    lastRemovedIndex = index;
    localStorage.setItem("list", JSON.stringify(users));
    refreshData();
    showUndoOption();
}

function showUndoOption() {
    const undoContainer = document.getElementById('undoContainer');
    const progressBar = document.getElementById('undoProgress');
    undoContainer.style.display = 'flex';
    progressBar.style.width = '100%';

    let timeLeft = 6000; // 6 seconds for undo option
    undoTimeout = setInterval(() => {
        timeLeft -= 100;
        progressBar.style.width = `${(timeLeft / 6000) * 100}%`;
        if (timeLeft <= 0) {
            clearInterval(undoTimeout);
            undoContainer.style.display = 'none';
        }
    }, 100);

    document.getElementById('undoButton').onclick = function() {
        clearInterval(undoTimeout);
        undoRemove();
    };
}

function undoRemove() {
    if (lastRemovedUser && lastRemovedIndex !== -1) {
        const users = JSON.parse(localStorage.getItem("list")) || [];
        users.splice(lastRemovedIndex, 0, lastRemovedUser);
        localStorage.setItem("list", JSON.stringify(users));
        refreshData();
        const undoContainer = document.getElementById('undoContainer');
        undoContainer.style.display = 'none';
    }
}

function refreshData() {
    const users = JSON.parse(localStorage.getItem("list")) || [];
    const tableBody = document.querySelector(".tbodyTable");
    tableBody.innerHTML = '';
    users.forEach((user, index) => {
        tableBody.insertAdjacentHTML('beforeend', renderUserRow(user, index));
    });
}


function autoRefresh() {
    setInterval(() => {
        if (document.activeElement.tagName !== 'INPUT') {
            refreshData();
        }
    }, 30000);
}


