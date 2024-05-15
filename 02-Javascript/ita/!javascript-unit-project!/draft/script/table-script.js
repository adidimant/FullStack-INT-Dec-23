let users;

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('user')) {
       
        users = JSON.parse(localStorage.getItem('user'));
        dataInTable(users);
    } else {
       
        dataInTable();
    }
});


const table = document.querySelector(".usersdetailstable");


function dataInTable () {
    let temp = `<table> <tr>`;
    temp += `<th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>fullname</th>
                <th>lastname</th>
                <th>street</th>
                <th>city</th>
                <th>state</th>
                <th>country</th>
                <th>zipcode</th>
                <th>registeredDate</th>
                <th>updatedDate</th>
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
        <td>${row.registeredDate}</td>
        <td>${row.updatedDate}</td>
        <td><button onclick="editData(this)" id="edit" class="editbutton"><i class='small material-icons'>edit</i></button>
        <button onclick="savebutton(this)" class="savebutton" id="save"><i class='small material-icons'>save</i></button>
        <button onclick="deleteUser(this)" id="delete" class="deletebutton"><i class='small material-icons'>delete</i></button></td>
    </tr>`
    });

    temp += `</table>`;
    table.innerHTML = temp;
};

//////////////////////////////////

const filterUsernameInput = document.getElementById('filter-username');
const filterEmailInput = document.getElementById('filter-email');
const filterPhoneInput = document.getElementById('filter-phone');
const filterFullNameInput = document.getElementById('filter-full_name');
const filterCountryInput = document.getElementById('filter-country');
const filterCityInput = document.getElementById('filter-city');
const filterRegisteredDateInput = document.getElementById('filter-registeredDate');
const filterUpdatedDateInput = document.getElementById('filter-updatedDate');



filterUsernameInput.addEventListener('input', () => {
    console.log('Username input changed');
    filterTable(); 
});
filterEmailInput.addEventListener('input', debounce(filterTable, 300));
filterPhoneInput.addEventListener('input', debounce(filterTable, 300));
filterFullNameInput.addEventListener('input', debounce(filterTable, 300));
filterCountryInput.addEventListener('input', debounce(filterTable, 300));
filterCityInput.addEventListener('input', debounce(filterTable, 300));
filterRegisteredDateInput.addEventListener('input', debounce(filterTable, 300));
filterUpdatedDateInput.addEventListener('input', debounce(filterTable, 300));


function filterTable() {
    const usernameFilter = filterUsernameInput.value.trim().toLowerCase();
    const emailFilter = filterEmailInput.value.trim().toLowerCase();
    const phoneFilter = filterPhoneInput.value.trim().toLowerCase();
    const fullNameFilter = filterFullNameInput.value.trim().toLowerCase();
    const countryFilter = filterCountryInput.value.trim().toLowerCase();
    const cityFilter = filterCityInput.value.trim().toLowerCase();
    const registeredDateFilter = filterRegisteredDateInput.value.trim().toLowerCase();
    const updatedDateFilter = filterUpdatedDateInput.value.trim().toLowerCase();

    console.log('Username filter:', usernameFilter);



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
    temp += `<th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>fullname</th>
                <th>lastname</th>
                <th>street</th>
                <th>city</th>
                <th>state</th>
                <th>country</th>
                <th>zipcode</th>
                <th>registeredDate</th>
                <th>updatedDate</th>
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

///////////////////////////////////

function deleteUser(button) {
    let row = button.parentNode.parentNode;
    let username = row.querySelector('td:nth-child(1)').textContent; 
    let confirmation = confirm(`Are you sure you want to delete the user '${username}'?`);
    
    if (confirmation) {
        
        let userIdx = users.findIndex(user => user.username === username);

        console.log(userIdx);
        
        if (userIdx !== -1) {
            
            users.splice(userIdx, 1);
            
            
            localStorage.setItem('user', JSON.stringify(users));
            
            row.parentNode.removeChild(row);
        } else {
            console.error('User not found in localStorage.');
        }
    }
}

///////////////////////////////////////////

let isEditActive = false; 


function refreshTable() {
    if (!isEditActive) {
        
        dataInTable(users);
    }
}


setInterval(refreshTable, 30000);


///////////////////////////////////////

function editData(button) {

    
    
            
// משתנה שמקבל את השורה המתאימה לכפתור עריכה
    let row = button.parentNode.parentNode; 

    let editButton = row.querySelector('.editbutton');
    let saveButton = row.querySelector('.savebutton');

    
    editButton.style.display = 'none';
    saveButton.style.display = 'block';
    
    
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

    let rowIndex = row.rowIndex - 2; // משתנה של האינדקס של האובייקט הנוכחי כדי להוסיף את השינויים לאובייקט המתאים

    
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



















    






























