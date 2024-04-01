/**
 * 1) Write a function that receives an array of objects, and filters all the objects that has at least 5 keys.
 *
 * first, ill create a function that takes an array of objects as a param <-- function filetrLargeObj(arr);
 * the function will return an array. so instead of creating a new variable i can jsut use <-- return arr.filter();
 * inside the filter method, i will create a function to filter any object that has more than 5 keys:
 * (obj) => Object.keys(obj).length > 5;
 * ^^ this function will call the 'Object.keys()' function, with the 'obj' that is being itterated on used as
 * it's parameter. it will return an array filled with the keys of the 'obj'. if that array's length is
 * bigger than 5, it means it has more than 5 keys!
 * now it will return 'true' for items with more than 5 keys, meaning the
 * obj that returns 'true' with more than 5 keys will be sent to the filtered array!
 */
function filterLargeObj(arr) {
  return arr.filter((obj) => Object.keys(obj).length > 5);
}
const people = [
  {
    name: "beni",
    lastName: "jaichenco",
    age: "24",
    mail: "benjaminjaichenco@gmail.com",
    password: "no way",
    hotel: "trivago",
  },
  {
    name: "brendan",
    lastName: "eich",
    age: "62",
    mail: "b_eich@gmail.com",
    password: "javascript1995",
  },
  {
    name: "alan",
    lastName: "turing",
    age: "112",
    mail: "computer@hotmail.com",
    password: "********",
    hotel: "trigavo",
    hobbies: "solving enigmas",
  },
  {
    name: "gottfried wilhelm",
    lastName: "leibniz",
  },
];
const largeObjects = filterLargeObj(people);
console.log("people with more than 5 keys:", largeObjects);

/**
 * 2) consider the following example:
 * const response = await fetch("https://randomuser.me/api/?results=10");
 * const data = await response.json();
 * 2.1) return an array objects from the shape of: [{ fullName, id }]
 *
 * for this task i will create an async function to fetch the data from the API:
 * async function fetchData() {
 *      const response = await fetch(url); <-- waiting for the url to give the results of the call.
 *      const data = away response.json(); <-- wait for it to convert the response into an object that can be used within the code.
 *      return data; <-- once the response.json() completes being assigend to 'data', return 'data'.
 * }
 *
 * i will then declare an empty array which will later contain the [{ fullname, id }] information <-- const extractedData = [];
 * to do that, i will call the async function i crated before <-- fetchData().then().catch();
 * the 'then' method used when calling an async function triggerers when
 * the function successfully fetched the data, and it uses a callback function <-- fetchData().then(data-that-was-successfully-fetched => { callback function });
 * inside the callback function i will iterate on each object inside the 'data.results' (since the 'results' key inside the 'data' object contain the information i need, and it is an array) array:
 * fetchData().then(data => { for (let person of data.results) {} };
 * in each iteration of the 'for' loop, i will push into the 'extractedData' array declared in the global scope the
 * relevant information i need from the current object that's being proccessed in the iteration:
 * for (let person of data.results) {
 *      extractedData.push({
 *          fullName: person.name.first,
 *          id: person.id.value,
 *      });
 * }
 * now the extractedData array will contain 10 objects, each in the shape of [{ fullName, id }].
 */
async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  return data;
}
const personInfo = [];
fetchData()
  .then((data) => {
    for (let person of data.results) {
      personInfo.push({
        fullName: `${person.name.first} ${person.name.last}`,
        id: person.id.value,
      });
    }
    console.log("person fullname and id:", personInfo);
  })
  .catch((error) => {
    console.error("error fetching data:", error);
  });

/**
 * 2.2) filter all the users with complex passwords (passwords that is at least 6 chars and contain special chars)
 *
 * first i will create a new empty array called personWithComplexPass <-- const personWithComplexPass = [];
 * then i will call the async fetchData() function <-- fetchData().then().catch();
 * inisde the 'then' method's callback function, i will again iterate over each person <-- then(data => { for (let person of data.results) {} });
 * inside the for loop i will need to filter only the people with a complex password and push it to the empty array declared before.
 * to do that i can use an if statement to check whether or not the complex password condition is true or false.
 * i can also use the array.filter() method which basically does the same thing? but ill stick to the if statement for now:
 * if (person.data.results.login.password.length >= 6 && password-contains-special-chars) {push the person to the personWithComplexPass array}
 * to check if the password contains special chars i need to create a regular expression containing special chars.
 * before the for loop, i will create a constant variable to contain my special-chars-regex pattern <-- const specialCharRegex = /[!@#$%^&*()1234567890]/ (since no passwords in this API contain the special characters i chose, i decided that numbers will be special characters as well)
 * in the 'if' condigion, i need to use the .test() method to to check if the password contains any characters in the specialCharRegex (the regex.test() method return 'true' if the regex contains at least one char of the pattern):
 * if (person.login.password.length >= 6 && specialCharRegex.test(person.login.password)) {};
 * if these 2 conditions are met, the password is complex and the object (person) that is currently being proccessed in the for loop needs to be pushed inisde the personWithComplexPass array:
 * personWithComplexPass.push(person);
 */
const peopleWithComplexPass = [];
fetchData()
  .then((data) => {
    const regex = /[!@#$%^&*()1234567890]/;
    for (let person of data.results) {
      if (person.login.password.length >= 6 && regex.test(person.login.password)) {
        peopleWithComplexPass.push({
          fullName: `${person.name.first} ${person.name.last}`,
          password: person.login.password,
        });
      }
    }
    console.log("people with complex passwords:", peopleWithComplexPass);
  })
  .catch((error) => {
    console.error("error fetchind data:", error);
  });

/**
 * 2.3) get the youngest people from the data.
 *
 * each time i fetch the data the results are different, so young people are either people under a specific constant age (can lead to sometimes being an empty array if not person is of
 * the constant age i set), under a dynamic age (will return all the people that share the youngest age from the data), or just return a sorted array starting from the youngest person.
 * i will go with the dynamic age.
 * in order to get the youngest people when each time the data is fetched their age changes, i can use the reduce() method to create an array containing the youngest person (or persons if they share the same youngest age).
 * first, i will create a 'youngestPeople' variable containing an empty array <-- let youngestPeople = [];
 * now i call the fetchData() function again <-- fetchData().then().catch();
 * inside the 'then()' callback function, i will assign the youngestPeople array the return of the reduce method on the 'data.results' array:
 * then(data => { youngestPeople = data.results.reduce((youngest, currPerson => {}
 * now i need a condition to check if there is a youngest person or if the current person is younger than the youngest person <-- if (!youngest || currPerson.dob.age < youngest[0].age) {}
 * if one of these conditions are met, i return an array containing this person to the accumulator <-- return [{ fullName: `${currPerson.name.first} ${currPerson.name.last}`, age: currPerson.dob.age }];
 * now if the youngest person exists, or if the current person is not younger than the person in the accumulator, i check if the current person is of the same age as the youngest <-- else if (currPerson.dob.age === youngest[0]) {}
 * if they share the same age, i push into the accumulator array the current person as well <-- youngets.push({ fullName: `${currPerson.name.first} ${currPerson.name.last}`, age: currPerson.dob.age });
 * if the current person is older than the youngest age, the iteration returns the accumulator as it is (with the youngest persons(s) in it) and continues to process the next person untill finished <-- return youngets;
 * the starting value of the accumulator will be 'null', and if the first condition is met (!youngets) which means if there is no youngest (it's null), it will start the array <-- reduce(callback-function, null);
 *
 * now the youngestPeople array will always contain the youngest people from the newly fetched data.
 */
let youngestPeople = [];
fetchData()
  .then((data) => {
    youngestPeople = data.results.reduce((youngest, currPerson) => {
      if (!youngest || currPerson.dob.age < youngest[0].age) {
        return [
          {
            fullName: `${currPerson.name.first} ${currPerson.name.last}`,
            age: currPerson.dob.age,
          },
        ];
      } else if (currPerson.dob.age === youngest[0].age) {
        youngest.push({
          fullName: `${currPerson.name.first} ${currPerson.name.last}`,
          age: currPerson.dob.age,
        });
      }
      return youngest;
    }, null);
    console.log("youngest people:", youngestPeople);
  })
  .catch((error) => {
    console.error("error fetching data:", error);
  });
