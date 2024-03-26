// Browser history manager
const historyManager = {
    history: [],
  
    // Function to add a visit to the history
    addToHistory: function (visitObj) {
      this.history.push(visitObj);
    },
  
    // Function to get and print the full history in reverse order
    getFullHistory: function () {
      if (this.history.length === 0) {
        console.log("History is empty.");
      } else {
        console.log("Full History:");
        for (let i = this.history.length - 1; i >= 0; i--) {
          console.log(this.history[i]);
        }
      }
    },
  
    // Function to remove a visit from the history
    removeFromHistory: function (url, order = 1) {
      const matchingVisits = this.history.filter((visit) => visit.url === url);
  
      if (matchingVisits.length === 0) {
        console.log("No matching visits found for the provided URL.");
      } else {
        const indexToRemove = order - 1;
        const visitToRemove = matchingVisits[indexToRemove] || matchingVisits[0];
  
        const removedIndex = this.history.indexOf(visitToRemove);
  
        if (removedIndex !== -1) {
          this.history.splice(removedIndex, 1);
          console.log(`Visit removed from history: ${visitToRemove.url}`);
        }
      }
    },
  };
  
  // Example usage:
  const visit1 = {
    url: "https://example1.com",
    timeVisited: new Date(),
    errorsCount: 0,
    clicksCount: 5,
    loginsCount: 1,
  };
  
  const visit2 = {
    url: "https://example2.com",
    timeVisited: new Date(),
    errorsCount: 2,
    clicksCount: 8,
    loginsCount: 0,
  };
  
  historyManager.addToHistory(visit1);
  historyManager.addToHistory(visit2);
  
  historyManager.getFullHistory();
  
  historyManager.removeFromHistory("https://example1.com");
  historyManager.getFullHistory();
  