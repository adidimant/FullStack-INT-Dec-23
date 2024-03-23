let isHere = false;
let timer;
let dev 
document.addEventListener("DOMContentLoaded",() => {
    dev = document.querySelector('div');
    dev.style.font = "36px sans-serif";
    dev.style.width = "500px"
    
    let seconds = 0;
    setInterval(()=>{
        if(isHere){
            dev.style.color = 'green';
            seconds++;
            dev.textContent ='User is here for '+ seconds + ' seconds'; 
        }
    }, 1000);
});

document.addEventListener("mousemove", () => {
    isHere = true;
    clearTimeout(timer);
    timer = setInterval(stopTime,30000);
});
document.addEventListener("keydown", () => {
    isHere = true;
    clearTimeout(timer);  
    timer = setInterval(stopTime,30000);
});
function stopTime(){
    isHere = false;
    dev.textContent ='User is not here';
    dev.style.color = 'red';
}