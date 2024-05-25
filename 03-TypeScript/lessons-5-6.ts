// Reminder - interface vs types (small differences): https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#:~:text=typed%20type%20system.-,Differences%20Between%20Type%20Aliases%20and%20Interfaces,-Type%20aliases%20and

type Gender = 'M' | 'F';
type Address = {
  street: string;
  house: number;
  apartment: number;
  city: string;
  state?: string;
  country: string;
}

class Person {
  private id: string;
  private firstName: string;
  private lastName: string;
  private birthday: Date;
  private gender: Gender;
  private height: number;
  private weight: number;
  private address: Address;

  constructor(id: string, firstName: string, lastName: string, birthday: Date, gender: Gender, height: number, weight: number, address: Address) {
    if (typeof id == 'string' && id.length > 5) {
      this.id = id;
    } else {
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

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getBirthday(): Date {
    return this.birthday;
  }

  setBirthday(birthday: Date) {
    this.birthday = birthday;
  }

  getGender(): Gender {
    return this.gender;
  }

  setGender(gender: Gender) {
    this.gender = gender;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getWeight(): number {
    return this.weight;
  }
  
  setWeight(weight: number) {
    this.weight = weight;
  }

  getAddress(): Address {
    return this.address;
  }

  setAddress(address: Address) {
    this.address = address;
  }

  /**
   * Function that returns a boolean value indicates if the person is in pension age, for male - 67, female - 65
   * @returns boolean value accordingly
   */
  isInPension(): boolean {
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

type SocialLinks = {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  tiktok?: string;
  snapchat?: string;
  threads?: string;
  discord?: string;
  whatsapp?: string;
};

function uuid(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

type UserMovie = {
  movieId: string;
  name: string;
  year: number;
  recommendedScore: number;
  seen: boolean;
  genre: string;
  language: string;
  minimumAge: number;
  description: string;
}

class User extends Person {
  userId: string;
  dateCreated: Date;
  accountStatus: 'active' | 'inactive' | 'disabled' | 'active-with-debt' | 'inactive-with-debt';
  lastLogin: Date;
  loginCount: number;
  deviceLastLogin: string;
  isOnline: boolean;
  profileImageUrl?: string;
  socialLinks?: SocialLinks;

  constructor(id: string, firstName: string, lastName: string, birthday: Date, gender: Gender, height: number, weight: number, address: Address, profileImageUrl?: string, socialLinks?: SocialLinks) {
    super(id, firstName, lastName, birthday, gender, height, weight, address);
    this.dateCreated = new Date();
    this.accountStatus = 'active';
    this.loginCount = 0;
    this.isOnline = false;
    this.profileImageUrl = profileImageUrl;
    this.socialLinks = socialLinks;
    this.userId = uuid();
  }

  login(device: string) {
    // update login parameters
    this.lastLogin = new Date();
    this.isOnline = true;
    this.loginCount++;
    this.deviceLastLogin = device;
  }

  private async getRecommendedNetflixMovies(): Promise<UserMovie[]> {
    const recommendedMoviesRes = await fetch(`https://netflix.com/getRecommendedMovies?userId=${this.userId}`);
    const recommendedMovies = await recommendedMoviesRes.json();
    return recommendedMovies;
  }

  public async getNotSeenRecommendedMovies(): Promise<UserMovie[]> {
    const movies = await this.getRecommendedNetflixMovies();
    return movies.filter((movie: UserMovie): boolean => !movie.seen);
  }
}

const user1 = new User('754675e9786', 'ehab', 'hasson', new Date('03/03/1992'), 'M', 200, 60, { country: 'Israel', street: 'Street 1', house: 56, city: 'Holon', apartment: 13 }, 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiKseHSyaGGAxWSqWgJHb7MAwQYABAHGgJ3Zg&ase=2&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxBvH-cpRKD7RaKKBN0jk9NXnHZraVbERzkgKN1kQJs58yogw9N1CmRoCpgoQAvD_BwE&ohost=www.google.com&cid=CAESVuD2Nhp8f3aa2g5gzIT4ULZ8lNtLbeK0lHlF_0S8k2Blf0FoqsryKCFogBzJ2Fl2cCY1XKOhwYQd5u5_WE8fY6scXzQQmdVdqCkt478EMqvQLLKJrltc&sig=AOD64_3LGLBUA35x6XWT65mt4jZjjlMLUA&q=&nis=4&ved=2ahUKEwi7ktvSyaGGAxUG-gIHHUGKBfkQh78CegQIBhAB&adurl=');
user1.isInPension();
let notSeenMovies: undefined | UserMovie[];

user1.getNotSeenRecommendedMovies().then((value) => {
  notSeenMovies = value;
});


class Teacher extends Person {
  private classes: string[];
  private yearsOfExperience: number;
  // more Teacher fields & methods
}

class Machine {
  protected id: string;
  public readonly field2: number; // can change only inside the class, but can only read (and not modify) this field from outside the class

  constructor(id: string) {
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
  constructor(id: string) {
    super(id);
  }

  createTestPrint() {
    console.log("creating a test print for machine - " + this.id);
  }
}

class LaserCutMachine extends Machine {
  constructor(id: string) {
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
 */




