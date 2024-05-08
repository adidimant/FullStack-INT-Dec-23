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

enum userEnum {
	userName,
	email,
	password,
	phoneNumber,
	firstName,
	lastName,
	country,
	city,
	zipCode,
}
const usersIDArrayFromDB = getUserIDFromLocalStorage();
const usersFromDB = getUserDBFromLocalStorage();
let currentlyShowedUsers: userDetails[] = [...usersFromDB];
const container = document.querySelector(".container");
const registeredFilterStart = document.querySelector("#registeredFilterStart") as HTMLInputElement;
const registeredFilterEnd = document.querySelector("#registeredFilterEnd") as HTMLInputElement;
const updatedFilterStart = document.querySelector("#updatedFilterStart") as HTMLInputElement;
const updatedFilterEnd = document.querySelector("#updatedFilterEnd") as HTMLInputElement;
const allFilters = document.querySelectorAll(".filterBar") as NodeListOf<HTMLInputElement>;
let inEditMode = false;

loadTableFromUsersArray(usersFromDB);

registeredFilterStart.addEventListener("change", dateFilterChangeStart);
registeredFilterEnd.addEventListener("change", dateFilterChangeEnd);
updatedFilterStart.addEventListener("change", dateFilterChangeStart);
updatedFilterEnd.addEventListener("change", dateFilterChangeEnd);

allFilters.forEach((input) => {
	input.addEventListener("input", inputsFilter);
});

function dateFilterChangeStart(e: Event) {
	const input: Date = (e.target as HTMLFormElement).value ?? "";
	const timeStampDate = new Date(input).getTime();
	const newUsers = currentlyShowedUsers.filter((user: userDetails) => Number(user.registeredDate) >= timeStampDate);
	deleteUsersFromTable();
	loadTableFromUsersArray(newUsers);
}
function dateFilterChangeEnd(e: Event) {
	const input: Date = (e.target as HTMLFormElement).value ?? "";
	const timeStampDate = new Date(input).getTime();
	const usersFromDBCopy = [...usersFromDB];
	const newUsers = usersFromDBCopy.filter((user: userDetails) => Number(user.registeredDate) <= timeStampDate);
	deleteUsersFromTable();
	loadTableFromUsersArray(newUsers);
}

function deleteUsersFromTable(): void {
	const table = document.querySelector(".Table") as HTMLTableElement;
	const usersRows = table.querySelectorAll("tr[id]");
	usersRows.forEach((row) => {
		table.removeChild(row);
	});
}

function timeStampToDate(timestampStr: string): string {
	const timestamp = Number(timestampStr);
	const date = new Date(timestamp);
	const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	return formattedDate;
}
function getUserIDFromLocalStorage(): string[] {
	const usersBefore = localStorage.getItem("userID") ?? "";
	const users = JSON.parse(usersBefore);
	return users;
}

function getUserDBFromLocalStorage(): userDetails[] {
	const usersBefore = localStorage.getItem("userDB") ?? "";
	const users: userDetails[] = JSON.parse(usersBefore);
	return users;
}

function inputsFilter(e: Event) {
	setTimeout(() => {
		const input = (e.target as HTMLFormElement).value ?? "";
		let newUsers: userDetails[] = [];
		currentlyShowedUsers = [...usersFromDB];
		switch ((e.target as HTMLInputElement).id) {
			case "userNameFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.userName.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
				break;
			case "emailFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.email.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
				break;
			case "phoneNumberFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.phoneNumber.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
				break;
			case "firstNameFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.firstName.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

				break;
			case "lastNameFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.lastName.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
				break;
			case "countryFilter":
				newUsers = currentlyShowedUsers.filter((user: userDetails) => user.country.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
				break;
			default:
				console.log(`Something went wrong!`);
				break;
		}
		deleteUsersFromTable();
		loadTableFromUsersArray(newUsers);
	}, 500);
}

function loadTableFromUsersArray(users: userDetails[]) {
	users.forEach((user: userDetails, index) => {
		const table = document.querySelector(".Table") as HTMLTableElement;

		const newRow = document.createElement("tr");

		const userNametd = document.createElement("td");
		const emailtd = document.createElement("td");
		const passwordtd = document.createElement("td");
		const phoneNumbertd = document.createElement("td");
		const firstNametd = document.createElement("td");
		const lastNametd = document.createElement("td");
		const countrytd = document.createElement("td");
		const citytd = document.createElement("td");
		const zipCodetd = document.createElement("td");
		const registeredDatetd = document.createElement("td");
		const updatedDatetd = document.createElement("td");
		const editbtntd = document.createElement("td");
		const deletetd = document.createElement("td");

		const buttonWrapper = document.createElement("button");
		buttonWrapper.setAttribute("id", `editImg${user.userName}`);
		buttonWrapper.classList.add("invisable");
		const editImg = document.createElement("img");
		editImg.classList.add("img");
		// editImg.setAttribute();
		editImg.setAttribute("src", "../images/edit1.svg");
		buttonWrapper.appendChild(editImg);

		buttonWrapper.addEventListener("click", (e) => editUser(e, users, user));
		editbtntd.appendChild(buttonWrapper);

		const deleteButtonWrapper = document.createElement("button");
		deleteButtonWrapper.classList.add("invisable");
		const deleteImg = document.createElement("img");
		deleteImg.classList.add("deleteImg");
		deleteImg.setAttribute("id", `deleteImg${user.userName}`);
		deleteImg.setAttribute("src", "../images/delete.svg");

		deleteImg.addEventListener("click", (e) => removeTdEvent(e, user));

		deletetd.appendChild(deleteImg);

		userNametd.textContent = user.userName;
		emailtd.textContent = user.email;
		passwordtd.textContent = user.password;
		phoneNumbertd.textContent = user.phoneNumber;
		firstNametd.textContent = user.firstName;
		lastNametd.textContent = user.lastName;
		countrytd.textContent = user.country;
		citytd.textContent = user.city ?? "";
		zipCodetd.textContent = user.zipCode ?? "";
		registeredDatetd.textContent = timeStampToDate(user.registeredDate);
		updatedDatetd.textContent = timeStampToDate(user.updatedDate);
		// editbtn.textContent = "Edit";
		timeStampToDate(user.registeredDate);

		newRow.setAttribute("id", user.userName);
		newRow.appendChild(userNametd);
		newRow.appendChild(emailtd);
		newRow.appendChild(passwordtd);
		newRow.appendChild(phoneNumbertd);
		newRow.appendChild(firstNametd);
		newRow.appendChild(lastNametd);
		newRow.appendChild(countrytd);
		newRow.appendChild(citytd);
		newRow.appendChild(zipCodetd);
		newRow.appendChild(registeredDatetd);
		newRow.appendChild(updatedDatetd);
		newRow.appendChild(editbtntd);
		newRow.appendChild(deletetd);
		table.appendChild(newRow);
	});
}
function editUser(e: Event, users: userDetails[], user: userDetails) {
	const closestTr = (e.target as HTMLFormElement)?.closest("tr");
	if (closestTr) {
		const tds = closestTr.querySelectorAll("td");
		const tdsDetails = [
			tds[userEnum.userName],
			tds[userEnum.email],
			tds[userEnum.password],
			tds[userEnum.phoneNumber],
			tds[userEnum.firstName],
			tds[userEnum.lastName],
			tds[userEnum.country],
			tds[userEnum.city],
			tds[userEnum.zipCode],
		];
		const saveImg = closestTr.querySelector("img") as HTMLImageElement;
		toggleSaveEdit(saveImg);

		closestTr?.classList.toggle("editMode");
		if (!closestTr.querySelector("input")) {
			tdsDetails.forEach((element) => {
				const elementText = element.textContent;
				let editInput = document.createElement("input");
				editInput.value = elementText ?? "";
				editInput.classList.add("filterBar");
				element.textContent = "";
				element.appendChild(editInput);
			});
		} else {
			const newUser: userDetails = {
				userName: tdsDetails[userEnum.userName].querySelector("input")!.value ?? "",
				email: tdsDetails[userEnum.email].querySelector("input")!.value ?? "",
				password: tdsDetails[userEnum.password].querySelector("input")!.value ?? "",
				phoneNumber: tdsDetails[userEnum.phoneNumber].querySelector("input")!.value ?? "",
				firstName: tdsDetails[userEnum.firstName].querySelector("input")!.value ?? "",
				lastName: tdsDetails[userEnum.lastName].querySelector("input")!.value ?? "",
				country: tdsDetails[userEnum.country].querySelector("input")!.value ?? "",
				city: tdsDetails[userEnum.city].querySelector("input")!.value ?? "",
				zipCode: tdsDetails[userEnum.zipCode].querySelector("input")!.value ?? "",
				registeredDate: user.registeredDate,
				updatedDate: user.updatedDate,
			};

			if (
				newUser.userName != user.userName ||
				newUser.email != user.email ||
				newUser.password != user.password ||
				newUser.phoneNumber != user.phoneNumber ||
				newUser.firstName != user.firstName ||
				newUser.lastName != user.lastName ||
				newUser.country != user.country ||
				newUser.city != user.city ||
				newUser.zipCode != user.zipCode
			) {
				user.updatedDate = String(Date.now());
			}

			user.userName = newUser.userName;
			user.email = newUser.email;
			user.password = newUser.password;
			user.phoneNumber = newUser.phoneNumber;
			user.firstName = newUser.firstName;
			user.lastName = newUser.lastName;
			user.country = newUser.country;
			user.city = newUser.city;
			user.zipCode = newUser.zipCode;
			deleteUsersFromTable();
			pushUserDBToLocalStoragewithoutExtraUser(users);
			loadTableFromUsersArray(users);
		}
	}
}

function toggleSaveEdit(saveImg: HTMLImageElement) {
	if (saveImg.src.includes("edit1")) {
		saveImg.src = "../images/save.png";
	} else {
		saveImg.src = "../images/edit1.svg";
	}
}

function pushUserDBToLocalStorage(usersArray: userDetails[], user: userDetails) {
	const index = usersFromDB.findIndex((userDB) => userDB.userName == user.userName);
	usersFromDB.splice(index, 1);
	const usersToString = JSON.stringify(usersArray);
	localStorage.setItem("userDB", usersToString);
}

function pushUserDBToLocalStoragewithoutExtraUser(usersArray: userDetails[]) {
	const usersToString = JSON.stringify(usersArray);
	localStorage.setItem("userDB", usersToString);
}

function removeAushUserIDToLocalStorage(usersArray: string[], removeUserID: string) {
	const index = usersArray.findIndex((users) => users === removeUserID);
	usersArray.splice(index, 1);
	const usersToString = JSON.stringify(usersArray);
	localStorage.setItem("userID", usersToString);
}

function removeTdEvent(e: Event, user: userDetails) {
	const closestTr = (e.target as HTMLFormElement)?.closest("tr");
	const answer = confirm(`Are you sure you want to delete "${user.userName}"?`);
	if (answer && closestTr) {
		pushUserDBToLocalStorage(usersFromDB, user);
		removeAushUserIDToLocalStorage(usersIDArrayFromDB, user.userName);
		deleteUsersFromTable();
		loadTableFromUsersArray(usersFromDB);
	}
}
