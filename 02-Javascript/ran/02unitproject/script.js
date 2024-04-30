document.addEventListener('DOMContentLoaded', async () => {
  try {
    const users = await loadUsers();
    populateUserTable(users);
  } catch (error) {
    console.error("Error loading users:", error);
  }

  const userTableBody = document.getElementById('userTableBody');
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

  document.querySelector('.tabs').addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
      showTab(event.target.getAttribute('data-tabname'));
    }
  });

  document.getElementById('filterUsersButton').addEventListener('click', filterUsersAndSave);

  const userForm = document.getElementById('userForm');
  userForm.addEventListener('submit', saveUser);
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
  // פונקציית סינון משתמשים ושמירתם. יש להשלים את הלוגיקה על פי הצורך.
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
