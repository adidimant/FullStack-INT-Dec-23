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

// Initialize localStorage
const usersData = localStorage.getItem('users') || '{}';
const users = JSON.parse(usersData);
const userIds = Object.keys(users);

// Dummy user data
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

// Add dummy users to localStorage
dummyUsers.forEach((user, index) => {
  const userId = `user-${index + 1}`;
  users[userId] = user;
});
localStorage.setItem('users', JSON.stringify(users));

// Function to create a user object
function createUserObject(username, email, phone, firstName, lastName, street, city, state, country, zipcode) {
  const registeredDate = new Date().toISOString().slice(0, 10);
  const updatedDate = registeredDate;
  return {
    username,
    email,
    phone,
    firstName,
    lastName,
    street,
    city,
    state,
    country,
    zipcode,
    registeredDate,
    updatedDate
  };
}

// Function to validate form fields
function validateFormFields(username, email, phone, firstName, lastName, street, city, state, country, zipcode) {
  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const zipcodeRegex = /^\d{5}$/;

  // Check if username and email are already in use
  const existingUsernames = Object.values(users).map(user => user.username);
  const existingEmails = Object.values(users).map(user => user.email);

  // Perform validations
  if (!usernameRegex.test(username)) {
    alert('Invalid username. Only letters, numbers, and underscores are allowed.');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Invalid email address.');
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert('Invalid phone number. Use the format "xxx-xxx-xx

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

// Initialize localStorage
const usersData = localStorage.getItem('users') || '{}';
const users = JSON.parse(usersData);
const userIds = Object.keys(users);

// Dummy user data
const dummyUsers = [
  // ... (dummy data omitted for brevity)
];

// Add dummy users to localStorage
dummyUsers.forEach((user, index) => {
  const userId = `user-${index + 1}`;
  users[userId] = user;
});
localStorage.setItem('users', JSON.stringify(users));

// Function to create a user object
function createUserObject(username, email, phone, firstName, lastName, street, city, state, country, zipcode) {
  // ... (existing code omitted for brevity)
}

// Function to validate form fields
function validateFormFields(username, email, phone, firstName, lastName, street, city, state, country, zipcode) {
  // ... (existing code omitted for brevity)
}

// Event listener for creating a new user
createUserTab.addEventListener('click', () => {
  // ... (existing code omitted for brevity)

  // Add event listener for form submission
  createUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form field values
    const username = document.getElementById('usernameInput').value;
    const email = document.getElementById('emailInput').value;
    // ... (other form fields omitted for brevity)

    // Validate form fields
    if (validateFormFields(username, email, phone, firstName, lastName, street, city, state, country, zipcode)) {
      // Check if username and email are not already in use
      const existingUsernames = Object.values(users).map(user => user.username);
      const existingEmails = Object.values(users).map(user => user.email);

      if (!existingUsernames.includes(username) && !existingEmails.includes(email)) {
        // Create a new user object
        const newUser = createUserObject(username, email, phone, firstName, lastName, street, city, state, country, zipcode);

        // Generate a new userId
        const newUserId = `user-${Date.now()}`;

        // Add the new user to the users object
        users[newUserId] = newUser;

        // Save the user to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear the form fields
        createUserForm.reset();

        // Render the user table
        renderUserTable();

        alert('User created successfully!');
      } else {
        alert('Username or email is already in use!');
      }
    }
  });
});

// Event listener for viewing users
viewUsersTab.addEventListener('click', () => {
  // ... (existing code omitted for brevity)

  // Render filters
  renderFilters();

  // Render the user table
  renderUserTable();

  // Start refreshing the table every 30 seconds
  startTableRefresh();
});

// Function to render filters
function renderFilters() {
  const filterHTML = `
    <label>
      Username:
      <input type="text" id="usernameFilter" placeholder="Filter by username">
    </label>
    <!-- ... (other filter inputs omitted for brevity) -->
  `;
  filtersContainer.innerHTML = filterHTML;

  // Add event listeners for filters
  const filterInputs = filtersContainer.querySelectorAll('input');
  filterInputs.forEach(input => {
    input.addEventListener('input', debounce(filterUsers, 300));
  });
}

// Function to filter users
function filterUsers() {
  const usernameFilter = document.getElementById('usernameFilter').value.toLowerCase();
  // ... (other filter values omitted for brevity)

  const filteredUserIds = userIds.filter(userId => {
    const user = users[userId];
    return (
      user.username.toLowerCase().includes(usernameFilter) &&
      // ... (other filter conditions omitted for brevity)
    );
  });

  renderUserTable(filteredUserIds);
}

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function to render the user table
function renderUserTable(userIdsToRender = userIds) {
  const tableBody = usersTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  userIdsToRender.forEach(userId => {
    const user = users[userId];
    const row = document.createElement('tr');

    // ... (existing code for creating table cells omitted for brevity)

    // Add edit and delete buttons
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editUser(userId));
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteUser(userId));
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

// Function to edit a user
function editUser(userId) {
  // ... (code for editing a user omitted for brevity)
}

// Function to delete a user
let deletedUserId;

function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    deletedUserId = userId;
    delete users[userId];
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();

    // Show the undo bar
    undoContainer.style.display = 'flex';
    undoBar.style.animation = 'undoBarAnimation 6s linear forwards';
    setTimeout(() => {
      undoContainer.style.display = 'none';
      deletedUserId = null;
    }, 6000);
  }
}

// Event listener for undo button
undoButton.addEventListener('click', () => {
  if (deletedUserId) {
    users[deletedUserId] = users[deletedUserId];
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
    undoContainer.style.display = 'none';
    deletedUserId = null;
  }
});

// Function to start refreshing the table every 30 seconds
function startTableRefresh() {
  setInterval(renderUserTable, 30000);
}

// Render the user table initially
renderUserTable();