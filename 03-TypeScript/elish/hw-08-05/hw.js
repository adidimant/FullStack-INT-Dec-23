"use strict";
var lightTs;
(function (lightTs) {
    lightTs["RED"] = "red";
    lightTs["ORANGE"] = "orange";
    lightTs["GREEN"] = "green";
    lightTs["RED-ORANGE"] = "red-orange";
    lightTs["WHITE"] = "white";
})(lightTs || (lightTs = {}));
;
function changeLightTs() {
    let redTs = true;
    let redOrangeTs = false;
    let greenTs = false;
    let orangeTs = false;
    setInterval(() => {
        if (redTs) {
            document.getElementById('red').style.backgroundColor = lightTs.RED;
            document.getElementById('orange').style.backgroundColor = lightTs.WHITE;
            redTs = false;
            redOrangeTs = true;
        }
        else if (redOrangeTs) {
            document.getElementById('red').style.backgroundColor = lightTs["RED-ORANGE"];
            document.getElementById('orange').style.backgroundColor = lightTs["RED-ORANGE"];
            redTs = false;
            redOrangeTs = true;
        }
        else if (greenTs) {
            document.getElementById('green').style.backgroundColor = lightTs.GREEN;
            document.getElementById('red').style.backgroundColor = lightTs.WHITE;
            document.getElementById('orange').style.backgroundColor = lightTs.WHITE;
            greenTs = false;
            orangeTs = true;
        }
        else if (orangeTs) {
            document.getElementById('orange').style.backgroundColor = lightTs.ORANGE;
            document.getElementById('green').style.backgroundColor = lightTs.WHITE;
            orangeTs = false;
            redTs = true;
        }
    }, 5000);
}
;
changeLightTs();
