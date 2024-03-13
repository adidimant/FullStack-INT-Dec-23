// Animation //

AOS.init();

//  Menu BTN  //

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.fa-bars');
    const navList = document.querySelector('.navlist');
  
    if(menuBtn && navList) {
      menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('fa-xmark');
        navList.classList.toggle('active');
      });
    } else {
      console.error('Menu button or navigation list not found.');
    }
  });



// Booking //


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('book-btn').addEventListener('click', onBook);
});

function onBook(event) {
    event.preventDefault();


    var form = document.querySelector('.booking-form');
    var car = form.querySelector('select[name="Car"]').value;
    var model = form.querySelector('select[name="Car Model"]').value;
    var pickUpDate = form.querySelector('input[name="Pick Up"]').value;
    var dropOffDate = form.querySelector('input[name="Drop off"]').value;

    if (car === "Select" || model === "") {
        alert("Please select both a car and a model year.");
        return;
    }
    if (pickUpDate === "" || dropOffDate === "") {
        alert("Please select both a pickUpDate and a dropOffDate.");
        return;
    }

    window.location.href = 'file:///C:/Users/User/Desktop/kors-1/FullStack-INT-Dec-23/01-HTML-CSS/awni/project%2025/cars-list.html';
}

// Slideshow images //

let myImage = document.getElementById("slideshow");
let images = ['img/audia1.webp', 'img/i10.webp', 'img/i20.webp', 'img/picanto.png', 'img/swift.png', 'img/toyota.png'];
let i = 0;


function slideshow() {
    myImage.setAttribute('src', images[i]);

    if (i == 5) {
        i = 0;
    }
    else {
        i++;
    }

    setTimeout(function () {
        slideshow();
    }, 2000)
}
slideshow();


//   BOOK NOW //


document.addEventListener('DOMContentLoaded', function() {
    var carsBtn = document.getElementsByClassName('booknow');

    function redirectToRental() {
        window.location.href = 'car-rental.html';
    }  

    
});











