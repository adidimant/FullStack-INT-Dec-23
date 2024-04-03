function filterObjectsWithAtLeastSevenKeys(objectsArray) {
  return objectsArray.filter(object => Object.keys(object).length >= 7);
}


const objectsArray = [
  { name: 'John', age: 25, city: 'New York', occupation: 'Engineer', email: 'john@example.com', phone: '123-456-7890', hobby: 'Reading' },
  { name: 'Jane', age: 28, city: 'Los Angeles', occupation: 'Designer' },
  { name: 'Doe', age: 30, city: 'Chicago', occupation: 'Developer', email: 'doe@example.com', phone: '123-456-7890' },
  { name: 'Mike', age: 35, city: 'Houston', occupation: 'Architect', email: 'mike@example.com', phone: '987-654-3210', hobby: 'Cycling', nationality: 'American' }
];

const filteredObjects = filterObjectsWithAtLeastSevenKeys(objectsArray);

console.log(filteredObjects);

//2.//

const users = [
  { fullName: "John Doe", id: 1, password: "123456!", age: 24 },
  { fullName: "Jane Smith", id: 2, password: "password", age: 30 },
  { fullName: "Jack White", id: 3, password: "pass123@", age: 22 },
  { fullName: "Jill Green", id: 4, password: "1234", age: 27 },
  { fullName: "Joe Black", id: 5, password: "1234567$", age: 20 }
];

const usersSimplified = users.map(user => ({
  fullName: user.fullName,
  id: user.id
}));


const complexPasswordUsers = users.filter(user => user.password.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/g.test(user.password));


const youngest = users.reduce((youngestSoFar, user) => user.age < youngestSoFar.age ? user : youngestSoFar, users[0]);
