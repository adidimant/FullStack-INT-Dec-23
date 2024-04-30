document.addEventListener('DOMContentLoaded', async () => {
  try {
    const users = await loadUsers();
    populateUserTable(users);
  } catch (error) {
    console.error("Error loading users:", error);
  }

  // תיקון לבעיית האלמנט שלא נמצא
  const userTableBody = document.getElementById('userTableBody');
  if (userTableBody) {
    userTableBody.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        const userId = event.target.closest('tr').dataset.userId;
        if (event.target.textContent.includes('עריכה')) {
          editUser(userId);
        } else if (event.target.textContent.includes('מחיקה')) {
          deleteUser(userId);
        }
      }
    });
  }

  // מקשר את הטאבים בהתאם לקיום הכיתה
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.tabname));
  });

  // אם יש כפתור לסינון, מוסיף לו אירוע
  const filterButton = document.getElementById('filterUsersButton');
  if (filterButton) {
    filterButton.addEventListener('click', filterUsersAndSave);
  }

  // פונקציית טיפול בטופס
  const userForm = document.getElementById('userForm');
  if (userForm) {
    userForm.addEventListener('submit', saveUser);
  }
});

async function loadUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  userTableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.dataset.userId = user.id;
    row.innerHTML = `
      <td>
        <button>עריכה</button>
        <button>מחיקה</button>
      </td>
      ${Object.values(user).map(value => `<td>${value}</td>`).join('')}
    `;
    userTableBody.appendChild(row);
  });
}

async function saveUser(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newUser = Object.fromEntries(formData.entries());
  const users = await loadUsers();
  users.push(newUser);
  await saveUsers(users);
  populateUserTable(users);
}

async function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  tabContents.forEach(content => content.style.display = 'none');
  
  document.querySelector(`#${tabName}`).style.display = 'block';
  document.querySelector(`.tab[data-tabname='${tabName}']`).classList.add('active');
}

function filterUsersAndSave() {
  console.log('Filter and save logic goes here.');
}

async function editUser(userId) {
  const users = await loadUsers();
  const user = users.find(u => u.id === userId);
  if (user) {
    const form = document.getElementById('userForm');
    Object.keys(user).forEach(key => {
      if (form.elements[key]) form.elements[key].value = user[key];
    });
    form.scrollIntoView();
  }
}

async function deleteUser(userId) {
  const users = await loadUsers();
  const updatedUsers = users.filter(user => user.id !== userId);
  await saveUsers(updatedUsers);
  populateUserTable(updatedUsers);
}
