let historyData = [];

function addToHistory(visitObj) {
    historyData.push(visitObj);
}

function getFullHistory() {
    let historyList = document.getElementById('history');
    historyList.innerHTML = '';
    for (let i = historyData.length - 1; i >= 0; i--) {
        let visit = historyData[i];
        let listItem = document.createElement('li');
        listItem.textContent = `URL: ${visit.url}, Time Visited: ${visit.timeVisited}, Errors: ${visit.errorsCount}, Clicks: ${visit.clicksCount}, Logins: ${visit.loginsCount}`;
        historyList.appendChild(listItem);
    }
}

function removeFromHistory(url, order = 1) {
    let count = 0;
    for (let i = 0; i < historyData.length; i++) {
        if (historyData[i].url === url) {
            count++;
            if (count === order) {
                historyData.splice(i, 1);
                break;
            }
        }
    }
    getFullHistory();
}

// Example usage:
addToHistory({url: "https://example.com", timeVisited: "2024-03-02", errorsCount: 0, clicksCount: 5, loginsCount: 1});
addToHistory({url: "https://example.com/page2", timeVisited: "2024-03-01", errorsCount: 2, clicksCount: 10, loginsCount: 2});
getFullHistory();
removeFromHistory("https://example.com");