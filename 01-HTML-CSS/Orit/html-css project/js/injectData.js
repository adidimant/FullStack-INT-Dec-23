document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    var dataString = localStorage.getItem("carData");
    //console.log(dataString);
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

function hideDisplayModels() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById('companies').addEventListener('change', function () {
            var selectedCompany = this.value;
            var kiaModels = document.getElementById('kia-models');
            var hyundaiModels = document.getElementById('hyundai-models');
            var mazdaModels = document.getElementById('mazda-models');
            var mitsubishiModels = document.getElementById('mitsubishi-models');
            var bmwModels = document.getElementById('bmw-models');
            var cheryModels = document.getElementById('chery-models');
            var opelModels = document.getElementById('opel-models');
            var suzukiModels = document.getElementById('suzuki-models');

            switch (selectedCompany) {
                case 'Kia':
                    kiaModels.style.display = 'block';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Hyundai':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'block';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Mazda':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'block';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Mitsubishi':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'block';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'BMW':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'block';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Chery':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'block';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Opel':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'block';
                    suzukiModels.style.display = 'none';
                    break;
                case 'Suzuki':
                    kiaModels.style.display = 'none';
                    hyundaiModels.style.display = 'none';
                    mazdaModels.style.display = 'none';
                    mitsubishiModels.style.display = 'none';
                    bmwModels.style.display = 'none';
                    cheryModels.style.display = 'none';
                    opelModels.style.display = 'none';
                    suzukiModels.style.display = 'block';
                    break;
                default:
                    break;
            }
        });
    });
};

function alertInput() { 
    //I couldn't figure out why this does not work.
    //I tried calling it onsubmit and onclick but nothing worked...
    let userInput;
    let company = document.getElementById("companies").value;
    let model = document.getElementById("model").value;
    let pickup = document.getElementById("pickup").value;
    let carReturn = document.getElementById("return").value;
    let extraInsurance = document.getElementById("extraInsurance").value;

    userInput = category + "<br>" + company + "<br>" + model + "<br>" + pickup + "<br>" + carReturn + "<br>" + extraInsurance;
    console.log(userInput);
    //document.getElementById('display').innerHTML = userInput;
    //alert(userInput);  =>> This is what I wanted to send.
    alert("The form was submitted");
}