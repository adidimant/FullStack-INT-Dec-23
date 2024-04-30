// Interface for a user
interface User {
    id: number;
    username: string;
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    street?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    registeredDate?: string;
}

// Function to get users from local storage
function getUsers(): User[] {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString) : [];
}

// Function to populate the user table
function populateUserTable(users: User[]): void {
    const userTableBody = document.getElementById('userTableBody');
    if (!userTableBody) return;
    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <button onclick="editUser(${user.id})">עריכה</button>
                <button onclick="deleteUser(${user.id})">מחיקה</button>
            </td>
            ${Object.values(user).map(value => `<td>${value}</td>`).join('')}
        `;
        userTableBody.appendChild(row);
    });
}

// Function to edit a user
function editUser(userId: number): void {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const user = users[userIndex];
        // Populate form fields with user data for editing
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone || '';
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('lastName').value = user.lastName;
        document.getElementById('street').value = user.street || '';
        document.getElementById('city').value = user.city || '';
        document.getElementById('country').value = user.country || '';
        document.getElementById('postalCode').value = user.postalCode || '';
        document.getElementById('registeredDate').value = user.registeredDate || '';
        // Show the create user tab
        showTab('createUser');
    } else {
        alert('User not found');
    }
}

// Function to delete a user
async function deleteUser(userId: number): Promise<void> {
    if (confirm('Are you sure you want to delete this user?')) {
        let users = getUsers();
        users = users.filter(user => user.id !== userId);
        await saveUsers(users);
        populateUserTable(users);
    }
}
