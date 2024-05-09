var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var trafficColor;
(function (trafficColor) {
    trafficColor["RED"] = "RED";
    trafficColor["ORANGE"] = "ORANGE";
    trafficColor["GREEN"] = "GREEN";
    trafficColor["REDORANGE"] = "REDORANGE";
})(trafficColor || (trafficColor = {}));
const redLight = document.getElementById('red');
const orangeLight = document.getElementById('orange');
const greenLight = document.getElementById('green');
function delay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    });
}
function changeLight() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            if (redLight && orangeLight && greenLight && redLight.classList.contains('red')) {
                yield delay(2000);
                addColor(orangeLight, trafficColor.REDORANGE);
                /*await new Promise((res, rej) => {
                    setTimeout(res,2000);
                });*/
                yield delay(2000);
                addColor(greenLight, trafficColor.GREEN);
                removeColor(redLight, trafficColor.RED);
                removeColor(orangeLight, trafficColor.REDORANGE);
                yield delay(2000);
                removeColor(greenLight, trafficColor.GREEN);
                addColor(orangeLight, trafficColor.ORANGE);
                yield delay(2000);
                removeColor(orangeLight, trafficColor.ORANGE);
                addColor(redLight, trafficColor.RED);
                yield delay(2000);
                /*if (redLight && yellowLight && greenLight && redLight.style.background == ('red') ) {
                    changecolor(yellowLight, trafficColor.YELLOW);
                    //await new Promise((res, rej) => {
                    //    setTimeout(res,2000);
                    //});
                    await delay(2000);
                    changecolor(redLight, trafficColor.NONE);
                    changecolor(yellowLight, trafficColor.NONE);
                    changecolor(greenLight, trafficColor.GREEN);
                    await delay(2000);
                    changecolor(greenLight, trafficColor.NONE);
                    changecolor(yellowLight, trafficColor.YELLOW);
                    await delay(2000);
                    changecolor(yellowLight, trafficColor.NONE);
                    changecolor(redLight, trafficColor.RED);
                    await delay(2000);*/
            }
        }
    });
}
function addColor(el, color) {
    el.classList.add(color.toLowerCase());
}
;
function removeColor(el, color) {
    el.classList.remove(color.toLowerCase());
}
function changecolor(el, color) {
    el.style.background = color.toLowerCase();
}
/*changeLight();*/ 
