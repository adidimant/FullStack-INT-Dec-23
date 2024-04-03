const history = [];

const more = {
  screenSize: "",
  deviceType: "",
};

const visitObj = {
  url: "",
  timeVisited: "",
  errorsCount: "",
  clicksCount: "",
  loginsCount: "",
  googleUser: "",
  ...more,
};

function visitSite(url, timeVisited, errorsCount, clicksCount, loginsCount, googleUser, screenSize, deviceType) {
  visitObj.url = url;
  visitObj.timeVisited = timeVisited;
  visitObj.errorsCount = errorsCount;
  visitObj.clicksCount = clicksCount;
  visitObj.loginsCount = loginsCount;
  visitObj.googleUser = googleUser;
  visitObj.deviceType = deviceType;
  visitObj.screenSize = screenSize;
  addToHistory(visitObj);
}

visitSite("wikipedia.org", "2024-01-23", 1, 8, 0, "", "2560x1440", "Desktop");

visitSite("google.com", "2023-05-11", 0, 10, 1, "user123@gmail.com", "1920x1080", "Desktop");

visitSite("github.com", "2023-09-04", 2, 5, 3, "", "1366x768", "Laptop");

visitSite("github.com", "2024-02-26", 1, 2, 1, "", "1366x768", "Laptop");

visitSite("google.com", "2024-03-11", 0, 10, 1, "user123@gmail.com", "1920x1080", "Desktop");

visitSite("youtube.com", "2024-03-01", 5, 12, 2, "youtubeuser@gmail.com", "1920x1080", "Laptop");

visitSite("google.com", "2024-03-02", 0, 10, 1, "user123@gmail.com", "1920x1080", "Desktop");

function addToHistory({ ...obj }) {
  history.push(obj);
}

function getFullHistory() {
  history.sort((a, b) => {
    if (new Date(a.timeVisited) > new Date(b.timeVisited)) {
      return 1;
    } else return -1;
  });
  history.reverse();
  console.log("History:", history);
}

function deleteFromHistory(url, order = 1) {
  const sites = [];
  history.forEach((obj) => {
    if (obj.url == url) {
      sites.push(obj);
    }
  });
  order -= 1;
  const siteToRemove = sites[order];
  const index = history.indexOf(siteToRemove);
  if (sites[order] !== undefined) {
    history.splice(index, 1);
  } else {
    console.log("site is not in history!");
    return;
  }
  console.log("history:", history);
}

getFullHistory();
