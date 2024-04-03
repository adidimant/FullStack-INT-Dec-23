
document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL
    var currentUrl = window.location.pathname;

    // Get all navigation links
    var navLinks = document.querySelectorAll('nav ul li a');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current URL
        if (currentUrl.includes(link.parentNode.getAttribute('data-nav'))) {
        //if (link.getAttribute('href').includes(link.parentNode.getAttribute('data-nav'))) {
            // Add the 'active' class to the parent <li> element
            link.parentNode.classList.add('active');
        }
    });
});

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


