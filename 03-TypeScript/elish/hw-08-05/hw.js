
const light={
    RED:"red",
    ORANGE: "orange",
    GREEN: "green",
    'RED-ORANGE': 'red-orange',
    WHITE: "white"
};

function changeLight() {
    let red=true;
    let redOranger=false;
    let green=false;
    let orange=false;

    setInterval(()=>{
        if(red){
            document.getElementById('red').style.backgroundColor=light.RED;
            document.getElementById('orange').style.backgroundColor=light.WHITE;
            red= false;
            redOranger=true;
        }
        else if(redOranger){
            document.getElementById('red').style.backgroundColor=light["RED-ORANGE"]='red'
            document.getElementById('orange').style.backgroundColor=light["RED-ORANGE"]='orange';
            redOranger=false;
            green=true;
        }
        else if(green){
            document.getElementById('green').style.backgroundColor=light.GREEN;
            document.getElementById('red').style.backgroundColor=light.WHITE;
            document.getElementById('orange').style.backgroundColor=light.WHITE;
            green=false;
            orange=true;
        }
        else if(orange){
            document.getElementById('orange').style.backgroundColor=light.ORANGE;
            document.getElementById('green').style.backgroundColor=light.WHITE;
            orange=false;
            red=true;
        }

    },5000)   
};

changeLight();

// let currentLight=light.RED;
// const lightElement=document.querySelectorAll('.light');

// function changeLight() {
//     switch (currentLight) {
//         case light.RED:
//             currentLight= light.ORANGE;
//             break;
//         case light.ORANGE:
//             currentLight=light.GREEN;
//             break;
//         case light.GREEN:
//             currentLight=light['RED-ORANGE'];
//             break;
//         case light['RED-ORANGE']:
//             currentLight=light.RED;
//             break;
//     }
//     lightElement.className ='light ${currentLight}';
// }

// setInterval(changeLight,500)

