document.addEventListener('DOMContentLoaded', function() {
    const cars = document.querySelectorAll('.carsItems img');
    cars.forEach(car => {
        car.addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('popupForm').style.display = 'block';
            document.getElementById('carBrand').value = this.parentNode.id;
        });
    });

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        confirmation();
    });
});

function closeForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
}

function confirmation() {
    const form = document.getElementById('orderForm');
    const buyerName = document.getElementById('buyerName').value;
    const confirm = document.getElementById('confirm');
    confirm.style.display = 'block';
    form.innerHTML = `Thank you ${buyerName} for buying with us`;
    form.style.fontFamily = '"Playfair Display", serif';
    form.style.fontWeight ='600'
}

