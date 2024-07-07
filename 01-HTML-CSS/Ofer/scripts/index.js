"use strict";
console.log("wawa");
const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const power = document.querySelector('#power');
sum === null || sum === void 0 ? void 0 : sum.addEventListener("click", function () {
    let answer = document.querySelector('#anwser');
    const sumAnwer = Number(firstNum.value) + Number(secondNum.value);
    console.log(`sum: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`);
    answer.value = String(sumAnwer);
});
sub === null || sub === void 0 ? void 0 : sub.addEventListener("click", function () {
    let answer = document.querySelector('#anwser');
    const sumAnwer = Number(firstNum.value) - Number(secondNum.value);
    console.log(`sub: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`);
    answer.value = String(sumAnwer);
});
mult === null || mult === void 0 ? void 0 : mult.addEventListener("click", function () {
    let answer = document.querySelector('#anwser');
    const sumAnwer = Number(firstNum.value) * Number(secondNum.value);
    console.log(`mult: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`);
    answer.value = String(sumAnwer);
});
power === null || power === void 0 ? void 0 : power.addEventListener("click", function () {
    let answer = document.querySelector('#anwser');
    const sumAnwer = Number(firstNum.value) ** Number(secondNum.value);
    console.log(`power:  firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`);
    answer.value = String(sumAnwer);
});
