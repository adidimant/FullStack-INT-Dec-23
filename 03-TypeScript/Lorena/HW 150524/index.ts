type Gender = 'M' | 'F';
type Address = {
  street: string;
  house: number;
  apartment?: number;
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
    this.gender = gender;
    if (!(this.gender == 'M' || this.gender == 'F')) {
      throw new Error("Gender must me one of 'M' or 'F'!");
    }
    this.height = height;
    this.weight = weight;
    if (!address || !address.street || !address.house || address.house <= 0 || !address.city || !address.country) {
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

  getGender(): 'Male' | 'Female' {
    return this.gender == 'M' ? 'Male' : 'Female';
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

class User extends Person {
  dateCreated: Date;
  isVegan?: boolean;

  constructor(id: string, firstName: string, lastName: string, birthday: Date, gender: Gender, height: number, weight: number, address: Address, dateCreated: Date, isVegan: boolean) {
    super(id, firstName, lastName, birthday, gender, height, weight, address)
    this.dateCreated = dateCreated;
    this.isVegan = isVegan
  }

  setBirthday(birthday: Date): void {
    this.setBirthday(birthday);
  }

  getIsVegan():boolean | 'Not Specified' {
    return this.isVegan ?? 'Not Specified';
  }

  setIsVegan(isVegan: boolean) {
  }

  private async getRecommendedNetflixMovies() {
  }

  public async getNotSeenRecommendedMovies() {
  }
}

const myAddress: Address = {
  street: 'hamerkava',
  house: 20,
  city: 'azur',
  country: 'israel'

}
const user1 = new User("123123", 'ofer', 'ben Ami', new Date('1998-09-08'), 'M', 175, 80, myAddress, new Date(), false)
const user2 = new User("123123", 'ofer', 'ben Ami', new Date('2002-10-18'), 'M', 175, 80, myAddress, new Date(), false)


console.log(user1.getGender())
console.log(user2.getBirthday())