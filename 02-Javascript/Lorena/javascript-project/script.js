document.addEventListener('DOMContentLoaded', () => {
    const createUserTab = document.getElementById('create-user-tab');
    const viewUsersTab = document.getElementById('view-users-tab');
    const userFormPopup = document.getElementById('user-form-popup');
    const usersView = document.getElementById('users-view');
    const userForm = document.getElementById('user-form');
    const undoPopup = document.getElementById('undo-popup');
    const undoBtn = document.getElementById('undo-btn');
  
    let users = JSON.parse(localStorage.getItem('users')) || {};
    let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
    let deletedUser = null;
    let undoTimeout;
  
    createUserTab.addEventListener('click', () => {
      userFormPopup.style.display = 'block';
      usersView.style.display = 'none';
    });
  
    viewUsersTab.addEventListener('click', () => {
      userFormPopup.style.display = 'none';
      usersView.style.display = 'block';
      displayUsers();
    });
  
    userForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const newUser = {
        username: document.getElementById('user-username').value.trim(),
        email: document.getElementById('user-email').value.trim(),
        phone: document.getElementById('user-phone').value.trim(),
        firstName: document.getElementById('user-firstname').value.trim(),
        lastName: document.getElementById('user-lastname').value.trim(),
        street: document.getElementById('user-street').value.trim(),
        city: document.getElementById('user-city').value.trim(),
        state: document.getElementById('user-state').value.trim(),
        country: document.getElementById('user-country').value.trim(),
        zipcode: document.getElementById('user-zipcode').value.trim(),
        registeredDate: new Date().toISOString(),
        updatedDate: new Date().toISOString()
      };
  
      if (isUsernameOrEmailTaken(newUser.username, newUser.email)) {
        alert('Username or email is already taken!');
        return;
      }
  
      addUser(newUser);
      userForm.reset();
      alert('User added successfully!');
    });
  
    function saveUserData() {
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('userIds', JSON.stringify(userIds));
    }
  
    function isUsernameOrEmailTaken(username, email) {
      return Object.values(users).some(user => user.username.toLowerCase() === username.toLowerCase() || user.email.toLowerCase() === email.toLowerCase());
    }
  
    function generateUserId() {
      let userId = Date.now().toString();
      while (userIds.includes(userId)) {
        userId = Date.now().toString() + Math.floor(Math.random() * 1000);
      }
      return userId;
    }
  
    function addUser(user) {
      const userId = generateUserId();
      users[userId] = user;
      userIds.push(userId);
      saveUserData();
    }
  
    function displayUsers() {
      const usersTableBody = document.querySelector('#users-table tbody');
      usersTableBody.innerHTML = '';
  
      Object.keys(users).forEach(userId => {
        const user = users[userId];
        const userRow = document.createElement('tr');
  
        userRow.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.street}</td>
          <td>${user.city}</td>
          <td>${user.state}</td>
          <td>${user.country}</td>
          <td>${user.zipcode}</td>
          <td>${user.registeredDate}</td>
          <td>${user.updatedDate}</td>
          <td>
            <button class="edit-btn" data-id="${userId}">Edit</button>
            <button class="delete-btn" data-id="${userId}">Delete</button>
          </td>
        `;
  
        usersTableBody.appendChild(userRow);
      });
  
      document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEditUser);
      });
  
      document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDeleteUser);
      });
    }
  
    function handleEditUser(event) {
      const userId = event.target.dataset.id;
      const userRow = event.target.closest('tr');
  
      const user = users[userId];
      userRow.innerHTML = `
        <td><input type="text" value="${user.username}" class="edit-username"></td>
        <td><input type="email" value="${user.email}" class="edit-email"></td>
        <td><input type="tel" value="${user.phone}" class="edit-phone"></td>
        <td><input type="text" value="${user.firstName}" class="edit-firstName"></td>
        <td><input type="text" value="${user.lastName}" class="edit-lastName"></td>
        <td><input type="text" value="${user.street}" class="edit-street"></td>
        <td><input type="text" value="${user.city}" class="edit-city"></td>
        <td><input type="text" value="${user.state}" class="edit-state"></td>
        <td><input type="text" value="${user.country}" class="edit-country"></td>
        <td><input type="text" value="${user.zipcode}" class="edit-zipcode"></td>
        <td>${user.registeredDate}</td>
        <td>${user.updatedDate}</td>
        <td>
          <button class="save-edit-btn" data-id="${userId}">Save</button>
          <button class="cancel-edit-btn" data-id="${userId}">Cancel</button>
        </td>
      `;
  
      document.querySelector(`.save-edit-btn[data-id="${userId}"]`).addEventListener('click', handleSaveEditUser);
      document.querySelector(`.cancel-edit-btn[data-id="${userId}"]`).addEventListener('click', displayUsers);
    }
  
    function handleSaveEditUser(event) {
      const userId = event.target.dataset.id;
      const userRow = event.target.closest('tr');
      
      const updatedUser = {
        username: userRow.querySelector('.edit-username').value.trim(),
        email: userRow.querySelector('.edit-email').value.trim(),
        phone: userRow.querySelector('.edit-phone').value.trim(),
        firstName: userRow.querySelector('.edit-firstName').value.trim(),
        lastName: userRow.querySelector('.edit-lastName').value.trim(),
        street: userRow.querySelector('.edit-street').value.trim(),
        city: userRow.querySelector('.edit-city').value.trim(),
        state: userRow.querySelector('.edit-state').value.trim(),
        country: userRow.querySelector('.edit-country').value.trim(),
        zipcode: userRow.querySelector('.edit-zipcode').value.trim(),
        registeredDate: users[userId].registeredDate,
        updatedDate: new Date().toISOString()
      };
  
      users[userId] = updatedUser;
      saveUserData();
      displayUsers();
    }
  
    function handleDeleteUser(event) {
      const userId = event.target.dataset.id;
      if (confirm('Are you sure you want to delete this user?')) {
        deletedUser = { id: userId, data: users[userId] };
        delete users[userId];
        userIds = userIds.filter(id => id !== userId);
        saveUserData();
        displayUsers();
        showUndoPopup();
      }
    }
  
    function showUndoPopup() {
      undoPopup.style.display = 'block';
      undoTimeout = setTimeout(() => {
        if (undoPopup.style.display === 'block') {
          undoPopup.style.display = 'none';
          deletedUser = null;
        }
      }, 6000);
    }
  
    undoBtn.addEventListener('click', () => {
      if (deletedUser) {
        users[deletedUser.id] = deletedUser.data;
        userIds.push(deletedUser.id);
        saveUserData();
        displayUsers();
        undoPopup.style.display = 'none';
        clearTimeout(undoTimeout);
        deletedUser = null;
      }
    });
  
    function filterUsers() {
      const usernameFilter = document.getElementById('username-filter').value.trim().toLowerCase();
      const emailFilter = document.getElementById('email-filter').value.trim().toLowerCase();
      const phoneFilter = document.getElementById('phone-filter').value.trim().toLowerCase();
      const fullnameFilter = document.getElementById('fullname-filter').value.trim().toLowerCase();
      const countryFilter = document.getElementById('country-filter').value.trim().toLowerCase();
      const cityFilter = document.getElementById('city-filter').value.trim().toLowerCase();
      const registeredDateFilter = document.getElementById('registered-date-filter').value;
      const updatedDateFilter = document.getElementById('updated-date-filter').value;
  
      const filteredUsers = Object.values(users).filter(user => {
        return (!usernameFilter || user.username.toLowerCase().includes(usernameFilter)) &&
               (!emailFilter || user.email.toLowerCase().includes(emailFilter)) &&
               (!phoneFilter || user.phone.toLowerCase().includes(phoneFilter)) &&
               (!fullnameFilter || `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.includes(fullnameFilter)) &&
               (!countryFilter || user.country.toLowerCase().includes(countryFilter)) &&
               (!cityFilter || user.city.toLowerCase().includes(cityFilter)) &&
               (!registeredDateFilter || user.registeredDate.split('T')[0] === registeredDateFilter) &&
               (!updatedDateFilter || user.updatedDate.split('T')[0] === updatedDateFilter);
      });
  
      displayFilteredUsers(filteredUsers);
    }
  
    function displayFilteredUsers(filteredUsers) {
      const usersTableBody = document.querySelector('#users-table tbody');
      usersTableBody.innerHTML = '';
  
      filteredUsers.forEach(user => {
        const userRow = document.createElement('tr');
  
        userRow.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.street}</td>
          <td>${user.city}</td>
          <td>${user.state}</td>
          <td>${user.country}</td>
          <td>${user.zipcode}</td>
          <td>${user.registeredDate}</td>
          <td>${user.updatedDate}</td>
          <td>
            <button class="edit-btn" data-id="${user.id}">Edit</button>
            <button class="delete-btn" data-id="${user.id}">Delete</button>
          </td>
        `;
  
        usersTableBody.appendChild(userRow);
      });
  
      document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEditUser);
      });
  
      document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDeleteUser);
      });
    }
  
    const filters = document.querySelectorAll('#filters input');
    filters.forEach(filter => {
      filter.addEventListener('input', debounce(filterUsers, 300));
    });
  
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  
    setInterval(() => {
      if (usersView.style.display === 'block') {
        displayUsers();
      }
    }, 30000);
  });
  