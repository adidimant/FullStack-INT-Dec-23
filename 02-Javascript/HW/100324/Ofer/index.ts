interface visitInterface {
    url: string;
    timeVisited: Date;
    errorCount: number;
    clicksCount: number;
    loginsCount: number;
    googleUser: string;
}

const visitObjHistory: visitInterface[] = [];

const visitObj: visitInterface = {
    url: "www.google.com",
    timeVisited: new Date,
    errorCount: 3,
    clicksCount: 200,
    loginsCount: 2,
    googleUser: "OferBA",
};
addToHistory(visitObj);

visitObj.timeVisited = new Date;

addToHistory(visitObj);

visitObj.loginsCount = 7;
addToHistory(visitObj);

function addToHistory(visitObj: visitInterface): void {
    visitObjHistory.push({ ...visitObj });
}

function getFullHistoryReversed(): void {
    visitObjHistory
        .slice()
        .reverse()
        .forEach((visitObj) => {
            console.log(visitObj);
        });
}

function getFullHistory(): void {
    visitObjHistory.forEach((visitObj) => {
        console.log(visitObj);
    });
}
function removeFromHistory(url: string, order?: number) {
    if (!order) {
        visitObjHistory.every((element, index) => {
            if (element.url === url) visitObjHistory.splice(index, 1);
            return;
        });
        return;
    } else if (order >= visitObjHistory.length || order < 0) {
        console.log("order number is too high or too low");
        return;
    } else visitObjHistory.splice(order, 1);
}

getFullHistory();
removeFromHistory("www.google.com", 2);
getFullHistory();
