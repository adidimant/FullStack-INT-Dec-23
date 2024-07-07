"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function foo1(str, updateFunc) {
    return __awaiter(this, void 0, void 0, function* () {
        // logs the str
        // wait two seconds
        // call the second parameter function
        console.log(str);
        yield new Promise((res, rej) => {
            setTimeout(res, 2000);
        });
        // another code here
        updateFunc(str);
    });
}
foo1('happy string!', (str) => {
    alert(str);
});
// Or equivalent:
function myUpdateFunc(str) {
    alert(str);
}
foo1('happy string!', myUpdateFunc);
const myCanvas = document.getElementById("main_canvas");
let value;
value = document.getElementById("my-phone-input").value;
// Or
value = document.getElementById("my-phone-input").value;
// Typescript is protecting us from an obvious mistake:
const x1 = "hello";
let var1 = "F";
var1 = "M";
// Passing a mistaken option (between several string options type)
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
let n;
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Potential fix:
handleRequest(req.url, req.method);
const req1 = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req1.method);
// strictNullChecks is on:
function doSomething1(x) {
    console.log("Hello, " + x.toUpperCase());
}
function doSomething2(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
// Enum - closed set of values
var RgbColor;
(function (RgbColor) {
    RgbColor["RED"] = "RED";
    RgbColor["GREEN"] = "GREEN";
    RgbColor["BLUE"] = "BLUE";
})(RgbColor || (RgbColor = {}));
;
// function that receives an element (param1), and ab rgb color (param2) - and fills its background color with this color
function drawColorInElement(el, color) {
    if (el) {
        el.style.backgroundColor = color.toLowerCase();
    }
}
drawColorInElement(document.getElementById("my-id"), RgbColor.BLUE);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
const direction = {
    "Up": "Up",
    "Down": "Down",
};
function movePlayer(player, direction, pixelsToMove) {
    const playerElement = document.getElementById(player.elementId);
    if (direction == Direction.Up) {
        playerElement.style.marginBottom += pixelsToMove;
    }
    else if (direction == Direction.Left) {
        playerElement.style.marginRight += pixelsToMove;
    }
    else if (direction == Direction.Right) {
        playerElement.style.marginLeft += pixelsToMove;
    }
    else if (direction == Direction.Down) {
        playerElement.style.marginTop += pixelsToMove;
    }
}
