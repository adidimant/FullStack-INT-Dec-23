const historyData = [];

function addToHistory(visitObj) {
    historyData.push(visitObj);
}

function getFullHistory() {
    for (let i = historyData.length - 1; i >= 0; i--) {
        console.log(historyData[i]);
    }
}

function removeFromHistory(url, order = 1) {
    let count = 0;
    for (let i = 0; i < historyData.length; i++) {
        if (historyData[i].url === url) {
            count++;
            if (count === order) {
                historyData.splice(i, 1); // הערך הראשון הוא האינדיקס ממנו מוחקים, השני כמה למחוק מהאינדיקס הזה
                break;
            }
        }
    }
}

const visitObj1 = { 
    url: "https://example.com/page1", 
    timeVisited: "12-03-2024", 
    errorsCount: 0, 
    clicksCount: 5, 
    loginsCount: 1,
    googleUser : 'ehab@gmail.com'
};
const visitObj4 = { 
    url: "https://example.com/page1", 
    timeVisited: "13-03-2024", 
    errorsCount: 3, 
    clicksCount: 10, 
    loginsCount: 10,
    googleUser : 'ehab@gmail.com'
};
const visitObj2 = { 
    url: "https://example.com/page2", 
    timeVisited: "11-03-2024", 
    errorsCount: 2, 
    clicksCount: 8, 
    loginsCount: 2,
    googleUser : 'ehab@gmail.com'
};
const visitObj3 = { 
    url: "https://example.com/page3", 
    timeVisited: "10-03-2024", 
    errorsCount: 1, 
    clicksCount: 3, 
    loginsCount: 0,
    googleUser : 'ehab@gmail.com'
};


addToHistory(visitObj1);
addToHistory(visitObj4);
addToHistory(visitObj2);
addToHistory(visitObj3);

console.log("Full History:");
getFullHistory();
console.log('\n');
removeFromHistory("https://example.com/page2");
console.log("After removing page2:");
getFullHistory();
console.log('\n');
console.log("After removing page1 and order=2");
removeFromHistory("https://example.com/page1",2);
getFullHistory();