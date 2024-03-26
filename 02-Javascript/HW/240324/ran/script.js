function filterOddNumbers(array) {
  return array.filter(num => num % 2 !== 0);
}

function containsObject(array) {
  return array.some(item => typeof item === 'object' && !Array.isArray(item) && item !== null);
}

function handleOddNumbers() {
  const arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
  const filteredArray = filterOddNumbers(arrayInput);
  document.getElementById('result').textContent = `מספרים אי-זוגיים: ${filteredArray.join(', ')}`;
}

function checkForObject() {
  const arrayInput = document.getElementById('arrayInput').value.split(',').map(item => {
    try {
      return JSON.parse(item);
    } catch(e) {
      return item;
    }
  });
  const containsObj = containsObject(arrayInput);
  document.getElementById('result').textContent = `האם קיים אובייקט במערך? ${containsObj ? 'כן' : 'לא'}`;
}
