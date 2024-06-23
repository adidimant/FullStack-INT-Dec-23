"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        updateLight(TrafficLightColors.RED);
        yield wait(5000);
        updateLight(TrafficLightColors.RED_ORANGE);
        yield wait(5000);
        updateLight(TrafficLightColors.GREEN);
        yield wait(5000);
        updateLight(TrafficLightColors.ORANGE);
        yield wait(5000);
    }
});
var TrafficLightColors;
(function (TrafficLightColors) {
    TrafficLightColors["RED"] = "RED";
    TrafficLightColors["ORANGE"] = "ORANGE";
    TrafficLightColors["GREEN"] = "GREEN";
    TrafficLightColors["RED_ORANGE"] = "RED_ORANGE";
})(TrafficLightColors || (TrafficLightColors = {}));
function updateLight(color) {
    const redLightElement = document.getElementById("red");
    const orangeLightElement = document.getElementById('orange');
    const greenLightElemnt = document.getElementById('green');
    switch (color) {
        case 'RED':
            redLightElement.style.background = TrafficLightColors.RED.toLowerCase();
            orangeLightElement.style.background = 'none';
            greenLightElemnt.style.background = 'none';
            break;
        case 'RED_ORANGE':
            redLightElement.style.background = TrafficLightColors.RED.toLowerCase();
            orangeLightElement.style.background = TrafficLightColors.ORANGE.toLowerCase();
            greenLightElemnt.style.background = 'none';
            break;
        case 'GREEN':
            redLightElement.style.background = 'none';
            orangeLightElement.style.background = 'none';
            greenLightElemnt.style.background = TrafficLightColors.GREEN.toLowerCase();
            break;
        case 'ORANGE':
            redLightElement.style.background = 'none';
            orangeLightElement.style.background = TrafficLightColors.ORANGE.toLowerCase();
            greenLightElemnt.style.background = 'none';
            break;
        default:
            break;
    }
}
function wait(milliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => {
            setTimeout(res, milliseconds);
        });
    });
}
