const userTableBody = document.getElementById('userTableBody');
const userForm = document.getElementById('userForm');

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

async function saveUser() {
  const users = await loadUsers();
  const newUser = {
    userId: Date.now().toString(),
    username: userForm.username.value,
    email: userForm.email.value,
    phone: userForm.phone.value,
    firstName: userForm.firstName.value,
    lastName: userForm.lastName.value,
    street: userForm.street.value,
    city: userForm.city.value,
    registeredDate: new Date().toISOString().slice(0, 10),
    updatedDate: new Date().toISOString().slice(0, 10)
  };
  users.push(newUser);
  await saveUsers(users);
  displayUsers(users);
  userForm.reset();
}

document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);
});
