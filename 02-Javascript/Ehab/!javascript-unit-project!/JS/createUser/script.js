let jsonString  = window.localStorage.getItem("userIds");
if(jsonString === null){
    window.localStorage.setItem('userIds','{"allusersids":[]}');
}
jsonString  = window.localStorage.getItem("users");
if(jsonString === null){
    window.localStorage.setItem("users","{}");
}

let firstName,lastName,userid,username,password,email,phone,state,country,city,street,zipcode;
document.addEventListener("DOMContentLoaded", () => {
    firstName = document.getElementById('firstName');
    firstName.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    firstName.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    firstName.focus();

    lastName = document.getElementById('lastName');
    lastName.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    lastName.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});

    userid = document.getElementById('userId');
    userid.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    userid.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    username = document.getElementById('username');
    username.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    username.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    password = document.getElementById('password');
    password.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    password.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    email = document.getElementById('email');
    email.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    email.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    phone = document.getElementById('phone');
    phone.maxLength=15;
    phone.minLength=15;
    phone.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    phone.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    phone.addEventListener('input',(element)=>{
        let result ='';
        for (var i = 0; i < element.target.value.length; i++) {
            let char = element.target.value.charAt(i);
            if (!isNaN(char) && char !== " " || char ==="+") {
                if(char === "+" && i === 0){
                    result += char;
                }else if(char != "+"){
                    result += char;
                }
            }
        }
        element.target.value = result;
    });
    
    state = document.getElementById('state');
    state.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    state.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    country = document.getElementById('country');
    country.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    country.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    city = document.getElementById('city');
    city.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    city.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    
    street = document.getElementById('street');
    street.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    street.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});

    zipcode = document.getElementById('zipcode');
    zipcode.addEventListener('focus',(element)=>{setBorderColor(element,"red");});
    zipcode.addEventListener('blur',(element)=>{setBorderColor(element,"gray");});
    zipcode.addEventListener('input',(element)=>{
        let result = "";
        for (var i = 0; i < element.target.value.length; i++) {
            let char = element.target.value.charAt(i);
            if (!isNaN(char) && char !== " "){
                result += char;
            }
        }
        element.target.value = result;
    });
    document.getElementById('button').addEventListener('mouseover',(element) =>{setBorderColor(element,"red");});
    document.getElementById('button').addEventListener('mouseout',(element) =>{setBorderColor(element,"gray");});

});
/* 
The function receives two parameters - an element and a color, the function changes the border color of the element 
received in the first parameter to the color received in the second parameter
*/
function setBorderColor(element,color){
    const parentDiv = element.target.parentNode;
    parentDiv.style.borderColor = color;
}

async function createUser(){
    if(checkEmptyValues() == 'ok' && isValidEmail(email.value)){
        new Promise(async (res,rej)=>{
            jsonString  = window.localStorage.getItem("userIds");
            if(jsonString){
                const data = JSON.parse(jsonString);
                let usernameInUse = data.allusersids.includes(userid.value);
                let emailInUse = await isUsedEmail(email.value);
                if(!usernameInUse && !emailInUse){
                    data.allusersids.push(userid.value);
                    window.localStorage.setItem("userIds",JSON.stringify(data));
                    saveUser().then(() => res('User successfully created')).catch(()=> {
                        rej("Unable to create user")
                    });
                }
                else{
                    let msg = '';
                    if(emailInUse){
                        msg ='Email has been used before, please enter another email.';
                    }
                    if(usernameInUse){
                        msg ='Username already exists,Please enter another username.';
                    }
                    if(emailInUse && usernameInUse){
                        msg = 'Username and email has been used before, please enter another username and email.';
                    }
                    rej(msg);
                }
            }
            else{
                rej('Failed to connect to the database.');
            }
        }).then((msg) => {
            alert(msg)
            clearAll();
        }).catch((error) => alert(error));
    }else{
        if(checkEmptyValues() != 'ok'){alert(checkEmptyValues());}
        else{alert('Invalid email, please correct and save again');}
    }
}

// The function returns a suitable string if one of the values is empty, and returns OK if all the values are correct
function checkEmptyValues(){
    if(firstName.value == ''){return 'The first name field must be filled in';}
    if(lastName.value == ''){return 'The last name field must be filled in';}
    if(username.value == ''){return 'The username field must be filled in';}
    if(userid.value == ''){return 'The userid field must be filled in';}
    if(password.value == ''){return 'The password field must be filled in';}
    if(email.value == ''){return 'The email field must be filled in';}
    if(phone.value == ''){return 'The phone field must be filled in';}
    if(state.value == ''){return 'The state field must be filled in';}
    if(country.value == ''){return 'The country field must be filled in';}
    if(city.value == ''){return 'The city field must be filled in';}
    if(street.value == ''){return 'The street field must be filled in';}
    if(zipcode.value == ''){return 'The zipcode field must be filled in';}
    return 'ok';
}

async function saveUser(){
    return new Promise((res,rej)=>{
        const dateTime = String(getCurrentDateTime());
        const user = {
            firstName: firstName.value,
            lastName: lastName.value,
            userid: userid.value,
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value,
            state: state.value,
            country: country.value,
            city: city.value,
            street: street.value,
            zipcode: zipcode.value,
            registeredDate: dateTime,
            updatedDate: dateTime,
        }
        jsonString  = window.localStorage.getItem("users");
        if(jsonString){
            const data = JSON.parse(jsonString );
            data[userid.value] = user;
            window.localStorage.setItem("users",JSON.stringify(data));
            res();
        }
        rej();
    });
}

function isValidEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return (true)
    }
    return (false)
}

async function isUsedEmail(email){
    jsonString  = window.localStorage.getItem("users");
    if(jsonString ){
        const users = JSON.parse(jsonString);
        for (let user in users){
            if(String(users[user].email).trim() === String(email).trim()){
                return true;
            }   
        }
    }
    return false;
}
function getCurrentDateTime() {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}


function clearAll(){
    firstName.value = "";
    lastName.value = "";
    userId.value = "";
    username.value = "";
    password.value = "";
    email.value = "";
    phone.value = "";
    state.value = "";
    country.value = "";
    city.value = "";
    street.value = "";
    zipcode.value = "";
}
const printAll = ()=>{
    console.log('firstName:',firstName.value);
    console.log('lastName:',lastName.value);
    console.log('username:',username.value);
    console.log('password:',password.value);
    console.log('email:',email.value);
    console.log('phone:',phone.value);
    console.log('state:',state.value);
    console.log('country:',country.value);
    console.log('city:',city.value);
    console.log('street:',street.value);
    console.log('zipcode:',zipcode.value);
};