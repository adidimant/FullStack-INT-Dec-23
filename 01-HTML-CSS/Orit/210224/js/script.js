function alertOnSubmit() {
    alert("The form was submitted");
}

function showInput() {
    let userInput;
    let category = document.getElementById("category").value;
    let condition = document.getElementById("condition").value;
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;
    let files = document.getElementById("files").value;
    let updates = document.getElementById("updates").value;

    userInput = category + "<br>" + condition + "<br>" + product + "<br>" + price + "<br>" + location + "<br>" + description + "<br>" + files + "<br>" + updates;
    
    document.getElementById('display').innerHTML = userInput;
}