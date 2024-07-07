import {userDetails} from "../interfaces/interfaces"

export function checkIfUserInDB(usersIDArrayFromDB:string[], newUserID:string){
    return usersIDArrayFromDB.some((user: string) => user == newUserID)
}

export function checkIfEmailInDB(usersArrayFromDB:userDetails[], newUser:userDetails){
    return usersArrayFromDB.some((user:userDetails) => user.email === newUser.email)
}

export function getUserIDFromLocalStorage() {
    const usersBefore = localStorage.getItem("userID") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}


export function getUserDBFromLocalStorage() {
    const usersBefore = localStorage.getItem("userDB") ?? "";
    const users = JSON.parse(usersBefore);
    return users;
}


export function pushUserIDToLocalStorage(usersArray: string[],newUserID:string) {
    usersArray.push(newUserID);
    const usersToString = JSON.stringify(usersArray);
    localStorage.setItem("userID", usersToString);
}

export function pushUserDBToLocalStorage(usersArray:userDetails[],newUser:userDetails) {
    usersArray.push(newUser)
    const usersToString = JSON.stringify(usersArray)
    localStorage.setItem("userDB" ,usersToString)
}
