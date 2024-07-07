"use strict";
// Working With Object Types
function printName(person) {
    console.log(`${person.first}, ${person.last}.`);
}
printName({ first: "saf", last: "afsfsa" });
//More Object Types
let coords = { x: 42, y: 12 };
function randomCoords() {
    return { x: Math.random(), y: Math.random() };
}
// Excess Properties
