const userTableBody = document.getElementById('userTableBody');

// Filter Inputs (You'll need to add these to user-management.html)
const usernameFilterInput = document.getElementById('usernameFilter'); // Add input field
const emailFilterInput = document.getElementById('emailFilter');     // Add input field
// ... Add filter inputs for other fields ...

// Initial sample data 
let users = [
  { 
    userId: '1', 
    username: 'eli123', 
    email:'eli@comtel.co.il', 
    phone: '050-1234567', 
    firstName: 'אלי', 
    lastName:'כהן',  
    street: 'רחוב העצמאות 3',
    city: 'תל אביב',
    state: 'מרכז',
    country: 'ישראל',
    zipcode: '61000',
    registeredDate: '2020-01-15', 
    updatedDate: '2024-04-27' 
  },
  // ... Add more sample users here
];

// --- Data Handling (Interaction with localStorage) ---

function loadUsers() {
  const usersData = localStorage.getItem('users') || '[]';
  return JSON.parse(usersData);
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// --- User Display ---

function displayUsers(filteredUsers = null) {
  const usersToDisplay = filteredUsers || loadUsers();  

  userTableBody.innerHTML = ''; 

  usersToDisplay.forEach(user => {
    const row = userTableBody.insertRow();
    row.id = `user-${user.userId}`; 

    Object.values(user).forEach(text => {
      const cell = row.insertCell();
      cell.textContent = text;
    });

    const actionsCell = row.insertCell();
    actionsCell.innerHTML = `
      <button onclick="editEmployee('${user.userId}')">Edit</button> 
      <button onclick="prepareDelete('${user.userId}')">Delete</button>
    `;
  });
}

// --- Editing ---

function editEmployee(userId) {
  const user = users.find(user => user.userId === userId);
  const userRow = document.getElementById(`user-${userId}`);  

  Object.keys(user).forEach((key, index) => {
    const cell = userRow.cells[index];
    cell.innerHTML = `<input type="text" value="${user[key]}">`;
  });

  const actionsCell = userRow.cells[userRow.cells.length - 1];
  actionsCell.innerHTML = `<button onclick="saveEmployee('${userId}')">Save</button>`;
}

function saveEmployee(userId) {
  const userRow = document.getElementById(`user-${userId}`);
  const updatedUser = {};

  userRow.cells.forEach((cell, index) => {
    const input = cell.querySelector('input');
    if (input) {
      const key = Object.keys(users[0])[index];
      updatedUser[key] = input.value;
    }
  });

  updatedUser.userId = userId;
  updatedUser.updatedDate = new Date().toISOString().split('T')[0]; 

  const userIndex = users.findIndex(user => user.userId === userId);
  users[userIndex] = updatedUser; 

  saveUsers(users); 
  displayUsers(); 
}


// --- Filtering --- 

function filterUsers() {
  const usernameFilter = usernameFilterInput.value.toLowerCase();
  const emailFilter = emailFilterInput.value.toLowerCase();
  // ... Get filter values of other fields

  const filteredUsers = users.filter(user => {
    return user.username.toLowerCase().includes(usernameFilter) &&
           user.email.toLowerCase().includes(emailFilter) // && ... (Add more filters)
  });

  displayUsers(filteredUsers); 
}

// Add event listeners for filter inputs (e.g., on 'input' or 'keyup' with debounce)
usernameFilterInput.addEventListener('keyup', filterUsers); 
emailFilterInput.addEventListener('keyup', filterUsers); 
// ... Add event listeners for other filters

// --- (Add prepareDelete, etc.) ---

// Initial display 
window.addEventListener('DOMContentLoaded', displayUsers); 
