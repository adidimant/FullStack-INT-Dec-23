window.onload = () => {
    showDivs(1)
    };
    // כפתורים בכותרת //
    function goToPageOne () {
    window.location.href = "http://127.0.0.1:5500/01-HTML-CSS/ziv/html-css-project-ziv/pagehome.html";
    }

    function goToPageTwo () {
    window.location.href = "http://127.0.0.1:5500/01-HTML-CSS/ziv/html-css-project-ziv/pagecarrentel.html";
    }

    function goToPageThree () {
    window.location.href = "http://127.0.0.1:5500/01-HTML-CSS/ziv/html-css-project-ziv/pagecatalog.html";
    }

    function goToPageFour () {
    window.location.href ="http://127.0.0.1:5500/01-HTML-CSS/ziv/html-css-project-ziv/pageaboutus.html";
    }

    // קרוסלת תמונות //

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusSlides(n) {
    showDivs(slideIndex += n);
    }

    function currentSlide(n) {
    showDivs(slideIndex = n);
    }

    function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("myslides fade"); // var slides = [el, el, el,....] 
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { // length is the count (in number) of items in the array
    slideIndex = 1 // reached end of slideshow, resetting to start
    }
    if (n < 1) { slideIndex = slides.length }
                    
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace (" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    } 


 

