/* 1) Implement function "all" - the function recieves an array of promises,
 and returns a new Promise, that is resolved only when all the promises are resolved, 
 if one of them rejected - the returned promise is rejected. */

 async function all(promises) {
    return await new Promise((resolve, reject) => {
        return Promise.all(promises)
          .then((values) => {
            resolve(values);
          })
          .catch((error) => {
            reject(error);
          });
      });
  }


all([
    new Promise((resolve, reject) => {
        reject("my error");
    }),
    new Promise((resolve, reject) => {
        resolve("test123");
    }),
    new Promise((resolve, reject) => {
        resolve(5);
    }),
]).then((result) => {
    console.log(result);
}).catch(err => {
    console.error(err);
});

  //explanation//
/*This function takes an array of promises as input,
creates a new Promise, and then uses Promise.all to wait for all promises in the array to settle.
If all promises are resolved, it resolves the new Promise with an array of resolved values. 
If any promise is rejected, it rejects the new Promise with the reason of the first rejected promise */

//------------------------------------------------------------------------------------------------------//

/* 2) Implement function "any" - the function recieves an array of promises,
and returns a new Promise that resolves the resolved data from the first succeeded promise. 
if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.*/


async function first(promises) {
    return await new Promise((resolve, reject) => {
        return Promise.any(promises)
          .then((values) => {
            resolve(values);
          })
          .catch((error) => {
            reject(error);
          });
      });
  }

first([
    new Promise((resolve, reject) => {
        reject("my error");
    }),
    new Promise((resolve, reject) => {
        resolve("test123");
    }),
    new Promise((resolve, reject) => {
        resolve(5);
    }),
]).then((result) => {
    console.log(result);
}).catch(err => {
    console.error(err);
});

// function any(promises) {
//     return new Promise((resolve, reject) => {
//         const errors = [];
//         let resolved = false;

//         promises.forEach((promise) => {
//             promise.then((value) => {
//                 if (!resolved) {
//                     resolved = true;
//                     resolve(value);
//                 }
//             }).catch((error) => {
//                 errors.push(error);
//                 if (errors.length === promises.length) {
//                     reject(errors);
//                 }
//             });
//         });
//     });
// }

  //explanation//
  /*This function takes an array of promises, iterates over them, 
  and resolves the returned promise with the value of the first promise that resolves successfully. 
  If none of the promises resolve, it rejects with an array of errors from all the promises.*/
//------------------------------------------------------------------------------------------------------//

 /* 3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise,
 that resolves the item that was resolved in the first success promise. 
 if one of the promises failed - the returned promise is rejected with the rejected value. */

 function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((value) => {
                resolve(value);
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

  //explanation//
/*This function takes an array of promises and returns a new promise. 
It iterates over the promises and resolves or rejects the returned promise based on the outcome of the 
first promise that settles (either resolves or rejects).
If the first settled promise resolves, the returned promise is resolved with the resolved value of that promise.
If the first settled promise rejects, the returned promise is rejected with the rejected value of that promise.*/
//------------------------------------------------------------------------------------------------------//

/*4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()). */

function promiseResolve(value) {
    return new Promise((resolve) => {
        resolve(value);
    });
}

function promiseReject(reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}

/* These functions create and return promises that are immediately settled. 
promiseResolve returns a promise that is resolved with the provided value,
 while promiseReject returns a promise that is rejected with the provided reason.*/