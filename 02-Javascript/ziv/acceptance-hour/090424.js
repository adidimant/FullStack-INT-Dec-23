// array functions - lorena
// questions - Ita
// functions - Ziv
// awni - exercies


function getData(userId, shopId) {
  if (userId && shopId) {
    return { userId, shopId, buyings: 28, entrances: 51, lastPurchase: new Date("05/12/2022") };
  }
  return null;
}


function getTimeNow() {
  return Date.now(); // returns a number (timestamp)
}

const getTimeWithConditions = (dateString) => {
  // dateString is like "05/12/2022"
  if (dateString) {
    return new Date(dateString);
  } else {
    return new Date();
  }
};

getTimeWithConditions();

getTimeWithConditions(); // returns a date object that correlates to the date of now
getTimeWithConditions("05/12/1994"); // returns a date object that correlates to the date of "12/05/1994"

const getTimeNowV2 = () => Date.now();

// returning immedately the default object with nulls
const getDefaultUserObject = () => ({
  userId: null,
  shopId: null,
  customerId: null,
  entrances: null,
  lastPurchase: null,
  buyings: null,
});

const response = await fetch("https://randomuser.me/api/?results=10");
const data = await response.json();

data.results.map((userData) => {
  return {
      fullName: userData.name.first + " " + userData.name.last,
      email: userData.email
  }
});

/*
result:
0: {fullName: 'Ilona Keto', email: 'ilona.keto@example.com'}
1: {fullName: 'Steven Patterson', email: 'steven.patterson@example.com'}
2: {fullName: 'Maira Scheepstra', email: 'maira.scheepstra@example.com'}
3: {fullName: 'Bobby Warren', email: 'bobby.warren@example.com'}
4: {fullName: 'Angela Larson', email: 'angela.larson@example.com'}
5: {fullName: 'Teodor Haugvaldstad', email: 'teodor.haugvaldstad@example.com'}
6: {fullName: 'Nataša Ivkov', email: 'natasa.ivkov@example.com'}
7: {fullName: 'Ángela Villa', email: 'angela.villa@example.com'}
8: {fullName: 'Barbara Rivera', email: 'barbara.rivera@example.com'}
9: {fullName: 'Maja Olsen', email: 'maja.olsen@example.com'}
*/

// filter all the females:

data.results.filter((userObj) => userObj.gender == "female");

// OR:
data.results.filter((userObj) => {
  if (userObj.gender == "female"){
    return true;
  }
  return false;
});

// return all the users that their phones starts with "8"

data.results.filter((userData) => userData.phone.includes("8"));