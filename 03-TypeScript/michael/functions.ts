//Function Parameter Annotations
function square(num:number){
    return num * num ;
}

square(3);


// in the greet function person parameter will always be a string according to typescript rules 
function greet(person:string){
    return `hi there, ${person}!`; // person * person wont work because * is an oprater for numbers and type script knows that person is string 
}

greet('someOne');


//we can have few parameters with diffrent types 

const doSomething = (person: string, age:number, isFunny:boolean) => {};

doSomething("someOne", 55, false); // needs to get 3 parameters each with his type to work! 


// Working With Default Parameters 

function greet2(person:string = "Stranger"){
    return `hi there, ${person}!`; 
}

greet2('someOne');


// Return Type Annotations

function greet3(person:string):string { //we basiclly saying what the typeof the value that returns from the function 
    return `hi there, ${person}!`;
}

greet3('someOne');


function square2(num:number):number {
    return num * num;
}

square2(14);

// sometimes we have function that can return diffrent outputs with diffrent types 
function rando(num:number):string | number {
    if(Math.random() < 0.5) {
        return num.toString()
    } else {
        return num;
    }
}

// arrow function with return type annotations 
const addSome = (x: number, y:number):number => {
    return x * y;
};



// Anonymous Function Contextual Typing

const colors = ["red", "orange", "yellow"];  // wont be any by default because of the context of "colors" wich includs Strings
colors.map((color:string) => { // even if i didnt specefiy what type color is its still will refer color as a string 
   return color.toUpperCase()
})

// The Void Type
//mostly using with function but can be use with varubles 

function printMsg(msg:string): void { // we will use void on functions that always dosent return any thing (with the "return" function) 
    console.log("massage1");
    console.log("massage2");
}

// The Never Type

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while(true){
        console.log('GAME LOOP RUNNING!')
    } 
}