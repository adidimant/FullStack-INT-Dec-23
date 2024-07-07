danny = 7;
console.log("the valeu of danny is", danny);
console.log("the valeu of danny is", typeof danny);

let str1;
let str2;
let str3;
let numVal1;
let numVal2;
let numVal3;
let concatStr;
// handle button 
/*hi my name is lorena :) */

document.getElementById("btn3").onclick = function () {
    str1 = document.getElementById("inp1").value;
    str2 = document.getElementById("inp2").value;
    str3 = document.getElementById("inp3").value;

    numVal1 = parseInt(str1);
    numVal2 = parseInt(str2);
    numVal3 = parseInt(str3);

    concatStr = numVal1 + numVal2 + numVal3;
    document.getElementById("p1").innerHTML = concatStr;
}


let lext;
document.getElementById("btn1").onclick = function () {
    text = "Luli Bar lev";
    document.getElementById("par1").innerHTML = text;
    document.getElementById("par2").innerHTML = text;
    document.getElementById("par3").innerHTML = text;
    document.getElementById("par4").innerHTML = text;
    document.getElementById("par5").innerHTML = text;

}
let numOfClicks = 0;
let square = 0;
document.getElementById("btn2").onclick = function () {
    numOfClicks = numOfClicks + 1;
    document.getElementById("p1").innerHTML = typeof numOfClicks;
    square = numOfClicks * numOfClicks;
    console.log(numOfClicks);
    console.log(square);
}

