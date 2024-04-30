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


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promise 2 rejected")), 1000);
});


const promise3 = Promise.resolve("Promise 3 resolved immediately");


async function asyncResolve() {
    return "Promise 4 resolved by async function";
}


async function asyncReject() {
    throw new Error("Promise 5 rejected by async function");
}


const promise6 = Promise.reject(new Error("Promise 6 rejected immediately"));


promise1.then(result => console.log(result)).catch(error => console.error(error.message));
promise2.then(result => console.log(result)).catch(error => console.error(error.message));
console.log(promise3); // Logs the immediate resolution
asyncResolve().then(result => console.log(result)).catch(error => console.error(error.message));
asyncReject().then(result => console.log(result)).catch(error => console.error(error.message));
promise6.then(result => console.log(result)).catch(error => console.error(error.message));


Promise.all([promise1, promise3, promise4()])
    .then(results => {
        console.log("All resolved values:", results);
    })
    .catch(error => {
        console.error("Error in Promise.all (resolved promises):", error);
    });


    Promise.all([promise1, promise2, promise3, promise4(), promise5(), promise6])
    .then(results => {
        console.log("All results:", results);
    })
    .catch(error => {
        console.error("Error in Promise.all (all promises):", error);
        // Explanation of rejection
        console.log("This Promise.all was rejected because at least one promise was rejected. Promise.all rejects immediately upon any of the promises rejecting.");
    });

    
    Promise.any([promise1, promise2, promise3, promise4(), promise5(), promise6])
    .then(result => {
        console.log("First resolved value (Promise.any):", result);
    })
    .catch(error => {
        console.error("Error in Promise.any:", error);
    });



    Promise.race([promise3, promise1, promise2, promise4(), promise5(), promise6])
    .then(result => {
        console.log("First settled value (resolved first, Promise.race):", result);
    })
    .catch(error => {
        console.error("Error in Promise.race (resolved first):", error);
    });


    Promise.race([promise6, promise1, promise2, promise3, promise4(), promise5()])
    .then(result => {
        console.log("First settled value (rejected first, Promise.race):", result);
    })
    .catch(error => {
        console.error("First rejection (rejected first, Promise.race):", error);
    });
