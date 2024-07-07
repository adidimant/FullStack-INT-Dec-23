"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person {
    constructor(id, firstName, lastName, birthday, gender, height, weight, address) {
        if (typeof id == 'string' && id.length > 5) {
            this.id = id;
        }
        else {
            throw new Error("ID must be a string with at least 6 chars");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        if (!(this.gender == 'M' || this.gender == 'F')) {
            throw new Error("Gender must me one of 'M' or 'F'!");
        }
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        if (!address || !address.street || !address.house || address.house <= 0 || !address.apartment || address.apartment <= 0 || !address.city || !address.country) {
            throw new Error("Invalid address provided!");
        }
        this.address = address;
    }
    // Getters & Setters
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    /**
     * Function that returns a boolean value indicates if the person is in pension age, for male - 67, female - 65
     * @returns boolean value accordingly
     */
    isInPension() {
        // calculate age
        // check gender - if male and age over 67 - true, if female and over 65 - true
        // return false
        const birthdayInMs = this.birthday.getTime();
        const currentTime = Date.now();
        const ageInMs = currentTime - birthdayInMs;
        const ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;
        if ((this.gender == 'M' && ageInYears >= 67) || (this.gender == 'F' && ageInYears >= 65)) {
            return true;
        }
        return false;
    }
}
const person1 = new Person('208776958', 'Ran', 'Nishli', new Date('05/11/1984'), 'M', 170, 60, { street: 'Alon', house: 67, country: 'Israel', state: 'Tel-Aviv', city: 'Tel-Aviv', apartment: 19 });
const isPersonInPension = person1.isInPension();
person1.setHeight(171);
// read about "extends" in classes in TS
// extend the Person class in the User class
// add additional User fields
// Create users, and create persons, note that when you create a new user - this user is also a person - so you need to search how you call the constructor of the parent class
// Add 2 more functions for the User class, that uses both fields from Person & User (be creative)
// implement the getRecommendedNetflixMovies & getNotSeenRecommendedMovies - you need to call the API - 'https://netflix.com/getRecommendedMovies?userId=<>'
// in the API response - there's a boolean field called 'seen', you need to filter according to it
class User extends Person {
    constructor(id, firstName, lastName, birthday, gender, height, weight, address, username, email, phoneNumber, isVegan) {
        super(id, firstName, lastName, birthday, gender, height, weight, address);
        this.dateCreated = new Date();
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.isVegan = isVegan;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getIsVegan() {
        return this.isVegan;
    }
    getBirthday() {
        return super.getBirthday();
    }
    setUsername(username) {
        this.username = username;
    }
    setEmail(email) {
        this.email = email;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    setBirthday(birthday) {
        super.setBirthday(birthday);
    }
    setIsVegan(isVegan) {
        this.isVegan = isVegan;
    }
    //Add 2 more functions for the User class, that uses both fields from Person & User (be creative)
    getUserInfo() {
        return 'First name: ' + super.getFirstName() + '\n' +
            'Last name: ' + super.getLastName() + '\n' +
            'Username: ' + this.username + '\n' +
            'Email: ' + this.email;
    }
    timeToPension() {
        if (super.isInPension()) {
            return 'The user is already in pension';
        }
        const birthdayInMs = super.getBirthday().getTime();
        const currentTime = Date.now();
        const ageInMs = currentTime - birthdayInMs;
        const ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;
        if (super.getGender() == 'M') {
            return String('Time left To Pension (in years):  ' + (67 - ageInYears));
        }
        return String('Time left To Pension (in years):  ' + (65 - ageInYears));
    }
    // implement the getRecommendedNetflixMovies & getNotSeenRecommendedMovies - you need to call the API - 'https://netflix.com/getRecommendedMovies?userId=<>'
    // in the API response - there's a boolean field called 'seen', you need to filter according to it
    getRecommendedNetflixMovies() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getNotSeenRecommendedMovies() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const person2 = new Person('208776958', 'Ran', 'Nishli', new Date('05/11/1984'), 'M', 170, 60, { street: 'Alon', house: 67, country: 'Israel', state: 'Tel-Aviv', city: 'Tel-Aviv', apartment: 19 });
const user2 = new User('123456', 'ehab', 'hassoun', new Date('23/09/1991'), 'M', 170, 72, { street: 'Alon', house: 67, country: 'Israel', state: 'Tel-Aviv', city: 'Tel-Aviv', apartment: 19 }, 'ehabhassoun', 'ehab@gmail.com', '052-3456789', false);
