"use strict";
let sName = "someName";
sName = "difrrentString";
// sName = 8 => wont work because sName is referd as a string 
let sAge = 5;
sAge = 15;
//sAge = "5" => wont work because sAge is referd as a number
let sCondition = true;
sCondition = false;
//sCondition = "true or false" => wont work because sConditon is refed as a boolean
let nothingIn = null;
let notDefined = undefined;
//type interface 
let saysome = "hello world!";
saysome = "bye world!"; // type script can realise by himself that saysome is String 
//saysome = 5; wont work because typescript refed saysome as a string 
//any type - usally we wont use it only if we dont have a Choise any type will "ignore the type script rules"
let someThing = 5;
someThing = "String";
someThing = false;
someThing();
//Delayed Initialization & Implicit Any
const movies = ["movie1", "movie2", "movie3"];
let foundMovie;
for (let movie of movies) {
    if (movie === "movie1") {
        foundMovie = "movie1";
    }
}
