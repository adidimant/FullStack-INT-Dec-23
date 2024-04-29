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


function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'viewUsers') {
      loadUsers();
    }
  }
  
  
  function createUser() {
    const user = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
      zipcode: document.getElementById('zipcode').value,
      registeredDate: document.getElementById('registeredDate').value,
      updatedDate: document.getElementById('updatedDate').value
    };
  
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[user.username]) {
      users[user.username] = user;
      localStorage.setItem('users', JSON.stringify(users));
      alert('User created successfully!');
      showTab('viewUsers');
      loadUsers();
    } else {
      alert('Username already exists!');
    }
  }
  
  
  
  function filterUsers() {
    const filters = {
      username: document.getElementById('filterUsername').value.toLowerCase(),
      email: document.getElementById('filterEmail').value.toLowerCase(),
      phone: document.getElementById('filterPhone').value.toLowerCase(),
      fullName: document.getElementById('filterFullName').value.toLowerCase(),
      country: document.getElementById('filterCountry').value.toLowerCase(),
      city: document.getElementById('filterCity').value.toLowerCase(),
      registeredDate: document.getElementById('filterRegisteredDate').value,
      updatedDate: document.getElementById('filterUpdatedDate').value
    };
  
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const filteredUsers = Object.values(users).filter(user =>
      (!filters.username || user.username.toLowerCase().includes(filters.username)) &&
      (!filters.email || user.email.toLowerCase().includes(filters.email)) &&
      (!filters.phone || user.phone.toLowerCase().includes(filters.phone)) &&
      (!filters.fullName ||
       (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).includes(filters.fullName)) &&
      (!filters.country || user.country.toLowerCase().includes
  
