//// 10/03/24 //////

const visitObj = {
  url: "https://example1.com",
  timeVisited: new Date(),
  errorsCount: 0,
  clicksCount: 5,
  loginsCount: 1,
  googelUsaer:'elish@gmail.com'
};

const visitObj2 = {
  url: "https://example2.com",
  timeVisited: new Date(),
  errorsCount: 2,
  clicksCount: 8,
  loginsCount: 0,
  googelUsaer:'elish@gmail.com'
};

const visitHistory =[];
    

// Function to add a visit to the history
function addToHistory(visitObj) {
    visitHistory.push(visitObj);
}

  
// Function to get and print the full history in reverse order
function getFullHistory() {
  //return visitHistory.reverse();
  let newArry=[...visitHistory];
  return newArry.reverse();
}


// Function to remove a visit from the history
function removeFromHistory(url, order=1) {
  let count=0;
  for(let i=0; i<visitHistory.length; i++){
    if(visitHistory[i].url==url){
      count++;
      if(count==order)
        visitHistory.splice(i, 1);
      return visitHistory;
    }
    return visitHistory;
  }
}


addToHistory(visitObj);
addToHistory(visitObj2);
console.log([...visitHistory]);
const fullHistory=getFullHistory();
console.log(fullHistory);
removeFromHistory('http://www.google.com');
console.log(visitHistory);
  