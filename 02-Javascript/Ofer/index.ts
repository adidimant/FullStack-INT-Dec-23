console.log("test");

const miliSecondsHTML = document.querySelector(".miliSecond") as HTMLElement;
const secondsHTML = document.querySelector(".seconds") as HTMLElement;
const maxTime = 30;

const pageLoaded = window.addEventListener("load", function (Event) {
    console.log(`page loaded in ${Math.floor(Event.timeStamp)}ms`);
    const intervalID = setInterval(function setIntaraval() {
        miliSecondsHTML.textContent = String(
            Number(miliSecondsHTML.textContent) + 1
        );

        if (Number(miliSecondsHTML.textContent) > 9) {
            secondsHTML.textContent = String(
                Number(secondsHTML.textContent) + 1
            );
            miliSecondsHTML.textContent = "0";
        }
    }, 100);
    // ["mousemove", "keypress"].forEach((evt) =>
    //     window.addEventListener(evt, () => {})
    // );
    this.addEventListener("mousemove",function abc() {
        clearInterval(intervalID)
        console.log(`timer has stopped at ${secondsHTML.textContent}:${miliSecondsHTML.textContent}`)
        this.removeEventListener("mousemove", abc);
    });


});
