//1
// Write a promise of your own with two ways: 1) standard way via new Promise, 2) write an async function
//your promise & async function should contain something we didn't showed in class
//show how you await the promise, gets the resolved value, and how you use .then for executing a function when the promise is resolved.

let myPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        const data= false ? {data: 'we heva data'} : null;
        if(data)
            resolve(data);
        else
            reject(data);
    }, 1000);
});

myPromise.then((result)=>{
    console.log(result);
})
.catch((erro)=>{
    console.error('oh oh...');
})

function resolveAfter2Seconds(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('rsesolve');
        },2000)
    });
}

async function asyncCall(){
    console.log('caliing');
    const result= await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();

//2
//Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
//when the first promise is resolved - it means that all the promises are resolved

let myPromise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise 1 resolved');
        resolve('Result from Promise 1');
    },1000)
});

let myPromise2=myPromise1.then((result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('promise 2 resolved');
            resolve('Result from Promise 2')
        },1000)
    })
});

let myPromise3=myPromise2.then((result)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('promise 3 resolved');
            resolve('Result from Promise 3');
        },1000)
    })
});

let myPromise4=myPromise3.then((result)=>{
    return new Promise((resolve, reject)=>{
        console.log('promise 4 resolved');
        resolve('Result from Promise 4');
    },1000)
});

myPromise4.then((finalResult) => {
    console.log("All promises resolved!");
    console.log("Final result:", finalResult);
});

//3 Write the function `getPromiseWithStatus`, the function gets a promise, and returns the promise with an extra field with its `status`: "pending"/"fulfilled"/"rejected"
//hint: use the .then,.catch functions on the received promise
//function getPromiseWithStatus(promise) {
//}

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
  
  const obj = {
    key1: 'som-value',
    lastName: 'Lorena',
  };
  
  obj.lastName = 'Frank';
  obj.newField = 'Adi';
  
  // some operation
  obj.status = 'fulfilled';
  
  obj = {
    status: 'fulfilled'
  };