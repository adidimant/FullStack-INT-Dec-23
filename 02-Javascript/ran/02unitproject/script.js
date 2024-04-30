document.addEventListener('DOMContentLoaded', async () => {
  // Load users from localStorage
  const users = await loadUsers();

  // Populate the user table
  populateUserTable(users);

  // Event delegation for edit and delete buttons
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.textContent === 'עריכה') {
        editUser(event.target.closest('tr').dataset.userId);
      } else if (event.target.textContent === 'מחיקה') {
        deleteUser(event.target.closest('tr').dataset.userId);
      }
    }
  });

  // Tabs functionality
  const tabsContainer = document.querySelector('.tabs');
  tabsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
      const onclickAttribute = event.target.getAttribute('onclick');
      if (onclickAttribute) {
        const tabName = onclickAttribute.match(/showTab\('(\w+)'\)/);
        if (tabName && tabName[1]) {
          showTab(tabName[1]);
        }
      }
    }
  });

  // Filters functionality
  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));

  // Save all users button
  const saveButton = createSaveButton();
  document.querySelector('#userTable').after(saveButton);

  // User form submission
  const userForm = document.getElementById('userForm');
  userForm.addEventListener('submit', saveUser);

  // Functions
  function showTab(tabName) {
    // ... existing code ...
  }

  function createSaveButton() {
    // ... existing code ...
  }

  async function saveAllUsers() {
    // ... existing code ...
  }

  async function saveUser(event) {
    // ... existing code ...
  }

  async function saveNewUser(newUser) {
    // ... existing code ...
  }

  async function loadUsers() {
    // ... existing code ...
  }

  async function saveUsers(users) {
    // ... existing code ...
  }

  function populateUserTable(users) {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
    users.forEach(user => {
      const row = document.createElement('tr');
      row.dataset.userId = user.id; // Add data-user-id attribute
      row.innerHTML = `
        <td>
          <button onclick="editUser('${user.id}')">עריכה</button>
          <button onclick="deleteUser('${user.id}')">מחיקה</button>
        </td>
        <td>${user.updatedDate}</td>
        <td>${user.registeredDate}</td>
        <td>${user.postalCode}</td>
        <td>${user.country}</td>
        <td>${user.city}</td>
        <td>${user.street}</td>
        <td>${user.lastName}</td>
        <td>${user.firstName}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
      `;
      userTableBody.appendChild(row);
    });
  }

  function displaySavedUsers() {
    // ... existing code ...
  }

  function filterUsers() {
    // ... existing code ...
  }

  function debounce(func, wait) {
    // ... existing code ...
  }

  async function deleteUser(userId) {
    // ... existing code ...
  }

  async function editUser(userId) {
    // ... existing code ...
  }

  async function saveEditedUser(user, userRow) {
    // ... existing code ...
  }

  function cancelEdit(userRow) {
    // ... existing code ...
  }

  function resetUserRow(userRow) {
    // ... existing code ...
  }
});
