   // כפתורי ניווט
   function goToPageOne() {
              window.location.href = "https://www.yad2.co.il/";
            }
            
                function goToPageTwo() {
              window.location.href = "https://auth.yad2.co.il/auth/login?continue=https%3A%2F%2Fpersonal.yad2.co.il%2Fpublish&analytics=Ad+upload&service=%D7%A4%D7%A8%D7%A1%D7%95%D7%9D+%D7%9E%D7%95%D7%93%D7%A2%D7%94";
            }

// שדות חובה
function validateForm() {
  let x = document.forms["input-form"]["input-form"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
 // יצירת טבלה עם כל הנתונים
function sendForm(event) {
        event.preventDefault(); // מניעת שליחת הטופס באופן אוטומטי
        createTable();
    }

    function createTable() {
        var formData = getFormData(); // אחזור כל הנתונים מהטופס
        var table = document.createElement('table'); // יצירת אלמנט טבלה

        // לולאה על כל קובץ הנתונים ויצירת שורה עבור כל נתון
        for (var key in formData) {
            var row = table.insertRow(); // יצירת שורה חדשה בטבלה
            var cell1 = row.insertCell(0); // תיבה ראשונה בשורה
            var cell2 = row.insertCell(1); // תיבה שנייה בשורה

            cell1.textContent = key; // הוספת השם של השדה לתיבה הראשונה
            cell2.textContent = formData[key]; // הוספת הערך של השדה לתיבה השנייה
        }

        document.body.appendChild(table); // הוספת הטבלה לתוך המסמך
    }

    function getFormData() {
        var formData = {}; // אובייקט ריק לאחזור הנתונים

        // לולאה על כל השדות בטופס והוספת הערכים שלהם לאובייקט
        var form = document.forms[0]; // אובייקט הטופס
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i]; // השדה הנוכחי בלולאה
            formData[field.name] = field.value; // הוספת השדה והערך שלו לאובייקט
        }

        return formData; // החזרת האובייקט עם כל הנתונים מהטופס
    }