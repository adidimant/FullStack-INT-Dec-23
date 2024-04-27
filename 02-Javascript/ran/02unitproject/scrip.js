const userTableBody = document.getElementById('userTableBody');


const usernameFilterInput = document.getElementById('usernameFilter');
const emailFilterInput = document.getElementById('emailFilter');   



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

];



function loadUsers() {
  const usersData = localStorage.getItem('users') || '[]';
  return JSON.parse(usersData);
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}



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




function filterUsers() {
  const usernameFilter = usernameFilterInput.value.toLowerCase();
  const emailFilter = emailFilterInput.value.toLowerCase();
 

  const filteredUsers = users.filter(user => {
    return user.username.toLowerCase().includes(usernameFilter) &&
           user.email.toLowerCase().includes(emailFilter)
  });

  displayUsers(filteredUsers); 
}


usernameFilterInput.addEventListener('keyup', filterUsers); 
emailFilterInput.addEventListener('keyup', filterUsers); 
window.addEventListener('DOMContentLoaded', displayUsers); 
