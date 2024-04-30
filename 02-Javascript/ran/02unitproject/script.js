document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  populateUserTable(users);

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

  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));

  const saveButton = createSaveButton();
  document.querySelector('#userTable').after(saveButton);

  const userForm = document.getElementById('userForm');
  userForm.addEventListener('submit', saveUser);
});

function createSaveButton() {
  const button = document.createElement('button');
  button.textContent = 'שמור את כל המשתמשים';
  button.style.cssText = "display:block; margin-left:auto; margin-right:auto;";
  button.onclick = saveAllUsers;
  return button;
}

async function saveAllUsers() {
  const users = await loadUsers();
  await saveUsers(users);
  console.log('נתונים נשמרו ב-localStorage');
  alert('כל המשתמשים נשמרו בהצלחה');
  displaySavedUsers();
}

async function saveUser(event) {
  event.preventDefault();

  const newUser = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    country: document.getElementById('country').value,
    postalCode: document.getElementById('postalCode').value,
    registeredDate: new Date().toLocaleDateString()
  };

  await saveNewUser(newUser);
}

async function editUser(userId) {
  const users = await loadUsers();
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    const user = users[index];
    const userRow = document.getElementById(`user-${user.id}`);
    userRow.querySelectorAll('input, select').forEach(input => input.disabled = false);
    const saveButton = document.createElement('button');
    saveButton.textContent = 'שמור';
    saveButton.onclick = () => saveEditedUser(user, userRow);
    userRow.appendChild(saveButton);
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'ביטול';
    cancelButton.onclick = () => cancelEdit(userRow);
    userRow.appendChild(cancelButton);
  } else {
    console.error('משתמש עם המזהה הנתון לא נמצא');
  }
}

async function saveEditedUser(user, userRow) {
  const editedUser = {
    id: user.id,
    username: userRow.querySelector('#username').value,
    email: userRow.querySelector('#email').value,
    phone: userRow.querySelector('#phone').value,
    firstName: userRow.querySelector('#firstName').value,
    lastName: userRow.querySelector('#lastName').value,
    street: userRow.querySelector('#street').value,
    city: userRow.querySelector('#city').value,
    country: userRow.querySelector('#country').value,
    postalCode: userRow.querySelector('#postalCode').value,
    registeredDate: user.registeredDate,
    updatedDate: new Date().toLocaleDateString()
  };
  const users = await loadUsers();
  const userIndex = users.findIndex(u => u.id === editedUser.id);
  users[userIndex] = editedUser;
  await saveUsers(users);
  resetUserRow(userRow);
  alert('נתוני המשתמש עודכנו בהצלחה');
}

function cancelEdit(userRow) {
  resetUserRow(userRow);
}

function resetUserRow(userRow) {
  userRow.querySelectorAll('input, select').forEach(input => input.disabled = true);
  userRow.querySelectorAll('button').forEach(button => button.remove());
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}
