/**
 * Please implemenet a simple html page with calculator buttons:
 * +, -, *, ** (power), :
 * this require inputs for the operations (input for first var, input for second var)
 * when pressing the "Calculate" button - the screen presents the calculation result
 */

console.log(document.querySelector("#\\+"));
console.log(document.querySelector("#\\-"));
console.log(document.querySelector("#x"));
console.log(document.querySelector("#\\^"));

const n1 = document.querySelector("#num1");
const n2 = document.querySelector("#num2");
const addBtn = document.querySelector("#\\+");
const subBtn = document.querySelector("#\\-");
const mulBtn = document.querySelector("#x");
const powBtn = document.querySelector("#\\^");
const result = document.querySelector("#result");
let operator;

function chooseOp(op) {
  if (op == addBtn) {
    console.log("IT IS THE ADDDD");
    operator = "add";
  } else if (op == subBtn) {
    console.log("IT IS THE SUBBBBBBB");
    operator = "sub";
  } else if (op == mulBtn) {
    operator = "mul";
  } else if (op == powBtn) {
    operator = "pow";
  }
  console.log("operator is", operator);
}

function calc() {
  if (isNaN(Number(n1.value)) || isNaN(Number(n2.value))) {
    alert("please enter valid numbers in inputs");
  }
  if (operator == "add") {
    result.innerHTML = Number(n1.value) + Number(n2.value);
  } else if (operator == "sub") {
    result.innerHTML = Number(n1.value) - Number(n2.value);
  } else if (operator == "mul") {
    result.innerHTML = Number(n1.value) * Number(n2.value);
  } else if (operator == "pow") {
    result.innerHTML = Number(n1.value) ** Number(n2.value);
  }
}
