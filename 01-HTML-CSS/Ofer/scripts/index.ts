console.log("wawa")

const firstNum = document.querySelector('#firstNum') as HTMLInputElement;
const secondNum = document.querySelector('#secondNum') as HTMLInputElement;
const sum = document.querySelector('#sum') as HTMLInputElement;
const sub = document.querySelector('#sub') as HTMLInputElement;
const mult =document.querySelector('#mult') as HTMLInputElement;
const power =document.querySelector('#power') as HTMLInputElement;


sum?.addEventListener("click", function() {
    let answer = document.querySelector('#anwser') as HTMLInputElement
    const sumAnwer = Number(firstNum.value) + Number(secondNum.value);
    console.log(`sum: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`)
    answer.value = String(sumAnwer)
})

sub?.addEventListener("click", function() {
    let answer = document.querySelector('#anwser') as HTMLInputElement
    const sumAnwer = Number(firstNum.value) - Number(secondNum.value);
    console.log(`sub: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`)
    answer.value = String(sumAnwer)
})

mult?.addEventListener("click", function() {
    let answer = document.querySelector('#anwser') as HTMLInputElement
    const sumAnwer = Number(firstNum.value) * Number(secondNum.value);
    console.log(`mult: firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`)
    answer.value = String(sumAnwer)
})

power?.addEventListener("click", function() {
    let answer = document.querySelector('#anwser') as HTMLInputElement
    const sumAnwer = Number(firstNum.value) ** Number(secondNum.value);
    console.log(`power:  firstNum: ${firstNum.value}, secondNum: ${secondNum.value}`)
    answer.value = String(sumAnwer)
})
