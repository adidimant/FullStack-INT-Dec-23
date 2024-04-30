document.addEventListener('DOMContentLoaded', async () => {
  try {
      const users = await loadUsers();
      populateUserTable(users);
  } catch (error) {
      console.error("Error loading users:", error);
  }

  const userTableBody = document.getElementById('userTableBody');
  if (userTableBody) {
      userTableBody.addEventListener('click', event => {
          const userId = event.target.closest('tr').dataset.userId;
          if (event.target.className.includes('edit')) {
              editUser(userId);
          } else if (event.target.className.includes('delete')) {
              deleteUser(userId);
          }
      });
  }

  const userForm = document.getElementById('userForm');
  if (userForm) {
      userForm.addEventListener('submit', async event => {
          event.preventDefault();
          const formData = new FormData(userForm);
          const newUser = Object.fromEntries(formData.entries());
          newUser.registeredDate = new Date().toISOString().split('T')[0];
          newUser.updatedDate = newUser.registeredDate;

          if (await validateNewUser(newUser)) {
              await saveNewUser(newUser);
              userForm.reset();
              alert('User created successfully');
          } else {
              alert('Username or email already exists.');
          }
      });
  }
});

async function loadUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';
  users.forEach(user => {
      const row = document.createElement('tr');
      row.dataset.userId = user.id;
      row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.street}</td>
          <td>${user.city}</td>
          <td>${user.state}</td>
          <td>${user.country}</td>
          <td>${user.zipcode}</td>
          <td>${user.registeredDate}</td>
          <td>${user.updatedDate}</td>
          <td><button class="edit">Edit</button></td>
          <td><button class="delete">Delete</button></td>
      `;
      userTableBody.appendChild(row);
  });
}

async function saveNewUser(user) {
  const users = await loadUsers();
  users.push(user);
  await saveUsers(users);
  populateUserTable(users);
}

async function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

async function editUser(userId) {
  const users = await loadUsers();
  const user = users.find(u => u.id === userId);
  if (user) {
      const form = document.getElementById('userForm');
      Object.keys(user).forEach(key => {
          if (form.elements[key]) form.elements[key].value = user[key];
      });
      document.querySelector('.tabs .tab-button[data-tabname="create"]').click();
      user.updatedDate = new Date().toISOString().split('T')[0];  // Update the date on edit
  }
}

async function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
      const users = await loadUsers();
      const updatedUsers = users.filter(user => user.id !== userId);
      await saveUsers(updatedUsers);
      populateUserTable(updatedUsers);
  }
}

function validateNewUser(newUser) {
  const users = loadUsers();
  return users.then(existingUsers => {
      return !existingUsers.some(user => user.username === newUser.username || user.email === newUser.email);
  });
}
