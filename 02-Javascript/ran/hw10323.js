// Data-store array to store the browsing history
let history = [];

// Function to add a visit object to the history
function addToHistory(visitObj) {
    history.push(visitObj);
}

// Function to print the full history of the user in reverse order
function getFullHistory() {
    for (let i = history.length - 1; i >= 0; i--) {
        console.log(history[i]);
    }
}

// Function to remove a visit object from the history
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

// Example usage:
// Adding visit objects to history
addToHistory({ url: "https://www.example.com", timeVisited: "2024-03-12T10:00:00", clicksCount: 2 });
addToHistory({ url: "https://www.example.com/page2", timeVisited: "2024-03-12T11:00:00", clicksCount: 1 });
addToHistory({ url: "https://www.example.com/page3", timeVisited: "2024-03-12T12:00:00", clicksCount: 3 });

// Printing the full history
console.log("Full History:");
getFullHistory();

// Removing a visit object from history
removeFromHistory("https://www.example.com/page2");
console.log("After removing https://www.example.com/page2:");
getFullHistory();
