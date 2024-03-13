document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from localStorage
    var dataString = localStorage.getItem("carData");
    if (dataString) {
        var selectedOptionValue = JSON.parse(dataString);

        // Set the selected option in the <select> element
        var selectElement = document.getElementById("companies");
        var options = selectElement.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === selectedOptionValue.company) {
                options[i].selected = true;
                break;
            }
        }

        var selectElement = document.getElementById("model");
        var options = selectElement.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === selectedOptionValue.model) {
                options[i].selected = true;
                break;
            }
        }
    }
});