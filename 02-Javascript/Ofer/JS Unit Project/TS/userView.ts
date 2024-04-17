console.log("123");

interface formExtension extends HTMLFormControlsCollection {
	userName: HTMLInputElement;
	email: HTMLInputElement;
	password: HTMLInputElement;
	phoneNumber: HTMLInputElement;
	firstName: HTMLInputElement;
	lastName: HTMLInputElement;
	country: HTMLInputElement;
	state?: HTMLInputElement;
	zipCode?: HTMLInputElement;
}



function submitForm(event: SubmitEvent) {
	event.preventDefault();
	const elements = (event.target as HTMLFormElement).elements as formExtension;
    console.log(elements)

}

document.getElementById('myForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
})
