const json = localStorage.getItem('user');
const users = JSON.parse(json);

const table = document.querySelector(".usersdetailstable");

window.addEventListener('DOMContentLoaded', () => {
    dataInTable();
    setupFilters();
});

function dataInTable() {
    let temp = `<table><tr>
        <th><input type="text" class="search-input" id="filter-username" placeholder="Username"></th>
        <th><input type="text" class="search-input" id="filter-email" placeholder="Email"></th>
        <th><input type="text" class="search-input" id="filter-phone" placeholder="Phone"></th>
        <th><input type="text" class="search-input" id="filter-fullname" placeholder="Full Name"></th>
        <th><input type="text" class="search-input" id="filter-country" placeholder="Country"></th>
        <th><input type="text" class="search-input" id="filter-city" placeholder="City"></th>
        <th><input type="text" class="search-input" id="filter-registeredDate" placeholder="Registered Date"></th>
        <th><input type="text" class="search-input" id="filter-updatedDate" placeholder="Updated Date"></th>
    </tr>`;

    users.forEach((row) => {
        temp += `<tr>
            <td>${row.username}</td>
            <td>${row.email}</td>
            <td>${row.phone}</td>
            <td>${row.fname + " " + row.lname}</td>
            <td>${row.country}</td>
            <td>${row.city}</td>
            <td>${row.registeredDate}</td>
            <td>${row.updatedDate}</td>
        </tr>`;
    });

    temp += `</table>`;
    table.innerHTML = temp;
}

function setupFilters() {
    const filterInputs = document.querySelectorAll(".search-input");

    let timeoutId;

    filterInputs.forEach(inputField => {
        inputField.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(applyFilters, 300);
        });
    });
}

function applyFilters() {
    const username = document.getElementById("filter-username").value.toLowerCase();
    const email = document.getElementById("filter-email").value.toLowerCase();
    const phone = document.getElementById("filter-phone").value.toLowerCase();
    const fullName = document.getElementById("filter-fullname").value.toLowerCase();
    const country = document.getElementById("filter-country").value.toLowerCase();
    const city = document.getElementById("filter-city").value.toLowerCase();
    const registeredDate = document.getElementById("filter-registeredDate").value.toLowerCase();
    const updatedDate = document.getElementById("filter-updatedDate").value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(username) &&
        user.email.toLowerCase().includes(email) &&
        user.phone.toLowerCase().includes(phone) &&
        (user.fname.toLowerCase() + " " + user.lname.toLowerCase()).includes(fullName) &&
        user.country.toLowerCase().includes(country) &&
        user.city.toLowerCase().includes(city) &&
        user.registeredDate.toLowerCase().includes(registeredDate) &&
        user.updatedDate.toLowerCase().includes(updatedDate)
    );

    displayFilteredUsers(filteredUsers);
}

function displayFilteredUsers(filteredUsers) {
    let temp = `<table><tr>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Full Name</th>
        <th>Country</th>
        <th>City</th>
        <th>Registered Date</th>
        <th>Updated Date</th>
    </tr>`;

    filteredUsers.forEach((row) => {
        temp += `<tr>
            <td>${row.username}</td>
            <td>${row.email}</td>
            <td>${row.phone}</td>
            <td>${row.fname + " " + row.lname}</td>
            <td>${row.country}</td>
            <td>${row.city}</td>
            <td>${row.registeredDate}</td>
            <td>${row.updatedDate}</td>
        </tr>`;
    });

    temp += `</table>`;
    table.innerHTML = temp;
}




const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');

// Listen for changes in the form
form.addEventListener("change", () => {
    // Enable/disable the submit button based on form validity
    submitBtn.disabled = !form.checkValidity();
});

// Listen for form submission
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Check the validity of the form
    if (form.checkValidity()) {
        // If the form is valid, submit the form programmatically
        form.submit();
    } else {
        // If the form is invalid, show an error message or handle it appropriately
        // For example, you can display an error message to the user
        alert("Please fill out all required fields correctly.");
    }
});


////////////////////////////////////////////

function setupFilters() {
    const filterInputs = document.querySelectorAll(".search-input");

    let timeoutId;

    filterInputs.forEach(inputField => {
        inputField.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(applyFilters, 300);
        });
    });
}



function applyFilters() {
    const username = document.getElementById("filter-username").value.toLowerCase();
    const email = document.getElementById("filter-email").value.toLowerCase();
    const phone = document.getElementById("filter-phone").value.toLowerCase();
    const fullName = document.getElementById("filter-fullname").value.toLowerCase();
    const country = document.getElementById("filter-country").value.toLowerCase();
    const city = document.getElementById("filter-city").value.toLowerCase();
    const registeredDate = document.getElementById("filter-registeredDate").value.toLowerCase();
    const updatedDate = document.getElementById("filter-updatedDate").value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(username) &&
        user.email.toLowerCase().includes(email) &&
        user.phone.toLowerCase().includes(phone) &&
        (user.fname.toLowerCase() + " " + user.lname.toLowerCase()).includes(fullName) &&
        user.country.toLowerCase().includes(country) &&
        user.city.toLowerCase().includes(city) &&
        user.registeredDate.toLowerCase().includes(registeredDate) &&
        user.updatedDate.toLowerCase().includes(updatedDate)
    );

    displayFilteredUsers(filteredUsers);
}

function displayFilteredUsers(filteredUsers) {
    let temp =`<table> <tr>`;
    temp +=  `<th><input type="text" class="search-input" id="filter-username" placeholder="username"></th>
                <th><input type="text" class="search-input" id="filter-email" placeholder="email"></th>
                <th><input type="text" class="search-input" id="filter-phone" placeholder="phone"></th>
                <th><input type="text" class="search-input" id="filter-full_name" placeholder="fullname"></th>
                <th>street</th>
                <th><input type="text" class="search-input" id="filter-city" placeholder="city"></th>
                <th>state</th>
                <th><input type="text" class="search-input" id="filter-country" placeholder="country"></th>
                <th>zipcode</th>
                <th><input type="text" class="search-input" id="filter-registeredDate" placeholder="registeredDate"></th>
                <th><input type="text" class="search-input" id="filter-updatedDate" placeholder="updatedDate"></th>
                <th>"Editing / Deletion"</th>` ;
    temp += `<tr>`;

    filteredUsers.forEach((row) => {
        temp +=  `<tr>
        <td>${row.username}</td>
        <td>${row.email}</td>
        <td>${row.phone}</td>
        <td>${row.fname + " " + row.lname}</td>
        <td>${row.street}</td>
        <td>${row.city}</td>
        <td>${row.state}</td>
        <td>${row.country}</td>
        <td>${row.zipcode}</td>
        <td>${row.registeredDate}</td>
        <td>${row.updatedDate}</td>
        <td><button onclick="editRow(this)" id="edit" class="editbutton"><i class='small material-icons'>edit</i></button>
        <button onclick="deleteUser(this)" id="delete"><i class='small material-icons'>delete</i></button></td>
    </tr>`
    });

    temp += `</table>`;
    table.innerHTML = temp;
}





//////////////////
const filterUsernameInput = document.getElementById('filter-username');
const filterEmailInput = document.getElementById('filter-email');
const filterPhoneInput = document.getElementById('filter-phone');
const filterFullNameInput = document.getElementById('filter-full_name');
const filterCountryInput = document.getElementById('filter-country');
const filterCityInput = document.getElementById('filter-city');
const filterRegisteredDateInput = document.getElementById('filter-registeredDate');
const filterUpdatedDateInput = document.getElementById('filter-updatedDate');

// Attach input event listeners with debounce
filterUsernameInput.addEventListener('input', debounce(filterTable, 300));
filterEmailInput.addEventListener('input', debounce(filterTable, 300));
filterPhoneInput.addEventListener('input', debounce(filterTable, 300));
filterFullNameInput.addEventListener('input', debounce(filterTable, 300));
filterCountryInput.addEventListener('input', debounce(filterTable, 300));
filterCityInput.addEventListener('input', debounce(filterTable, 300));
filterRegisteredDateInput.addEventListener('input', debounce(filterTable, 300));
filterUpdatedDateInput.addEventListener('input', debounce(filterTable, 300));

// Filtering function
function filterTable() {
    const usernameFilter = filterUsernameInput.value.trim().toLowerCase();
    const emailFilter = filterEmailInput.value.trim().toLowerCase();
    const phoneFilter = filterPhoneInput.value.trim().toLowerCase();
    const fullNameFilter = filterFullNameInput.value.trim().toLowerCase();
    const countryFilter = filterCountryInput.value.trim().toLowerCase();
    const cityFilter = filterCityInput.value.trim().toLowerCase();
    const registeredDateFilter = filterRegisteredDateInput.value.trim().toLowerCase();
    const updatedDateFilter = filterUpdatedDateInput.value.trim().toLowerCase();

    console.log(usernameFilter);



    const filteredUsers = users.filter(user => {
        return user.username.toLowerCase().includes(usernameFilter) &&
            user.email.toLowerCase().includes(emailFilter) &&
            user.phone.toLowerCase().includes(phoneFilter) &&
            (user.fname.toLowerCase() + " " + user.lname.toLowerCase()).includes(fullNameFilter) &&
            user.country.toLowerCase().includes(countryFilter) &&
            user.city.toLowerCase().includes(cityFilter) &&
            user["registered Date"].toLowerCase().includes(registeredDateFilter) &&
            user["updated Date"].toLowerCase().includes(updatedDateFilter);
    });

    console.log(filteredUsers);

    renderFilteredUsers(filteredUsers);
}




function renderFilteredUsers(filteredUsers) {
    let temp =`<table> <tr>`;
    temp +=  `<th><input type="text" class="search-input" id="filter-username" placeholder="username"></th>
                <th><input type="text" class="search-input" id="filter-email" placeholder="email"></th>
                <th><input type="text" class="search-input" id="filter-phone" placeholder="phone"></th>
                <th><input type="text" class="search-input" id="filter-full_name" placeholder="fullname"></th>
                <th>lastname</th>
                <th>street</th>
                <th><input type="text" class="search-input" id="filter-city" placeholder="city"></th>
                <th>state</th>
                <th><input type="text" class="search-input" id="filter-country" placeholder="country"></th>
                <th>zipcode</th>
                <th><input type="text" class="search-input" id="filter-registeredDate" placeholder="registeredDate"></th>
                <th><input type="text" class="search-input" id="filter-updatedDate" placeholder="updatedDate"></th>
                <th>"Editing / Deletion"</th>` ;
    temp += `<tr>`;

    filteredUsers.forEach((row) => {
        temp +=  `<tr>
        <td>${row.username}</td>
        <td>${row.email}</td>
        <td>${row.phone}</td>
        <td>${row.fname}</td>
        <td>${row.lname}</td>
        <td>${row.street}</td>
        <td>${row.city}</td>
        <td>${row.state}</td>
        <td>${row.country}</td>
        <td>${row.zipcode}</td>
        <td>${row.registeredDate}</td>
        <td>${row.updatedDate}</td>
        <td><button onclick="editRow(this)" id="edit" class="editbutton"><i class='small material-icons'>edit</i></button>
        <td><button onclick="saveRow(this)" id="save" class="savebutton"><i class='small material-icons'>edit</i></button>
        <button onclick="deleteUser(this)" id="delete"><i class='small material-icons'>delete</i></button></td>
    </tr>`
    });

    temp += `</table>`;
    table.innerHTML = temp;
}

function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}





