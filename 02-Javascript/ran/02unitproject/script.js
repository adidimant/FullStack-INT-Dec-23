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
  displaySavedUsers();
}

async function saveNewUser(newUser) {
  const users = await loadUsers();
  users.push(newUser);
  await saveUsers(users);
}

async function saveUser(event) {
  event.preventDefault(); // מניעת התנהגות ברירת מחדל של הטופס

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
    registeredDate: new Date().toLocaleDateString() // תאריך רישום חדש הוא תאריך נוכחי
  };

  await saveNewUser(newUser);
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
      <!-- כאן אתה יכול להוסיף קוד HTML עבור כל שורה בטבלה -->
    `;
    userTableBody.appendChild(row);
  });
}

function displaySavedUsers() {
  const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
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
    saveUsers(filteredUsers); // שמירת המשתמשים שעברו סינון ב-localStorage
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

async function deleteUser(userId) {
  if (confirm('האם אתה בטוח שברצונך למחוק משתמש זה?')) {
    let users = await loadUsers();
    users = users.filter(user => user.id !== userId);
    await saveUsers(users);
  }
}
async function editUser(userId) {
  const users = await loadUsers();
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    const user = users[index];
    // כאן תוכל לממש את הלוגיקה לעריכת המשתמש ולעדכון הנתונים בזיכרון
    // לדוגמה: הצגת טופס עריכה ועדכון המשתמש
  } else {
    console.error('משתמש עם המזהה הנתון לא נמצא');
  }
}
function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <!-- כאן אתה יכול להוסיף תאים נוספים עבור כפתורי עריכה ומחיקה -->
      <th>
        <button onclick="editUser('${user.id}')">עריכה</button>
        <button onclick="prepareDelete('${user.id}')">מחיקה</button>
      </th>
      <th>${user.updatedDate}</th>
      <th>${user.registeredDate}</th>
      <th>${user.postalCode}</th>
      <th>${user.country}</th>
      <th>${user.city}</th>
      <th>${user.street}</th>
      <th>${user.lastName}</th>
      <th>${user.firstName}</th>
      <th>${user.phone}</th>
      <th>${user.email}</th>
      <th>${user.username}</th>
    `;
    userTableBody.appendChild(row);
  });
}
