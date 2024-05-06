// Get references to DOM elements
const createUserTab = document.getElementById('createUserTab');
const viewUsersTab = document.getElementById('viewUsersTab');
const createUserSection = document.getElementById('createUserSection');
const viewUsersSection = document.getElementById('viewUsersSection');
const createUserForm = document.getElementById('createUserForm');
const usersTable = document.getElementById('usersTable');
const filtersContainer = document.getElementById('filtersContainer');
const undoContainer = document.getElementById('undoContainer');
const undoBar = document.getElementById('undoBar');
const undoButton = document.getElementById('undoButton');

// Initialize localStorage and dummy users
let users = JSON.parse(localStorage.getItem('users') || '{}');
const dummyUsers = [
  {
    username: 'johnsmith',
    email: 'john@example.com',
    phone: '555-1234',
    firstName: 'John',
    lastName: 'Smith',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
    zipcode: '12345',
    registeredDate: '2022-05-01',
    updatedDate: '2022-05-01'
  },
  {
    username: 'janedoe',
    email: 'jane@example.com',
    phone: '555-5678',
    firstName: 'Jane',
    lastName: 'Doe',
    street: '456 Oak Rd',
    city: 'Someville',
    state: 'NY',
    country: 'USA',
    zipcode: '67890',
    registeredDate: '2021-10-15',
    updatedDate: '2021-10-15'
  }
];

// Add dummy users to localStorage if not already populated
if (Object.keys(users).length === 0) {
  dummyUsers.forEach((user, index) => {
    const userId = `user-${index + 1}`;
    users[userId] = user;
  });
  localStorage.setItem('users', JSON.stringify(users));
}

function setupTabs() {
  createUserTab.addEventListener('click', function () {
    createUserSection.style.display = 'block';
    viewUsersSection.style.display = 'none';
  });

  viewUsersTab.addEventListener('click', function () {
    createUserSection.style.display = 'none';
    viewUsersSection.style.display = 'block';
    renderUserTable();
  });
}

function setupFilters() {
  // Example for setting up filters
  const usernameFilter = document.createElement('input');
  usernameFilter.id = 'usernameFilter';
  usernameFilter.className = 'filter-input';
  usernameFilter.placeholder = 'Filter by username';
  filtersContainer.appendChild(usernameFilter);

  const countryFilter = document.createElement('input');
  countryFilter.id = 'countryFilter';
  countryFilter.className = 'filter-input';
  countryFilter.placeholder = 'Filter by country';
  filtersContainer.appendChild(countryFilter);

  usernameFilter.addEventListener('input', debounce(filterUsers, 300));
  countryFilter.addEventListener('input', debounce(filterUsers, 300));
}

function filterUsers() {
  const usernameFilterValue = document.getElementById('usernameFilter').value.toLowerCase();
  const countryFilterValue = document.getElementById('countryFilter').value.toLowerCase();

  const filteredUserIds = Object.keys(users).filter(userId => {
    const user = users[userId];
    return user.username.toLowerCase().includes(usernameFilterValue) &&
           user.country.toLowerCase().includes(countryFilterValue);
  });

  renderUserTable(filteredUserIds);
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function renderUserTable(userIdsToRender = Object.keys(users)) {
  const tableBody = usersTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear the table first

  userIdsToRender.forEach(userId => {
    const user = users[userId];
    const row = document.createElement('tr');
    row.setAttribute('data-user-id', userId);
    Object.keys(user).forEach(key => {
      const cell = document.createElement('td');
      cell.textContent = user[key];
      row.appendChild(cell);
    });

    // Create actions cell (edit and delete)
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit'; // Edit icon
    editButton.onclick = () => editUser(userId);
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'; // Delete icon
    deleteButton.onclick = () => deleteUser(userId);
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);
    tableBody.appendChild(row);
  });
}

function editUser(userId) {
  // Implementation for editing user
}

function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    delete users[userId];
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
  }
}

function startTableRefresh() {
  setInterval(() => {
    renderUserTable();
  }, 30000);
}

function setupTabs() {
  createUserTab.addEventListener('click', function () {
    createUserSection.style.display = 'block';
    viewUsersSection.style.display = 'none';
  });

  viewUsersTab.addEventListener('click', function () {
    createUserSection.style.display = 'none';
    viewUsersSection.style.display = 'block';
    renderUserTable();
  });
}
createUserForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const postalCode = document.getElementById('postalCode').value;
  const registeredDate = document.getElementById('registeredDate').value;

  const newUser = {
    username,
    email,
    phone,
    firstName,
    lastName,
    street,
    city,
    country,
    postalCode,
    registeredDate,
    updatedDate: new Date().toISOString()
  };
  // Validations
if (!username || !email || !firstName || !lastName) {
  alert('Please fill in all required fields');
  return;
}

if (!validateEmail(email)) {
  alert('Please enter a valid email address');
  return;
}

// Helper function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

  const newUserId = `user-${Date.now()}`;

  users[newUserId] = newUser;
  localStorage.setItem('users', JSON.stringify(users));

  createUserForm.reset();
  renderUserTable();

  alert('User created successfully!');
});

document.addEventListener('DOMContentLoaded', init);
function init() {
  setupTabs();
  setupFilters(); 
  renderUserTable();
  startTableRefresh();
}
