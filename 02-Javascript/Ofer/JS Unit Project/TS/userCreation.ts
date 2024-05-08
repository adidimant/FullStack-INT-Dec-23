// import {getUserIDFromLocalStorage,
//         getUserDBFromLocalStorage,
//         pushUserIDToLocalStorage,
//         pushUserDBToLocalStorage,
//         checkIfUserInDB,
//         checkIfEmailInDB
// } from "./tsFunctions/DBrelatedFunctions";
// import {formExtension, userDetails} from "./interfaces/interfaces";

interface formExtension extends HTMLFormControlsCollection {
	userName: HTMLInputElement;
	email: HTMLInputElement;
	password: HTMLInputElement;
	phoneNumber: HTMLInputElement;
	firstName: HTMLInputElement;
	lastName: HTMLInputElement;
	countryList: HTMLInputElement;
	city?: HTMLInputElement;
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
	city?: string;
	zipCode?: string;
	readonly registeredDate: string;
	updatedDate: string;
}

console.log(`first`);

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
	console.log(`elements Details: ${elements}`);
	const userDetail: userDetails = {
		userName: elements.userName.value,
		email: elements.email.value,
		password: elements.password.value,
		phoneNumber: elements.phoneNumber.value,
		firstName: elements.firstName.value,
		lastName: elements.lastName.value,
		country: elements.countryList.value,
		city: elements.city?.value,
		zipCode: elements.zipCode?.value,
		registeredDate: String(Date.now()),
		updatedDate: String(Date.now()),
	};
	console.log(`user Details: ${userDetail.city} ${userDetail.zipCode}`);

	const usersIDArrayFromDB = getUserIDFromLocalStorage();
	const usersFromDB = getUserDBFromLocalStorage();

	if (checkIfUserInDB(usersIDArrayFromDB, userDetail.userName)) {
		alert(`Username "${userDetail.userName}" is already taken, please select a different username`);
	} else if (checkIfEmailInDB(usersFromDB, userDetail)) {
		alert(`Email "${userDetail.email}" is already taken, please select a different Email`);
	} else if (passwordValidation(userDetail.password, specialCharacters)) {
		alert(`Password is not strong enough, Please make sure it has at least 1 upperCase letter and a special character`);
	} else if (phoneValidation(userDetail.phoneNumber)) {
		alert(`phone number is not valid, please make sure it's the correct length and starts with '05'`);
	} else if (checkIfPhoneInDB(usersFromDB, userDetail)) {
		alert(`Phone Number "${userDetail.phoneNumber}" is already taken, please select a different Phone Number`);
	} else {
		pushUserIDToLocalStorage(usersIDArrayFromDB, userDetail.userName);
		pushUserDBToLocalStorage(usersFromDB, userDetail);
		alert(`user "${userDetail.userName}" Created succesfully!`);
		history.back();
	}
}

function passwordValidation(password: string, specialCharacters: string[]): boolean {
	console.log(password !== password.toLowerCase());
	return !(password !== password.toLowerCase() && specialCharacters.some((char) => password.includes(char)));
}

function phoneValidation(phoneNum: string): boolean {
	return !(phoneNum.length == 10 && !Number.isNaN(phoneNum) && phoneNum.charAt(0) == "0" && phoneNum.charAt(1) == "5");
}

function checkIfPhoneInDB(usersArrayFromDB: userDetails[], newUser: userDetails) {
	return usersArrayFromDB.some((user: userDetails) => user.phoneNumber === newUser.phoneNumber);
}

function checkIfUserInDB(usersIDArrayFromDB: string[], newUserID: string) {
	return usersIDArrayFromDB.some((user: string) => user == newUserID);
}

function checkIfEmailInDB(usersArrayFromDB: userDetails[], newUser: userDetails) {
	return usersArrayFromDB.some((user: userDetails) => user.email === newUser.email);
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

function pushUserIDToLocalStorage(usersArray: string[], newUserID: string) {
	usersArray.push(newUserID);
	const usersToString = JSON.stringify(usersArray);
	localStorage.setItem("userID", usersToString);
}

function pushUserDBToLocalStorage(usersArray: userDetails[], newUser: userDetails) {
	usersArray.push(newUser);
	const usersToString = JSON.stringify(usersArray);
	localStorage.setItem("userDB", usersToString);
}

const specialCharacters: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "`", "~", "{", "}", "'", '"', "/", ",", "+", "=", "_", "|", "[", "]"];
