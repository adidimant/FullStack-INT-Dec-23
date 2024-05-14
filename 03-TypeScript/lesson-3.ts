type Point = {
  x: number;
  y: number;
  updateFunc: (str: string) => void;
}

async function foo1(str: string, updateFunc: (s: string) => void): Promise<void> {
  // logs the str
  // wait two seconds
  // call the second parameter function
  console.log(str);

  await new Promise((res, rej) => {
    setTimeout(res, 2000);
  });

  // another code here
  updateFunc(str);
}

foo1('happy string!', (str: string): void => {
  alert(str);
});

// Or equivalent:
function myUpdateFunc (str: string): void {
  alert(str);
}
foo1('happy string!', myUpdateFunc);


const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

let value;
value = (document.getElementById("my-phone-input") as HTMLInputElement).value;
// Or
value = (<HTMLInputElement>document.getElementById("my-phone-input")).value;

// Typescript is protecting us from an obvious mistake:
const x1 = "hello" as number;

let var1: "F" | "M" = "F";
var1 = "M";

// Passing a mistaken option (between several string options type)
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");


function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

let n: Point | null;

// 

declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Potential fix:
handleRequest(req.url, req.method as "GET" | "POST");
// OR - define req type in a better way:
type ShortRequest = {
  url: string;
  method: 'GET' | 'POST';
}
const req1: ShortRequest = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req1.method);

// strictNullChecks is on:
function doSomething1(x: string | null) {
  console.log("Hello, " + x.toUpperCase());
}

function doSomething2(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// Enum - closed set of values

enum RgbColor {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
};

// function that receives an element (param1), and ab rgb color (param2) - and fills its background color with this color
function drawColorInElement(el: HTMLElement | null, color: RgbColor) {
  if (el) {
    el.style.backgroundColor = color.toLowerCase();
  }
}

drawColorInElement(document.getElementById("my-id"), RgbColor.BLUE);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}