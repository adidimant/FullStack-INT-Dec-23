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

3.
function arrayToObject(array) {
    return array.reduce((obj, current, index) => {
      obj[index] = current;
      return obj;
    }, {});
  }
  
  // דוגמה ראשונה: מערך של מחרוזות
  const fruits = ['apple', 'banana', 'cherry'];
  console.log(arrayToObject(fruits)); // פלט: {0: 'apple', 1: 'banana', 2: 'cherry'}
  
  // דוגמה שנייה: מערך של מספרים
  const numbers = [10, 20, 30, 40, 50];
  console.log(arrayToObject(numbers)); // פלט: {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}
  
  // דוגמה שלישית: מערך הכולל מחרוזות ומספרים
  const mixedArray = ['first', 2, 'third', 4];
  console.log(arrayToObject(mixedArray)); // פלט: {0: 'first', 1: 2, 2: 'third', 3: 4}
  
  // דוגמה רביעית: מערך של בוליאנים
  const booleans = [true, false, true];
  console.log(arrayToObject(booleans)); // פלט: {0: true, 1: false, 2: true}
  
  // דוגמה חמישית: מערך של אובייקטים
  const objectsArray = [{name: 'John'}, {age: 30}, {isStudent: false}];
  console.log(arrayToObject(objectsArray)); // פלט: {0: {name: 'John'}, 1: {age: 30}, 2: {isStudent: false}}
  