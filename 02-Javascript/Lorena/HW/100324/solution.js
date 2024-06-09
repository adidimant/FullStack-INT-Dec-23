const visitObj = {
  url: 'https://www.google.com',
  timeVisited: '2021-03-24T12:00:00',
  errorsCount: 0,
  clicksCount: 8,
  loginsCount: 1,
  googleUser: 'lorenabarlev@gmail.com',
};

const visitObj2 = {
  url: 'https://www.ynet.co.il',
  timeVisited: '2022-03-24T12:00:00',
  errorsCount: 1,
  clicksCount: 4,
  loginsCount: 0,
  googleUser: 'lorenabarlev@gmail.com',
};

const visitHistory = [];

function addToHistory(visitObj) {
  visitHistory.push(visitObj);
}

function getFullHistory() {
  // one way to do it:
  // const newArray = [];
  // for (let i=visitHistory.length-1; i>=0;i--) {
  //   newArray.push(visitHistory[i]);
  // }
  // return newArray;
  // or:
  let newArray = [...visitHistory]; // we duplicate the array since newArray.reverse() will change the original array
  return newArray.reverse();
}

function removeFromHistory(url, order = 1) {
  let count = 0;
  for (let i = 0; i < visitHistory.length; i++) {
    if (visitHistory[i].url == url) {
      count++;
      if (count == order) {
        visitHistory.splice(i, 1);
        return visitHistory;
      }
    }
  }
  return visitHistory;
}

// Usage:
addToHistory(visitObj);
addToHistory(visitObj2);
console.log([...visitHistory]);
const fullHistory = getFullHistory();
console.log(fullHistory);
removeFromHistory('https://www.google.com');
console.log(visitHistory);