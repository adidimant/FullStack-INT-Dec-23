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
  actionsCell.innerHTML = `<button onclick="saveUser('${userId}')">Save</button>`;
}

async function saveUser(userId) {
  const users = await loadUsers();
  const userRow = document.getElementById(`user-${userId}`);
  const inputs = userRow.querySelectorAll('input');
  const updatedUser = users.find(u => u.userId === userId);
  inputs.forEach(input => {
    updatedUser[input.name] = input.value;
  });
  updatedUser.updatedDate = new Date().toISOString().slice(0, 10);
  await saveUsers(users);
  displayUsers(users); // הוספת קריאה לפונקציה לתצוגת המשתמשים לאחר שמתבצע עדכון הנתונים
}


async function prepareDelete(userId) {
  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (confirmDelete) {
    try {
      await deleteUser(userId);
      alert('User deleted successfully. Click undo to revert.');
      setTimeout(() => {
        removeUndoOption(userId);
      }, 6000);
      displayUndoButton(userId);
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

function displayUndoButton(userId) {
  const undoButton = document.createElement('button');
  undoButton.textContent = 'Undo';
  undoButton.onclick = () => undoDelete(userId);
  document.body.appendChild(undoButton);
}

async function undoDelete(userId) {
  const users = await loadUsers();
  const userToRestore = usersDeleted.find(u => u.userId === userId);
  if (userToRestore) {
    users.push(userToRestore);
    await saveUsers(users);
    displayUsers(users);
    alert('User deletion undone.');
  }
  removeUndoOption(userId);
}

function removeUndoOption(userId) {
  const undoButton = document.querySelector(`button[onclick*='${userId}']`);
  if (undoButton) undoButton.remove();
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
