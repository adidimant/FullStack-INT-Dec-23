document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);

  // טיפול במסננים
  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));

  // הוספת כפתור שמירת משתמשים
  const saveButton = createSaveButton();
  document.querySelector('#userTable').after(saveButton);

  // Event delegation for dynamically added tab buttons
  document.querySelector('.tabs').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI' && event.target.hasAttribute('onclick')) {
      const tabName = event.target.getAttribute('onclick').match(/showTab\('(\w+)'\)/)[1];
      showTab(tabName);
    }
  });
});

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    const tabContentId = tab.getAttribute('onclick').match(/showTab\('(\w+)'\)/)[1];
    const tabContent = document.getElementById(tabContentId);
    if (tabContent) {
      tabContent.style.display = 'none';
    }
    tab.classList.remove('active');
  });

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
  const selectedTabButton = document.querySelector(`.tab[onclick*='${tabName}']`);
  if (selectedTabButton) {
    selectedTabButton.classList.add('active');
  }

  const savedUsersTable = document.getElementById('savedUsersTable');
  if (tabName === 'viewUsers') {
    savedUsersTable.style.display = 'table';
    displaySavedUsers();
  } else {
    savedUsersTable.style.display = 'none';
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

function displayUsers(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = userTableBody.insertRow();
    row.id = `user-${user.userId}`;
    Object.entries(user).forEach(([key, value]) => {
      const cell = row.insertCell();
      cell.textContent = value;
      if (key === 'actions') {
        cell.innerHTML = `<button onclick="editUser('${user.userId}')">ערוך</button>
                          <button onclick="prepareDelete('${user.userId}')">מחק</button>`;
      }
    });
  });
}

function displaySavedUsers() {
  const savedUserTableBody = document.getElementById('savedUserTableBody');
  const usersData = JSON.parse(localStorage.getItem('savedUsers') || '[]');
  savedUserTableBody.innerHTML = '';
  usersData.forEach(user => {
    const row = savedUserTableBody.insertRow();
    Object.entries(user).forEach(([key, value]) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
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
    displayUsers(filteredUsers);
  });
}

function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}
