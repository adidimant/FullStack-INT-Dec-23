visitObj = {
    "url": "https://google.com",
    "timeVisited": "2024-03-10T15:00:00Z",
    "errorsCount": 1,
    "clicksCount": 5,
    "loginsCount": 2,
    "googleUser": true
}
let history = [];

function addToHistory(visitObj) {
    history.push(visitObj);
}

let visitObj_example = {
    url: "https://google.com",
    timeVisited: "2024-03-10T15:00:00Z",
    errorsCount: 1,
    clicksCount: 5,
    loginsCount: 2,
    googleUser: true
};

addToHistory(visitObj_example);

console.log(history);




function getFullHistory() {
    for (let i = history.length - 1; i >= 0; i--) {
        console.log(history[i]);
    }
}
function removeFromHistory(url, order) {
    
    let indices = history.map((visit, index) => visit.url === url ? index : -1).filter(index => index !== -1);

    
    if (order === undefined) {
        order = 0; 
    }

    if (order >= 0 && order < indices.length) {
        history.splice(indices[order], 1); 
    }
} 
