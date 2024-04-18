console.log("123");

interface formExtension extends HTMLFormControlsCollection {
    userName: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    phoneNumber: HTMLInputElement;
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    countryList: HTMLInputElement;
    state?: HTMLInputElement;
    zipCode?: HTMLInputElement;
}

interface userDetails {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    state?: string;
    zipCode?: string;
    readonly registeredDate: string;
    updatedDate: string;
}
//initialize localStorage in case they are not existing
if (!localStorage.getItem("userID")) {
    const userID: string[] = [];
    localStorage.setItem("userID", JSON.stringify(userID));
}
if (!localStorage.getItem("userDB")) {
    const users: string[] = [];
    localStorage.setItem("userDB", JSON.stringify(users));
}

function submitForm(event: SubmitEvent) {
    event.preventDefault();
    const elements = (event.target as HTMLFormElement).elements as formExtension;

    const userDetails: userDetails = {
        userName: elements.userName.value,
        email: elements.email.value,
        password: elements.password.value,
        phoneNumber: elements.phoneNumber.value,
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        country: elements.countryList.value,
        registeredDate: String(Date.now()),
        updatedDate: String(Date.now()),
    };

    const usersIDArrayFromDB = getUserIDFromLocalStorage();
    const usersFromDB = getUserDBFromLocalStorage();

    if (checkIfUserInDB(usersIDArrayFromDB, userDetails.userName)) {
        alert(
            `Username "${userDetails.userName}" is already taken, please select a different username`
        );
    }else if(checkIfEmailInDB(usersFromDB,userDetails) ){
        alert(
            `Email "${userDetails.email}" is already taken, please select a different Email`
        );
    }
     else {
         pushUserIDToLocalStorage(usersIDArrayFromDB,userDetails.userName )
         pushUserDBToLocalStorage(usersFromDB, userDetails)
         alert(`user "${userDetails.userName}" Created succesfully!`)
         history.back()
    }

}

function checkIfUserInDB(usersIDArrayFromDB:string[], newUserID:string){
    return usersIDArrayFromDB.some((user: string) => user == newUserID)
}
function checkIfEmailInDB(usersArrayFromDB:userDetails[], newUser:userDetails){
    return usersArrayFromDB.some((user:userDetails) => user.email === newUser.email)
}

function getUserIDFromLocalStorage() {
    const usersBefore = localStorage.getItem("userID") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}

function getUserDBFromLocalStorage() {
    const usersBefore = localStorage.getItem("userDB") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}

function pushUserIDToLocalStorage(usersArray: string[],newUserID:string) {
    usersArray.push(newUserID);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}

function pushUserDBToLocalStorage(usersArray:userDetails[],newUser:userDetails) {
    usersArray.push(newUser)
    const usersToString = JSON.stringify(usersArray)
    localStorage.setItem("userDB" ,usersToString)
}
