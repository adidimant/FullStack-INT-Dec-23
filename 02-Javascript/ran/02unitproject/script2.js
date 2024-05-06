let users = {};
let userIds = [];

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

if (Object.keys(users).length === 0) {
  dummyUsers.forEach((user, index) => {
    const userId = `user-${index + 1}`;
    users[userId] = user;
    userIds.push(userId);
  });
}

function saveUser(userId = null) {
  return new Promise((resolve, reject) => {
    if (userId) {
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
      updateUserInLocalStorage(userId, updatedUser)
        .then(() => resolve())
        .catch(err => reject(err));
    } else {
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

      // Validation checks...

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
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('userIds', JSON.stringify(userIds));

      document.getElementById('userForm').reset();
      resolve();
    }
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    if (confirm('האם אתה בטוח שברצונך למחוק את המשתמש הזה?')) {
      const deletedUser = users[userId];
      delete users[userId];
      localStorage.setItem('users', JSON.stringify(users));
      const filteredUserIds = userIds.filter(id => id !== userId);
      userIds = filteredUserIds;
      localStorage.setItem('userIds', JSON.stringify(userIds));
      resolve(deletedUser);
    } else {
      reject(new Error('User deletion cancelled'));
    }
  });
}

function loadUsersFromLocalStorage() {
  return new Promise((resolve, reject) => {
    const loadedUsers = JSON.parse(localStorage.getItem('users') || '{}');
    const loadedUserIds = JSON.parse(localStorage.getItem('userIds') || '[]');
    users = loadedUsers;
    userIds = loadedUserIds;
    resolve(users);
  });
}

function updateUserInLocalStorage(userId, updatedUser) {
  return new Promise((resolve, reject) => {
    localStorage.setItem('users', JSON.stringify(users));
    resolve();
  });
}

document.addEventListener('DOMContentLoaded', async function() {
  await loadUsersFromLocalStorage();
  renderUserTable();

  if (createUserForm) {
    createUserForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      try {
        await saveUser();
        renderUserTable();
        alert('המשתמש נוצר בהצלחה!');
      } catch (error) {
        alert('שגיאה ביצירת המשתמש');
        console.error(error);
      }
    });
  }
});
