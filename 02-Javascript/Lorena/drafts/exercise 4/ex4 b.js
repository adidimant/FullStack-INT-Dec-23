document.getElementById("btn1").onclick = function() {
    let inpStr = document.getElementById("inp1").value;
    let inpVal = parseInt(inpStr);

    if(inpVal < 0)
     inpVal = -inpVal;
    console.log(inpVal);
}