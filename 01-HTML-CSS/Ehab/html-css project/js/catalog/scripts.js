function handleClick(button) {
    // get the parent div of the button
    const parentDiv = button.parentNode;
    // Find the img and h2 elements within the parent div
    const imgSrc = parentDiv.querySelector('img').src;
    const carDetails = parentDiv.querySelector('h2').innerText;
    const data = carDetails.split(' '); // convert the string to list of words 
    const company = data[0]; // get the car company to campany variable
    let model = ''; // variable that contain the car model
    if (data.length>1 && data.length <3){ //if the car model is one word
        model = data[1];
    }
    else if(data.length>2){ // if the car model is more than one word
        for(let i=1;i<data.length;i++){
            model += data[i] + ' ';
        } 
    }
    
    iframe = parent.document.getElementById('content'); // pointer to iframe element
    iframe.src = './html/reservation.html?company='+company+'&model='+model+'&img='+imgSrc; // set the iframe src

    // ajust style of link in nav bar
    parent.document.getElementById("link3").style.color = "#e7a328";
    parent.document.getElementById("link3").style.textDecoration = "underline";
    parent.document.getElementById("link1").style.color = "#000";
    parent.document.getElementById("link1").style.textDecoration = "none";
    parent.document.getElementById("link2").style.color = "#000";
    parent.document.getElementById("link2").style.textDecoration = "none";
    parent.document.getElementById("link4").style.color = "#000";
    parent.document.getElementById("link4").style.textDecoration = "none";
}

