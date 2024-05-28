interface GeneralClassInterface {
  getClassType: () => 'creature' | 'inanimate';
  toString: () => string;
}

interface WalkingAnimalsInterface {
  legsCount: number;
  makeStepsSound: () => void;
}

class Animal implements GeneralClassInterface {
  private _animalType: string;
  private name: string;
  private mainColor: string;
  private birthday: Date;

  constructor(animalType: string, name: string, mainColor: string, birthday: Date) {
    this._animalType = animalType;
    this.name = name;
    this.mainColor = mainColor;
    this.birthday = birthday;
  }

  get animalType() {
    return this._animalType;
  }

  set animalType(_animalType: string) {
    this._animalType = _animalType;
  }

  getClassType(): 'creature' | 'inanimate' {
    return 'creature';
  }

  toString(): string {
    return `The animal is: ${this.animalType}, its name: ${this.name}, its main color is: ${this.mainColor}, birthday: ${this.birthday}`;
  }
}

const myAnimal = new Animal('dog', 'buzz', 'black', new Date('08/08/1993'));
myAnimal.animalType = 'cat';

if (myAnimal instanceof Animal) {
  // true
}

type Competition = {
  name: string;
  year: number;
  city: string;
  country: string;
  place: number;
}

class Dog extends Animal implements WalkingAnimalsInterface {
  private _dogType: string;
  public legsCount: number;
  private competitions: Competition[];
  private readonly secondsInYear: number = 60 * 60 * 24 * 365;

  constructor(name: string, mainColor: string, birthday: Date, dogType: string, legsCount: number = 4) {
    super('dog', name, mainColor, birthday);
    this._dogType = dogType;
    this.competitions = [];
    this.legsCount = legsCount;
  }

  getDogType() {
    return this.dogType;
  }

  setDogType(dogType: string) {
    this._dogType = dogType;
  }

  get dogType() {
    return this.dogType;
  }

  // more getters/setters

  addCompetition(name: string, year: number, city: string, country: string, place: number): void {
    const newCompetition: Competition = {
      name,
      year,
      city,
      country,
      place,
    };

    this.competitions.push(newCompetition);
  }

  makeStepsSound(): void {
    console.log("poff poff");
  }

  toString(): string {
    return super.toString() + `, dog type is: ${this._dogType}`;
  }
}


const dog1 = new Dog('Marly', 'brown', new Date('26/05/2022'), 'Golden Retreiver');
dog1.addCompetition('Most Beautiful Walk', 2024, 'Holon', 'Israel', 1);


class Spider extends Animal implements WalkingAnimalsInterface {
  public legsCount: number;
  private spiderType: string;

  constructor(name: string, mainColor: string, birthday: Date, spiderType: string, legsCount: number) {
    super('spider', name, mainColor, birthday);
    this.legsCount = legsCount;
    this.spiderType = spiderType;
  }

  makeStepsSound(): void {
    console.log('___________');
  }
}

// Generics:

function identityv1(arg: number): number {
  // same code here
  return arg;
}

function identityv2(arg: any): any {
  // same code here
  return arg;
}

// we can do instead:
function identity<T>(arg: T): T {
  // same code here
  return arg;
}

type MyObj = {
  key1: string;
}

const value1 = identity<MyObj>({ key1: 'my-value'});

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

function calculateObjDeep<T>(obj: T) {
  if (typeof obj == 'object') {
    const values = Object.values(obj as object);
    return 1 + Math.max(...values.map((value) => calculateObjDeep(value)));
  }
  return 0;
}

// implement a function, that deals with a generic type of object (T), and returns the object T + deep: number
function addObjectDeep<T>(obj: T): T & { deep: number } {
  const deep = calculateObjDeep(obj);
  const sameObj: T = identity(obj);
  return {
    ...obj,
    deep,
  };
}