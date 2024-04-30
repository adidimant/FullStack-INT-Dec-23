// פונקציה שמרכזת את כל הלוגיקה הנדרשת עבור הצגת הלשוניות
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

// פונקציה ששומרת את כל המשתמשים
async function saveAllUsers() {
  const users = await loadUsers();
  await saveUsers(users);
  console.log('נתונים נשמרו ב-localStorage');
  alert('כל המשתמשים נשמרו בהצלחה');
}

// פונקציה ששומרת את המשתמש הנוכחי
function saveUser(event) {
  event.preventDefault(); // מניעת התנהגות ברירת מחדל של הטופס
  // לוגיקת שמירת המשתמש
}

// פונקציה שמקבלת את כל המשתמשים מה-localStorage
async function loadUsers() {
  const usersData = await localStorage.getItem('users') || '[]';
  return JSON.parse(usersData);
}

// פונקציה ששומרת את כל המשתמשים ב-localStorage
async function saveUsers(users) {
  await localStorage.setItem('users', JSON.stringify(users));
}

// פונקציה שמציגה את כל המשתמשים בטבלה
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

// פונקציה שמציגה את המשתמשים שנשמרו בטבלה נפרדת
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

// פונקציה זו משמשת לסינון המשתמשים בטבלה בהתאם לפילטרים
function filterUsers() {
  // לוגיקת סינון המשתמשים
}

// פונקציה שמפעילה debounce על פונקציה נתונה
function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

// איתור האלמנט המתאים בטבלה לפי מזהה משתמש ועריכתו
function editUser(userId) {
  // לוגיקת עריכת המשתמש
}

// הכנת המשתמש למחיקה
function prepareDelete(userId) {
  // לוגיקת מחיקת המשתמש
}

// מחיקת משתמש
function deleteUser(userId) {
  // לוגיקת מחיקת המשתמש
}
