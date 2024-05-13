window.onload = async(): Promise<void> => {
    while(true){
        updateLight(TrafficLightColors.RED);
        await wait(5000);
        updateLight(TrafficLightColors.RED_ORANGE);  
        await wait(5000);
        updateLight(TrafficLightColors.GREEN);
        await wait(5000);
        updateLight(TrafficLightColors.ORANGE);
        await wait(5000);
    }
};

enum TrafficLightColors {
    RED = 'RED',
    ORANGE = 'ORANGE' ,
    GREEN = 'GREEN',
    RED_ORANGE = 'RED_ORANGE'
}


function updateLight(color : TrafficLightColors): void {
    const redLightElement = document.getElementById("red");
    const orangeLightElement = document.getElementById('orange');
    const greenLightElemnt = document.getElementById('green');
    switch (color) {
        case 'RED':
            (<HTMLElement>redLightElement).style.background = TrafficLightColors.RED.toLocaleLowerCase();
            (<HTMLElement>orangeLightElement).style.background = 'none';
            (<HTMLElement>greenLightElemnt).style.background = 'none';
            break;
        case 'RED_ORANGE':
            (<HTMLElement>redLightElement).style.background = TrafficLightColors.RED.toLocaleLowerCase();
            (<HTMLElement>orangeLightElement).style.background = TrafficLightColors.ORANGE.toLocaleLowerCase();
            (<HTMLElement>greenLightElemnt).style.background = 'none';
            break;
        case 'GREEN':
            (<HTMLElement>redLightElement).style.background = 'none';
            (<HTMLElement>orangeLightElement).style.background = 'none';
            (<HTMLElement>greenLightElemnt).style.background = TrafficLightColors.GREEN.toLocaleLowerCase();
            break;
        case 'ORANGE':
            (<HTMLElement>redLightElement).style.background = 'none';
            (<HTMLElement>orangeLightElement).style.background = TrafficLightColors.ORANGE.toLocaleLowerCase();
            (<HTMLElement>greenLightElemnt).style.background = 'none';
            break;
        default:
            break;
    }
    
}

async function wait(interval :number): Promise<void> {
    return new Promise((res,rej) => {
        setTimeout(res,interval);
    })
}
