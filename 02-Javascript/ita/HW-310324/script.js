// Task number 1


function filterobjbykey(arr) {
    return arr.filter((obj) => {
            let namkeys = Object.keys(obj); //יצירת מערך מאובייקט רק עם ה'מפתחות'
            if (namkeys.length >= 5) { // אורך של מערך
                return true;
            }
            return false;
        }
    )
}

function filterobjbykey1(peopleDetails) {
    return peopleDetails.filter((obj) => Object.keys(obj).length >= 5)
}


// Task number 2

const response = await fetch("https://randomuser.me/api/?results=10");
const data = await response.json();

function nameandid1({results}) {
    return data.results.map(({ firstname, lastname, id }) => ({
        fullName: `${firstname} ${lastname}`,
        id: id
    }));
 }




//ניסיון שלי לפונקציות

 function nameandid(peopleDetails) {
    for (let obj of peopleDetails) {
        const keysToStay = ['firstname', 'id']; //משתנה של מערך עם ה'מפתחות' שרוצים ללהשאיר
        const arrkey = Object.keys(obj); // מערך של כל ה'מפתחות' באובייקט
        return arrkey.filter(key => keysToStay.includes(key)) //  פונקציית סינון מערך שבתוכה 
        .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    } , {}); 
    }
 }

 
function nameandid1(peopleDetails) {
    return peopleDetails.map(({ firstname, lastname, id }) => ({
        fullName: `${firstname} ${lastname}`,
        id: id
    }));
 }



 
const specialChars = [];

function complexpasswords(arr) {
    return arr.filter((obj) => {
        let password = obj.password;
        let charsnamber = password.length >= 6;
        specialChars = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
        for (let i = 0; i < password.length; i++) {
            if (password.includes(specialChars[i]) && charsnamber) {
                return true;
            }
            return false;
        }    
    })  
}









function youngpeople() {
    let min = Math.min(...arr.map(obj => obj.age)); //פונקציה למציאת מינימום, שופך את המערך, עושה מיפוי על הגיל שבתוך כל אובייקט
    return arr.filter((obj) => obj.age == min) // סינון של האובייקט עם הגיל הקטן/צעיר
}





