// Set an interval to call refreshTable() every 30 seconds (30,000 milliseconds)
/*setInterval(refreshTable, 30000);*/
document.addEventListener('DOMContentLoaded', function() {
    startAutomaticRefresh();
});

// Set filtering flag to stop refresh while filtering
let isFiltering = false;
let refreshInterval;

// Function to start the automatic refresh
function startAutomaticRefresh() {
    if (!isFiltering) {
        refreshInterval = setInterval(refreshTable, 30000); // Refresh every 30 seconds
    }
}

// Function to stop the automatic refresh
function stopAutomaticRefresh() {
    clearInterval(refreshInterval);
}

// Filter bar function:
// Get references to filter input fields
const usernameFilterInput = document.getElementById('usernameFilter');
const emailFilterInput = document.getElementById('emailFilter');
const phoneFilterInput = document.getElementById('phoneFilter');
const fullnameFilterInput = document.getElementById('fullnameFilter');
const countryFilterInput = document.getElementById('countryFilter');
const cityFilterInput = document.getElementById('cityFilter');
const registeredFilterInput = document.getElementById('registeredFilter');
const updatedFilterInput = document.getElementById('updatedFilter');

// Get user information from storage:
const userData = JSON.parse(localStorage.getItem('users')) || {};
const tableBody = document.getElementById('table-body');

// Add input event listeners to trigger filtering
usernameFilterInput.addEventListener('input', debounceThenFilter);
emailFilterInput.addEventListener('input', debounceThenFilter);
phoneFilterInput.addEventListener('input', debounceThenFilter);
fullnameFilterInput.addEventListener('input', debounceThenFilter);
countryFilterInput.addEventListener('input', debounceThenFilter);
cityFilterInput.addEventListener('input', debounceThenFilter);
registeredFilterInput.addEventListener('input', debounceThenFilter);
updatedFilterInput.addEventListener('input', debounceThenFilter);

// Set debounce timer variable
let debounceTimer;

function debounceThenFilter() {
    clearTimeout(debounceTimer);
    
    // Start new debounce timer
    debounceTimer = setTimeout(filterTable, 300);
}

function filterTable() {
    // First set isFiltering to true and stop refresh
    isFiltering = true;
    stopAutomaticRefresh();

    // Get the input values from filter input fields 
    const usernameFilterValue = usernameFilterInput.value.toLowerCase();
    const emailFilterValue = emailFilterInput.value.toLowerCase();
    const phoneFilterValue = phoneFilterInput.value.toLowerCase();
    const fullnameFilterValue = fullnameFilterInput.value.toLowerCase();
    const countryFilterValue = countryFilterInput.value.toLowerCase();
    const cityFilterValue = cityFilterInput.value.toLowerCase();
    const registeredFilterValue = registeredFilterInput.value.toLowerCase();
    const updatedFilterValue = updatedFilterInput.value.toLowerCase();

    function convertDateFormat(inputDate) {
        if (!inputDate) {
            return ""; // Return an empty string if inputDate is undefined
        }
        const [year, month, day] = inputDate.split('-'); // Split date into year, month, and day
        return `${day}/${month}/${year}`; // Return the date in dd/mm/yyyy format
    }

    const convertedRegisteredFilterValue = convertDateFormat(registeredFilterValue);
    const convertedUpdatedFilterValue = convertDateFormat(updatedFilterValue);

    // Filter the data based on the input values
    const filteredData = {};
    for (const userId in userData) {
        const user = userData[userId];
        if (
            user.username.toLowerCase().includes(usernameFilterValue) &&
            user.email.toLowerCase().includes(emailFilterValue) &&
            (user.phone_number && user.phone_number.toString().includes(phoneFilterValue)) &&
            (user.first_name.toLowerCase().includes(fullnameFilterValue) ||
            user.last_name.toLowerCase().includes(fullnameFilterValue)) &&
            user.country.toLowerCase().includes(countryFilterValue) &&
            user.city.toLowerCase().includes(cityFilterValue) &&
            user.registeredDate.includes(convertedRegisteredFilterValue) &&
            user.updatedDate.includes(convertedUpdatedFilterValue)
        ) {
            filteredData[userId] = user;
        }
    }

    // Update the table with the filtered data
    //updateTable(filteredData);
    populateUserTable(filteredData);

    isFiltering = false;
    /*startAutomaticRefresh();*/
}

function clearFilters() {
    // Clear the filter inputs
    const filterInputs = document.getElementById('input-filters').querySelectorAll('input');

    // Iterate over each input element
    filterInputs.forEach(input => {
        // Check if the input type is 'date'
        if (input.type === 'date') {
            // For date inputs, set the value to null otherwise the browser does not clear
            input.value = null;
        } else {
            // For other input types, set the value to an empty string
            input.value = '';
        }
    });

    const filterInputs2 = document.getElementById('input-filters').querySelectorAll('input');
    console.log(filterInputs2);

    //refresh table, and then resume automatic refresh
    refreshTable();

    // Resume the automatic refresh
    startAutomaticRefresh();
}

// Function to populate the HTML table with user data
function populateUserTable(users) {
    const tableBody = document.getElementById('table-body');
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Iterate over the properties of the users object
    for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
            const user = users[userId]; // All the data printed in this row will be of this userId
    
            // Create a new row for each user
            const row = document.createElement('tr');

            // Create a cell for buttons to edit/delete
            const editDeleteCell = document.createElement('td');
            editDeleteCell.classList.add('editDeleteCell');

            // Edit button:
            const editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = "✎Edit";
            editButton.addEventListener('click', (event) => {
                editUser(event)
                //console.log("Edit user:", user); // This will print the initial user object before any changes are made.
                editButton.style.display = "none";
                deleteButton.style.display = "none";
                saveButton.style.display = "inline-block";
                cancelButton.style.display = "inline-block";
            });
            editDeleteCell.appendChild(editButton);

            // Delete button:
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = "🗑️Delete";
            deleteButton.addEventListener('click', (event) => {
                deleteUser(event);
            });
            editDeleteCell.appendChild(deleteButton);

            // Save button:
            const saveButton = document.createElement('button');
            saveButton.classList.add('save');
            saveButton.textContent = "Save";
            saveButton.style.display = "none"; // Initially hide Save button
            saveButton.addEventListener('click', (event) => {
                // Handle save functionality
                saveChanges(event);
                /*editButton.style.display = "inline-block";
                deleteButton.style.display = "inline-block";
                saveButton.style.display = "none";
                cancelButton.style.display = "none";*/
            });
            editDeleteCell.appendChild(saveButton);

            // Cancel button:
            const cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel');
            cancelButton.textContent = "Cancel";
            cancelButton.style.display = "none"; // Initially hide Cancel button
            cancelButton.addEventListener('click', (event) => {
                // Handle cancel functionality
                cancelEdit(event);

                // Show Edit and Delete buttons, hide Save and Cancel buttons
                editButton.style.display = "inline-block";
                deleteButton.style.display = "inline-block";
                saveButton.style.display = "none";
                cancelButton.style.display = "none";
            });
            editDeleteCell.appendChild(cancelButton);

            // Add the button cell to the row
            row.appendChild(editDeleteCell);

            // Create a cell for userId and add it to the row
            const userIdCell = document.createElement('td');
            userIdCell.textContent = userId;
            row.appendChild(userIdCell);
            
            // Populate the row with user data
            Object.values(user).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
    
            // Append the row to the table body
            tableBody.appendChild(row);
        }
    }
}

// Set variables for tabs and buttons:
const allUsersTab = document.getElementById('allUsersTab');
const newUserTab = document.getElementById('newUserTab');
const allUsersSection = document.getElementById('all-users');
const addUserSection = document.getElementById('add-user');
const clickableElement = document.getElementById('clickableElement');

allUsersTab.addEventListener('click', function() {
  changeTab(this);
});

newUserTab.addEventListener('click', function() {
    changeTab(this);
  });

// Function to change tab:
function changeTab(el) {
    
    if (el.id == 'allUsersTab') {
        el.classList.add('active-button');
        newUserTab.classList.remove('active-button');
        addUserSection.classList.add('hide');
        allUsersSection.classList.remove('hide');
    } else if (el.id == 'newUserTab') {
        el.classList.add('active-button');
        allUsersTab.classList.remove('active-button');
        addUserSection.classList.remove('hide');
        allUsersSection.classList.add('hide');
    }
}
function refreshTable() {
    const userTable = document.getElementById('users-table');
    const isEditMode = userTable.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    
    // If not in edit mode, refresh the table
    if (isEditMode.length == 0) {
        fillTable(); // Call the function to fill the table
        console.log('Refreshing table...');
    }
}

function fillTable() {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    // Call the function to populate the table initially
    populateUserTable(users);
}

// Function to check if a username or email already exist in the table, excludeUserId is send for using when editing user
function usernameExists(users, username, excludeUserId = null) {
    for (const userId in users) {
        if (users.hasOwnProperty(userId) && userId != excludeUserId) {
            const user = users[userId];
            if (user.username === username) {
                return true; // Username already exists
            }
        }
    }
    return false; // Username does not exist
}

function emailExists(users, email, excludeUserId = null) {
    for (const userId in users) {
        if (users.hasOwnProperty(userId) && userId != excludeUserId) {
            const user = users[userId];
            if (user.email === email) {
                return true; // Email already exists
            }
        }
    }
    return false; // Email does not exist
}

async function validateFormInput(el) {
    return new Promise((resolve, reject) => {
        const input = el;
        const errorElement = document.getElementById(input.id + 'Error');
        
        // check if field is empty
        if (input.value.length < 1) {
            errorElement.textContent = 'The ' + input.placeholder + ' must contain at least 1 character.';
        } else {
            errorElement.textContent = ''; // Clear the error message
        }

        if (input.id == 'email') {
            const emailExistsError = document.getElementById('emailExistsError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const users = JSON.parse(localStorage.getItem('users')) || {}; //I am not using the variable from the top of the page as it was retrieved before last user was added and was not updated since then.

            if (!emailRegex.test(input.value)) {
                errorElement.textContent = 'Invalid email address.';
            } else {
                errorElement.textContent = ''; // Clear the error message
            }

            if (emailExists(users, input.value)) {
                emailExistsError.textContent = ' There is already a user with this email address. Please edit the user or choose a different email address.'
            } else {
                emailExistsError.textContent = ''; // Clear the error message
            }
        } 
        if (input.id == 'username') {
            const users = JSON.parse(localStorage.getItem('users')) || {}; //TODO move this into the function scope instead of inside condition
            const usernameExistsError = document.getElementById('usernameExistsError');

            if (usernameExists(users, input.value)) {
                usernameExistsError.textContent = 'There is already a user with this username. Please edit the user or choose a different username.';
            } else {
                usernameExistsError.textContent = ''; // Clear the error message
            }
        } 
        if (input.id == 'phone') { 
            if (input.value.length < 9) {
                errorElement.textContent = 'Phone number must contain at least 9 digits.';
            } else {
                errorElement.textContent = ''; // Clear the error message
            }
        }
        resolve();
    });
}

async function validate() {
    return new Promise(async (resolve, reject) => {
        const inputElements = [
            document.getElementById('username'),
            document.getElementById('email'),
            document.getElementById('fname'),
            document.getElementById('lname'),
            document.getElementById('street'),
            document.getElementById('city'),
            document.getElementById('country'),
            document.getElementById('zipcode'),
            document.getElementById('phone')
        ];

        let hasErrors = false;

        // Iterate over each input element and perform validation
        for (const inputElement of inputElements) {
            const errorName = inputElement.id + 'Error';
            const errorElement = document.getElementById(errorName);

            // Perform validation logic
            await validateFormInput(inputElement);            
            
            if (errorElement.textContent) {
                hasErrors = true;
                //errorElement.textContent = 'Invalid input';
            } 
        }
        if ( document.getElementById('usernameExistsError').textContent || document.getElementById('emailExistsError').textContent ) {
            hasErrors = true;
        }

        // Resolve or reject the promise based on the validation result
        if (hasErrors) { //If there are finally no errors
            reject('Please fix the errors before submitting the form.'); // Reject if there are errors
        } else {
            resolve(); // Resolve if there are no errors
        }
    });
}

async function submitForm(e) {
    e.preventDefault();
    
    try {
        // Wait for the validation to complete
        await validate();

        // If validation succeeds, proceed with form submission
        document.getElementById('afterSubmit').textContent = 'New user added successfully!';
        saveToStorage();
        refreshTable()
        clearForm();
        // TODO add function to clear form after saving
    } catch (error) {
        // If validation fails, display error message
        document.getElementById('afterSubmit').textContent = error;
    }
}

function clearForm() {
    // Select the form element by its ID
    const form = document.getElementById('form-add-user');
    
    // Select all input elements within the form
    const inputElements = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');

    // Iterate over each input element and reset its value to an empty string
    inputElements.forEach(input => {
        input.value = '';
    });
}

// Function to format date to YYYY-MM-DD format
function getFormattedDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
// Generate userId for saving new user: Retrieve last userId from localStorage and add 1 to it
function userIdGenerate() {
    let userId = JSON.parse(localStorage.getItem('userId')) || 0;
    userId ++;
    localStorage.setItem('userId', userId);
    return userId;
}
function saveToStorage() {
    // Retrieve name and number from the parent div
    const emailInput = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const zipcode = document.getElementById('zipcode').value;
    const phoneInput = document.getElementById('phone').value;

    const newUser = {
        username: username,
        email: emailInput,
        first_name: fname,
        last_name: lname,
        street: street,
        city: city,
        country: country,
        zipcode: zipcode,
        phone_number: phoneInput,
        registeredDate: getFormattedDate(new Date()),
        updatedDate:'--'
    };
    // Retrieve last userId from localStorage and add 1 to it
    const userId = userIdGenerate();

    // Retrieve existing users from localStorage or initialize an empty object
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Add the new user to the object with username as key
    users[userId] = newUser;

    // Convert the object of users to a JSON string
    const usersJSON = JSON.stringify(users);

    // Save the updated object of users to localStorage
    localStorage.setItem('users', usersJSON);

    setTimeout(function() {
        allUsersTab.classList.add('active-button');
        newUserTab.classList.remove('active-button');
        addUserSection.classList.add('hide');
        allUsersSection.classList.remove('hide');
    }, 3000);
}

// Delete user:
function deleteUser(event) {
    // Check if the clicked element is a delete button
    if (event.target && event.target.classList.contains('delete')) {
        // Display confirmation popup
        if (window.confirm('Are you sure you want to delete this user?')) {
          // Get the row to delete
          let row = event.target.closest('tr');
          const userId = row.querySelector('td:nth-child(2)').textContent;
          
          // Remove the row from localStorage
          // Get the users object from local storage
          let users = JSON.parse(localStorage.getItem('users')) || {};
  
          if (users.hasOwnProperty(userId)) {
              // If the user exists, delete it
              delete users[userId];
          
              // Update the local storage with the modified users object
              localStorage.setItem('users', JSON.stringify(users));
  
              document.getElementById('deleteConfirmed').textContent = "User id " + userId + " was deleted successfully."
  
          } else {
              // If the user doesn't exist, notify the user 
              console.log("User id " + userId + " does not exist.");
          }
  
          // Remove the row from the table
          row.parentNode.removeChild(row);
        }
      }
}

// Edit user:
function editUser(event) {
    if (event.target && event.target.classList.contains('edit') ) {
        // Get the table cells

        let row = event.target.closest('tr');

        const fields = [
            { name : 'username', element : row.querySelector('td:nth-child(3)')},
            { name: 'email', element: row.querySelector('td:nth-child(4)') },
            { name: 'first_name', element: row.querySelector('td:nth-child(5)') },
            { name: 'last_name', element: row.querySelector('td:nth-child(6)') },
            { name: 'street', element: row.querySelector('td:nth-child(7)') },
            { name: 'city', element: row.querySelector('td:nth-child(8)') },
            { name: 'country', element: row.querySelector('td:nth-child(9)') },
            { name: 'zipcode', element: row.querySelector('td:nth-child(10)') },
            { name: 'phone_number', element: row.querySelector('td:nth-child(11)') },
            { name: 'registeredDate', element: row.querySelector('td:nth-child(12)') },
            { name: 'updatedDate', element: row.querySelector('td:nth-child(13)') }
        ]
        const userId = row.querySelector('td:nth-child(2)').textContent;

        // Replace the text with input fields
         fields.forEach((field, index) => {
            if (index >= 0 && index <= 8) { // Exclude the last two fields
                if (field.name == 'email') {
                    field.element.innerHTML = `<input type="email" class="${field.name}" value="${field.element.textContent}" onkeyup="validateTableInput(this, true, ${userId})">`
                } else if (field.name == 'phone') {
                    field.element.innerHTML = `<input type="tel" class="${field.name}" value="${field.element.textContent}" onkeyup="validateTableInput(this, true, ${userId})">`
                } else {
                    field.element.innerHTML = `<input type="text" class="${field.name}" value="${field.element.textContent}" onkeyup="validateTableInput(this, true, ${userId})">`
                }
            }
        });
    }
}

function saveChanges(event) {
    if (event.target && event.target.classList.contains('save')) {
        // Get the table cells
        let row = event.target.closest('tr');
        const userId = row.querySelector('td:nth-child(2)').textContent;

        // Validation flag
        let isValid = true;

        // Create an object to store the values
        const values = {};

        // Select all input elements inside the row
        const inputElements = row.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');

        // Iterate over each input element and store its value in the 'values' object
        inputElements.forEach(input => {
            const inputClass = input.classList[0]; // Get the class of the input element
            const value = input.value; // Get the value of the input element

            isValid = validateTableInput(input, isValid, userId); // Pass isValid and userId to the validation function

            values[inputClass] = value; // Store the value in the 'values' object with the class as the key
        });

        if (isValid) {
            // Retrieve existing users from localStorage or initialize an empty object
            const users = JSON.parse(localStorage.getItem('users')) || {};

            // Add the updatedDate to the values object
            values['updatedDate'] = getFormattedDate(new Date());

            // Update the user object from localStorage
            users[userId] = { ...users[userId], ...values };

            // Convert the object of users to a JSON string
            const usersJSON = JSON.stringify(users);

            // Save the updated object of users to localStorage
            localStorage.setItem('users', usersJSON);

            // Reflect the changes in the table
            updateTableRow(row, values);

            const saveButton = row.querySelector('.save');
            const editButton = row.querySelector('.edit');
            const cancelButton = row.querySelector('.cancel');
            const deleteButton = row.querySelector('.delete');

            editButton.style.display = "inline-block";
            deleteButton.style.display = "inline-block";
            saveButton.style.display = "none";
            cancelButton.style.display = "none";

            console.log('Updated successfully.');

        } else {
            console.log('Error in updating field.');
        }
    }
}

// Function to update the table row with new values
function updateTableRow(row, values) {
    // Select all td elements inside the row
    const tdElements = row.querySelectorAll('td');
    let index = 0;
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            // Update the text content of the corresponding td element
            tdElements[index + 2].textContent = values[key]; // Adding 2 to index to skip the first two td elements
            index++;
        }
    }
}

function cancelEdit(event) {
    if (event.target && event.target.classList.contains('cancel') ) {
        // Get the table cells
        let row = event.target.closest('tr');
        const userId = row.querySelector('td:nth-child(2)').textContent;
        const users = JSON.parse(localStorage.getItem('users')) || {};

        // Select all td elements inside the row
        const tdElements = row.querySelectorAll('td');

        userRow = users[userId];

        // Iterate over each value in the userRow object
        let index = 0;
        for (const key in userRow) {
            // Check if the key exists in the values object
            if (userRow.hasOwnProperty(key)) {
                // Update the text content of the corresponding td element
                tdElements[index + 2].textContent = userRow[key]; // Adding 2 to index to skip the first two td elements
                index++;
            }
        }
    }
}

function validateTableInput(input, isValid, userId) {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    //console.log(userId);
    if (input.value.length < 1) {
        input.classList.add('error');
        //errorElement.textContent = 'The ' + input.placeholder + ' must contain at least 1 character.';
        isValid = false;
    } else {
        input.classList.remove('error'); // Clear the error indication
    }

    if (input.classList.contains('email')) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(input.value) || emailExists(users, input.value, userId) || input.value.length < 1) {
            input.classList.add('error');
            //errorElement.textContent = 'Invalid email address.';
            isValid = false;
        } else {
            input.classList.remove('error'); // Clear the error message
        }

        /*if (emailExists(users, input.value)) {
            emailExistsError.textContent = ' There is already a user with this email address. Please edit the user or choose a different email address.'
        } else {
            emailExistsError.textContent = ''; // Clear the error message
        }*/
    } 
    if (input.classList.contains('username')) {
        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (usernameExists(users, input.value, userId) || input.value.length < 1) {
            input.classList.add('error');
            isValid = false;
            //usernameExistsError.textContent = 'There is already a user with this username. Please edit the user or choose a different username.';
        } else {
            input.classList.remove('error'); // Clear the error message
            //usernameExistsError.textContent = ''; // Clear the error message
        }
    } 
    if (input.classList.contains('phone')) { 
        if (input.value.length < 9 || input.value.length < 1) {
            input.classList.add('error');
            isValid = false;
            //errorElement.textContent = 'Phone number must contain at least 9 digits.';
        } else {
            input.classList.remove('error'); // Clear the error message
            //errorElement.textContent = ''; // Clear the error message
        }
    }
    return isValid;
    
}