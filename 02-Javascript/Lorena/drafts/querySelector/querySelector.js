// איתור האיבר בעמוד באמצעות מזהה ושמירה שלו במשתנה
const myElement = document.querySelector('#myElement');

// שימור התוכן של האיבר במשתנה localStorage בעת טעינת הדף
localStorage.setItem('savedElement', myElement.innerHTML);

// הדפסה של האיבר ששומרנו במשתנה localStorage
console.log(localStorage.getItem('savedElement'));
