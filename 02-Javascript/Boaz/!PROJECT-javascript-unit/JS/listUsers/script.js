let jsonString  = window.localStorage.getItem("userIds");
if(jsonString === null){
    window.localStorage.setItem('userIds','{"allusersids":[]}');
}
jsonString  = window.localStorage.getItem("users");
if(jsonString === null){
    window.localStorage.setItem("users","{}");
}

let tableData=''; // A variable points to where the list of users will be displayed.
let filterBy =''; // A variable that stores the last filter type performed.
let usersList; // This variable contains a copy from the list of users after reading from the DB.
let filterInputText; // A variable points to a text element in a filter screen
let editMode = false; // Boolean variable used by the list refresh function
document.addEventListener("DOMContentLoaded", () => {
    tableData = document.getElementById('tableRow');
    // Get data from local storage.
    getUsers().then((data) => {
        usersList = data;
        // show data in table.
        displayData(data);
        hidePassword();
    }).catch((error)=> alert(error));
    
    const filterInput = document.getElementById('filterInput');
    const filterIcons = document.querySelectorAll('.tableHeader div label'); // A list containing all the filters in the table
    filterInputText = document.getElementById('filterInputText');
    let isDisplayed=false; // Used for showing/hiding the filter window
    filterIcons.forEach((element) =>{
        element.style.cursor = "pointer" ;
        element.addEventListener('click',(event)=>{
            filterInputText.value = '';
            filterBy = element.parentElement.innerText;
            if(filterBy=== 'E-mail'){
                filterInput.style.width = '280px';
                filterInput.style.left = (event.clientX-270) + 'px';
                filterInput.style.top = (event.clientY+ 25)  + 'px';
            }else{
                filterInput.style.width = '150px';
                filterInput.style.left = (event.clientX-140) + 'px';
                filterInput.style.top = (event.clientY+ 25)  + 'px';
            }
            setLastFilter(filterBy); // The function adds the last value typed to the filter field according to the filter type.
            if(!isDisplayed){
                filterInput.style.display = "flex";
                isDisplayed = true;
                filterInputText.focus();
            }
            else{
                isDisplayed = false;
                filterInputText.blur();
                filterInput.style.display = "none";
                filterInput.style.display = "flex";
                filterInputText.focus();
                
            }
        });
    });

    
    filterInputText.addEventListener('input',()=>{
        try{
            clearTimeout(timeoutId);
        }
        catch(e){}
        timeoutId = setTimeout(() => {
            addToFilter(filterInputText.value);
        }, 500); 
    });

     document.getElementById('mainContainer').addEventListener("wheel",(e)=>{
        filterInputText.blur();
        filterInput.style.display = "none";
        // Setting scroll left and right instead of up and down.
        e.preventDefault();
        let scrollAmount = e.deltaY;
        document.getElementById('mainContainer').scrollLeft += scrollAmount;
    });

    setInterval(refresh, 30000);
});

// Hide filter box when the "Esc" key press pressed.
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        filterInput.style.display = "none";
    }
});

// get users from local storage
async function getUsers(){
    return new Promise((res,rej)=>{
        jsonString  = window.localStorage.getItem("users");
        if(jsonString ){
            const data = JSON.parse(jsonString);
            res(data);
        }else{
            rej('Failed to connect to the database.');
        }
    });
}

// filters
const filters = {
    FullName: '',
    Username:'',
    Email: '',
    Phone: '',
    Country: '',
    City: '',
    RegisteredDate: '',
    UpdatedDate: '',
};

// These variables are for saving the last filtered value
let tmp_FullName ='',tmp_Username = '',tmp_Email = '',tmp_Phone = '',tmp_Country = '',tmp_City = '',tmp_RegisteredDate = '',tmp_UpdatedDate = '';
// The function adds the last value typed to the filter field according to the filter type.
function setLastFilter(filteredBy){
    switch (filteredBy){
        case 'Full Name':
            filterInputText.value = tmp_FullName;
            break;
        case 'Username':
            filterInputText.value = tmp_Username ;
            break;
        case 'E-mail':
            filterInputText.value = tmp_Email ;
            break;
        case 'Phone':
            filterInputText.value = tmp_Phone ;
            break;
        case 'Country':
            filterInputText.value = tmp_Country ;
            break;
        case 'City':
            filterInputText.value = tmp_City ;
            break;
        case 'Registered Date':
            filterInputText.value = tmp_RegisteredDate ;
            break;
        case 'Updated Date':
            filterInputText.value = tmp_UpdatedDate;
            break;
        default:
            filterInputText.value = '';
    }
}

// The function updates the last filter value.
function addToFilter(value){
    if(filterBy === 'Full Name'){tmp_FullName = value}
    if(filterBy === 'Username'){tmp_Username = value;}
    if(filterBy === 'E-mail'){tmp_Email = value;}
    if(filterBy === 'Phone'){tmp_Phone = value;}
    if(filterBy === 'Country'){tmp_Country = value;}
    if(filterBy === 'City'){tmp_City = value;}
    if(filterBy === 'Registered Date'){tmp_RegisteredDate = value;}
    if(filterBy === 'Updated Date'){tmp_UpdatedDate = value;}
    filters[filterBy.replace(/[^a-zA-Z]/g, '')] = value;
    applyFilters(); // The function applies the filter.
}

// These arrays are used to save the result of the specific filter according to the filter type
let resUsername=[],resEmail=[],resPhone=[],resFullName=[],resCountry=[],resCity=[],resRegisteredDate= [], resUpdatedDate= [];
function applyFilters(){
    let myData = Object.values(usersList);
    // Has filtering been performed?
    if(areAllValuesEmpty(filters)){
        displayData(usersList);
        hidePassword();
    }else
    {
        // username filter
        if(tmp_Username.length != 0){
            resUsername = myData.filter((user)=>{
                return String(user.username).toLowerCase().includes(tmp_Username.toLowerCase());
            });
        }
        else{
            resUsername = [];
        }
        // user email
        if(tmp_Email.length != 0){
            resEmail = myData.filter((user)=>{
                return String(user.email).toLowerCase().includes(tmp_Email.toLowerCase());
            });
        }
        else{
            resEmail = [];
        }
        // phone filter
        if(tmp_Phone.length != 0){
            resPhone = myData.filter((user)=>{
                return String(user.phone).toLowerCase().includes(tmp_Phone.toLowerCase());
            });
        }
        else{
            resPhone = [];
        }
        // full name filter
        if(tmp_FullName.length != 0){
            const fullName = tmp_FullName.split(' ');
            let fName = fullName[0];
            let lName = '';
            if(fullName.length >0){
                fullName.forEach((value,index) =>{
                    if(index>0){
                        lName += ' '+value;
                    } 
                });
                lName = lName.substring(1);
            }
            //console.log(fName,lName);
            resFullName = myData.filter((user)=>{
                if(lName.length>0){
                    return String(user.firstName).toLowerCase().includes(fName.toLowerCase()) || 
                    String(user.lastName).toLowerCase().includes(fName.toLowerCase()) ||
                    String(user.firstName).toLowerCase().includes(lName.toLowerCase()) ||
                    String(user.lastName).toLowerCase().includes(lName.toLowerCase()) ;
                }
                else{
                    return String(user.firstName).toLowerCase().includes(fName.toLowerCase()) || 
                    String(user.lastName).toLowerCase().includes(fName.toLowerCase());
                }
                
            });
        }
        else{
            resFullName = [];
        }
        // country filter
        if(tmp_Country.length != 0){
            resCountry = myData.filter((user)=>{
                return String(user.country).toLowerCase().includes(tmp_Country.toLowerCase());
            });
        }
        else{
            resCountry = [];
        }
        // city filter
        if(tmp_City.length != 0){
            resCity = myData.filter((user)=>{
                return String(user.city).toLowerCase().includes(tmp_City.toLowerCase());
            });
        }
        else{
            resCity = [];
        }
        // registeredDate filter
        if(tmp_RegisteredDate.length != 0){
            resRegisteredDate = myData.filter((user)=>{
                return String(user.registeredDate).toLowerCase().includes(tmp_RegisteredDate.toLowerCase());
            });
        }
        else{
            resRegisteredDate = [];
        }
        // updatedDate filter
        if(tmp_UpdatedDate.length != 0){
            resUpdatedDate = myData.filter((user)=>{
                return String(user.updatedDate).toLowerCase().includes(tmp_UpdatedDate.toLowerCase());
            });
        }
        else{
            resUpdatedDate = [];
        }
        // The variable "result" combines all the results of the filter arrays into one array and leaves one instance of each value that appears more than once
        let result = [...new Set([...resUsername, ...resEmail, ...resPhone, ...resFullName, ...resCountry, ...resCity, ...resRegisteredDate, ...resUpdatedDate])];
        displayData(result);
        hidePassword();
    } 
}

// function for display users in table
function displayData(data){
    tableData.innerHTML = '';
    let htmlString='';
    for(dataRow in data){
        htmlString+= '<div class="tableRow">';
        htmlString+= '<div style="border: 1px solid gray; width: 45px; padding: 5px">';
        htmlString+= '<label class="fas fa-trash-alt" onclick="deleteUser(this)"></label> &nbsp;';
        htmlString+= '<label class="fas fa-edit" onclick="editUser(this,event)"></label>';
        htmlString+='</div>';
        let fullname = data[dataRow].firstName +' '+ data[dataRow].lastName;
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + fullname + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].userid + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].username + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize hidePassword" value="' + data[dataRow].password + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 300px;"><input type="text" class="fullSize" style="width: 97%" value="' + data[dataRow].email + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].phone + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].state + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].country + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 150px;"><input type="text" class="fullSize" value="' + data[dataRow].city + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 170px;"><input type="text" class="fullSize" value="' + data[dataRow].street + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 100px;"><input type="text" class="fullSize" value="' + data[dataRow].zipcode + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 170px;"><input type="text" class="fullSize" value="' + data[dataRow].registeredDate + '" readonly></div>';
        htmlString+= '<div style="border: 1px solid gray; width: 170px;"><input type="text" class="fullSize" value="' + data[dataRow].updatedDate + '" readonly></div>';
        htmlString+= '</div>';
        tableData.innerHTML = htmlString;
    }
}

// The function checks if filtering has been performed
function areAllValuesEmpty(obj) {
    for (const key in obj){
        if(obj[key] != ''){
            return false;
        }
    }
    return true;
}

let deletedUser; // A variable that will hold a pointer to an array that contains the deleted user's data
function deleteUser(user){
    deletedUser = saveDeletedUser(user); // save the user information to use for undo..
    let msg = confirm("Are you sure you want to delete the user: "+ deletedUser[0]+" "+deletedUser[1]+" ?");
    if(msg){
        let json = JSON.parse(localStorage.getItem('users'));
        delete json[deletedUser[2]];
        updetUserIds(deletedUser[2]).then(()=>{ // Deleting the userid from the DB.
            updateUsersList(json).then(()=>{ // Deleting the user from the DB.
                // Updating the user table after deleting the user.
                getUsers().then((data) => {
                    usersList = data;
                    // show data in table.
                    displayData(data);
                    hidePassword();
                }).catch((error)=> alert(error));
                // Show moving bar for 6 seconds with "undo" button.
                totalPercentage =0;
                let counter = 1;
                document.getElementById('undoContainer').style.display= 'flex';
                const interval = setInterval(() => {
                    if (counter > 6) {
                        clearInterval(interval); // Stop the interval after 6 iterations.
                        document.getElementById('undoContainer').style.display= 'none';
                        editButtonsStatus('auto');  
                        deleteButtonsStatus('auto');
                        deletedUser=[]; // Reset the array that contains the data for the deleted user.
                    }
                    else{
                        editButtonsStatus('none');
                        deleteButtonsStatus('none');
                        updateProgressBar();
                        counter++;
                    }
                }, 1000);
            }).catch((error)=> alert(error));
        }).catch((error)=>alert(error));
    }
}

// A function to update the progress in the moving bar
let totalPercentage =0;
function updateProgressBar(){
    let div = document.getElementById('progressBar');
    let sixteenPercentWidth = div.offsetWidth * 0.166;
    totalPercentage += sixteenPercentWidth;
    div.style.background = 'linear-gradient(to right, #65C728 ' + totalPercentage + 'px, #cccccc ' + sixteenPercentWidth + 'px)';
}

// Deleting the userid from the DB.
async function updetUserIds(userId){
    return new Promise((res,rej)=>{
        try {
            const tmpArray = [];
            jsonString  = window.localStorage.getItem("userIds");
            if(jsonString){
                const data = JSON.parse(jsonString);
                for(let i=0;i<data.allusersids.length;i++){
                    if(data.allusersids[i] != userId){
                        tmpArray.push(data.allusersids[i]);
                    }
                }
                const finalData = {
                    "allusersids":tmpArray,
                }
                window.localStorage.setItem("userIds",JSON.stringify(finalData));
                res();
            }else{rej();}
        } catch (error) {
            rej(error);
        }
    });
}

// Deleting the user from the DB.
async function updateUsersList(users){
    return new Promise((res,rej)=>{
        try{
            window.localStorage.setItem("users",JSON.stringify(users));
            res();
        }catch(error){
            rej();
        }
        
    });
}

// save the user information to use for undo..
function saveDeletedUser(user){
    let deletedUser = [];
    let RowData = user.parentElement.parentElement;
    let allRowData = RowData.querySelectorAll('input[type="text"]')
    let tmp_fullname = allRowData[0].value.split(' ');
    let fName = tmp_fullname[0];
    tmp_fullname.shift();
    deletedUser.push(fName);
    deletedUser.push(tmp_fullname.join(' '));

    for(let i=1; i<allRowData.length;i++){
        deletedUser.push(allRowData[i].value);
    }
    return deletedUser;
}

let currentValues = []; // An array to store current user data after clicking the edit button
// A function that is invoked when the edit button is clicked
async function editUser(user,event){
    let RowData = user.parentElement.parentElement;
    let allRowData = RowData.querySelectorAll('input[type="text"]')
    let tmp_fullname = allRowData[0].value.split(' ');
    let fName = tmp_fullname[0];
    tmp_fullname.shift();
    if(!event.target.classList.contains('fa-save')){
        // when in editing mode
        editMode = true;
        currentValues = [];
        currentValues.push(fName);
        currentValues.push(tmp_fullname.join(' '));
        for(let i=0; i<allRowData.length -2;i++){
            if(i != 1){
                allRowData[i].style.backgroundColor = '#FDFDE7';
                allRowData[i].readOnly = false;
            }
            if(i > 1){
                currentValues.push(allRowData[i].value);
            }
        }
        event.target.classList.value = 'fas fa-save';
        editButtonsStatus('none'); // Disable editing for other users
    }else{
        // When saving after editing
        editButtonsStatus('auto'); // Enable editing for all users after clicking the save button.
        editMode = false;
        for(let i=0; i<allRowData.length;i++){
            allRowData[i].style.backgroundColor = '';
            allRowData[i].readOnly = true;
        }
        // An object containing the user's data after editing
        const user = {
            firstName: fName,
            lastName: tmp_fullname.join(' '),
            userid:allRowData[1].value,
            username: allRowData[2].value,
            password: allRowData[3].value,
            email: allRowData[4].value,
            phone: allRowData[5].value,
            state: allRowData[6].value,
            country: allRowData[7].value,
            city: allRowData[8].value,
            street: allRowData[9].value,
            zipcode: allRowData[10].value,
            registeredDate: allRowData[11].value,
            updatedDate: String(getCurrentDateTime()),
        }
        // Has there been a change in the user's data?
        if(isChanged(currentValues,user)){ // isChanged(a,b) => function that compares the existing data with the data after editing.
            new Promise((res,rej)=>{
                try{
                    const jsonString  = window.localStorage.getItem("users");
                    if(jsonString){
                    const data = JSON.parse(jsonString );
                    data[allRowData[1].value] = user;
                    window.localStorage.setItem("users",JSON.stringify(data));
                    res(allRowData[1].value);
                }
                }catch(error){
                    rej(error);
                }
            }).then((value) => {
                alert('User details for user: '+value+' have been successfully updated')
                event.target.classList.value = 'fas fa-edit'; // After saving, changes the button to an edit button
                // Get data from local storage.
                getUsers().then((data) => {
                    usersList = data;
                    // show data in table.
                    displayData(data);
                    hidePassword();
                }).catch((error)=> alert(error));
            }).catch((error)=> alert(error));
        }else{
            event.target.classList.value = 'fas fa-edit';
        }
    }
}

// A function to Enables / disables respond to clicking the edit button
function editButtonsStatus(status){
    const elements = document.querySelectorAll('.fa-edit');
    elements.forEach((element) =>{
        element.style.pointerEvents = status;
    });
}

// A function to Enables / disables respond to clicking the delete button
function deleteButtonsStatus(status){
    const elements = document.querySelectorAll('.fa-trash-alt');
    elements.forEach((element) =>{
        element.style.pointerEvents = status;
    });
}

// A function that returns the current date and time
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

// Function that compares the existing data with the data after editing
function isChanged(currentValues,newValues){
    let changed = false;
    if(currentValues[0] != newValues.firstName){changed = true;}
    if(currentValues[1] != newValues.lastName){changed = true;}
    if(currentValues[2] != newValues.username){changed = true;}
    if(currentValues[3] != newValues.password){changed = true;}
    if(currentValues[4] != newValues.email){changed = true;}
    if(currentValues[5] != newValues.phone){changed = true;}
    if(currentValues[6] != newValues.state){changed = true;}
    if(currentValues[7] != newValues.country){changed = true;}
    if(currentValues[8] != newValues.city){changed = true;}
    if(currentValues[9] != newValues.street){changed = true;}
    if(currentValues[10] != newValues.zipcode){changed = true;}
    return changed;
}

// A function to refresh the user table
function refresh(){
    if(!editMode){
        // Get data from local storage.
        getUsers().then((data) => {
            usersList = data;
            // show data in table.
            displayData(data);
            hidePassword();
        }).catch((error)=> alert(error));
    }
}

// A function to restore a deleted user
async function undo(){
    const user = {
        firstName: deletedUser[0],
        lastName: deletedUser[1].trim(),
        userid:deletedUser[2],
        username: deletedUser[3],
        password: deletedUser[4],
        email: deletedUser[5],
        phone: deletedUser[6],
        state: deletedUser[7],
        country: deletedUser[8],
        city: deletedUser[9],
        street: deletedUser[10],
        zipcode: deletedUser[11],
        registeredDate: deletedUser[12],
        updatedDate: deletedUser[13],
    }
    const saveToUsers = new Promise((res,rej)=>{
        try{
            jsonString  = window.localStorage.getItem("users");
            if(jsonString){
                const data = JSON.parse(jsonString );
                data[deletedUser[2]] = user;
                window.localStorage.setItem("users",JSON.stringify(data));
                res();
            }
        }catch(error){
            rej(error);
        }
    });
    const saveToUserIds = new Promise((res,rej)=>{
        const tmpArray = [];
        jsonString  = window.localStorage.getItem("userIds");
        if(jsonString){
            const data = JSON.parse(jsonString);
            for(let i=0;i<data.allusersids.length;i++){
                tmpArray.push(data.allusersids[i]);
            }
            tmpArray.push(deletedUser[2]);
            const finalData = {
                "allusersids":tmpArray,
            }
            window.localStorage.setItem("userIds",JSON.stringify(finalData));
            res();
        }else{rej();}
    });
    Promise.all([saveToUsers,saveToUserIds]).then(()=>{
        refresh();
        document.getElementById('undoContainer').style.display = 'none';
        alert('The delete operation has been cancelled, \nthe user has been restored ');
    }).catch(()=>{
        console.error('The user cannot be restored');
    });
}

function hidePassword(){
    let passwordInputs = document.querySelectorAll('.hidePassword');
    for(let i=0; i<passwordInputs.length;i++){
        let inputVal  = passwordInputs[i].value;
        let asterisks  = '*'.repeat(inputVal.length);
        passwordInputs[i].value = asterisks;
    }
}
const exampleUser = {
    userid: "jsmith1",
    username: "johnsmith",
    password: "password123",  // Note: Storing plain text passwords is not recommended for production
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "123-456-7890",
    state: "New York",
    country: "USA",
    city: "New York",
    street: "123 Elm Street",
    zipcode: "10001",
    registeredDate: "01/01/2022",
    updatedDate: "01/01/2022"
};


function initializeExampleUser() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
        users = {};  // Initialize if there are no users
    }

    // Check if the example user already exists to avoid overwriting
    if (!users['jsmith1']) {
        users['jsmith1'] = exampleUser;
        localStorage.setItem("users", JSON.stringify(users));

        // Also update the userIds to manage user tracking
        let userIds = JSON.parse(localStorage.getItem("userIds"));
        if (!userIds) {
            userIds = { allusersids: [] };
        }
        if (!userIds.allusersids.includes("jsmith1")) {
            userIds.allusersids.push("jsmith1");
            localStorage.setItem("userIds", JSON.stringify(userIds));
        }
    }
}

document.addEventListener("DOMContentLoaded", initializeExampleUser);
