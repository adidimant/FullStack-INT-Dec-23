document.addEventListener("DOMContentLoaded", function() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    if(params.get('company') != null){
        document.getElementById('car-company').value = params.get('company');
        carCompanyChange(params.get('company'));
        document.getElementById('car-model').value = params.get('model').replace(/\s/g, '');
        document.getElementById('carImg').src = params.get('img');
    }
});

function carCompanyChange(selected){
    let carModel = document.getElementById('car-model');
    let option;
    let val='';
    if(typeof selected.value === 'undefined')
        val = selected
    else
        val = selected.value;
    switch(val){
        case 'Toyota':
            carModel.innerHTML = '';
            
            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);

            option = document.createElement('option');
            option.text = "Corolla";
            option.value = "Corolla";
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Yaris';
            option.value = 'Yaris';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Camry';
            option.value = 'Camry';
            carModel.add(option);
            break;
        case "Kia":
            carModel.innerHTML = '';

            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);

            option = document.createElement('option')
            option.text = "Sportage";
            option.value = "Sportage";
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Nero';
            option.value = 'Nero';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Picanto';
            option.value = 'Picanto';
            carModel.add(option);
            break;
        case "Honda":
            carModel.innerHTML = '';

            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);

            option = document.createElement('option')
            option.text = "Pilot";
            option.value = "Pilot";
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Civic';
            option.value = 'Civic';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Accord';
            option.value = 'Accord';
            carModel.add(option);
            break;
        case "Audi":
            carModel.innerHTML = '';

            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);

            option = document.createElement('option')
            option.text = "A3";
            option.value = "A3";
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Q8';
            option.value = 'Q8';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'S5';
            option.value = 'S5';
            carModel.add(option);
            break;
        case "Mercedes":
            carModel.innerHTML = '';

            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);
            
            option = document.createElement('option')
            option.text = 'G63';
            option.value = 'G63';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'Benz GLE53';
            option.value = 'BenzGLE53';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'S Class';
            option.value = 'SClass';
            carModel.add(option);
            break;    
        
        case "BMW":
            carModel.innerHTML = '';

            option = document.createElement('option');
            option.value = '';
            option.selected = true;
            option.disabled = true;
            option.hidden = true;
            option.text = 'Choose Car Model';
            carModel.add(option);

            option = document.createElement('option')
            option.text = '3 Series 320i';
            option.value = '3Series320i';
            carModel.add(option);
            option = document.createElement('option');
            option.text = '5 Series (520i)';
            option.value = '5Series(520i)';
            carModel.add(option);
            option = document.createElement('option');
            option.text = 'X7';
            option.value = 'X7';
            carModel.add(option);
            break;
        default:
            alert('Error, Please choose a different car company');
    }
}
function carModelChange(selected){
    document.getElementById('carImg').src = "../images/"+document.getElementById('car-company').value+selected.value+".jpg";
}