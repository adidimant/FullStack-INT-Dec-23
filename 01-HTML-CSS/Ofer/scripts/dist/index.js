console.log("wawa");
var firstNum = document.querySelector('#firstNum');
var secondNum = document.querySelector('#secondNum');
var sum = document.querySelector('#sum');
var sub = document.querySelector('#sub');
var mult = document.querySelector('#mult');
var power = document.querySelector('#power');
sum === null || sum === void 0 ? void 0 : sum.addEventListener("click", function () {
    var answer = document.querySelector('#anwser');
    var sumAnwer = Number(firstNum.value) + Number(secondNum.value);
    console.log("sum: firstNum: " + firstNum.value + ", secondNum: " + secondNum.value);
    answer.value = String(sumAnwer);
});
sub === null || sub === void 0 ? void 0 : sub.addEventListener("click", function () {
    var answer = document.querySelector('#anwser');
    var sumAnwer = Number(firstNum.value) - Number(secondNum.value);
    console.log("sub: firstNum: " + firstNum.value + ", secondNum: " + secondNum.value);
    answer.value = String(sumAnwer);
});
mult === null || mult === void 0 ? void 0 : mult.addEventListener("click", function () {
    var answer = document.querySelector('#anwser');
    var sumAnwer = Number(firstNum.value) * Number(secondNum.value);
    console.log("mult: firstNum: " + firstNum.value + ", secondNum: " + secondNum.value);
    answer.value = String(sumAnwer);
});
power === null || power === void 0 ? void 0 : power.addEventListener("click", function () {
    var answer = document.querySelector('#anwser');
    var sumAnwer = Math.pow(Number(firstNum.value), Number(secondNum.value));
    console.log("power:  firstNum: " + firstNum.value + ", secondNum: " + secondNum.value);
    answer.value = String(sumAnwer);
});
