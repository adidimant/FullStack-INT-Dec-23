document.addEventListener('DOMContentLoaded', async () => {
  const users = await loadUsers();
  displayUsers(users);
  filters.forEach(filter => filter.addEventListener('keyup', debounce(filterUsers, 300)));
  document.querySelector('#userTable').after(createSaveButton()); // יצירת והוספת כפתור שמירה בתחתית הטבלה
});

function createSaveButton() {
  const button = document.createElement('button');
  button.textContent = 'שמור את כל המשתמשים';
  button.style.cssText = "display:block; margin-left:auto; margin-right:auto;"; // ממקם את הכפתור במרכז בתחתית הטבלה
  button.onclick = saveAllUsers;
  return button;
}

async function saveAllUsers() {
  const users = await loadUsers(); // טעינת המשתמשים הנוכחיים
  await saveUsers(users); // שמירה ב-localStorage
  console.log('נתונים נשמרו ב-localStorage'); // הדפסה לקונסול לוודא שהפעולה בוצעה
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
    const filteredUsers = users.filter(user => {
      return [...filters].every(filter => {
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
