const json = localStorage.getItem('user');
const users = JSON.parse(json);

console.log(users);




// const tableHeader = Object.keys(users[0]);
// tableHeader.unshift(tableHeader.pop());
// tableHeader.splice(0, 0, "Editing / Deletion")
const table = document.querySelector(".usersdetailstable");

window.addEventListener('DOMContentLoaded', () => {
    dataInTable();
});

function dataInTable () {
    let temp = `<table> <tr>`;
    temp += `<th><input type="text" class="search-input" id="filter-username" placeholder="username"></th>
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


    users.forEach((row) => {
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
        <td>${row["registered Date"]}</td>
        <td>${row["updated Date"]}</td>
        <td><button onclick="editData(this)" id="edit" class="editbutton"><i class='small material-icons'>edit</i></button>
        <button onclick="savebutton(this)" class="savebutton" id="save"><i class='small material-icons'>save</i></button>
        <button onclick="deleteUser(this)" id="delete" class="deletebutton"><i class='small material-icons'>delete</i></button></td>
    </tr>`
    });

    temp += `</table>`;
    table.innerHTML = temp;
};

//////////////////////////////////

// Add event listeners to filter input fields
const filterUsername = document.getElementById('filter-username');
const filterEmail = document.getElementById('filter-email');
const filterPhone = document.getElementById('filter-phone');
const filterFullName = document.getElementById('filter-full_name');
const filterCountry = document.getElementById('filter-country');
const filterCity = document.getElementById('filter-city');
const filterRegisteredDate = document.getElementById('filter-registeredDate');
const filterUpdatedDate = document.getElementById('filter-updatedDate');

[filterUsername, filterEmail, filterPhone, filterFullName, filterCountry, filterCity, filterRegisteredDate, filterUpdatedDate].forEach(filter => {
    filter.addEventListener('input', applyFilters);
});


// Function to apply filters
function applyFilters() {
    const usernameFilter = filterUsername.value.toLowerCase();
    const emailFilter = filterEmail.value.toLowerCase();
    const phoneFilter = filterPhone.value.toLowerCase();
    const fullNameFilter = filterFullName.value.toLowerCase();
    const countryFilter = filterCountry.value.toLowerCase();
    const cityFilter = filterCity.value.toLowerCase();
    const registeredDateFilter = filterRegisteredDate.value.toLowerCase();
    const updatedDateFilter = filterUpdatedDate.value.toLowerCase();

    const filteredUsers = users.filter(user => {
        return (
            user.username.toLowerCase().includes(usernameFilter) &&
            user.email.toLowerCase().includes(emailFilter) &&
            user.phone.toLowerCase().includes(phoneFilter) &&
            (user.fname.toLowerCase() + ' ' + user.lname.toLowerCase()).includes(fullNameFilter) &&
            user.country.toLowerCase().includes(countryFilter) &&
            user.city.toLowerCase().includes(cityFilter) &&
            user['registered Date'].toLowerCase().includes(registeredDateFilter) &&
            user['updated Date'].toLowerCase().includes(updatedDateFilter)
        );
    });

    // Update the table with filtered data
    updateTable(filteredUsers);
}


// Function to update the table with filtered data
function updateTable(filteredUsers) {
    let temp = `<table> <tr>`;
    temp += `<th><input type="text" class="search-input" id="filter-username" placeholder="username"></th>
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
        <td>${row["registered Date"]}</td>
        <td>${row["updated Date"]}</td>
        <td><button onclick="editData(this)" id="edit" class="editbutton"><i class='small material-icons'>edit</i></button>
        <button onclick="savebutton(this)" class="savebutton" id="save"><i class='small material-icons'>save</i></button>
        <button onclick="deleteUser(this)" id="delete" class="deletebutton"><i class='small material-icons'>delete</i></button></td>
    </tr>`
    });

    temp += `</table>`;
    table.innerHTML = temp;
}


///////////////////////////////////

function deleteUser(button) {
    let row = button.parentNode.parentNode;
    let username = row.querySelector('td:nth-child(1)').textContent; // Get the username from the row
    let confirmation = confirm(`Are you sure you want to delete the user '${username}'?`);
    
    if (confirmation) {
        // Find the index of the user in the users array
        let userIdx = users.findIndex(user => user.username === username);

        console.log(userIdx);
        
        if (userIdx !== -1) {
            
            users.splice(userIdx, 1);
            
            
            localStorage.setItem('user', JSON.stringify(users));
            
            // Remove the row from the table
            row.parentNode.removeChild(row);
        } else {
            console.error('User not found in localStorage.');
        }
    }
}

///////////////////////////////////////////

function editData(button) { 
            
// משתנה שמקבל את השורה המתאימה לכפתור עריכה
    let row = button.parentNode.parentNode; 

    let editButton = row.querySelector('.editbutton');
    let saveButton = row.querySelector('.savebutton');

    
    editButton.style.display = 'none';
    saveButton.style.display = 'block';
    
    // Get the cells within the row 
    let usernameCell = row.cells[0]; 
    let emailCell = row.cells[1]; 
    let phoneCell = row.cells[2]; 
    let fnameCell = row.cells[3]; 
    let lnameCell = row.cells[4];
    let streetCell = row.cells[5];
    let cityCell = row.cells[6];
    let stateCell = row.cells[7];
    let countryCell = row.cells[8];
    let zipcodeCell = row.cells[9];
    let updatedDateCell = row.cells[11];

    console.log(usernameCell);

    let usernameValue = usernameCell.textContent || usernameCell.innerText;
    let emailValue = emailCell.textContent || emailCell.innerText;
    let phoneValue = phoneCell.textContent || phoneCell.innerText;
    let fnameValue = fnameCell.textContent || fnameCell.innerText;
    let lnameValue = lnameCell.textContent || lnameCell.innerText;
    let streetValue = streetCell.textContent || streetCell.innerText;
    let cityValue = cityCell.textContent || cityCell.innerText;
    let stateValue = stateCell.textContent || stateCell.innerText;
    let countryValue = countryCell.textContent || countryCell.innerText;
    let zipcodeValue = zipcodeCell.textContent || zipcodeCell.innerText;

    
    let usernameInput = 
         usernameCell.innerHTML = `<td><input type="text" id="username" name="username" value="${usernameValue}" class="input-edit"></td>`; 
    let emailInput = 
        emailCell.innerHTML = `<td><input type="text" id="email" name="email" value="${emailValue}" class="input-edit" style="width: 140px"></td>`; 
    let phoneInput = 
        phoneCell.innerHTML = `<td><input type="tel" id="phone" name="phone" value="${phoneValue}" class="input-edit"></td>`; 
    let fnameInput = 
        fnameCell.innerHTML = `<td><input type="text" id="fname" name="fname" value="${fnameValue}" class="input-edit"></td>`;
    let lnameInput = 
        lnameCell.innerHTML = `<td><input type="text" id="lname" name="lname" value="${lnameValue}" class="input-edit"></td>`;  
    let streetInput = 
        streetCell.innerHTML = `<td><input type="text" id="street" name="street" value="${streetValue}" class="input-edit"></td>`; 
    let cityInput = 
        cityCell.innerHTML = `<td><input type="text" id="city" name="city" value="${cityValue}" class="input-edit"></td>`; 
    let stateInput = 
        stateCell.innerHTML = `<td><input type="text" id="state" name="state" value="${stateValue}" class="input-edit"></td>`; 
    let countryInput = 
        countryCell.innerHTML = `<td><input type="text" id="country" name="country" value="${countryValue}" class="input-edit"></td>`; 
    let zipcodeInput = 
        zipcodeCell.innerHTML =`<td><input type="number" id="zipcode" name="zipcode" value="${zipcodeValue}" class="input-edit"></td>`; 

    


}

////////////////////////////////////////////////

function savebutton(button) {

    let row = button.parentNode.parentNode;

    let editButton = row.querySelector('.editbutton');
    let saveButton = row.querySelector('.savebutton');

    
    editButton.style.display = 'block';
    saveButton.style.display = 'none';

    console.log(row)

    let usernameCell = row.cells[0]; 
    let emailCell = row.cells[1]; 
    let phoneCell = row.cells[2]; 
    let fnameCell = row.cells[3]; 
    let lnameCell = row.cells[4];
    let streetCell = row.cells[5];
    let cityCell = row.cells[6];
    let stateCell = row.cells[7];
    let countryCell = row.cells[8];
    let zipcodeCell = row.cells[9];
    let updatedDateCell = row.cells[11];

    console.log(usernameCell);

    let usernameV = document.getElementById("username").value;
    let emailV = document.getElementById("email").value;
    let phoneV = document.getElementById("phone").value;
    let fnameV = document.getElementById("fname").value;
    let lnameV = document.getElementById("lname").value;
    let streetV = document.getElementById("street").value;
    let cityV = document.getElementById("city").value;
    let stateV = document.getElementById("state").value;
    let countryV = document.getElementById("country").value;
    let zipcodeV = document.getElementById("zipcode").value;


   
    

    // מכניס את השינויים לטבלה
    usernameCell.innerHTML = `<td>${usernameV}</td>`; 
    emailCell.innerHTML = `<td>${emailV}</td>`; 
    phoneCell.innerHTML = `<td>${phoneV}</td>`; 
    fnameCell.innerHTML = `<td>${fnameV}</td>`;
    lnameCell.innerHTML = `<td>${lnameV}</td>`;
    streetCell.innerHTML = `<td>${streetV}</td>`;
    cityCell.innerHTML = `<td>${cityV}</td>`;
    stateCell.innerHTML = `<td>${stateV}</td>`;
    countryCell.innerHTML = `<td>${countryV}</td>`;
    zipcodeCell.innerHTML = `<td>${zipcodeV}</td>`; 

    // משתנה שיתן את התאריך הנוכחי
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

    const datenew =  `${year}-${month}-${day}`;

    updatedDateCell.innerHTML = datenew;

    let rowIndex = row.rowIndex - 1; // משתנה של האינדקס של האובייקט הנוכחי כדי להוסיף את השינויים לאובייקט המתאים

    users[rowIndex].username = usernameV;
    users[rowIndex].email = emailV;
    users[rowIndex].phone = phoneV;
    users[rowIndex].fname = fnameV;
    users[rowIndex].lname = lnameV;
    users[rowIndex].street = streetV;
    users[rowIndex].city = cityV;
    users[rowIndex].state = stateV;
    users[rowIndex].country = countryV;
    users[rowIndex].zipcode = zipcodeV;
    users[rowIndex].updatedDate = datenew;

    localStorage.setItem('user', JSON.stringify(users));

    console.log(users);

}

//////////////////////////////////

function savebutton(button) {
    let row = button.parentNode.parentNode;
    let userId = row.getAttribute('data-user-id'); // Assuming each row has a data attribute with the user ID

    
    

    // Find the user index in the users array by user ID
    let userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        // Update the user data in the users array
        users[userIndex].username = usernameV;
        users[userIndex].email = emailV;
        // Update other user properties as needed

        // Save the updated users array to localStorage
        localStorage.setItem('user', JSON.stringify(users));

        // Render the table with updated data
        populateTableFromLocalStorage();
    } else {
        console.error('User not found in the users array.');
    }
}




/////////////////////////////////////////////////

let iseditMode = false; //  משתנה של מצב כפתור העריכה

function editmode () { //פונקציה שמשנה את מצב כפתור העריכה ברגע של לחיצה עליו 
    iseditMode = !iseditMode;
}

function refresh () { 
    if (!iseditMode) {
        window.location.reload(); 
    }
}

window.setTimeout(refresh, 30000); //פונקציה שפועלת כל 30 שניות 


const editbutton = document.querySelectorAll(".editbutton");

editbutton.addEventListener("click", () => {
    editmode();
});







    






























