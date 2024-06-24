"use strict";
class Animal {
    constructor(animalType, name, mainColor, birthday) {
        this._animalType = animalType;
        this.name = name;
        this.mainColor = mainColor;
        this.birthday = birthday;
    }
    get animalType() {
        return this._animalType;
    }
    set animalType(_animalType) {
        this._animalType = _animalType;
    }
    getClassType() {
        return 'creature';
    }
    toString() {
        return `The animal is: ${this.animalType}, its name: ${this.name}, its main color is: ${this.mainColor}, birthday: ${this.birthday}`;
    }
}
const myAnimal = new Animal('dog', 'buzz', 'black', new Date('08/08/1993'));
myAnimal.animalType = 'cat';
if (myAnimal instanceof Animal) {
    // true
}
class Dog extends Animal {
    constructor(name, mainColor, birthday, dogType, legsCount = 4) {
        super('dog', name, mainColor, birthday);
        this.secondsInYear = 60 * 60 * 24 * 365;
        this._dogType = dogType;
        this.competitions = [];
        this.legsCount = legsCount;
    }
    getDogType() {
        return this.dogType;
    }
    setDogType(dogType) {
        this._dogType = dogType;
    }
    get dogType() {
        return this.dogType;
    }
    // more getters/setters
    addCompetition(name, year, city, country, place) {
        const newCompetition = {
            name,
            year,
            city,
            country,
            place,
        };
        this.competitions.push(newCompetition);
    }
    makeStepsSound() {
        console.log("poff poff");
    }
    toString() {
        return super.toString() + `, dog type is: ${this._dogType}`;
    }
}
const dog1 = new Dog('Marly', 'brown', new Date('26/05/2022'), 'Golden Retreiver');
dog1.addCompetition('Most Beautiful Walk', 2024, 'Holon', 'Israel', 1);
class Spider extends Animal {
    constructor(name, mainColor, birthday, spiderType, legsCount) {
        super('spider', name, mainColor, birthday);
        this.legsCount = legsCount;
        this.spiderType = spiderType;
    }
    makeStepsSound() {
        console.log('___________');
    }
}
// Generics:
function identityv1(arg) {
    // same code here
    return arg;
}
function identityv2(arg) {
    // same code here
    return arg;
}
// we can do instead:
function identity(arg) {
    // same code here
    return arg;
}
const value1 = identity({ key1: 'my-value' });
const obj1 = {
    a: {
        n: {
            key1: 6,
            key2: {
                key3: {
                    key4: 'my-str',
                }
            }
        },
        c: 6,
        d: 9,
    },
    b: '8'
};
function calculateObjDeep(obj) {
    if (typeof obj == 'object') {
        const values = Object.values(obj);
        return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
    }
    return 0;
}
// implement a function, that deals with a generic type of object (T), and returns the object T + deep: number
function addObjectDeep(obj) {
    const deep = calculateObjDeep(obj);
    const sameObj = identity(obj);
    return Object.assign(Object.assign({}, obj), { deep });
}
