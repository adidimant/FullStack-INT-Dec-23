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
  const savedUsersTable = document.getElementById('savedUsersTable');
  savedUsersTable.style.display = 'block';  // ודא שהטבלה תוצג כאשר הלשונית נבחרת
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
  const userRow = document.getElementById(`user-${userId}`);
  const userCells = userRow.getElementsByTagName('td');
  let userData = {};

  // קבל את הנתונים של המשתמש מתוך השורה
  for (let i = 0; i < userCells.length - 1; i++) {
    const key = userCells[i].parentNode.cells[i].textContent;
    const value = userCells[i].textContent;
    userData[key] = value;
  }

  // הצג טופס לעריכת המשתמש
  const editForm = document.createElement('form');
  editForm.id = 'editForm';
  editForm.onsubmit = () => saveEditedUser(userId);
  
  // יצירת כל שדה המידע כקלט בטופס
  Object.entries(userData).forEach(([key, value]) => {
    const label = document.createElement('label');
    label.textContent = key;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.name = key.replace(/\s+/g, '-').toLowerCase();
    editForm.appendChild(label);
    editForm.appendChild(input);
    editForm.appendChild(document.createElement('br'));
  });

  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.textContent = 'שמור שינויים';
  editForm.appendChild(saveButton);

  // החלף את השורה בטופס העריכה
  userRow.innerHTML = '';
  const cell = userRow.insertCell();
  cell.colSpan = userCells.length;
  cell.appendChild(editForm);
}

async function saveEditedUser(userId) {
  const editForm = document.getElementById('editForm');
  const formData = new FormData(editForm);
  const editedUserData = Object.fromEntries(formData.entries());

  // טען את כל המשתמשים מ־localStorage
  const users = await loadUsers();

  // עדכן את נתוני המשתמש במערך המשתמשים
  const editedIndex = users.findIndex(user => user.userId === userId);
  if (editedIndex !== -1) {
    users[editedIndex] = { ...users[editedIndex], ...editedUserData };
  }

  // שמור את המשתמשים ב־localStorage
  await saveUsers(users);

  // עדכן את התצוגה של הטבלה
  displayUsers(users);

  // הצג הודעת אישור למשתמש
  alert('נתוני המשתמש עודכנו בהצלחה.');

  // חזור להצגת המשתמשים
  showTab('viewUsers');

  return false; // מנע טעינה מחדש של הדף
}

function prepareDelete(userId) {
  // הוסף את הפונקציה שמתחילה טיימר למחיקת המשתמש עם אופציה לביטול
  const userChoice = confirm('המשתמש ימחק תוך 6 שניות. לחץ Cancel לביטול.');

  if (userChoice) {
    // מתחיל טיימר למחיקת המשתמש אחרי 6 שניות
    deleteTimeout = setTimeout(() => {
      deleteUser(userId);
    }, 6000);
    // מציג כפתור לביטול פעולת המחיקה
    showUndoButton(userId);
  }
}

function showUndoButton(userId) {
  // יצירת כפתור לביטול
  const undoButton = document.createElement('button');
  undoButton.textContent = 'ביטול מחיקה';
  undoButton.onclick = () => cancelDelete(userId);
  document.body.appendChild(undoButton);
  
  // הוסף טיימר על הכפתור לביטול
  setTimeout(() => {
    undoButton.remove();
  }, 6000);
}

function cancelDelete(userId) {
  // ביטול הטיימר שהוגדר למחיקת המשתמש
  clearTimeout(deleteTimeout);
  console.log(`Deletion of user with ID: ${userId} has been cancelled.`);
  // הסר את הכפתור מהמסך
  document.querySelector('button[onclick*="cancelDelete"]').remove();
}
