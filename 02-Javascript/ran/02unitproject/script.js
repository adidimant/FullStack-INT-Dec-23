document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);

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

  // טען והצג את הנתונים של המשתמשים השמורים
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
  return function executedFunction() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

function editUser(userId) {
  // כאן תוכל להוסיף קוד לעריכת משתמש
}

function prepareDelete(userId) {
  // כאן תוכל להוסיף קוד להכנת המשתמש למחיקה
}
