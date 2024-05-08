
const app = document.getElementById("app");
const formTab = document.getElementById("formTab");
const usersTab = document.getElementById("usersTab");
const userArray=[];//מערך ריק לקליטת משתמשים 

// Show the form tab
function showFormTab() {
    formTab.style.display = "block";
    usersTab.style.display = "none";
}
    
// Show the users tab
function showUsersTab() {
    formTab.style.display = "none";
    usersTab.style.display = "block";
    document.getElementById('editFormContainer').style.display= "none";
    displayUsersFromLocalStorage();
}

 // בדיקה שהשם משתמש מכיל רק אותיות באנגלית
function isValidUsername(username) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(username);
}

//פונקציה זו מופעלת כאשר המשתמש לחץ על המייל כדי לוודא שבטוח סיים להקליד את שם המשתמש
function checkUsername() {
    const uName=document.getElementById('uName').value;
    setTimeout(()=>{
        if (!isValidUsername(uName)) 
            // השם משתמש אינו תקין
            alert('שם המשתמש שהוזן לא תקין , יש להשתמש באותיות באנגלית בלבד');
    },300)
};

//בדיקה שהוכנס רק מספרים 
function isValidPhoneNumber(phoneNumber) {
       const regex = /^[0-9]+$/;
       return regex.test(phoneNumber);
}

function checkPhoneNumber() {
    const phone=document.getElementById('phone').value;
    setTimeout(()=>{
        if (!isValidPhoneNumber(phone)) 
            // מספר הטלפון שהוזן לא תקין 
            alert('מספר הטלפון שהוזן לא תקין , יש להזין רק מספרים ');
    },300)
};


//פונקציה שפועלת בעת לחיצה על כפתור ה שליחה
function saveUserDetails() {
    //תפיסת כל הנתונים שהוזנו על ידי המשתמש ויצירת משתנים 
    const usernameInput=document.getElementById('uName').value;
    const emailInput=document.getElementById('email').value;
    const phoneNumberInput=document.getElementById('phone').value;
    const firstNameInput=document.getElementById('firstName').value;
    const lastNameInput=document.getElementById('lastName').value;
    const addressInput=document.getElementById('address').value;
    const cityInput=document.getElementById('city').value;
    const countryInput=document.getElementById('country').value;
    const postalCodeInput=document.getElementById('postalCode').value;
    const dateOfRegistrationInput=document.getElementById('dateOfRegistration').value;
    const updateDateInput=document.getElementById('updateDate').value;

    //יצירת מזהה ייחודי לכל משתמש 
    const id=Date.now();
    //המרה של localStorage
    const storedUsers = JSON.parse(localStorage.getItem("userId")) || [];

    const existingUser = storedUsers.find(user => user.username == usernameInput);
    const existingEmail = storedUsers.find(user => user.email == emailInput);
//בדיקה האם המייל והשם משתמש קיים במערכת 
    if(existingUser || existingEmail)
        alert('משתמש זה כבר קיים במערכת ');
    else{
        //const fullName=firstNameInput+" "+lastNameInput;
        const newUser = {
            id: id,
            username: usernameInput,
            email: emailInput,
            phoneNumber: phoneNumberInput,
            fullName: firstNameInput+" "+lastNameInput,
            address: addressInput,
            city: cityInput,
            country: countryInput,
            postalCode: postalCodeInput,
            dateOfRegistration: dateOfRegistrationInput,
            updateDate: updateDateInput
        };
        //לדחוף את המשתמש החדש  
        storedUsers.push(newUser);
        localStorage.setItem("userId", JSON.stringify(storedUsers));
        userArray.push(newUser);
        alert('המשתמש נרשם בהצלחה');
    }
};


function displayUsersFromLocalStorage() {
    // קבלת רשימת המשתמשים מה- localStorage
    const storedUsers = JSON.parse(localStorage.getItem("userId")) || [];

    // קבלת אלמנט הטבלה מה-HTML
    const table = document.getElementById("tablee");

    // איפוס הטבלה לפני הוספת הנתונים מה- localStorage
    table.innerHTML = "";

    // לולאה על רשימת המשתמשים והוספתם לטבלה
    storedUsers.forEach(user => {
        // יצירת אלמנט חדש של שורה בטבלה
        const newRow = document.createElement("tr");

        // הוספת תאים לשורה החדשה עם פרטי המשתמש
        newRow.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.fullName}</td>
            <td>${user.address}</td>
            <td>${user.city}</td>
            <td>${user.country}</td>
            <td>${user.postalCode}</td>
            <td>${user.dateOfRegistration}</td>
            <td>${user.updateDate}</td>
            <td><button onclick="editUser(${user.id})"><span>&#x270F;</span></button></td>
            <td><button onclick="deleteUser(${user.id})"><span>&#x1F5D1;</span></button></td>
        `;

        // הוספת השורה החדשה לטבלה
        table.appendChild(newRow);
    });
}

//עדכון הטבלה כל 30 שניות 

setInterval(displayUsersFromLocalStorage,30000);

//חיפוש
// פונקציה לפילוטר שם משתמש
function filterUsername() {
    const inputValue = document.getElementById('searchUsername').value.trim().toLowerCase();
    filterValue(inputValue, 'username');
}

// פונקציה לפילוטר דוא"ל
function filterEmail() {
    const inputValue = document.getElementById('searchEmail').value.trim().toLowerCase();
    filterValue(inputValue, 'email');
}

// פונקציה לפילוטר מספר טלפון
function filterPhoneNumber() {
    const inputValue = document.getElementById('searchPhoneNumber').value.trim().toLowerCase();
    filterValue(inputValue, 'phone');
}

// פונקציה לפילוטר שם מלא
function filterFullName() {
    const inputValue = document.getElementById('searchFullName').value.trim().toLowerCase();
    filterValue(inputValue, 'searchFullName');
}


// פונקציה לפילוטר עיר
function filterCity() {
    const inputValue = document.getElementById('searchCity').value.trim().toLowerCase();
    filterValue(inputValue, 'city');
}

// פונקציה לפילוטר מדינה
function filterCountry() {
    const inputValue = document.getElementById('searchCountry').value.trim().toLowerCase();
    filterValue(inputValue, 'country');
}

// פונקציה לפילוטר תאריך רישום
function filterRegistrationDate() {
    const inputValue = document.getElementById('searchDateOfRegistration').value.trim().toLowerCase();
    filterValue(inputValue, 'registrationDate');
}

// פונקציה לפילוטר תאריך מעודכן
function filterUpdateDate() {
    const inputValue = document.getElementById('searchUpdateDate').value.trim().toLowerCase();
    filterValue(inputValue, 'updateDate');
}

// פונקציה כללית לפילוטר
function filterValue(inputValue, type) {
    const rows = document.querySelectorAll('#tablee tr');

    rows.forEach(row => {
        const cell = row.querySelector('td:nth-child(' + (type === 'email' ? 2 : type === 'phone' ? 3 : 1) + ')');
        if (cell) {
            const value = cell.textContent.trim().toLowerCase();
            if (value.includes(inputValue)) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        }
    });
}

// קשירת הפונקציות לאירועי input
document.getElementById('searchUsername').addEventListener('input', filterUsername);
document.getElementById('searchEmail').addEventListener('input', filterEmail);
document.getElementById('searchPhoneNumber').addEventListener('input', filterPhoneNumber);
document.getElementById('searchFirstName').addEventListener('input', filterFullName);
document.getElementById('searchCountry').addEventListener('input', filterCountry);
document.getElementById('searchCity').addEventListener('input', filterCity);
document.getElementById('searchDateOfRegistration').addEventListener('input', filterRegistrationDate);
document.getElementById('searchUpdateDate').addEventListener('input', filterUpdateDate);


//פונקצית עריכה 
function editUser(id) {
    document.getElementById('usersTab').style.display="none";

    const storedUsers = JSON.parse(localStorage.getItem("userId")) || [];
    //מציאת המשתמש
    const userToEdit = storedUsers.find(user => user.id == id);

    document.getElementById('editUsername').value=userToEdit.username;
    document.getElementById('editEmail').value=userToEdit.email;
    document.getElementById('editPhone').value=userToEdit.phoneNumber;
    document.getElementById('editFullName').value=userToEdit.fullName;
    document.getElementById('editAddress').value=userToEdit.address;
    document.getElementById('editCity').value=userToEdit.city;
    document.getElementById('editCountry').value=userToEdit.country;
    document.getElementById('editPostalCode').value=userToEdit.postalCode;
    document.getElementById('editUpdateDate').value=userToEdit.updateDate;

    //תאריך עדכון 
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    document.getElementById('editUpdateDate').value = formattedDate;

    document.getElementById('editFormContainer').style.display= "block";


    const saveEditButton = document.getElementById('saveEditButton');
    saveEditButton.onclick = function() {
        // עדכון הנתונים במערכת וב local storage
        userToEdit.username = document.getElementById('editUsername').value;
        userToEdit.email = document.getElementById('editEmail').value;
        userToEdit.phoneNumber = document.getElementById('editPhone').value;
        userToEdit.fullName = document.getElementById('editFullName').value;
        userToEdit.address = document.getElementById('editAddress').value;
        userToEdit.city = document.getElementById('editCity').value;
        userToEdit.country = document.getElementById('editCountry').value;
        userToEdit.postalCode = document.getElementById('editPostalCode').value;
        userToEdit.updateDate = document.getElementById('editUpdateDate').value;

        localStorage.setItem("userId", JSON.stringify(storedUsers));
        displayUsersFromLocalStorage();
        alert('המשתמש עודכן בהצלחה');
    };
    
};

//פונקצית מחיקה 
function deleteUser(id) {
    const confirmDelete = confirm("האם ברצונך למחוק את המשתמש זה? ");

    if(confirmDelete){

        const storedUsers = JSON.parse(localStorage.getItem("userId")) || [];
        const userIndex= storedUsers.find(user => user.id == id);
    
        if(userIndex!= -1){
            storedUsers.splice(userIndex,1);
            localStorage.setItem("userId", JSON.stringify(storedUsers));
        }
    
        //מחיקת השורה מהטבלה
        const table= document.getElementById('tablee');
        const rowToDelete=document.getElementById(`userRow_${id}`);
        if(rowToDelete)
            table.removeChild(rowToDelete);
    };
};

setInterval(displayUsersFromLocalStorage,300);
// function deleteUser(id) {
//     const confirmDelete = confirm("האם ברצונך למחוק את המשתמש זה? ");

//     if (confirmDelete) {
//         const storedUsers = JSON.parse(localStorage.getItem("userId")) || [];
//         const userIndex = storedUsers.findIndex(user => user.id == id); // חיפוש לפי האינדקס

//         if (userIndex !== -1) {
//             const deletedUser = storedUsers.splice(userIndex, 1)[0]; // מחיקת המשתמש ושמירתו במשתנה
//             localStorage.setItem("userId", JSON.stringify(storedUsers));

//             // הוספת פס נע וכפתור "בטל"
//             const cancelButton = document.createElement('button');
//             cancelButton.textContent = 'בטל';
//             cancelButton.onclick = function() {
//                 storedUsers.splice(userIndex, 0, deletedUser); // החזרת המשתמש למערך
//                 localStorage.setItem("userId", JSON.stringify(storedUsers));

//                 // הסרת הפס הנע והכפתור "בטל"
//                 cancelButton.parentNode.removeChild(cancelButton);
//                 clearInterval(undoInterval);
//             };

//             const undoText = document.createElement('span');
//             undoText.textContent = 'בטל';
//             undoText.classList.add('undo-text');

//             const undoContainer = document.createElement('div');
//             undoContainer.appendChild(undoText);
//             undoContainer.appendChild(cancelButton);

//             document.body.appendChild(undoContainer);

//             // פס נע והסרתו אחרי 6 שניות
//             const undoInterval = setInterval(function() {
//                 undoText.textContent = `בטל (${Math.ceil((cancelTime - Date.now()) / 1000)} שניות)`;
//                 if (Date.now() > cancelTime) {
//                     clearInterval(undoInterval);
//                     document.body.removeChild(undoContainer);
//                 }
//             }, 1000);
//             const cancelTime = Date.now() + 6000;
//         }

//         // מחיקת השורה מהטבלה
//         const table = document.getElementById('tablee');
//         const rowToDelete = document.getElementById(`userRow_${id}`);
//         if (rowToDelete)
//             table.removeChild(rowToDelete);
//     }
// };
