document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    function showSlide(index) {
        container.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // אוטומטי: החלפת תמונה כל 3 שניות
});


///////////// 
//טווח תאריכים של שבועיים 

// קביעת ערכים באמצעות JavaScript
var today = new Date();
var nextTwoWeeks = new Date();
nextTwoWeeks.setDate(today.getDate() + 14); // הוספת 14 ימים לתאריך היום

// פורמט תאריך לפורמט הנדרש לתגית input מסוג date (YYYY-MM-DD)
function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); // ינואר הוא חודש 0
    var yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}

document.getElementById('start_date').value = formatDate(today);
document.getElementById('end_date').value = formatDate(nextTwoWeeks);


