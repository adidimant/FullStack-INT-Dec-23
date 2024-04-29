const userTableBody = document.getElementById('userTableBody');
const usernameFilterInput = document.getElementById('usernameFilter');
const emailFilterInput = document.getElementById('emailFilter');

function loadUsers() {
  const usersData = localStorage.getItem('users') || '[]';
  users = JSON.parse(usersData);
}

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

function displayUsers(filteredUsers = null) {
  const usersToDisplay = filteredUsers || users;  

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
      <button onclick="editUser('${user.userId}')">Edit</button> 
      <button onclick="prepareDelete('${user.userId}')">Delete</button>
    `;
  });
}

function editUser(userId) {
  const user = users.find(u => u.userId === userId);
  const userRow = document.getElementById(`user-${userId}`);
  Object.keys(user).forEach((key, index) => {
    const cell = userRow.cells[index];
    cell.innerHTML = `<input type="text" value="${user[key]}" name="${key}">`;
  });
  const actionsCell = userRow.cells[userRow.cells.length - 1];
  actionsCell.innerHTML = `<button onclick="saveUser('${userId}')">Save</button>`;
}

function saveUser(userId) {
  const userRow = document.getElementById(`user-${userId}`);
  const inputs = userRow.querySelectorAll('input');
  const updatedUser = users.find(u => u.userId === userId);
  inputs.forEach(input => {
    updatedUser[input.name] = input.value;
  });
  updatedUser.updatedDate = new Date().toISOString().slice(0, 10);
  saveUsers();
  displayUsers();
}

function prepareDelete(userId) {
  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (confirmDelete) {
    deleteUser(userId)
      .then(() => {
        alert('User deleted successfully. Click undo to revert.');
        setTimeout(() => {
          removeUndoOption(userId);
        }, 6000);
        displayUndoButton(userId);
      })
      .catch(err => {
        alert('Error deleting user: ' + err);
      });
  }
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    const index = users.findIndex(u => u.userId === userId);
    if (index !== -1) {
      users.splice(index, 1);
      saveUsers()
        .then(() => {
          displayUsers();
          resolve();
        })
        .catch(err => reject(err));
    } else {
      reject('User not found');
    }
  });
}

function displayUndoButton(userId) {
  const undoButton = document.createElement('button');
  undoButton.textContent = 'Undo';
  undoButton.onclick = () => undoDelete(userId);
  document.body.appendChild(undoButton);
}

function undoDelete(userId) {
  loadUsers();
  const userToRestore = usersDeleted.find(u => u.userId === userId);
  if (userToRestore) {
    users.push(userToRestore);
    saveUsers();
    displayUsers();
    alert('User deletion undone.');
  }
}

function removeUndoOption(userId) {
  const undoButton = document.querySelector('button');
  if (undoButton) undoButton.remove();
}

function filterUsers() {
  const username = usernameFilterInput.value.toLowerCase();
  const email = emailFilterInput.value.toLowerCase();
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(username) && user.email.toLowerCase().includes(email)
  );
  displayUsers(filteredUsers);
}

usernameFilterInput.addEventListener('keyup', debounce(filterUsers, 300));
emailFilterInput.addEventListener('keyup', debounce(filterUsers, 300));
window.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  displayUsers();
});

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
