function direction() {
    let flexElement = document.getElementById("flexContainer1");
    /*if (!flexElement.classList.contains("direction-column")) {
        flexElement.classList.add("direction-column");
        document.getElementById("explain").innerText += "flex-direction: column;";
        document.getElementById("explain").innerHTML += "<br>"
    } else {
        flexElement.classList.remove("direction-column");
        document.getElementById("explain").innerText += "flex-direction: row;";
        document.getElementById("explain").innerHTML += "<br>"
    }*/
    //document.getElementById("flexContainer").classList.toggle("direction-column");
    /*document.getElementById("flexContainer").style.flexDirection = "column";*/
    //document.getElementById("explain").innerText = "Added: flex-direction:column;";
    if (flexElement.classList.contains("direction-row") || flexElement.classList.contains("direction-row-reverse")) {
        flexElement.classList.remove("direction-row");
        flexElement.classList.remove("direction-row-reverse");
        flexElement.classList.add("direction-column");
        document.getElementById("explain").innerText += "flex-direction: column;";
        document.getElementById("explain").innerHTML += "<br>"
    } else {
        flexElement.classList.remove("direction-column");
        flexElement.classList.add("direction-row");
        document.getElementById("explain").innerText += "flex-direction: row;";
        document.getElementById("explain").innerHTML += "<br>"
    }
}

function wrap() {
    let flexElement = document.getElementById("flexContainer1"); 
    if (!flexElement.classList.contains("wrap")) {
       // flexElement.classList.remove("direction-row");
        //flexElement.classList.remove("direction-row-reverse");
        flexElement.classList.add("wrap");
        document.getElementById("explain").innerText += "flex-wrap: wrap;";
        document.getElementById("explain").innerHTML += "<br>"
    } else {
        flexElement.classList.remove("wrap");
        //flexElement.classList.add("direction-row");
        document.getElementById("explain").innerText += "flex-wrap: nowrap;";
        document.getElementById("explain").innerHTML += "<br>"
    }
}

function reverseDirection() {
    let flexElement = document.getElementById("flexContainer1");
    if (flexElement.classList.contains("direction-column") || flexElement.classList.contains("direction-column-reverse")) {
        if (!flexElement.classList.contains("direction-column-reverse")) {
            flexElement.classList.add("direction-column-reverse");
            document.getElementById("explain").innerText += "flex-direction: column-reverse;";
            document.getElementById("explain").innerHTML += "<br>"
        } else {
            flexElement.classList.remove("direction-column-reverse");
            if (flexElement.classList.contains("direction-column")) {
                document.getElementById("explain").innerText += "flex-direction: column;";
            } else if (flexElement.classList.contains("direction-row")) {
                document.getElementById("explain").innerText += "flex-direction: row;";
            }
            document.getElementById("explain").innerHTML += "<br>"
        }
    } else if (flexElement.classList.contains("direction-row") || flexElement.classList.contains("direction-row-reverse")) {
        if (!flexElement.classList.contains("direction-row-reverse")) {
            flexElement.classList.add("direction-row-reverse");
            document.getElementById("explain").innerText += "flex-direction: row-reverse;";
            document.getElementById("explain").innerHTML += "<br>"
        } else {
            flexElement.classList.remove("direction-row-reverse");
            document.getElementById("explain").innerText += "flex-direction: row;";
            document.getElementById("explain").innerHTML += "<br>"
        }
    } 
}

function order() {
    let flexElement1 = document.getElementById("child1");
    flexElement1.classList.add("order1");
    let flexElement3 = document.getElementById("child3");
    flexElement3.classList.add("order2");
    document.getElementById("orderButton").innerText = "Click to move child 1 to last >>";
    document.getElementById("orderButton").setAttribute( "onClick", "javascript: orderLast();" )
}
function orderLast() {
    let flexElement1 = document.getElementById("child1");
    flexElement1.classList.remove("order1");
    flexElement1.classList.add("order2");
    let flexElement3 = document.getElementById("child3");
    flexElement3.classList.remove("order2");
    document.getElementById("orderButton").innerText = "Click to move child 1 to middle >>>";
    document.getElementById("orderButton").setAttribute( "onClick", "javascript: order();" )
}