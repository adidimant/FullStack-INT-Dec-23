const userKey = 'userIds';
let undoStack = [];
let undoTimeout;

function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function createUser() {
    const form = document.getElementById('userForm');
    const user = {
        username: form.username.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        street: form.street.value.trim(),
        city: form.city.value.trim(),
        state: form.state.value.trim(),
        country: form.country.value.trim(),
        zipcode: form.zipcode.value.trim(),
        registeredDate: new Date().toISOString(),
        updatedDate: new Date().toISOString()
    };

    if (userExists(user.username, user.email)) {
        alert('Username or email already exists.');
        return;
    }

    const userId = Date.now().toString();
    localStorage.setItem(userId, JSON.stringify(user));

    const userIds = JSON.parse(localStorage.getItem(userKey)) || [];
    userIds.push(userId);
    localStorage.setItem(userKey, JSON.stringify(userIds));

    form.reset();
    alert('User created successfully!');
}

function userExists(username, email) {
    const userIds = JSON.parse(localStorage.getItem(userKey)) || [];
    return userIds.some(id => {
        const user = JSON.parse(localStorage.getItem(id));
        return user.username.toLowerCase() === username.toLowerCase() ||
            user.email.toLowerCase() === email.toLowerCase();
    });
}

function loadUsers() {
    const userIds = JSON.parse(localStorage.getItem(userKey)) || [];
    const usersBody = document.getElementById('usersBody');
    usersBody.innerHTML = '';

    userIds.forEach(id => {
        const user = JSON.parse(localStorage.getItem(id));
        const tr = document.createElement('tr');
        tr.dataset.userId = id;
        tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.street}, ${user.city}, ${user.state}, ${user.country}, ${user.zipcode}</td>
            <td>${user.registeredDate}</td>
            <td>${user.updatedDate}</td>
            <td>
                <button onclick="editUser('${id}')">Edit</button>
                <button onclick="deleteUser('${id}')">Delete</button>
            </td>
        `;
        usersBody.appendChild(tr);
    });
}

function deleteUser(userId) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    undoStack.push(userId);
    clearTimeout(undoTimeout);
    showUndoBar();

    undoTimeout = setTimeout(() => {
        finalizeDeletion(userId);
        hideUndoBar();
    }, 6000);

    loadUsers();
}

function finalizeDeletion(userId) {
    const userIds = JSON.parse(localStorage.getItem(userKey)) || [];
    const newUserIds = userIds.filter(id => id !== userId);
    localStorage.setItem(userKey, JSON.stringify(newUserIds));
    localStorage.removeItem(userId);
    loadUsers();
}

function undoDeletion() {
    clearTimeout(undoTimeout);
    undoStack.pop();
    hideUndoBar();
    loadUsers();
}

function showUndoBar() {
    document.getElementById('undoBar').style.display = 'block';
}

function hideUndoBar() {
    document.getElementById('undoBar').style.display = 'none';
}

function editUser(userId) {
    const tr = document.querySelector(`tr[data-user-id="${userId}"]`);
    const user = JSON.parse(localStorage.getItem(userId));
    tr.innerHTML = `
        <td><input type="text" value="${user.username}" id="editUsername"></td>
        <td><input type="email" value="${user.email}" id="editEmail"></td>
        <td><input type="text" value="${user.phone}" id="editPhone"></td>
        <td><input type="text" value="${user.firstName}" id="editFirstName">
            <input type="text" value="${user.lastName}" id="editLastName"></td>
        <td><input type="text" value="${user.street}" id="editStreet">
            <input type="text" value="${user.city}" id="editCity">
            <input type="text" value="${user.state}" id="editState">
            <input type="text" value="${user.country}" id="editCountry">
            <input type="text" value="${user.zipcode}" id="editZipcode"></td>
        <td>${user.registeredDate}</td>
        <td><span id="editUpdatedDate">${user.updatedDate}</span></td>
        <td>
            <button onclick="saveUser('${userId}')">Save</button>
            <button onclick="loadUsers()">Cancel</button>
        </td>
    `;
}

function saveUser(userId) {
    const tr = document.querySelector(`tr[data-user-id="${userId}"]`);
    const updatedUser = {
        username: document.getElementById('editUsername').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        phone: document.getElementById('editPhone').value.trim(),
        firstName: document.getElementById('editFirstName').value.trim(),
        lastName: document.getElementById('editLastName').value.trim(),
        street: document.getElementById('editStreet').value.trim(),
        city: document.getElementById('editCity').value.trim(),
        state: document.getElementById('editState').value.trim(),
        country: document.getElementById('editCountry').value.trim(),
        zipcode: document.getElementById('editZipcode').value.trim(),
        registeredDate: tr.querySelector('td:nth-child(6)').innerText,
        updatedDate: new Date().toISOString()
    };
    localStorage.setItem(userId, JSON.stringify(updatedUser));
    loadUsers();
}

function debounceFilter() {
    clearTimeout(debounceFilter.timeout);
    debounceFilter.timeout = setTimeout(filterUsers, 300);
}

function filterUsers() {
    const usernameFilter = document.getElementById('usernameFilter').value.toLowerCase();
    const emailFilter = document.getElementById('emailFilter').value.toLowerCase();
    const phoneFilter = document.getElementById('phoneFilter').value.toLowerCase();
    const fullNameFilter = document.getElementById('fullNameFilter').value.toLowerCase();
    const countryFilter = document.getElementById('countryFilter').value.toLowerCase();
    const cityFilter = document.getElementById('cityFilter').value.toLowerCase();
    const registeredDateFilter = document.getElementById('registeredDateFilter').value;
    const updatedDateFilter = document.getElementById('updatedDateFilter').value;

    const userIds = JSON.parse(localStorage.getItem(userKey)) || [];
    const usersBody = document.getElementById('usersBody');
    usersBody.innerHTML = '';

    userIds.forEach(id => {
        const user = JSON.parse(localStorage.getItem(id));
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

        if ((usernameFilter === '' || user.username.toLowerCase().includes(usernameFilter)) &&
            (emailFilter === '' || user.email.toLowerCase().includes(emailFilter)) &&
            (phoneFilter === '' || user.phone.toLowerCase().includes(phoneFilter)) &&
            (fullNameFilter === '' || fullName.includes(fullNameFilter)) &&
            (countryFilter === '' || user.country.toLowerCase().includes(countryFilter)) &&
            (cityFilter === '' || user.city.toLowerCase().includes(cityFilter)) &&
            (registeredDateFilter === '' || user.registeredDate.split('T')[0] === registeredDateFilter) &&
            (updatedDateFilter === '' || user.updatedDate.split('T')[0] === updatedDateFilter)) {
            const tr = document.createElement('tr');
            tr.dataset.userId = id;
            tr.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.street}, ${user.city}, ${user.state}, ${user.country}, ${user.zipcode}</td>
                <td>${user.registeredDate}</td>
                <td>${user.updatedDate}</td>
                <td>
                    <button onclick="editUser('${id}')">Edit</button>
                    <button onclick="deleteUser('${id}')">Delete</button>
                </td>
            `;
            usersBody.appendChild(tr);
        }
    });
}

setInterval(loadUsers, 30000);
document.addEventListener('DOMContentLoaded', loadUsers);
openTab('createUserForm');

function viewUsers() {
    openTab('viewUsersTab');
    loadUsers();
}

document.addEventListener('DOMContentLoaded', viewUsers);
