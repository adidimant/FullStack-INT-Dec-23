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
       
// אנחנו משתמשים ב-window.onload כדי להבטיח שהקוד ירוץ רק כאשר כל המסמך נטען
        // אחרת, ייתכן שהאלמנטים שנשתמש בהם עדיין לא נוצרו
window.onload = function () {
    document.getElementById("Rentalcompany").onsubmit = function(event) {
        var Rentalcompany = document.getElementById("Rentalcompany").value;
        if (Rentalcompany === "") {
            event.preventDefault(); // מניעת שליחת הטופס אם אחד מהשדות ריק
            alert("אנא מלא את כל השדות");
        }
    }

//ממלא את הפרטים באופן אוטומטי בדף השכרת רכב ברגע שלוחצים על הלינק של הרכב //

    let url = new URL(document.URL);
    let params = new URLSearchParams(url.search);
    document.getElementById("Rentalcompany").value = params.get("Rentelcompany");

    document.getElementById("company").value = params.get("company");

    document.getElementById("car-model").value = params.get("car");
}


function sendForm(event) {
    event.preventDefault(); // מונע את השליחה הרגילה של הטופס
    var form = document.getElementById('form');
    var formData = new FormData(form);

    // יצירת מחרוזת של כל הפרטים שהוזנו בטופס
    var formDetails = '';
    for (var pair of formData.entries()) {
        formDetails += pair[0] + ': ' + pair[1] + '\n';
    }

    // פתיחת חלון חדש עם הפרטים שהוזנו בטופס
    window.open('', '_blank').document.write('<pre>' + formDetails + '</pre>');
    return false;
}

