document.getElementById('cmpBtn').onclick = function() {
input1Val = document.getElementById('input1').value;
input2Val = document.getElementById('input2').value;
input3Val = document.getElementById('input3').value;

let num1 = parseInt(input1Val);
let num2 = parseInt(input2Val);

let test = (num1 >= 17 && num1 <= 27) || 
            (num2 > num1 * 10) ||
            (input3Val === 'hedgehog');
        
    document.getElementById('resultPar').innerHTML = test;
}
