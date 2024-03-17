const car1 = { type:"Fiat", model:"500", color:"white" };

const car2History = [];

const car2 = { type:"Volvo", model: "24S", color: "Blue", makeSound: () => {
  console.log('Beep Beep!');
} , "23942ieudbiu4": 'some-value' };

car2History.push({...car2});

if (car1.type == car2.type) {
  console.log('same car companies!');
}

// alternative way:
if (car1["type"] == car2["type"]) {
  console.log('same car companies!');
}

console.log(car2["23942ieudbiu4"]);

car2.type = "Fiat";
car2.model = "700";

car2History.push({...car2});

car2.mirrorProtectionCompany = 'WolfsProtection';
car2History.push({...car2});

delete car2["23942ieudbiu4"]
car2History.push({...car2});
console.log(car2) // the key '23942ieudbiu4' won't be there anymore

// JSON = Javascript Object Notation

car2.kilometraz = 20000;
car2History.push({...car2});
car2.makeSound();

console.log(car2History);

// example of merging two objects:
const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj3 = { ...obj1, ...obj2 }; // ob3 = {a: 1, b: 3, c: 4}
const obj4 = { ...obj1, ...obj2, b: 8  }; // ob3 = {a: 1, b: 8, c: 4} -> override b for both of them