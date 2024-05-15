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
    e.preventDefault(); // Prevent default form submission behavior
 
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
    const registeredDatevalue = registeredDate.value.trim();
    const updatedDatevalue = updatedDate.value.trim(); 

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

    if(registeredDatevalue === '') {
        setError(registeredDate, 'registeredDate is required');
    } else {
        setSuccess(registeredDate);
    }

    if(updatedDatevalue === '') {
        setError(updatedDate, 'updatedDate is required');
    } else {
        setSuccess(updatedDate);
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
        zipcode.parentElement.classList.contains('error') ||
        registeredDate.parentElement.classList.contains('error') ||
        updatedDate.parentElement.classList.contains('error')
    ) {
        isValid = false; // Set flag to false if any error is found
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
      });

    console.log(users);

    const userjson = JSON.stringify(users);
    localStorage.setItem('user', userjson);

    window.localStorage.href = "user-table.html";
    
}















