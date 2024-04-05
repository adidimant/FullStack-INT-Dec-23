function filterObjectsWithAtLeastSevenKeys(objectsArray) {
  return objectsArray.filter(object => Object.keys(object).length >= 7);
}

// Example usage:
const objectsArray = [
  { name: 'John', age: 25, city: 'New York', occupation: 'Engineer', email: 'john@example.com', phone: '123-456-7890', hobby: 'Reading' },
  { name: 'Jane', age: 28, city: 'Los Angeles', occupation: 'Designer' },
  { name: 'Doe', age: 30, city: 'Chicago', occupation: 'Developer', email: 'doe@example.com', phone: '123-456-7890' },
  { name: 'Mike', age: 35, city: 'Houston', occupation: 'Architect', email: 'mike@example.com', phone: '987-654-3210', hobby: 'Cycling', nationality: 'American' }
];

const filteredObjects = filterObjectsWithAtLeastSevenKeys(objectsArray);

console.log(filteredObjects);
