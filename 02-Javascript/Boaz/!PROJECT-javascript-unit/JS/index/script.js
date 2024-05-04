document.addEventListener("DOMContentLoaded", () => {
    iframe = document.getElementById('contentFrame'); // pointer to iframe element
    iframe.src = './HTML/createUser.html'; // set the iframe src
    document.getElementById('CreateUserTab').addEventListener("click",(() =>{
        document.getElementById('CreateUserTab').classList=[];
        document.getElementById('CreateUserTab').classList.add('link','active');
        document.getElementById('listUsersTab').classList = [];
        document.getElementById('listUsersTab').classList.add('link','inactive');
        iframe.src = './HTML/createUser.html'; // set the iframe src
    }));
    document.getElementById('listUsersTab').addEventListener("click",(() =>{
        document.getElementById('listUsersTab').classList=[];
        document.getElementById('listUsersTab').classList.add('link','active');
        document.getElementById('CreateUserTab').classList=[];
        document.getElementById('CreateUserTab').classList.add('link','inactive');
        iframe.src = './HTML/listUsers.html'; // set the iframe src
    }));
});
