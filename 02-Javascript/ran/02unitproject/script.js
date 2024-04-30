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

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const allContents = document.querySelectorAll('.tab-content');
  allContents.forEach(content => {
    content.style.display = 'none';
  });

  const selectedTab = document.querySelector(`.tab[onclick*="showTab('${tabName}')"]`);
  const selectedContent = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }

  if (tabName === 'viewUsers') {
    displaySavedUsers();
  }
}

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
}

async function loadUsers() {
  const usersData = await localStorage.getItem('users') || '[]';
  return JSON.parse(usersData);
}

async function saveUsers(users) {
  await localStorage.setItem('users', JSON.stringify(users));
}

function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
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
      <td>${user.updatedDate}</td>
      <td>
        <button onclick="editUser(${user.userId})">ערוך</button>
        <button onclick="prepareDelete(${user.userId})">מחק</button>
      </td>
    `;
    userTableBody.appendChild(row);
  });
}

function editUser(userId) {
  const user = findUserById(userId);
  if (!user) {
    alert('משתמש לא נמצא');
    return;
  }

  const editForm = document.createElement('form');
  editForm.innerHTML = `
    <label for="editUsername">שם משתמש:</label>
    <input type="text" id="editUsername" name="editUsername" value="${user.username}" required><br>
    <label for="editEmail">אימייל:</label>
    <input type="email" id="editEmail" name="editEmail" value="${user.email}" required><br>
    <label for="editPhone">מספר טלפון:</label>
    <input type="tel" id="editPhone" name="editPhone" value="${user.phone}"><br>
    <label for="editFirstName">שם פרטי:</label>
    <input type="text" id="editFirstName" name="editFirstName" value="${user.firstName}" required><br>
    <label for="editLastName">שם משפחה:</label>
    <input type="text" id="editLastName" name="editLastName" value="${user.lastName}" required><br>
    <label for="editStreet">רחוב:</label>
    <input type="text" id="editStreet" name="editStreet" value="${user.street}"><br>
    <label for="editCity">עיר:</label>
    <input type="text" id="editCity" name="editCity" value="${user.city}"><br>
    <label for="editCountry">מדינה:</label>
    <input type="text" id="editCountry" name="editCountry" value="${user.country}"><br>
    <label for="editPostalCode">קוד דואר:</label>
    <input type="text" id="editPostalCode" name="editPostalCode" value="${user.postalCode}"><br>
    <label for="editRegisteredDate">תאריך רישום:</label>
    <input type="date" id="editRegisteredDate" name="editRegisteredDate" value="${user.registeredDate}"><br>
    <button type="button" onclick="saveEditedUser(${userId})">שמור שינויים</button>
  `;

  const editContainer = document.getElementById('editContainer');
  editContainer.innerHTML = '';
  editContainer.appendChild(editForm);
}

function saveEditedUser(userId) {
  const editedUser = {
    userId: userId,
    username: document.getElementById('editUsername').value,
    email: document.getElementById('editEmail').value,
    phone: document.getElementById('editPhone').value,
    firstName: document.getElementById('editFirstName').value,
    lastName: document.getElementById('editLastName').value,
    street: document.getElementById('editStreet').value,
    city: document.getElementById('editCity').value,
    country: document.getElementById('editCountry').value,
    postalCode: document.getElementById('editPostalCode').value,
    registeredDate: document.getElementById('editRegisteredDate').value
  };

  loadUsers().then(users => {
    const index = users.findIndex(user => user.userId === userId);
    if (index !== -1) {
      users[index] = editedUser;
      saveUsers(users).then(() => {
        alert('המשתמש עודכן בהצלחה.');
        populateUserTable(users);
      });
    } else {
      alert('משתמש לא נמצא');
    }
  });
}

function prepareDelete(userId) {
  const confirmation = confirm('האם אתה בטוח שברצונך למחוק משתמש זה?');
  if (confirmation) {
    deleteUser(userId);
  }
}

function deleteUser(userId) {
  loadUsers().then(users => {
    const index = users.findIndex(user => user.userId === userId);
    if (index !== -1) {
      users.splice(index, 1);
      saveUsers(users).then(() => {
        alert('המשתמש נמחק בהצלחה.');
        populateUserTable(users);
      });
    } else {
      alert('משתמש לא נמצא');
    }
  });
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

function displaySavedUsers() {
  const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]');
  const savedUsersTable = document.getElementById('savedUsersTable');
  const savedUserTableBody = document.getElementById('savedUserTableBody');
  savedUserTableBody.innerHTML = '';
  savedUsers.forEach(user => {
    const row = savedUserTableBody.insertRow();
    Object.entries(user).forEach(([key, value]) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
  savedUsersTable.style.display = 'block';
}

function filterUsers() {
  loadUsers().then(users => {
    const filters = document.querySelectorAll('.filter');
    const filteredUsers = users.filter(user => {
      return Array.from(filters).every(filter => {
        const key = filter.id.replace('filter', '').toLowerCase();
        return user[key].toLowerCase().includes(filter.value.toLowerCase());
      });
    });
    populateUserTable(filteredUsers);
  });
}
