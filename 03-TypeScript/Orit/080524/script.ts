enum trafficColor{
    RED = 'RED',
    ORANGE = 'ORANGE',
    GREEN = 'GREEN',
    REDORANGE = 'REDORANGE'
}
const redLight: HTMLElement | null = document.getElementById('red');
const orangeLight: HTMLElement | null = document.getElementById('orange');
const greenLight: HTMLElement | null = document.getElementById('green');

async function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function changeLight() {
    while (true) {
        if (redLight && orangeLight && greenLight && redLight.classList.contains('red') ) {
            await delay(5000);
            addColor(orangeLight, trafficColor.REDORANGE);
            /*await new Promise((res, rej) => {
                setTimeout(res,2000);
            });*/
            await delay(5000);
            addColor(greenLight, trafficColor.GREEN);
            removeColor(redLight, trafficColor.RED)
            removeColor(orangeLight, trafficColor.REDORANGE)
            await delay(5000);
            removeColor(greenLight, trafficColor.GREEN);
            addColor(orangeLight, trafficColor.ORANGE);
            await delay(5000);
            removeColor(orangeLight, trafficColor.ORANGE);
            addColor(redLight, trafficColor.RED);
            await delay(5000);
        }
    }
}

function addColor( el:HTMLElement, color: trafficColor): void {
    el.classList.add(color.toLowerCase());
};

function removeColor(el:HTMLElement, color:trafficColor):void {
    el.classList.remove(color.toLowerCase());
}

function changecolor(el:HTMLElement, color:trafficColor) : void{
    el.style.background = color.toLowerCase();
}
/*changeLight();*/