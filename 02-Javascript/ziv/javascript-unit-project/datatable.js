
  // כפתורים בכותרת //
  function goToPageOne () {
    window.location.href = "createauser.html"; // נפנה ישירות לעמוד באותו התיקייה
      }

      function goToPageTwo () {
        window.location.href = "datatable.html"; // נפנה ישירות לעמוד באותו התיקייה
      }


    document.addEventListener("DOMContentLoaded", function() {
        function refreshTable() {
            console.log("Table is being refreshed..."); 
            let userTable = document.getElementById("user-table");
            

        let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
        
    
        userIds.forEach(userId => {
            let userData = JSON.parse(localStorage.getItem(userId));
            let row = userTable.insertRow();
            for (let key in userData) {
    

                if (userData.hasOwnProperty(key) && key !== 'userId') {
                    let cell = row.insertCell();
                    cell.textContent = userData[key]; 
                    cell.dataset.key = key;
                }
            }
            
            // בודק אם מוגדר תוכן בתוך ה userData שבתוך ה uderIds
            if (!userIds.hasOwnProperty('updateData')) {
                let updateDataCell = row.insertCell(); // יוצר תא חדש עבור updateData
                updateDataCell.textContent = " "; // מגדיר סטרינג ריק בתא
            } 


        // מוסיף תא חדש עבור כפתור העריכה
        let editCell = row.insertCell(); 
        let editButton = document.createElement("button");
        editButton.textContent = "🖊️";
        editButton.classList.add("edit-btn");
        editCell.appendChild(editButton); // מוסיף את לחצן העריכה לתא החדש
        
        
        editButton.addEventListener('click', function() {
            if (editButton.click) {
                // מעבר למצב עריכה
                addEditForm(row, userData);
                addDeleteButton(row, userId);
            } else {
                // ביטול מצב עריכה
                cancelEdit(row, userData);
            }
        });
    });
    }

    refreshTable();
    // רענון הטבלה כל 30 שניות
    setInterval(refreshTable, 30000); 

});



function addEditForm(row, userData) {
    const cells = Array.from(row.cells);
    cells.forEach((cell, index) => {
        if (cell.textContent.trim() !== "" && !cell.querySelector('input')
        && cells.length-2 > index) {
            let input = document.createElement("input");
            
            input.type = "text";
            input.style.border = "1px solid"
            input.style.borderRadius = "20px"; // מגדיר רדיוס לקפיצות בגבול
            input.style.padding = "3px"; // מגדיר ריווח פנימי
            input.value = cell.textContent.trim();
            cell.textContent = '';
            cell.appendChild(input);

        }
    });

   
    if (!row.querySelector('.save-btn')) {
        // מוסיף כפתור שמירה רק אם הוא לא קיים
        let saveCell = row.insertCell();
        let saveButton = document.createElement("button");
        saveButton.textContent = "✔️";
        saveButton.classList.add("save-btn");
        saveCell.appendChild(saveButton);

        saveButton.addEventListener('click', function() {
            saveUserData(row, userData);
        });
    }
}

function cancelEdit(row, userData) {
    Array.from(row.cells).forEach((cell, index) => {
        if (index !== row.cells.length - 1) {
            cell.textContent = userData[cell.dataset.key];
        }
    });
    row.deleteCell(row.cells.length - 1);

}

function addDeleteButton(row, userId) {
    let deleteCell = row.insertCell();
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-btn");
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        deleteUser(userId, row);
        
    });
}

function saveUserData(row, userData) {
    // עדכון אובייקט נתוני משתמש עם ערכי קלט
    Array.from(row.cells).forEach((cell, index) => {
        if (index !== row.cells.length - 1) {
            let input = cell.querySelector('input');
            if (input) {
                userData[cell.dataset.key] = input.value;
                cell.textContent = input.value;
            }
        }
    });

  // תאריך עדכון - updateDate
    let currentDate = new Date();
    userData.updatedDate = currentDate.toLocaleString(); // ממיר לפורמט 

    // שומר נתוני משתמש מעודכנים באחסון מקומי
    localStorage.setItem(userData.userId, JSON.stringify(userData));

    // עדכון תא updatedDate
    let updatedDateCell = row.cells[row.cells.length - 2]; // Second last cell in the row
    updatedDateCell.textContent = userData.updatedDate;

    // מסיר שדות קלט וכפתור שמור, משחזר נתונים מקוריים בטבלה
    let cells = row.cells;
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        let input = cell.querySelector('input');
        if (input) {
            cell.textContent = input.value;
        }
    }
    row.deleteCell(cells.length - 1); 
    window.location.reload(); // טוען את העמוד
}



// הודעה לפני מחיקה על מנת לאשר את הפעולה //

function deleteUser(userId, row) {
    // הצג הודעת אישור
    if (confirm("Are you sure you want to delete this user?")) {
        // מוחק נתוני משתמש מאחסון מקומי
        localStorage.removeItem(userId);

        //מעדכן מערך userIds באחסון מקומי
        let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
        let index = userIds.indexOf(userId);
        if (index !== -1) {
            userIds.splice(index, 1);
            localStorage.setItem('userIds', JSON.stringify(userIds));
        }
        row.remove();
    } else {
        // טען מחדש את הדף אם לוחצים על ביטול
        setTimeout(() => {
            //בודק אם השורה עדיין קיימת ואם המשתמש לא לחץ על ביטול
            if (document.contains(row)) {
                // מוחק נתוני משתמש מאחסון מקומי
                localStorage.removeItem(userId);

                // מעדכן מערך userIds באחסון מקומי
                let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
                let index = userIds.indexOf(userId);
                if (index !== -1) {
                    userIds.splice(index, 1);
                    localStorage.setItem('userIds', JSON.stringify(userIds));
                }

                // מסיר שורת משתמש מהטבלה
                row.remove();
            }
        }, 6000); // 6000 אלפיות שניות = 6 שניות
        window.location.reload(); // רענון העמוד
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let searchTimeout; 
 // חיפוש בטבלה //
 function filterTable() {
    let input = document.getElementById("Search").value.toUpperCase().split(" "); // Split the input into an array of words
    let table = document.getElementById("user-table");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            for (let k = 0; k < input.length; k++) {
                if (cells[j] && cells[j].textContent.toUpperCase().indexOf(input[k]) > -1) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            rows[i].style.display = ""; // מציג את השורה
        } else {
            rows[i].style.display = "none"; // מסתיר את השורה
        }
    }

    // מוודא שהכותרת של הטבלה תמיד תהיה גלויה
    let headerRow = table.querySelector("thead tr");
    headerRow.style.display = "";
}

// מפעיל את הפונקציה כאשר ערך הקלט משתנה
    document.getElementById("Search").addEventListener("input", function() {
        clearTimeout(window.searchTimeout);
        // מגדיר פסק זמן להמתנה לקלט המשתמש
        window.searchTimeout = setTimeout(filterTable, 2000); // המתן 2000 אלפיות שניות (2 שניות)
    });
})
