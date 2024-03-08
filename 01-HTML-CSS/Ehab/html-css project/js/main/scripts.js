setInterval(galleryspin, 2000);
var angle = 0;
function galleryspin() { 
    spinner = document.querySelector("#spinner");
    angle = angle + 45;
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}