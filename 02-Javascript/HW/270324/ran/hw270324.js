// 1.הגדרת הפונקציה להמרת טמפרטורה מפרנהייט לצלזיוס
function convertFahrenheitToCelsius(fahrenheitArray) {
  return fahrenheitArray.map(f => (f - 32) * 5 / 9);
}

// הגדרת משתנים לדוגמא
const temperatures1 = [32, 212]; // נקודת הקיפאון ונקודת הרתיחה של מים
const temperatures2 = [-40, -40]; // טמפרטורה שבה פרנהייט וצלזיוס שווים
const temperatures3 = [0, 100, 200]; // טמפרטורות נמוכות וגבוהות
const temperatures4 = [68, 77, 86]; // טמפרטורות חדר טיפוסיות
const temperatures5 = [122, 131, 140]; // טמפרטורות גבוהות מאוד

// המרה לצלזיוס והדפסה
console.log(convertFahrenheitToCelsius(temperatures1)); // פלט: [0, 100]
console.log(convertFahrenheitToCelsius(temperatures2)); // פלט: [-40, -40]
console.log(convertFahrenheitToCelsius(temperatures3)); // פלט: [-17.77777777777778, 37.77777777777778, 93.33333333333333]
console.log(convertFahrenheitToCelsius(temperatures4)); // פלט: [20, 25, 30]
console.log(convertFahrenheitToCelsius(temperatures5)); // פלט: [50, 55, 60]

// 2.הגדרת הפונקציה reverse
function reverse(array) {
  return array.reduce((accumulator, currentValue) => {
    accumulator.unshift(currentValue);
    return accumulator;
  }, []); // התחלה עם מערך ריק
}

// דוגמה לשימוש בפונקציה:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverse(originalArray);

console.log("מערך מקורי:", originalArray); // פלט: מערך מקורי: [1, 2, 3, 4, 5]
console.log("מערך הפוך:", reversedArray); // פלט: מערך הפוך: [5, 4, 3, 2, 1]

