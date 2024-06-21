let sName: string = "someName";
sName = "difrrentString"
// sName = 8 => wont work because sName is referd as a string 

let sAge: number = 5;
sAge = 15;
//sAge = "5" => wont work because sAge is referd as a number

let sCondition: boolean = true;
sCondition = false;
//sCondition = "true or false" => wont work because sConditon is refed as a boolean

let nothingIn: null = null;

let notDefined: undefined = undefined;


//type interface 
let saysome = "hello world!"
saysome = "bye world!" // type script can realise by himself that saysome is String 
//saysome = 5; wont work because typescript refed saysome as a string 



//any type - usally we wont use it only if we dont have a Choise any type will "ignore the type script rules"

let someThing: any = 5;
someThing = "String"
someThing = false;
someThing();


//Delayed Initialization & Implicit Any

const movies = ["movie1", "movie2", "movie3"];
let foundMovie:string;
for (let movie of movies) {
    if (movie === "movie1") {
        foundMovie = "movie1";
    }
}
