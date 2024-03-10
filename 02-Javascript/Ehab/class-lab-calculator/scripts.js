var calc ='',opp=false;
function input(value){
    var screen = document.getElementById('screen');
    //alert(Number.isInteger(parseInt(value)));
    //alert(!Number.isInteger(parseInt(value)) && value != "calculate");
    // אם לוחצים על מספר, תוסיף אותו למסך
    if(Number.isInteger(parseInt(value)) && !opp){
        screen.value += value;
        calc = screen.value;
    }
    else if(!Number.isInteger(parseInt(value)) && value != "calculate"){
        opp = true;
        calc +=' '+ value;
        screen.value ='';
    }
    else if (opp && value != "calculate" && Number.isInteger(parseInt(value))){
        screen.value += value;
    }
    else if(value == "calculate"){
        calc +=' '+ screen.value;
        //alert(calc + ' = '+eval(calc));
        screen.value = calc;
        if(Number.isInteger(parseInt(eval(calc)))){
            document.getElementById('res').innerText = eval(calc);
        }else{
            alert('פעולת חישוב לא חוקית');
            clearAll();
        }
        calc = '';
        opp = false;
    }
}

function clearAll(){
    document.getElementById('screen').value='';
    document.getElementById('res').innerText='';
}