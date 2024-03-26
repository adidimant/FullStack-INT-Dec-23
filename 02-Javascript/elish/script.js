// כפתור של איפוס החישוב 
function clearScreen() {
    document.querySelector("#result").value = "";
}
 
// פונקציה שמוסיפה ערך
function display(value) {
    document.querySelector("#result").value += value;
}
 
// פונקציה שמחשבת 
function calculate() {
    let p = document.querySelector("#result").value;
    let q = eval(p);
    document.querySelector("#result").value = q;
}

//חישוב חזקה
function power(){
    let currentValue=document.getElementById("result").value;
    let squaredValue=Math.pow(parseFloat(currentValue),2);
    document.getElementById("result").value=squaredValue;
}