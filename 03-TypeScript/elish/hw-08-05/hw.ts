enum lightTs{
    RED='red',
    ORANGE='orange',
    GREEN='green',
    'RED-ORANGE'='red-orange',
    WHITE = 'white'
};

function changeLightTs():void {
    let redTs: boolean = true;
    let redOrangeTs: boolean= false;
    let greenTs: boolean = false;
    let orangeTs: boolean =false;

    setInterval(()=>{
        if(redTs){
            (document.getElementById('red') as HTMLElement).style.backgroundColor=lightTs.RED;
            (document.getElementById('orange') as HTMLElement).style.backgroundColor=lightTs.WHITE;
            redTs= false;
            redOrangeTs= true;
        }
        else if(redOrangeTs){
            (document.getElementById('red') as HTMLElement).style.backgroundColor=lightTs["RED-ORANGE"];
            (document.getElementById('orange') as HTMLElement).style.backgroundColor=lightTs["RED-ORANGE"];
            redTs= false;
            redOrangeTs=true;
        }
        else if(greenTs){
            (document.getElementById('green') as HTMLElement).style.backgroundColor=lightTs.GREEN;
            (document.getElementById('red') as HTMLElement).style.backgroundColor=lightTs.WHITE;
            (document.getElementById('orange') as HTMLElement).style.backgroundColor=lightTs.WHITE;
            greenTs=false;
            orangeTs=true;
        }
        else if(orangeTs){
            (document.getElementById('orange') as HTMLElement).style.backgroundColor=lightTs.ORANGE;
            (document.getElementById('green') as HTMLElement).style.backgroundColor=lightTs.WHITE;
            orangeTs=false;
            redTs=true;
        }
    } ,5000)
};

changeLightTs();