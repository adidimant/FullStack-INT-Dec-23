
  // כפתורים בכותרת //
  function goToPageOne () {
    window.location.href = "createauser.html"; // נפנה ישירות לעמוד באותו התיקייה
      }

      function goToPageTwo () {
        window.location.href = "datatable.html"; // נפנה ישירות לעמוד באותו התיקייה
      }


  // פונקציה המציבה את התאריך והשעה הנוכחיים בשדה ה-input
  function setCurrentDateTime() {
      var currentDateTime = new Date(); // יצירת אובייקט תאריך המייצג את התאריך והשעה הנוכחיים
      var year = currentDateTime.getFullYear(); // קבלת השנה הנוכחית
      var month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0'); // קבלת החודש הנוכחי והוספת אפס במידה והוא בספרה אחת
      var day = currentDateTime.getDate().toString().padStart(2, '0'); // קבלת היום הנוכחי והוספת אפס במידה והוא בספרה אחת
      var hours = currentDateTime.getHours().toString().padStart(2, '0'); // קבלת השעה הנוכחית והוספת אפס במידה והוא בספרה אחת
      var minutes = currentDateTime.getMinutes().toString().padStart(2, '0'); // קבלת הדקות הנוכחיות והוספת אפס במידה והוא בספרה אחת

      var formattedDateTime = year + "-" + month + "-" + day + " , " + hours + ":" + minutes; // יצירת מחרוזת המייצגת את התאריך והשעה בפורמט שנדרש לשדה input

      document.getElementById("registerDateTime").value = formattedDateTime; // הצבת התאריך והשעה בשדה input
  }

  // קריאה לפונקציה לאחר טעינת העמוד
  window.onload = setCurrentDateTime;


  const form = document.getElementById('create-user-form');

  
  const generateUserId = () => {
      return Date.now().toString(); // פונקציה זו מייצרת מזהה ייחודי למשתמש, באמצעות יצירת timestamp באמצעות Date.now().

  };
  
  /*
  פונקציה זו מתבצעת בעת הגשת הטופס ליצירת משתמש חדש.
היא מקבלת את הנתונים שהוזנו בטופס (שם משתמש, אימייל, וכו').
מאמתת אם שם המשתמש או האימייל כבר קיימים במערכת ואם כן מוציאה הודעת שגיאה.
אם לא, היא מייצרת מזהה ייחודי למשתמש, יוצרת אובייקט משתמש עם הנתונים שהוזנו, ושומרת אותו בlocal storage.
לבסוף, היא מאפסת את הטופס ומציגה הודעת הצלחה למשתמש. */
  const handleSubmit = (event) => {
      event.preventDefault();
  
      // אחזר קלט טפסים
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
      const street = document.getElementById('street').value;
      const zipcode = document.getElementById('zipcode').value;
      const registerDateTime = document.getElementById('registerDateTime').value;
  
      // בדוק אם שם משתמש או דוא"ל כבר קיימים
      if (isDuplicate(username, email)) {
          alert('Username or email already exists. Please enter unique information.');
          return;
      }
  
      // יוצר UserId ייחודי
      const userId = generateUserId();
  
      // יוצר אובייקט משתמש
      const user = {
          userId: userId, // Assign unique userId
          username: username,
          email: email,
          phone: phone,
          fname: fname,
          lname: lname,
          state: state,
          country: country,
          street: street,
          zipcode: zipcode,
          registerDateTime: registerDateTime,
          updatedDate: "",
      };
  
      // אחזר מזהי משתמש קיימים מ-localStorage
      let userIds = JSON.parse(localStorage.getItem('userIds')) || [];
      // הוסף UserId חדש לרשימה
      userIds.push(userId);
      // שמור את מזהי המשתמש המעודכנים בחזרה ל-localStorage
      localStorage.setItem('userIds', JSON.stringify(userIds));
  
      // שמור אובייקט משתמש ב-localStorage
      localStorage.setItem(userId, JSON.stringify(user));
  
      // מאפס טופס
      form.reset();
  
      // מציג הודעת הצלחה למשתמש
      alert('User data saved successfully!');
  };

  // מצרף מאזין אירועים להגשת הטופס
   document.getElementById('create-user-form').addEventListener('submit', handleSubmit);
  
  // פונקציה כדי לבדוק אם שם משתמש או דוא"ל כבר קיימים
  const isDuplicate = (username, email) => {
      let storedData = JSON.parse(localStorage.getItem('userIds')) || [];
      return storedData.some(userId => {
          let userData = JSON.parse(localStorage.getItem(userId));
          if (!userData) return false;

          return userData.username === username || userData.email === email;
            
      });
  };