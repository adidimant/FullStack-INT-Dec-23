** Homework 10/03/24 **:
- Implement a browser history manager:
  - visitObj: { url, timeVisited, errorsCount, clicksCount, loginsCount, googleUser, ...more}
  - function addToHistory(visitObj) that accepts visitObj and inserts it to the data-store array
  - function getFullHistory() that accepts nothing (void), and prints the full history of the user in reverse order (from the latest to the oldest)
  - function removeFromHistory(url, order) that accpets a url (string) and deletes from the history array the visitObj item, if there's more than one visit - it will the item according to the `order` parameter. note that the `order` is optional (doesn't have to be provided, if `order` is not provided to the function - remove the first one)