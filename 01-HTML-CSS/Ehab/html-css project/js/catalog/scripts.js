function handleClick(button) {
    // Traverse up to the parent div of the button
    const parentDiv = button.parentNode;
    // Find the img and h2 elements within the parent div
    const imgSrc = parentDiv.querySelector('img').src;
    const carDetails = parentDiv.querySelector('h2').innerText;
    const data = carDetails.split(' ');
    const company = data[0];
    let model = '';
    if (data.length>1 && data.length <3){
        model = data[1];
    }
    else if(data.length>2){
        for(let i=1;i<data.length;i++){
            model += data[i] + ' ';
        } 
    }
    
    iframe = parent.document.getElementById('content');
    iframe.src = './html/reservation.html?company='+company+'&model='+model+'&img='+imgSrc;

    parent.document.getElementById("link3").style.color = "#FEA000";
    parent.document.getElementById("link3").style.textDecoration = "underline";
    parent.document.getElementById("link1").style.color = "#000";
    parent.document.getElementById("link1").style.textDecoration = "none";
    parent.document.getElementById("link2").style.color = "#000";
    parent.document.getElementById("link2").style.textDecoration = "none";
    parent.document.getElementById("link4").style.color = "#000";
    parent.document.getElementById("link4").style.textDecoration = "none";
}

