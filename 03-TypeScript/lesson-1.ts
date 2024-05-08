const calculateSum = (a: number, b: number, c: undefined, d: number): number => {
  return a + b;
};

calculateSum(1, 2, undefined, 45);

type Gender = 'M' | 'F';

type User = {
  age: number;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  address: string;
  gender: Gender;
  registerDate: number; // timestamp
};

const getUserAge = (user: User): number => {
  user.gender = 'F';
  return user.age;
}

const calculateAverageAge = (users: Array<User>): number => {
  let sum = 0;
  for (let i =0; i < users.length; i++) {
    sum += users[i].age;
  }

  return sum / users.length;
}

const calculateAverageAgeV2 = (users: Array<User>): number => {
  return (users.reduce((acc, user) => {
    return acc + user.age;
  }, 0)) / users.length;
}

// pension age - >=65
const filterPensionAgePeople = (users: User[]): User[] => {
  return users.filter((user: User): boolean => user.age >= 65);
};

const notProtectingFunction = (users): User[] => {
  return users.filter((user: User): boolean => user.age >= 65);
};

// an example - typescript isn't protecting me but my code will crash (since that users has no specific type in notProtectingFunction)
notProtectingFunction(6);

const getUsersData = async (): Promise<User[]> => {
  const response = await fetch("server.com/api/users");
  const data: User[] = await response.json();
  calculateAverageAge(data); // no guarentee that the server really brings us array of User
  return data;
};

//@ts-ignore - this line will fail, since we don't pass array of User
calculateAverageAge([1, "d"]);

// anonymous functions:
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s: string): void {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s: string): void => {
  console.log(s.toUpperCase());
});

// object type:
function printCoord(pt: { x: number; y: number; }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// or you can also define and use Point type:
type Point = { x: number; y: number; };

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// another object example:
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union types:
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

function printId2(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // x is array
    console.log("Hello, " + x.join(" and "));
  } else {
    // x is string
    console.log("Welcome lone traveler " + x);
  }
}

// both arrays and strings have the method slice
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}