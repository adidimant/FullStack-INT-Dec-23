function passToForm(event) {
    var parentDiv = event.target.closest('.car');
        
    // Retrieve name and number from the parent div
    var company = parentDiv.querySelector('.car-company').textContent;
    var model = parentDiv.querySelector('.car-model').textContent;

    var data = { company: company, model: model };
    //console.log(data);
    localStorage.setItem("carData", JSON.stringify(data));
    window.location.href = "rent.html";
}
