const fiveYearsInMS = 1000 * 60 * 60 * 24 * 365 * 5;

const currentTime = Date.now();

var registerDate = new Date(2019, 6, 26); // date - july 2019 (months are also starting from 0)

let difference = currentTime - registerDate.getTime(); // works, gives a number
difference = currentTime - registerDate; // works as well, gives a number

if (currentTime - registerDate.getTime() > fiveYearsInMS) { // not sending a gift
  // send email for a gift
     console.log("gift sent");
 }

var registerDate = new Date(2019, 0, 26); // date - Januray 2019 (months are also starting from 0)

if (currentTime - registerDate.getTime() > fiveYearsInMS) { // sending a gift (5 years passed)
  // send email for a gift
    console.log("gift sent");
}

// custom your own date to present (just an example):
let presentedDate = registerDate.getDay() + "/" + (registerDate.getMonth() + 1) + "/" + registerDate.getFullYear();
