function openFormOrTable(evt, tytle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tytle).style.display = "block";
    evt.currentTarget.className += " active";
  }


const formuser = document.getElementById("formuser");
const submit = document.getElementById("submit");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const registeredDate = document.getElementById("registeredDate");
const updatedDate = document.getElementById("updatedDate");



formuser.addEventListener('submit', e => {
    e.preventDefault(); 

    validateInputs()
    
});

const setError = (element, message) => { // פוקציית שגיאה שמקבלת אלמנט והודעת שגיאה
    const fulllabel = element.parentElement; // משתנה של ה''אבא'
    const errorDisplay = fulllabel.querySelector('.error'); //הפניה לשגיאה

    errorDisplay.innerText = message;
    fulllabel.classList.add('error'); // מוסיף css של שגיאה
    fulllabel.classList.remove('success') //מסיר את ההצלחה

}

const setSuccess = element => {  //מה קורה כאשר האימות טוב
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success'); //מוסיף css של הצלחה
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidphone = (phone) => {
    const numtel = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
    // const phonechar = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return numtel.test(phone);
}

// משתנה שיתן את התאריך הנוכחי
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const datenew =  `${year}-${month}-${day}`;


const validateInputs = () => {
    let isValid = true;

    const usernamevalue = username.value.trim(); // trim(() מסיר את כל הרווחים שיש במחרוזת
    const emailvalue = email.value.trim();
    const phonevalue = phone.value.trim();
    const fnamevalue = fname.value.trim();
    const lnamevalue = lname.value.trim();
    const streetvalue = street.value.trim();
    const cityvalue = city.value.trim();
    const statevalue = state.value.trim();
    const countryvalue = country.value.trim();
    const zipcodevalue = zipcode.value.trim();
    

    if(usernamevalue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailvalue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailvalue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phonevalue === '') {
        setError(phone, 'Username is required');
    } else if (!isValidphone(phonevalue)) {
        setError(phone, 'Invalid phone number');
    } else {
        setSuccess(phone);
    }

    if(fnamevalue === '') {
        setError(fname, 'firstName is required');
    } else {
        setSuccess(fname);
    }

    if(lnamevalue === '') {
        setError(lname, 'lastName is required');
    } else {
        setSuccess(lname);
    }

    if(streetvalue === '') {
        setError(street, 'street is required');
    } else {
        setSuccess(street);
    }

    if(cityvalue === '') {
        setError(city, 'city is required');
    } else {
        setSuccess(city);
    }

    if(statevalue === '') {
        setError(state, 'state is required');
    } else {
        setSuccess(state);
    }

    if(countryvalue === '') {
        setError(country, 'country is required');
    } else {
        setSuccess(country);
    }

    if(zipcodevalue === '') {
        setError(zipcode, 'zipcode is required');
    } else {
        setSuccess(zipcode);
    }

    


    if (
        username.parentElement.classList.contains('error') ||
        email.parentElement.classList.contains('error') ||
        phone.parentElement.classList.contains('error') ||
        fname.parentElement.classList.contains('error') ||
        lname.parentElement.classList.contains('error') ||
        street.parentElement.classList.contains('error') ||
        city.parentElement.classList.contains('error') ||
        state.parentElement.classList.contains('error') ||
        country.parentElement.classList.contains('error') ||
        zipcode.parentElement.classList.contains('error') 
    ) {
        isValid = false; 
    }

    if (isValid) {
        userDataObj();
    }

}

const users = []; //מערך של אובייקטים של משתמשים

function userDataObj() {


    const fd = new FormData(formuser); // מביא נתונים בצורת מערכים. אז במקום לעבור בלולאה על כל צערך ולהמיר לאובייקט משתמשים במשתנה הבא.
    
    const obj = Object.fromEntries(fd);

    console.log(obj);

    users.push(obj);

    console.log(users);

    users.forEach((item, i) => {
        item.id = i;
        item.registeredDate = datenew;
        item.updatedDate = datenew;
    });

    console.log(users);

    const userjson = JSON.stringify(users);
    localStorage.setItem('user', userjson);


    displayUserDataFromLocalStorage()
    
}


const table = document.querySelector(".usersdetailstable");

function displayUserDataFromLocalStorage() {
    const userDataJSON = localStorage.getItem('user'); 
    if (userDataJSON) {
        const usersData = JSON.parse(userDataJSON); 
       
            console.log(usersData) 
             
        }
        dataInTable();
    }



displayUserDataFromLocalStorage();



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

///////////////

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

//////////////////

let isEditActive = false;

function refreshTable() {
    if (isEditActive) {
        
        displayUserDataFromLocalStorage();
    }
}


setInterval(refreshTable, 30000);

///////////////////////////////

function editData(button) {

    
    isEditActive = true;
            
    // משתנה שמקבל את השורה המתאימה לכפתור עריכה
        let row = button.parentNode.parentNode; 
    
        let editButton = row.querySelector('.editbutton');
        let saveButton = row.querySelector('.savebutton');
    
        
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
        
        //
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

        isEditActive = false;

            let row = button.parentNode.parentNode;
    
            let editButton = row.querySelector('.editbutton');
            let saveButton = row.querySelector('.savebutton');
        
            editButton.style.display = 'block';
            saveButton.style.display = 'none';
        
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
        
            
            let usernameV = usernameCell.querySelector('input').value;
            let emailV = emailCell.querySelector('input').value;
            let phoneV = phoneCell.querySelector('input').value;
            let fnameV = fnameCell.querySelector('input').value;
            let lnameV = lnameCell.querySelector('input').value;
            let streetV = streetCell.querySelector('input').value;
            let cityV = cityCell.querySelector('input').value;
            let stateV = stateCell.querySelector('input').value;
            let countryV = countryCell.querySelector('input').value;
            let zipcodeV = zipcodeCell.querySelector('input').value;
        
            
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
        
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; 
            const year = currentDate.getFullYear();
            const datenew =  `${year}-${month}-${day}`;
            updatedDateCell.innerHTML = datenew;
        
            let rowIndex = row.rowIndex - 2;
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
        
            // Update the localStorage
            localStorage.setItem('user', JSON.stringify(users));

            console.log(users);
    }

        
    

////////////////////////////

document.getElementById('filter-username').addEventListener('input', filterTable);
document.getElementById('filter-email').addEventListener('input', filterTable);
document.getElementById('filter-phone').addEventListener('input', filterTable);
document.getElementById('filter-full_name').addEventListener('input', filterTable);
document.getElementById('filter-country').addEventListener('input', filterTable);
document.getElementById('filter-city').addEventListener('input', filterTable);
document.getElementById('filter-registeredDate').addEventListener('input', filterTable);
document.getElementById('filter-updatedDate').addEventListener('input', filterTable);



function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}


const filterTable = debounce(() => {
    const usernameFilter = document.getElementById('filter-username').value.toLowerCase();
    const emailFilter = document.getElementById('filter-email').value.toLowerCase();
    const phoneFilter = document.getElementById('filter-phone').value.toLowerCase();
    const fullnameFilter = document.getElementById('filter-full_name').value.toLowerCase();
    const cityFilter = document.getElementById('filter-city').value.toLowerCase();
    const countryFilter = document.getElementById('filter-country').value.toLowerCase();
    const registeredDateFilter = document.getElementById('filter-registeredDate').value.toLowerCase();
    const updatedDateFilter = document.getElementById('filter-updatedDate').value.toLowerCase();
    

    const rows = document.querySelectorAll('.usersdetailstable tbody tr'); //משתנים לכל טור מתאים
    rows.forEach(row => {
        const username = row.cells[0].textContent.toLowerCase();
        const email = row.cells[1].textContent.toLowerCase();
        const phone = row.cells[2].textContent.toLowerCase();
        const fullname = row.cells[3].textContent.toLowerCase() + row.cells[4].textContent.toLowerCase();
        const city = row.cells[6].textContent.toLowerCase();
        const country = row.cells[8].textContent.toLowerCase();
        const registeredDate = row.cells[10].textContent.toLowerCase();
        const updatedDate = row.cells[11].textContent.toLowerCase();
        

        // משתנה שמוצא את הערך שהוקלד בקלט
        const usernameMatch = username.includes(usernameFilter);
        const emailMatch = email.includes(emailFilter);
        const phonelMatch = phone.includes(phoneFilter);
        const fullnameMatch = fullname.includes(fullnameFilter);
        const cityMatch = city.includes(cityFilter);
        const countryMatch = country.includes(countryFilter);
        const registeredDateMatch = registeredDate.includes(registeredDateFilter);
        const updatedDateMatch = updatedDate.includes(updatedDateFilter);
       

        ////לראות את התוצאות בטבלה
        if (usernameMatch && emailMatch && phonelMatch && fullnameMatch && cityMatch && countryMatch && registeredDateMatch && updatedDateMatch) {
            row.style.display = 'block';
        } else {
            row.style.display = 'none';
        }
    });
}, 300); 



    




    
    







