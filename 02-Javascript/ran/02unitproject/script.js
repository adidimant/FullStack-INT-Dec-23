document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  populateUserTable(users);

  const userTableBody = document.getElementById('userTableBody');
  userTableBody.addEventListener('click', function(event) {
    const userId = event.target.closest('tr').dataset.userId;
    if (event.target.textContent === 'עריכה') {
      editUser(userId);
    } else if (event.target.textContent === 'מחיקה') {
      deleteUser(userId);
    }
  });

  const saveButton = createSaveButton();
  document.querySelector('#userTable').after(saveButton);

  const userForm = document.getElementById('userForm');
  userForm.addEventListener('submit', saveUser);
});

function createSaveButton() {
  const button = document.createElement('button');
  button.textContent = 'שמור את כל המשתמשים';
  button.onclick = saveAllUsers;
  return button;
}

async function saveAllUsers() {
  const users = await loadUsers();
  await saveUsers(users);
  alert('כל המשתמשים נשמרו בהצלחה');
  displaySavedUsers();
}

async function saveUser(event) {
  event.preventDefault();
  const form = event.target;
  const newUser = {
    username: form.username.value,
    email: form.email.value,
    phone: form.phone.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    street: form.street.value,
    city: form.city.value,
    country: form.country.value,
    postalCode: form.postalCode.value,
    registeredDate: new Date().toLocaleDateString()
  };
  await saveNewUser(newUser);
}

async function loadUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

async function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.dataset.userId = user.id;
    row.innerHTML = `
      <td>
        <button>עריכה</button>
        <button>מחיקה</button>
      </td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.street}</td>
      <td>${user.city}</td>
      <td>${user.country}</td>
      <td>${user.postalCode}</td>
      <td>${user.registeredDate}</td>
    `;
    userTableBody.appendChild(row);
  });
}

async function deleteUser(userId) {
  const users = await loadUsers();
  const filteredUsers = users.filter(user => user.id !== userId);
  await saveUsers(filteredUsers);
  populateUserTable(filteredUsers);
}

async function editUser(userId) {
  const users = await loadUsers();
  const user = users.find(user => user.id === userId);
  if (user) {
    const form = document.getElementById('userForm');
    form.username.value = user.username;
    form.email.value = user.email;
    form.phone.value = user.phone;
    form.firstName.value = user.firstName;
    form.lastName.value = user.lastName;
    form.street.value = user.street;
    form.city.value = user.city;
    form.country.value = user.country;
    form.postalCode.value = user.postalCode;
    form.querySelector('button[type="submit"]').textContent = 'עדכן משתמש';
    window.scrollTo(0, 0);
  }
}

async function saveNewUser(user) {
  const users = await loadUsers();
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
  } else {
    user.id = Date.now().toString();
    users.push(user);
  }
  await saveUsers(users);
  populateUserTable(users);
}
