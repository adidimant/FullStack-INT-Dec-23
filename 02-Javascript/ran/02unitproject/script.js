async function loadUsersIntoTable() {
  try {
    const users = await loadUsers();
    populateUserTable(users);
  } catch (error) {
    console.error("Error loading users:", error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
      const users = await loadUsers();
      populateUserTable(users);
  } catch (error) {
      console.error("Error loading users:", error);
  }

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

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
      tab.addEventListener('click', () => showTab(tab.dataset.tabname));
  });

  const filterButton = document.getElementById('filterUsersButton');
  if (filterButton) {
      filterButton.addEventListener('click', filterUsersAndSave);
  }

  const userForm = document.getElementById('userForm');
  if (userForm) {
      userForm.addEventListener('submit', async event => {
          event.preventDefault();
          const formData = new FormData(userForm);
          const newUser = Object.fromEntries(formData.entries());
          newUser.registeredDate = new Date().toISOString().split('T')[0];
          newUser.updatedDate = newUser.registeredDate;

          if (await validateNewUser(newUser)) {
              await saveNewUser(newUser);
              userForm.reset();
              alert('User created successfully');
          } else {
              alert('Username or email already exists.');
          }
      });
  }

  setInterval(loadUsers, 30000);  // Refresh the user table every 30 seconds
});

async function loadUsers() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  populateUserTable(users);
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

async function saveNewUser(user) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
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

async function validateNewUser(newUser) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return !users.some(user => user.username === newUser.username || user.email === newUser.email);
}

async function editUser(userId) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === userId);
  if (user) {
      const form = document.getElementById('userForm');
      Object.keys(user).forEach(key => {
          if (form.elements[key]) form.elements[key].value = user[key];
      });
      form.scrollIntoView();
  }
}

function filterUsersAndSave() {
  console.log('Filter and save logic goes here.');
  // Implementation needed
}

async function deleteUser(userId) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const updatedUsers = users.filter(user => user.id !== userId);
  await saveUsers(updatedUsers);
  populateUserTable(updatedUsers);
}

function populateUserTable(users) {
  const userTableBody = document.getElementById('userTableBody');
  if (!userTableBody || !users || users.length === 0) {
    console.error('Either userTableBody is not defined or users array is empty.');
    return;
  }

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

function showTab(tabName) {
  const tab = document.getElementById(tabName);
  if (!tab) {
    console.error(`Tab with name ${tabName} does not exist.`);
    return;
  }

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.style.display = 'none');

  tab.style.display = 'block';
  tab.classList.add('active');
}
