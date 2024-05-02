const birthdate = new Date(1980, 6, 2);

function getAge(birthDate) {
  if (!birthDate) {
    return null;
  }
  const currentTime = Date.now();
  const ageInMilliseconds = currentTime - birthDate.getTime();
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // מספר המילישניות בשנה
  const ageInYears = ageInMilliseconds / millisecondsPerYear;
  if (ageInYears < 1) { // if it's a baby
    return ageInYears;
  }
  return Math.floor(ageInMilliseconds / millisecondsPerYear);
}

const rodBirthdate = new Date(2006, 1, 23);
const robAge = getAge(rodBirthdate);

// convert fahrenheit to celcius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
// or do:
text = "The temperature is " + toCelsius(77) + " Celsius";

// Passing function as a parameter:
function f1 (param1, param2) {
  param2(param1);
}

function f2(valueToPrint) {
  console.log(valueToPrint);
}

f1("hey!!!", f2);