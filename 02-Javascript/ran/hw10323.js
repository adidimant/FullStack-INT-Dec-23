let history = [];


function addToHistory(visitObj) {
    history.push(visitObj);
}


function getFullHistory() {
    for (let i = history.length - 1; i >= 0; i--) {
        console.log(history[i]);
    }
}


function removeFromHistory(url, order = 1) {
    let count = 0;
    for (let i = 0; i < history.length; i++) {
        if (history[i].url === url) {
            count++;
            if (count === order) {
                history.splice(i, 1);
                break;
            }
        }
    }
}


addToHistory({ url: "https://www.example.com", timeVisited: "2024-03-12T10:00:00", clicksCount: 2 });
addToHistory({ url: "https://www.example.com/page2", timeVisited: "2024-03-12T11:00:00", clicksCount: 1 });
addToHistory({ url: "https://www.example.com/page3", timeVisited: "2024-03-12T12:00:00", clicksCount: 3 });


console.log("Full History:");
getFullHistory();


removeFromHistory("https://www.example.com/page2");
console.log("After removing https://www.example.com/page2:");
getFullHistory();
