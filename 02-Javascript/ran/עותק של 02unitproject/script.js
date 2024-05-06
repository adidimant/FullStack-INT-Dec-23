// Get references to DOM elements
const createUserTab = document.getElementById('createUserTab');
const viewUsersTab = document.getElementById('viewUsersTab');
const createUserSection = document.getElementById('createUserSection');
const viewUsersSection = document.getElementById('viewUsersSection');
const createUserForm = document.getElementById('userForm');
const usersTable = document.getElementById('userTable');
const filtersContainer = document.getElementById('filters');
const undoContainer = document.getElementById('undoContainer');
const undoBar = document.getElementById('undoBar');
const undoButton = document.getElementById('undoButton');

// Initialize localStorage and dummy users
let users = JSON.parse(localStorage.getItem('users') || '{}');
let userIds = JSON.parse(localStorage.getItem('userIds') || '[]');
let deletedUser = null;

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

function setupFilters() {
  const filterInputs = document.querySelectorAll('.filter');
  
  filterInputs.forEach(input => {
    input.addEventListener('input', debounce(filterUsers, 300));
  });
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

  const filteredUserIds = Object.keys(users).filter(userId => {
    const user = users[userId];
    return Object.keys(filters).every(key => {
      if (!filters[key]) return true;
      if (key === 'fullName') {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(filters[key]);
      }
      return user[key].toLowerCase().includes(filters[key]);
    });
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
  const row = document.querySelector(`tr[data-user-id="${userId}"]`);
  const user = users[userId];

  // Replace user data with input fields
  row.innerHTML = `
    <td>
      <button onclick="saveUser('${userId}')">Save</button>
      <button onclick="cancelEdit('${userId}')">Cancel</button>
    </td>
    <td><input type="text" id="editUpdatedDate-${userId}" value="${user.updatedDate}"></td>
    <td><input type="text" id="editRegisteredDate-${userId}" value="${user.registeredDate}"></td>
    <td><input type="text" id="editZipcode-${userId}" value="${user.zipcode}"></td>
    <td><input type="text" id="editCountry-${userId}" value="${user.country}"></td>
    <td><input type="text" id="editCity-${userId}" value="${user.city}"></td>
    <td><input type="text" id="editStreet-${userId}" value="${user.street}"></td>
    <td><input type="text" id="editLastName-${userId}" value="${user.lastName}"></td>
    <td><input type="text" id="editFirstName-${userId}" value="${user.firstName}"></td>
    <td><input type="text" id="editPhone-${userId}" value="${user.phone}"></td>
    <td><input type="text" id="editEmail-${userId}" value="${user.email}"></td>
    <td><input type="text" id="editUsername-${userId}" value="${user.username}"></td>
  `;
}

function cancelEdit(userId) {
  renderUserTable();
}

function saveUser(event) {
  if (event) {
    event.preventDefault();
  }
  
  if (userId) {
    // Editing existing user
    const updatedUser = {
      username: document.getElementById(`editUsername-${userId}`).value,
      email: document.getElementById(`editEmail-${userId}`).value,
      phone: document.getElementById(`editPhone-${userId}`).value,
      firstName: document.getElementById(`editFirstName-${userId}`).value,
      lastName: document.getElementById(`editLastName-${userId}`).value,
      street: document.getElementById(`editStreet-${userId}`).value,
      city: document.getElementById(`editCity-${userId}`).value,
      country: document.getElementById(`editCountry-${userId}`).value,
      zipcode: document.getElementById(`editZipcode-${userId}`).value,
      registeredDate: document.getElementById(`editRegisteredDate-${userId}`).value,
      updatedDate: new Date().toISOString()
    };

    users[userId] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
  } else {
    // Creating new user
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

    // Validations
    if (!username || !email || !firstName || !lastName) {
      alert('Please fill in all required fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Check if username or email already exists
    if (Object.values(users).some(user => user.username === username || user.email === email)) {
      alert('Username or email already exists');
      return;
    }

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

    const newUserId = `user-${Date.now()}`;

    users[newUserId] = newUser;
    userIds.push(newUserId);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('userIds', JSON.stringify(userIds));

    document.getElementById('userForm').reset();
    renderUserTable();

    alert('User created successfully!');
  }
}




function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    deletedUser = users[userId];
    delete users[userId];
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
    showUndoBar();
  }
}

function showUndoBar() {
  undoContainer.style.display = 'flex';
  undoBar.style.animation = 'undoBarAnimation 6s linear forwards';
  setTimeout(() => {
    undoContainer.style.display = 'none';
    deletedUser = null;
  }, 6000);
}

undoButton.addEventListener('click', function() {
  if (deletedUser) {
    users[deletedUser.id] = deletedUser;
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
    undoContainer.style.display = 'none';
    deletedUser = null;
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function startTableRefresh() {
  setInterval(() => {
    renderUserTable();
  }, 30000);
}

function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none');

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
  setupFilters();
  renderUserTable();
  startTableRefresh();

  if (createUserForm) {
    createUserForm.addEventListener('submit', function(event) {
      saveUser(event);
    });
  }
});