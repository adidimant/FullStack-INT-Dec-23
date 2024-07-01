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
const person = new Person('208776958', 'Ran', 'Nishli', new Date('05/11/1984'), 'M', 170, 60, { street: 'Alon', house: 67, country: 'Israel', state: 'Tel-Aviv', city: 'Tel-Aviv', apartment: 19 });
const isPersonInPension1 = person.isInPension();
person.setHeight(171);
// read about "extends" in classes in TS
// extend the Person class in the User class
// add additional User fields
// Create users, and create persons, note that when you create a new user - this user is also a person - so you need to search how you call the constructor of the parent class
// Add 2 more functions for the User class, that uses both fields from Person & User (be creative)
// implement the getRecommendedNetflixMovies & getNotSeenRecommendedMovies - you need to call the API - 'https://netflix.com/getRecommendedMovies?userId=<>'
// in the API response - there's a boolean field called 'seen', you need to filter according to it
class User1 extends Person {
    constructor(id, firstName, lastName, birthday, gender, height, weight, address, dateCreated, isVegan) {
        super(id, firstName, lastName, birthday, gender, height, weight, address);
        this.dateCreated = dateCreated;
        this.isVegan = isVegan;
    }
    // getBirthday() {
    // }
    // setBirthday(birthday: string) {
    // }
    getDateCreated() {
        return this.dateCreated;
    }
    setDateCreated(dateCreated) {
        this.dateCreated = dateCreated;
    }
    getIsVegan() {
        return this.isVegan;
    }
    setIsVegan(isVegan) {
        this.isVegan = isVegan;
    }
    getRecommendedNetflixMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`https://netflix.com/getRecommendedMovies?userId=${this.getId()}`);
            const movies = yield res.json();
            return movies;
        });
    }
    getNotSeenRecommendedMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield this.getRecommendedNetflixMovies();
            return movies.filter((movie) => !movie.seen);
        });
    }
    isLongTimeMember() {
        const currentDate = new Date();
        const membershipDuration = currentDate.getTime() - this.dateCreated.getTime();
        const membershipDurationInYears = membershipDuration / 1000 / 60 / 60 / 24 / 365;
        return membershipDurationInYears > 5;
    }
    getPersonalizedGreeting() {
        const veganMessage = this.isVegan ? "Hope you're enjoying your vegan lifestyle!" : "";
        return `hello ${this.getFirstName()} ${this.getLastName()}! ${veganMessage}`;
    }
}
const user = new User1('123456789', 'awni', 'jwayed', new Date('12/09/1995'), 'M', 178, 77, { street: 'aen aafeh', house: 1, country: 'israel', state: 'shefa-amr', city: 'shefa-amr', apartment: 10 }, new Date('20/05/2019'), true);
console.log(user.getPersonalizedGreeting());
console.log(user.isLongTimeMember());
user.getNotSeenRecommendedMovies().then(movies => console.log(movies));
