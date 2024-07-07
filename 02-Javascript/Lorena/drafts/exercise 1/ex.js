
document.getElementById('cmpBtn').onclick = function(){
    let operand1 = document.getElementById('operand1').value;
    let operand2 = document.getElementById('operand2').value;
    let userSum = document.getElementById('sum').value;
    
    let actualSum = parseInt(operand1) + parseInt(operand2);
    let isEqual = parseInt(userSum) === actualSum;
    
    document.getElementById('resultPar').innerHTML = isEqual;
}

let value = 7;
let cmp = value > 5;
console.log(cmp);

