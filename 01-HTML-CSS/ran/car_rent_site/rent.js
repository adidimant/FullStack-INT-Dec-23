document.addEventListener('DOMContentLoaded', function () {
    const companySelect = document.getElementById('company');
    const modelSelect = document.getElementById('model');
    const emailInput = document.getElementById('email');
    const form = document.querySelector('form');

    const carModels = {
        'company1': ['bz4x'],
        'company2': ['huracan'],
        'company3': ['brz']
    };

    // עדכון דינמי של רשימת הדגמים
    companySelect.addEventListener('change', function () {
        const models = carModels[this.value];
        modelSelect.innerHTML = '<option value="">בחר דגם...</option>'; // ניקוי רשימת הדגמים

        if (models) {
            models.forEach(function (model) {
                const option = new Option(model, model);
                modelSelect.add(option);
            });
        }
    });

    // אימות כתובת אימייל
    form.addEventListener('submit', function (event) {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            alert('נא להזין כתובת אימייל תקינה.');
            event.preventDefault(); // מניעת השליחה של הטופס
        }
    });
});
