// קבלת הפניות לרכיבי DOM
const createUserTab = document.getElementById('createUserTab');
const viewUsersTab = document.getElementById('viewUsersTab');
const createUserSection = document.getElementById('createUserSection');
const viewUsersSection = document.getElementById('viewUsersSection');
const createUserForm = document.getElementById('userForm');
const usersTable = document.getElementById('userTable');
const filtersContainer = document.getElementById('filters');
const undoContainer = document.getElementById('undoContainer');
const undoBar = document.getElementById('undoBar');
const undoButton = document.getElementById('undoButton');

// אתחול localStorage והמשתמשים הדמה
let users = JSON.parse(localStorage.getItem('users') || '{}');
let userIds = JSON.parse(localStorage.getItem('userIds') || '[]');
let deletedUser = null;

const dummyUsers = [
  {
    username: 'johnsmith',
    email: 'john@example.com',
    phone: '555-1234',
    firstName: 'John',
    lastName: 'Smith',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    country: 'USA',
    zipcode: '12345',
    registeredDate: '2022-05-01',
    updatedDate: '2022-05-01'
  },
  {
    username: 'janedoe',
    email: 'jane@example.com',
    phone: '555-5678',
    firstName: 'Jane',
    lastName: 'Doe',
    street: '456 Oak Rd',
    city: 'Someville',
    state: 'NY',
    country: 'USA',
    zipcode: '67890',
    registeredDate: '2021-10-15',
    updatedDate: '2021-10-15'
  }
];

// הוספת משתמשי דמה ל-localStorage אם אין כבר נתונים
if (Object.keys(users).length === 0) {
  dummyUsers.forEach((user, index) => {
    const userId = `user-${index + 1}`;
    users[userId] = user;
  });
  localStorage.setItem('users', JSON.stringify(users));
}

// פונקציה אסינכרונית לשמירת המשתמש
async function saveUser(event, userId = null) {
  if (event) {
    event.preventDefault();
  }

  try {
    if (userId) {
      // עדכון משתמש קיים
      const updatedUser = {
        username: document.getElementById(`editUsername-${userId}`).value,
        email: document.getElementById(`editEmail-${userId}`).value,
        phone: document.getElementById(`editPhone-${userId}`).value,
        firstName: document.getElementById(`editFirstName-${userId}`).value,
        lastName: document.getElementById(`editLastName-${userId}`).value,
        street: document.getElementById(`editStreet-${userId}`).value,
        city: document.getElementById(`editCity-${userId}`).value,
        country: document.getElementById(`editCountry-${userId}`).value,
        zipcode: document.getElementById(`editZipcode-${userId}`).value,
        registeredDate: document.getElementById(`editRegisteredDate-${userId}`).value,
        updatedDate: new Date().toISOString()
      };

      users[userId] = updatedUser;
      await localStorage.setItem('users', JSON.stringify(users));
      renderUserTable();
    } else {
      // יצירת משתמש חדש
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const street = document.getElementById('street').value;
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const postalCode = document.getElementById('postalCode').value;
      const registeredDate = document.getElementById('registeredDate').value;

      // ולידציות
      if (!username || !email || !firstName || !lastName) {
        alert('אנא מלא את כל השדות הנדרשים');
        return;
      }

      if (!validateEmail(email)) {
        alert('אנא הזן כתובת אימייל חוקית');
        return;
      }

      // בדוק אם שם המשתמש או האימייל קיימים כבר
      if (Object.values(users).some(user => user.username === username || user.email === email)) {
        alert('שם משתמש או אימייל כבר קיימים');
        return;
      }

      const newUser = {
        username,
        email,
        phone,
        firstName,
        lastName,
        street,
        city,
        country,
        postalCode,
        registeredDate,
        updatedDate: new Date().toISOString()
      };

      const newUserId = `user-${Date.now()}`;

      users[newUserId] = newUser;
      userIds.push(newUserId);
      await localStorage.setItem('users', JSON.stringify(users));
      await localStorage.setItem('userIds', JSON.stringify(userIds));

      document.getElementById('userForm').reset();
      renderUserTable();

      alert('המשתמש נוצר בהצלחה!');
    }
  } catch (error) {
    console.error('Error while saving user:', error);
    alert('שגיאה בשמירת המשתמש');
  }
}

// פונקציה אסינכרונית למחיקת המשתמש
async function deleteUser(userId) {
  if (confirm('האם אתה בטוח שברצונך למחוק את המשתמש הזה?')) {
    try {
      deletedUser = users[userId];
      delete users[userId];
      await localStorage.setItem('users', JSON.stringify(users));
      renderUserTable();
      showUndoBar();
    } catch (error) {
      console.error('Error while deleting user:', error);
      alert('שגיאה במחיקת המשתמש');
    }
  }
}

// פונקציה שמבצעת שחזור של המשתמש שנמחק לאחר לחיצה על כפתור undo
undoButton.addEventListener('click', async function() {
  if (deletedUser) {
    try {
      const newUserId = `user-${Date.now()}`;
      users[newUserId] = deletedUser;
      await localStorage.setItem('users', JSON.stringify(users));
      renderUserTable();
      undoContainer.style.display = 'none';
      deletedUser = null;
    } catch (error) {
      console.error('Error while restoring user:', error);
      alert('שגיאה בשחזור המשתמש');
    }
  }
});

function setupFilters() {
  const filterInputs = document.querySelectorAll('.filter');
  
  filterInputs.forEach(input => {
    input.addEventListener('input', debounce(filterUsers, 300));
  });
}

function filterUsers() {
  const filters = {
    username: document.getElementById('filterUsername').value.toLowerCase(),
    email: document.getElementById('filterEmail').value.toLowerCase(),
    phone: document.getElementById('filterPhone').value.toLowerCase(),
    fullName: document.getElementById('filterFullName').value.toLowerCase(),
    country: document.getElementById('filterCountry').value.toLowerCase(),
    city: document.getElementById('filterCity').value.toLowerCase(),
    registeredDate: document.getElementById('filterRegisteredDate').value,
    updatedDate: document.getElementById('filterUpdatedDate').value
  };

  const filteredUserIds = Object.keys(users).filter(userId => {
    const user = users[userId];
    return Object.keys(filters).every(key => {
      if (!filters[key]) return true;
      if (key === 'fullName') {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(filters[key]);
      }
      return user[key].toLowerCase().includes(filters[key]);
    });
  });

  renderUserTable(filteredUserIds);
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function renderUserTable(userIdsToRender = Object.keys(users)) {
  const tableBody = usersTable.getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // ניקוי הטבלה

  userIdsToRender.forEach(userId => {
    const user = users[userId];
    const row = document.createElement('tr');
    row.setAttribute('data-user-id', userId);
    Object.keys(user).forEach(key => {
      const cell = document.createElement('td');
      cell.textContent = user[key];
      row.appendChild(cell);
    });

    // יצירת עמודת פעולות (עריכה ומחיקה)
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit'; // כפתור עריכה
    editButton.onclick = () => editUser(userId);
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'; // כפתור מחיקה
    deleteButton.onclick = () => deleteUser(userId);
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);
    tableBody.appendChild(row);
  });
}

function editUser(userId) {
  const row = document.querySelector(`tr[data-user-id="${userId}"]`);
  const user = users[userId];

  // החלפת הנתונים לשדות קלט
  row.innerHTML = `
    <td>
      <button onclick="saveUser(event, '${userId}')">Save</button>
      <button onclick="cancelEdit('${userId}')">Cancel</button>
    </td>
    <td><input type="text" id="editUpdatedDate-${userId}" value="${user.updatedDate}"></td>
    <td><input type="text" id="editRegisteredDate-${userId}" value="${user.registeredDate}"></td>
    <td><input type="text" id="editZipcode-${userId}" value="${user.zipcode}"></td>
    <td><input type="text" id="editCountry-${userId}" value="${user.country}"></td>
    <td><input type="text" id="editCity-${userId}" value="${user.city}"></td>
    <td><input type="text" id="editStreet-${userId}" value="${user.street}"></td>
    <td><input type="text" id="editLastName-${userId}" value="${user.lastName}"></td>
    <td><input type="text" id="editFirstName-${userId}" value="${user.firstName}"></td>
    <td><input type="text" id="editPhone-${userId}" value="${user.phone}"></td>
    <td><input type="text" id="editEmail-${userId}" value="${user.email}"></td>
    <td><input type="text" id="editUsername-${userId}" value="${user.username}"></td>
  `;
}

function cancelEdit(userId) {
  renderUserTable();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function startTableRefresh() {
  setInterval(() => {
    renderUserTable();
  }, 30000);
}

function showTab(tabId) {
  // הסתרת כל הכרטיסיות
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none');

  // הצגת הכרטיסיה הנבחרת
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  setupFilters();
  renderUserTable();
  startTableRefresh();

  if (createUserForm) {
    createUserForm.addEventListener('submit', function(event) {
      saveUser(event);
    });
  }
});
