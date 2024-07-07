"use strict";
// Reminder - interface vs types (small differences): https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#:~:text=typed%20type%20system.-,Differences%20Between%20Type%20Aliases%20and%20Interfaces,-Type%20aliases%20and
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
function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
}
class User extends Person {
    constructor(id, firstName, lastName, birthday, gender, height, weight, address, profileImageUrl, socialLinks) {
        super(id, firstName, lastName, birthday, gender, height, weight, address);
        this.dateCreated = new Date();
        this.accountStatus = 'active';
        this.loginCount = 0;
        this.isOnline = false;
        this.profileImageUrl = profileImageUrl;
        this.socialLinks = socialLinks;
        this.userId = uuid();
    }
    login(device) {
        // update login parameters
        this.lastLogin = new Date();
        this.isOnline = true;
        this.loginCount++;
        this.deviceLastLogin = device;
    }
    getRecommendedNetflixMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const recommendedMoviesRes = yield fetch(`https://netflix.com/getRecommendedMovies?userId=${this.userId}`);
            const recommendedMovies = yield recommendedMoviesRes.json();
            return recommendedMovies;
        });
    }
    getNotSeenRecommendedMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield this.getRecommendedNetflixMovies();
            return movies.filter((movie) => !movie.seen);
        });
    }
}
const user1 = new User('754675e9786', 'ehab', 'hasson', new Date('03/03/1992'), 'M', 200, 60, { country: 'Israel', street: 'Street 1', house: 56, city: 'Holon', apartment: 13 }, 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiKseHSyaGGAxWSqWgJHb7MAwQYABAHGgJ3Zg&ase=2&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxBvH-cpRKD7RaKKBN0jk9NXnHZraVbERzkgKN1kQJs58yogw9N1CmRoCpgoQAvD_BwE&ohost=www.google.com&cid=CAESVuD2Nhp8f3aa2g5gzIT4ULZ8lNtLbeK0lHlF_0S8k2Blf0FoqsryKCFogBzJ2Fl2cCY1XKOhwYQd5u5_WE8fY6scXzQQmdVdqCkt478EMqvQLLKJrltc&sig=AOD64_3LGLBUA35x6XWT65mt4jZjjlMLUA&q=&nis=4&ved=2ahUKEwi7ktvSyaGGAxUG-gIHHUGKBfkQh78CegQIBhAB&adurl=');
user1.isInPension();
let notSeenMovies;
user1.getNotSeenRecommendedMovies().then((value) => {
    notSeenMovies = value;
});
class Teacher extends Person {
}
class Machine {
    constructor(id) {
        this.id = id;
        this.field2 = 8;
    }
    turnOn() {
        console.log("machine id: " + this.id + "turned-on");
    }
    turnOff() {
        console.log("machine id: " + this.id + "turned-off");
    }
}
class PrinterMachine extends Machine {
    constructor(id) {
        super(id);
    }
    createTestPrint() {
        console.log("creating a test print for machine - " + this.id);
    }
}
class LaserCutMachine extends Machine {
    constructor(id) {
        super(id);
    }
}
const printerMachine1 = new PrinterMachine('asndi3fy4bfnNGIN6g');
const printerMachine2 = new PrinterMachine('asndi3fygllNGIN6g');
printerMachine1.turnOff();
printerMachine2.turnOn();
printerMachine2.field2 = 10; // readonly field
printerMachine2.createTestPrint();
/**
 * Typescript remaining topics:
 * 1) class implements interface - https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses:~:text=class%20instance%20itself.-,Class%20Heritage,-Like%20other%20languages
 * 2) typescript generics - https://www.typescriptlang.org/docs/handbook/2/generics.html
 * 3) static classes & static methods (like Date.now(); , Math.pow(5, 3);)
 * 4) types manipulation - https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
 * 5) small additions from TS documentation
 * 6) import/export modules, export vs export default
 */
