"use strict";
const visitObjHistory = [];
const visitObj = {
    url: "www.google.com",
    timeVisited: 60,
    errorCount: 3,
    clicksCount: 200,
    loginsCount: 2,
    googleUser: "OferBA",
};
addToHistory(visitObj);
visitObj.timeVisited = 61;
addToHistory(visitObj);
visitObj.loginsCount = 7;
addToHistory(visitObj);
function addToHistory(visitObj) {
    visitObjHistory.push(Object.assign({}, visitObj));
}
function getFullHistoryReversed() {
    visitObjHistory
        .slice()
        .reverse()
        .forEach((visitObj) => {
        console.log(visitObj);
    });
}
function getFullHistory() {
    visitObjHistory.forEach((visitObj) => {
        console.log(visitObj);
    });
}
function removeFromHistory(url, order) {
    if (!order) {
        visitObjHistory.every((element, index) => {
            if (element.url === url)
                visitObjHistory.splice(index, 1);
            return;
        });
        return;
    }
    else if (order >= visitObjHistory.length || order < 0) {
        console.log("order number is too high or too low");
        return;
    }
    else
        visitObjHistory.splice(order, 1);
}
getFullHistory();
removeFromHistory("www.google.com", 2);
getFullHistory();
