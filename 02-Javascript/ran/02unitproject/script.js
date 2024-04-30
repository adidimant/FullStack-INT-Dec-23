const userTableBody = document.getElementById('userTableBody');
const filters = document.querySelectorAll('.filter');

async function loadUsers() {
  const usersData = await localStorage.getItem('users') || '[]';
  return JSON.parse(usersData);
}

async function saveUsers(users) {
  await localStorage.setItem('users', JSON.stringify(users));
}

function displayUsers(users) {
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = userTableBody.insertRow();
    row.id = `user-${user.userId}`;
    Object.entries(user).forEach(([key, value]) => {
      const cell = row.insertCell();
      cell.textContent = value;
      if (key === 'actions') {
        cell.innerHTML = `<button onclick="editUser('${user.userId}')">Edit</button>
                          <button onclick="prepareDelete('${user.userId}')">Delete</button>`;
      }
    });
  });
}

async function editUser(userId) {
  const users = await loadUsers();
  const user = users.find(u => u.userId === userId);
  const userRow = document.getElementById(`user-${userId}`);
  Object.keys(user).forEach((key, index) => {
    const cell = userRow.cells[index];
    if (key !== 'actions') {
      cell.innerHTML = `<input type="text" value="${user[key]}" name="${key}">`;
    }
  });
  const actionsCell = userRow.cells[userRow.cells.length - 1];
  actionsCell.innerHTML = `<button onclick="saveUser('${userId}')">Save</button>`; // תיקון: קריאה לפונקציה saveUser כעת מוחזרת בצורה תקינה
}

async function saveUser(userId = null) {
  const users = await loadUsers();
  let updatedUser;
  if (userId) {
    const userRow = document.getElementById(`user-${userId}`);
    const inputs = userRow.querySelectorAll('input');
    updatedUser = users.find(u => u.userId === userId);
    inputs.forEach(input => {
      updatedUser[input.name] = input.value;
    });
    updatedUser.updatedDate = new Date().toISOString().slice(0, 10);
  } else {
    const form = document.getElementById('userForm');
    const formData = new FormData(form);
    updatedUser = {};
    formData.forEach((value, key) => {
      updatedUser[key] = value;
    });
    updatedUser.registeredDate = new Date().toISOString().slice(0, 10);
    updatedUser.updatedDate = new Date().toISOString().slice(0, 10);
    users.push(updatedUser);
    form.reset();
  }
  await saveUsers(users);
  displayUsers(users);
  return false; // Prevent form from submitting
}

async function prepareDelete(userId) {
  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (confirmDelete) {
    try {
      await deleteUser(userId);
      alert('User deleted successfully.');
      displayUsers(users);
    } catch (err) {
      alert('Error deleting user: ' + err);
    }
  }
}

async function deleteUser(userId) {
  const users = await loadUsers();
  const index = users.findIndex(u => u.userId === userId);
  if (index !== -1) {
    users.splice(index, 1);
    await saveUsers(users);
    displayUsers(users);
  } else {
    throw new Error('User not found');
  }
}

function filterUsers() {
  loadUsers().then(users => {
    const filteredUsers = users.filter(user => {
      return [...filters].every(filter => {
        const key = filter.id.replace('filter', '').toLowerCase();
        return user[key].toLowerCase().includes(filter.value.toLowerCase());
      });
    });
    displayUsers(filteredUsers);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));
});

function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}
