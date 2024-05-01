document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(userForm);
        const userData = {};


        formData.forEach((value, key) => {
            userData[key] = value;
        });

        let existingData = localStorage.getItem('userData');
        existingData = existingData ? JSON.parse(existingData) : [];


        const existingUser = existingData.find(user => user.email === userData.email);

        if (existingUser) {
            alert('User already exists!');
            return;
        }


        const registerDate = new Date().toLocaleString(); 
        userData['Register Date'] = registerDate;
        
        existingData.push(userData);
        localStorage.setItem('userData', JSON.stringify(existingData));
        userForm.reset();
    });

    const managePageButton = document.querySelector('.containerFooter button');
    managePageButton.addEventListener('click', function() {
        userForm.reset();
    });
});