function sumbit(){
    let fullName = document.getElementById('name').value;
    document.getElementById('message').innerHTML="Thank you, " + fullName + "! Your information has been taken in.";
    document.getElementById('message').style.display = 'block';
}
