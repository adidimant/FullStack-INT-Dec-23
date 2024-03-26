const form = document.querySelector('#form')
const Fname = document.querySelector('#Fname');
const Lname = document.querySelector('#Lname');
const Address = document.querySelector('#Address');
const None = document.querySelector('#None');
const Vegeterian = document.querySelector('#Vegeterian');
const Vegan = document.querySelector('#Vegan');
const Kosher = document.querySelector('#Kosher');



form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const FnameVal = Fname.value.trim()
    const LnameVal = Lname.value.trim()
    const AddressVal = Lname.value.trim()
    const NoneVal = None.value.trim()
    const VegeterianVal = Vegeterian.value.trim()
    const VeganVal = Vegan.value.trim()
    const KosherVal = Kosher.value.trim()

    let success = true

    if(FnameVal===''){
        success=false;
        setError(Fname,'First name is required')
        
    }
    else{
        setSuccess(Fname)
    }
    if(LnameVal===''){
        success=false;
        setError(Lname,'Last name is required')
        
    }
    else{
        alert("dasd");

    }
    if(LnameVal===''){
        success=false;
        setError(Lname,'Last name is required')
        
    }
    else{
        setSuccess(Lname)

    }
    if(AddressVal===''){
        success=false;
        setError(Address,'Address is required')
        
    }
    else{
        setSuccess(Address)

    }
   
    return success;

}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };