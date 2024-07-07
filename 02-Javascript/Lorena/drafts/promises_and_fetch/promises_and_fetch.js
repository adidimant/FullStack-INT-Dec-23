document.getElementById("getJSONBtn").onclick = function() {
    fetch("https://www.w3schools.com/js/js_promise.asp")
    .then(function(responseData) {
        console.log(responseData)
        return responseData.json()
    }).then(function(jsonData) {
        console.log(jsonData);
    }).catch()
}