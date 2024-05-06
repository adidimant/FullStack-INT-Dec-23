function fillTable() {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Function to populate the HTML table with user data
    function populateUserTable() {
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
                editButton.textContent = "Edit";
                editButton.addEventListener('click', () => {
                    // Handle edit functionality
                    console.log("Edit user:", user);
                });
                editDeleteCell.appendChild(editButton);

                // Add some space between buttons
                editDeleteCell.appendChild(document.createTextNode(" "));

                // Delete button:
                const deleteButton = document.createElement('button');
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener('click', () => {
                    // Handle delete functionality
                    console.log("Delete user:", user);
                });
                editDeleteCell.appendChild(deleteButton);

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


    // Call the function to populate the table initially
    populateUserTable();

}

// Functions to check if a username or email already exist in the table
function usernameExists(users, username) {
    for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
            const user = users[userId];
            if (user.username === username) {
                console.log(username);
                return true; // Username already exists
            }
        }
    }
    return false; // Username does not exist
}

function emailExists(users, email) {
    for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
            const user = users[userId];
            if (user.email === email) {
                console.log(email);
                return true; // Email already exists
            }
        }
    }
    return false; // Email does not exist
}

async function validateInput(el) {
    return new Promise((resolve, reject) => {
        const input = el;
        const errorElement = document.getElementById(input.id + 'Error');

        if (input.id == 'email' || input.id == 'phone' || input.id == 'username') {
            if (input.id == 'email') {
                const emailExistsError = document.getElementById('emailExistsError');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const users = JSON.parse(localStorage.getItem('users')) || {};

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
            } else if (input.id == 'username') {
                const users = JSON.parse(localStorage.getItem('users')) || {};
                const usernameExistsError = document.getElementById('usernameExistsError');
                if (input.value.length < 1) {
                    errorElement.textContent = 'The ' + input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1) + ' must contain at least 1 character.';
                } else {
                    errorElement.textContent = ''; // Clear the error message
                }

                if (usernameExists(users, input.value)) {
                    usernameExistsError.textContent = 'There is already a user with this username. Please edit the user or choose a different username.';
                } else {
                    usernameExistsError.textContent = ''; // Clear the error message
                }
            } else { // if input.id = 'phone'
                if (input.value.length < 9) {
                    errorElement.textContent = 'Phone number must contain at least 9 digits.';
                } else {
                    errorElement.textContent = ''; // Clear the error message
                }
            }
        } else if (input.value.length < 1) {
            errorElement.textContent = 'The ' + input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1) + ' must contain at least 1 character.';
        } else {
            errorElement.textContent = ''; // Clear the error message
        }
        // Resolve the promise
        resolve();
    });
}

/*function validateFname() {
    const fnameInput = document.getElementById('fname');
    const fnameError = document.getElementById('fnameError');
    if (fnameInput.value.length < 1) {
        fnameError.textContent = 'The first name must contain at least 1 character.';
    } else {
        fnameError.textContent = ''; // Clear the error message
    }
}
function validateLname() {
    const lnameInput = document.getElementById('lname');
    const lnameError = document.getElementById('lnameError');
    if (lnameInput.value.length < 1) {
        lnameError.textContent = 'The last name must contain at least 1 character.';
    } else {
        lnameError.textContent = ''; // Clear the error message
    }
}
function validateCity() {
    const cityInput = document.getElementById('city');
    const cityError = document.getElementById('city');
    if (cityInput.value.length < 1) {
        cityError.textContent = 'The City must contain at least 1 character.';
    } else {
        cityError.textContent = ''; // Clear the error message
    }
}*/

/*function validate() {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const emailExistsError = document.getElementById('emailExistsError');
    const phoneError = document.getElementById('phoneError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address.';
    } else {
        emailError.textContent = ''; // Clear the error message
    }

    if (phoneInput.value.length < 9) {
        phoneError.textContent = 'Phone number must contain at least 9 digits.';
    } else {
        phoneError.textContent = ''; // Clear the error message
    }

    if (usernameExists(users, usernameInput.value)) {
        usernameError.textContent = 'There is already a user with this username. Please edit the user or choose a different username.';
    } else {
        usernameError.textContent = ''; // Clear the error message
    }

    if (emailExists(users, emailInput.value)) {
        emailExistsError.textContent = ' There is already a user with this email address. Please edit the user or choose a different email address.'
    } else {
        emailExistsError.textContent = ''; // Clear the error message
    }
}*/

async function validateForm() {
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

    // Iterate over each input element and call the validateInput function
    for (const inputElement of inputElements) {
        const errorName = inputElement.id + 'Error';
        const errorElement = document.getElementById(errorName);

        // Call validateInput with the input
        await validateInput(inputElement);
        console.log(errorElement);

        // Check if there's an error message for this input
        if (errorElement.textContent) {
            console.log('555');
            hasErrors = true;
        }
    }

    // Return the result after all validations are done
    return hasErrors;
}

// Function to format date to YYYY-MM-DD format
function getFormattedDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
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
        updatedDate:''
    };
    //console.log(newUser);
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

    //console.log(users);
}

async function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    console.log('entered submit');
    // Run validation once more before submitting, validateForm returns true/false
    const hasErrors = await validateForm();

    // Check if there are any error messages:
    if (hasErrors) {
        // If there are error messages, prevent form submission
        //alert('Please fix the errors before submitting the form.');
        document.getElementById('afterSubmit').textContent = 'Please fix the errors before submitting the form.';
    } else {
        // If there are no errors, proceed with form submission
        //alert('New user added successfully!');
        document.getElementById('afterSubmit').textContent = 'New user added successfully!';
        // saveToStorage();
    }
}