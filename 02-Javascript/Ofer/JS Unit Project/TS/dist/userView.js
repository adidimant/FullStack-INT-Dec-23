var _a;
console.log("123");
function submitForm(event) {
    event.preventDefault();
    var elements = event.target.elements;
    console.log(elements);
}
(_a = document.getElementById('myForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
});
