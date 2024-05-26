var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName, birthday, gender, height, weight, address) {
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
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getBirthday = function () {
        return this.birthday;
    };
    Person.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person.prototype.getHeight = function () {
        return this.height;
    };
    Person.prototype.setHeight = function (height) {
        this.height = height;
    };
    Person.prototype.getWeight = function () {
        return this.weight;
    };
    Person.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    /**
     * Function that returns a boolean value indicates if the person is in pension age, for male - 67, female - 65
     * @returns boolean value accordingly
     */
    Person.prototype.isInPension = function () {
        // calculate age
        // check gender - if male and age over 67 - true, if female and over 65 - true
        // return false
        var birthdayInMs = this.birthday.getTime();
        var currentTime = Date.now();
        var ageInMs = currentTime - birthdayInMs;
        var ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;
        if ((this.gender == 'M' && ageInYears >= 67) || (this.gender == 'F' && ageInYears >= 65)) {
            return true;
        }
        return false;
    };
    return Person;
}());
var person1 = new Person('208776958', 'Ran', 'Nishli', new Date('05/11/1984'), 'M', 170, 60, { street: 'Alon', house: 67, country: 'Israel', state: 'Tel-Aviv', city: 'Tel-Aviv', apartment: 19 });
var isPersonInPension = person1.isInPension();
person1.setHeight(171);
// read about "extends" in classes in TS
// extend the Person class in the User class
// add additional User fields
// Create users, and create persons, note that when you create a new user - this user is also a person - so you need to search how you call the constructor of the parent class
// Add 2 more functions for the User class, that uses both fields from Person & User (be creative)
// implement the getRecommendedNetflixMovies & getNotSeenRecommendedMovies - you need to call the API - 'https://netflix.com/getRecommendedMovies?userId=<>'
// in the API response - there's a boolean field called 'seen', you need to filter according to it
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, firstName, lastName, birthday, gender, height, weight, address, dateCreated, isVegan) {
        var _this = _super.call(this, id, firstName, lastName, birthday, gender, height, weight, address) || this;
        _this.dateCreated = dateCreated;
        _this.isVegan = isVegan;
        return _this;
    }
    // getBirthday() {
    // }
    // setBirthday(birthday: string) {
    // }
    User.prototype.getDateCreated = function () {
        return this.dateCreated;
    };
    User.prototype.setDateCreated = function (dateCreated) {
        this.dateCreated = dateCreated;
    };
    User.prototype.getIsVegan = function () {
        return this.isVegan;
    };
    User.prototype.setIsVegan = function (isVegan) {
        this.isVegan = isVegan;
    };
    User.prototype.getRecommendedNetflixMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, movies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://netflix.com/getRecommendedMovies?userId=".concat(this.getId()))];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        movies = _a.sent();
                        return [2 /*return*/, movies];
                }
            });
        });
    };
    User.prototype.getNotSeenRecommendedMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var movies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecommendedNetflixMovies()];
                    case 1:
                        movies = _a.sent();
                        return [2 /*return*/, movies.filter(function (movie) { return !movie.seen; })];
                }
            });
        });
    };
    User.prototype.isLongTimeMember = function () {
        var currentDate = new Date();
        var membershipDuration = currentDate.getTime() - this.dateCreated.getTime();
        var membershipDurationInYears = membershipDuration / 1000 / 60 / 60 / 24 / 365;
        return membershipDurationInYears > 5;
    };
    User.prototype.getPersonalizedGreeting = function () {
        var veganMessage = this.isVegan ? "Hope you're enjoying your vegan lifestyle!" : "";
        return "hello ".concat(this.getFirstName(), " ").concat(this.getLastName(), "! ").concat(veganMessage);
    };
    return User;
}(Person));
var user1 = new User('123456789', 'awni', 'jwayed', new Date('12/09/1995'), 'M', 178, 77, { street: 'aen aafeh', house: 1, country: 'israel', state: 'shefa-amr', city: 'shefa-amr', apartment: 10 }, new Date('20/05/2019'), true);
console.log(user1.getPersonalizedGreeting());
console.log(user1.isLongTimeMember());
user1.getNotSeenRecommendedMovies().then(function (movies) { return console.log(movies); });
