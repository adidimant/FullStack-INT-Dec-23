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

const promise1 = new Promise((resolve, reject) => {
    resolve('First Promise Resolved Successfully!')
});

const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Promise 2 rejected!"));
});

const promise3 = Promise.resolve("Promise 3 resolved successfully!");

const promise4 = async () => {
    return 'Promise 4 resolved successfully!';
};

const promise5 = async () => {
    throw new Error('Promise 5 rejected!')
};

const promise6 = Promise.reject(new Error('Promise6 Rejected!'));

await Promise.all([promise1, promise3, promise4()]).then((result) => {
    console.log(result);
});

await Promise.any([promise1, promise2, promise3, promise4(), promise5(), promise6]).then((result) => {
    console.log(result);
});

await Promise.race([promise4(), promise1, promise2, promise3, promise5(), promise6]).then((result) => {
    console.log(result);
});
await Promise.race([promise5(), promise4(), promise1, promise2, promise3, promise6]).then((result) => {
    console.log(result);
});



