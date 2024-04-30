document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);

  // טיפול במסננים
  const filters = document.querySelectorAll('.filter'); // וודא שזו השורה הנכונה לאחר שה-DOM נטען
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));

  // הוספת כפתור שמירת משתמשים
  const saveButton = createSaveButton();
  document.querySelector('#userTable').after(saveButton); // הוספת הכפתור מתחת לטבלה
});

function createSaveButton() {
  const button = document.createElement('button');
  button.textContent = 'שמור את כל המשתמשים';
  button.style.cssText = "display:block; margin-left:auto; margin-right:auto;"; // ממקם את הכפתור במרכז בתחתית הטבלה
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

function filterUsers() {
  loadUsers().then(users => {
    const filters = document.querySelectorAll('.filter'); // מחדש את הגדרת filters
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
