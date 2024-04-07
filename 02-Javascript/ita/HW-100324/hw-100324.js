 
history.back(); //עמוד קודם
history.forward(); //עמוד הבא 
history.go(1); //להתקדם כמה עמודים נוספים, לדוגמא עמוד 1 יותר...מה שבסוגריים
history.go(0); //ריענון של הדף
window.location //כתובת



const visitObj = { 
    url: "", 
    timeVisited: "", 
    errorsCount: "", 
    clicksCount: "", 
    loginsCount: "", 
    googleUser: ""
}

function visitObj (url, timeVisited, errorsCount, clicksCount, loginsCount, googleUser) {
    visitObj.url = url;
    visitObj.timeVisited = timeVisited;
    visitObj.errorsCount = errorsCount;
    visitObj.clicksCount = clicksCount;
    visitObj.loginsCount = loginsCount;
    visitObj.googleUser = googleUser;
}

function getFullHistory () {
    const listHisyory = ["visitObj1", "visitObj2", "visitObj3", ...more]

    const n =  
    console.log(visitObj)
}

for (let i = length; i < 10; i--) {
    console.count("visitObj");
  }

  
