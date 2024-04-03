let player = '1';
let playerXO = 'X';
let counter=0;

function startGame(){
    if(firstAction()){
        document.getElementById('message').innerHTML = "Player " +player +" turn";
    }    
}
function firstAction(){
    for(let i=0;i<=8;i++)
    {
        if(document.getElementById(i).innerText != '')
            return false;
    }
    return true;
}
function handleMove(index) {
    if(!isBoardFull()){
        counter++;
        if(player === '1'){
            document.getElementById(index).innerText = 'X';
            document.getElementById(index).style.color = "red";
            player = '2';
            document.getElementById('message').innerHTML = "Player " +player +" turn";
            playerXO = 'O';
            if(check('X')){
                let x = parseInt(document.getElementById('player1').innerText);
                x++;
                document.getElementById('player1').innerText = x;
                setTimeout(function(){
                    clearCells('1');
                }, 100);
            }
        }
        else{
            document.getElementById(index).innerText = 'O';
            document.getElementById(index).style.color = "green";
            player = '1';
            document.getElementById('message').innerHTML = "Player " +player +" turn";
            playerXO = 'X';
            if(check('O')){
                let x = parseInt(document.getElementById('player2').innerText);
                x++;
                document.getElementById('player2').innerText = x;
                setTimeout(function(){
                    clearCells('2');
                }, 100);
            }
        }
        if(counter > 8)
            for(let i=0;i<=8;i++)
                document.getElementById(i).removeAttribute("onclick");
    }
}

function isBoardFull(){
    for(let i=0;i<=8;i++)
    {
        if(document.getElementById(i).innerText === '')
            return false;
    }
    return true;
}
function clearCells(winer){
    for(let i=0;i<=8;i++){document.getElementById(i).innerText = '';}
    player = '1';
    playerXO = 'X';
    counter=0;
    document.getElementById('message').innerHTML = "Player " +player +" turn";
    alert('Player ' + winer + ' Win');
}
function check(a){
    if(document.getElementById(0).innerText === a && document.getElementById(1).innerText === a && document.getElementById(2).innerText === a)
        return true;
    if(document.getElementById(3).innerText === a && document.getElementById(4).innerText === a && document.getElementById(5).innerText === a)
        return true;
    if(document.getElementById(6).innerText === a && document.getElementById(7).innerText === a && document.getElementById(8).innerText === a)
        return true;
    if(document.getElementById(0).innerText === a && document.getElementById(3).innerText === a && document.getElementById(6).innerText === a)
        return true;
    if(document.getElementById(1).innerText === a && document.getElementById(4).innerText === a && document.getElementById(7).innerText === a)
        return true;
    if(document.getElementById(2).innerText === a && document.getElementById(5).innerText === a && document.getElementById(8).innerText === a)
        return true;
    if(document.getElementById(0).innerText === a && document.getElementById(4).innerText === a && document.getElementById(8).innerText === a)
        return true;
    if(document.getElementById(2).innerText === a && document.getElementById(4).innerText === a && document.getElementById(6).innerText === a)
        return true;
    return false;
}