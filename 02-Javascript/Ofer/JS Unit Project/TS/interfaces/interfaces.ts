export interface formExtension extends HTMLFormControlsCollection {
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

export interface userDetails {
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
