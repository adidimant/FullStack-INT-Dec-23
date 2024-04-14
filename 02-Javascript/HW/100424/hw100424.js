const user = {
    id: 101,
    username: "johndoe",
    profileImageUrl: "http://example.com/profiles/johndoe.png"
};

// פונקציה אסינכרונית לדמיית איחזור נתוני משתמש מ-API
async function fetchUserData(id) {
    return new Promise((resolve) => setTimeout(() => resolve(`נתוני משתמש ל-ID: ${id}, שם משתמש: ${user.username}`), 2000));
}

// פונקציה אסינכרונית לטעינת תמונה
async function loadImage(url) {
    return new Promise((resolve) => setTimeout(() => resolve(`תמונת פרופיל נטענה מ-URL: ${url}`), 1000));
}

// פונקציה אסינכרונית לשמירת נתונים
async function saveData(data) {
    return new Promise((resolve) => setTimeout(() => resolve(`הנתונים נשמרו: ${data}`), 1500));
}

// הבטחה שמתממשת מיד
const instantPromise = Promise.resolve('התממשות מיידית');

// Promise.all
Promise.all([fetchUserData(user.id), saveData('עדכונים חשובים למשתמש'), loadImage(user.profileImageUrl)])
    .then(results => {
        console.log('תוצאות Promise.all:', results);
    })
    .catch(error => {
        console.log('שגיאה ב-Promise.all:', error);
    });

// Promise.race
Promise.race([fetchUserData(user.id), loadImage(user.profileImageUrl)])
    .then(result => {
        console.log('תוצאת Promise.race:', result);
    })
    .catch(error => {
        console.log('שגיאה ב-Promise.race:', error);
    });

// Promise.any
Promise.any([fetchUserData(user.id), loadImage(user.profileImageUrl)])
    .then(result => {
        console.log('תוצאת Promise.any:', result);
    })
    .catch(error => {
        console.log('שגיאה ב-Promise.any:', error);
    });
