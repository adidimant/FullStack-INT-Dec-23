let isHere = true;
let timer;
let nambersec = 0;


function starttimer() {
  if (!isHere) {
    return
  }
  nambersec++;
  document.querySelector('div').innerHTML = nambersec + ' ' + 'seconds';
}

function stoptimer() {
  isHere = true;
}

function stayUser() {
  isHere = true;
  clearTimeout(timer;)
  
}



document.addEventListener("DOMContentLoaded", () => {
  setInterval(starttimer, 1000);
});