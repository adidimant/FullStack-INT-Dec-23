כפתורים למעלה

// כפתורים בכותרת //
function goToPageOne () {
window.location.href = "createauser.html"; // נפנה ישירות לעמוד באותו התיקייה
}

    function goToPageTwo () {
        window.location.href = "datatable.html"; // נפנה ישירות לעמוד באותו התיקייה
    }

מקבלת המידע לטבלה ומילוי סטרינג ריק ביוזרדאט

document.addEventListener("DOMContentLoaded", function() {
let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
let userTable = document.getElementById("user-table");

        userIds.forEach(userId => {
            let userData = JSON.parse(localStorage.getItem(userId));
            let row = userTable.insertRow();

            for (let key in userData) {
                if (userData.hasOwnProperty(key) && key !== 'userId') {
                    let cell = row.insertCell();
                    cell.textContent = userData[key];

                }
            }

            // בודק אם מוגדר תוכן בתוך ה userData שבתוך ה uderIds
            if (!userIds.hasOwnProperty('updateData')) {
                let updateDataCell = row.insertCell(); // יוצר תא חדש עבור updateData
                updateDataCell.textContent = " "; // מגדיר סטרינג ריק בתא
            }

הודעה אם בטוח שברצוני למחוק את המשתמש ועדכון הלוקאל סטוראג והיוזראידי

function deleteUser(userId, row) {
// Display confirmation message
if (confirm("Are you sure you want to delete this user?")) {
// Delete user data from local storage
localStorage.removeItem(userId);

        // Update userIds array in local storage
        let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
        let index = userIds.indexOf(userId);
        if (index !== -1) {
            userIds.splice(index, 1);
            localStorage.setItem('userIds', JSON.stringify(userIds));
        }

        // Remove user row from table
        row.remove();
    } else {
        // Reload the page if cancel is clicked
        setTimeout(() => {
            // Check if the row still exists and if the user didn't press cancel
            if (document.contains(row)) {
                // Delete user data from local storage
                localStorage.removeItem(userId);

                // Update userIds array in local storage
                let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
                let index = userIds.indexOf(userId);
                if (index !== -1) {
                    userIds.splice(index, 1);
                    localStorage.setItem('userIds', JSON.stringify(userIds));
                }

                // Remove user row from table
                row.remove();
            }
        }, 6000); // 6000 milliseconds = 6 seconds
        window.location.reload(); // Reload the page
    }

}

חיפוש בטבלה

function myFunction() { // זוהי ההתחלה של הפונקציה myFunction
setTimeout(() => { // זו התחלת השימוש ב- setTimeout, הפונקציה שלנו תרוץ לאחר 2 שניות
let input, filter, table, tr, td, i, txtValue;
input = document.getElementById("Search"); // זה משווה את משתנה input לאלמנט ב-HTML שיש לו מזהה של "Search".
filter = input.value.toUpperCase(); // זה מגדיר את המשתנה filter כמחרוזת המופעלת לפי הערך של משתנה ה- input שהתקבל, והוא מעלה את כל האותיות לתוך אותיות גדולות.
table = document.getElementById("user-table"); // זה מגדיר את המשתנה table לאלמנט ה-HTML שיש לו מזהה של "user-table".
tr = table.getElementsByTagName("tr"); // זה מגדיר את המשתנה tr ככל התגי <tr> בתוך אלמנט ה-HTML שיש לו מזהה של "user-table".
for (i = 0; i < tr.length; i++) { // זה מתחיל ללולא על כל התגי <tr> ב-HTML.
td = tr[i].getElementsByTagName("td")[0]; // משווה את המשתנה td לתא הראשון בכל שורה.
if (td) { // בודק אם יש תוכן בתא
txtValue = td.textContent || td.innerText; // משווה את המשתנה txtValue לתוכן הטקסט של התא.
if (txtValue.toUpperCase().indexOf(filter) > -1) { // בודקת אם הערך של filter נמצא בתוך המחרוזת של txtValue.
tr[i].style.display = ""; // מראה את השורה אם הערך נמצא בתוך המחרוזת.
} else {
tr[i].style.display = "none"; // מסתיר את השורה אם הערך לא נמצא בתוך המחרוזת.
}
}  
 }}, 1000); // מורה להשהות את הקוד למשך 2 שניות
}
