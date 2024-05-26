/**
 * Class task:
 * Write 4 promises:
 * 1 - with new Promise, should be resolved
 * 2 with new Promise, should be rejected
 * 3 - with Promise.resolve, should be xx?
 * 4 - with async function, should be resolved
 * 5 with async function, should be rejected
 * 6 - with Promise.reject, should be yy?
 * 
 * 
 * Use Promise.all on all the resolved promises, and print the resolved value
 * Use Promise.any on all the promises, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is resolved, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is rejected, and catch the error or print the resolved value
 */
/**
 * Class task:
 * Write 4 promises:
 * 1 - with new Promise, should be resolved
 * 2 with new Promise, should be rejected
 * 3 - with Promise.resolve, should be xx?
 * 4 - with async function, should be resolved
 * 5 with async function, should be rejected
 * 6 - with Promise.reject, should be yy?
 * 
 * 
 * Use Promise.all on all the resolved promises, and print the resolved value
 *  * Use Promise.all on all the promises, and catch the rejected value. explain why it's rejected
 * Use Promise.any on all the promises, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is resolved, and print the resolved value
 * Use Promice.race on all the promises, make sure the first promise is rejected, and catch the error or print the resolved value
 */
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race


const promise = new Promise((res, rej) => {
    let a = 7;
    if (a == 7) {
        res("good");
    }
})

const promise2 = new Promise((res, rej) => {
    let a = 8;
    let b = 2;
    if (a * b == 20) {
        res("very-nice");
    } else {
        rej(16);
    }
})

async function promise3() {
    return 4;
}

async function promise4() {
    setTimeout(() => {
        const data = false ? {data: "I have data"} : null; // פנייה ל'דטה' אם הוא 'אמת' להחזיר אובייקט ואם הוא 'שקר' תחזיר ריק
        if (data) {
            res(data); //אם זה true אז הוא יחזיר את האובייקט
        } else {
            rej(data) // fulst יחזיר null
        }
    } ,3000);
}


const promise5 = Promise.resolve(() => {
    let a = 5;
    return a ** 2;
})


const promise6 = Promise.reject("HHHHAHAHAHAHAH");





////////////

Promise.all([promise, promise3(), promise5]);

////////////

Promise.all([promise, promise2, promise3(), promise4(), promise5, promise6]);

///////////

Promise.any([promise, promise2, promise3(), promise4(), promise5, promise6]);


Promise.race([promise, promise2, promise3(), promise4(), promise5, promise6]);

Promise.race([promise2, promise, promise3(), promise4(), promise5, promise6])

