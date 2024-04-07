let timer;
let isHere=true;
let count=0;
const yesOrNot= document.querySelector(".yesOrNot");
const second=document.querySelector(".second");

function startTime() {
    if(!isHere)
        return;
    count++;
    second.textContent=`${count} second`;
};

function stopTime() {
    isHere=false;
    yesOrNot.textContent="not here!";  
};

function updateUser() {
    isHere=true;
    yesOrNot.textContent="here";
    clearTimeout(timer);
    timer=setTimeout(stopTime,30000); 
};

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(startTime,1000);
});

document.addEventListener("mouseover",()=>{
    updateUser();
});

document.addEventListener("keyup",()=>{
    updateUser();
});
