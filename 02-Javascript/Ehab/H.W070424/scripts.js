/*
Write a promise of your own with two ways: 1) standard way via new Promise, 2) write an async function
your promise & async function should contain something we didn't showed in class
show how you await the promise, gets the resolved value, and how you use .then for executing a function 
when the promise is resolved.
 */

const fs = require('fs');
let readFromFile = new Promise((res,rej)=>{
    fs.readFile('.\\02-Javascript\\Ehab\\H.W070424\\file.txt', 'utf8', (err, data) => {
        if (err) {
            rej(err);
        } else {
            res(data);
        }
    });
});

async function readFromFile2(){
    try{
        return await fs.promises.readFile('.\\02-Javascript\\Ehab\\H.W070424\\file.txt', 'utf8');
    }catch(err){
        return err;
    }
}

readFromFile.then((data)=> console.log('new Promise:',data));
readFromFile2().then((data)=> console.log('async function:',data));

/*
2) Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
when the first promise is resolved - it means that all the promises are resolved
*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 started");
        Promise.all([promise2, promise3, promise4]).then(() => {
            console.log("resolving Promise 1");
            resolve();
        });
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 resolved");
        resolve();
    }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3 resolved");
        resolve();
    }, 1000);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 4 resolved");
        resolve();
    }, 1000);
});
promise1.then(() => {
    return;
});

/*
3) Write the function `getPromiseWithStatus`, the function gets a promise, and returns the promise 
with an extra field with its `status`: "pending"/"fulfilled"/"rejected"
hint: use the .then,.catch functions on the received promise
*/
/**
 * @param {*} promise - a promise to check
 * @returns a promise with `status` field, that says the status of the promise (at the moment the function called)
 */
function getPromiseWithStatus(promise) {
    let isPending = true;
    let isFulfilled = false;
    let isRejected = false;
    promise.status = 'pending';
  
    const outerPromise = new Promise((res) => {
      promise.then(() => {
        isPending = false;
        isFulfilled = true;
        console.log('entered .then');
        res();
      }).catch(() => {
        isPending = false;
        isRejected = true;
        console.log('entered .catch');
        res();
      }).finally(() => {
        res();
      });
    });
  
    outerPromise.then(() => {
      if (isFulfilled) {
        promise.status = 'fulfilled';
        console.log('entered fulfilled');
      } else { // isRejected == true
        promise.status = 'rejected';
        console.log('entered rejected');
      }
    });
    return promise;
}


console.log(getPromiseWithStatus(promise1));

