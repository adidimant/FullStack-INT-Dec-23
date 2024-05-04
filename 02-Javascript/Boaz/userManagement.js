document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUser = {
        id: Date.now().toString(), // Unique identifier for each user
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        // Add more fields
        registeredDate: new Date().toISOString(),
        updatedDate: new Date().toISOString()
    };

    if (validateUser(newUser) && !userExists(newUser.username, newUser.email)) {
        localStorage.setItem(newUser.id, JSON.stringify(newUser));
        addUserToTable(newUser);
        alert('User created successfully!');
        clearForm();
    } else {
        alert('User already exists or data is invalid.');
    }
});

function loadUsers() {
    const tbody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing table rows
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        addUserToTable(user);
    }
}

function addUserToTable(user) {
    const tbody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const row = tbody.insertRow();
    row.insertCell(0).textContent = user.username;
    row.insertCell(1).textContent = user.email;
    // Add more cells for other user details

    const actionsCell = row.insertCell(-1);
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () { editUser(user.id); };
    actionsCell.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () { deleteUser(user.id); };
    actionsCell.appendChild(deleteBtn);
}

function userExists(username, email) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        if (user.username === username || user.email === email) {
            return true;
        }
    }
    return false;
}

function validateUser(user) {
    // Simple validation (can be expanded)
    return user.username && user.email.includes('@');
}

function clearForm() {
    document.getElementById('userForm').reset();
}

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
    if (tabName === 'view') {
        loadUsers(); // Load users when the view tab is selected
    }
}

function editUser(userId) {
    const user = JSON.parse(localStorage.getItem(userId));
    // Implement a function to edit user details
    // You would typically populate the form with user data for editing
}

function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        localStorage.removeItem(userId);
        loadUsers(); // Refresh the user table
    }
}

// Call loadUsers when the page loads to populate the table
window.onload = function() {
    showTab('create'); // Initially show the create tab
    loadUsers(); // Load users in background
};
