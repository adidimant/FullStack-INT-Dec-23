// 1) Write a promise of your own with two ways: 1) standard way via new Promise, 2) write an async function
//your promise & async function should contain something we didn't showed in class
//show how you await the promise, gets the resolved value, and how you use .then for executing a function when the promise is resolved.



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = true ? { data: 'we have data :)' } : null;
        if (data) {
            resolve(data);
      } else {
            reject(data);
      }
    }, 1000);
});

promise
.then((result) => {
    console.log(result);
    console.log('waiting for next then...')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve({ justForExample: {...result}});
        }, 2000);    
      });
})
.then((result) => {
    console.log(result);
    console.log('waiting for next then...')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve({ justForExample: {...result}});
        }, 3000);    
      });
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
    console.error('oh oh...');
}).finally(() => {
    console.log('finally...')

});
