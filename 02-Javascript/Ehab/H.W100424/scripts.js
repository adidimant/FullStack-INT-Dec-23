/*
1) Read about the static function: Promise.all, Promise.any, Promise.race, Promise.resolve, Promise.reject
the Promise class exposes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

//Promise.all => return resolved when all promises passed in the method's array are resolved.
// Promise.any => return the first promise get resolved.
//Promise.race => return the first promise get resolved or rejected.
//Promise.resolve => resolve the promise.
//Promise.reject => reject the promise.
/*
2.1) Implement your own ideas for 3 different async functions and 2 different promises (one of the promises should be 
Promise.resolve())
*/

async function randomJoke(){
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
    const data = await response.json();
    console.log(data.setup + ' ' +data.punchline);
}
randomJoke();

const myName = Promise.resolve('Ehab');


/*
2.2)show an example of calling Promise.all, Promise.race and Promise.any about those promises and explain 
the results of your code.
*/

//Promise.all
const promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1 started");
    const promise2 = new Promise((resolve, reject) => {
        console.log("Promise 2 started");
        setTimeout(() => {
            console.log("Promise 2 resolved");
            resolve();
        }, 1500);
    });
    const promise3 = new Promise((resolve, reject) => {
        console.log("Promise 3 started");
        setTimeout(() => {
            console.log("Promise 3 resolved");
            resolve();
        }, 1000);
    });
    Promise.all([promise2, promise3]).then(() => {
        console.log("Promise 1 resolved");
        resolve();
    });
    
});

// Promise.any
const promiseA = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 5000) + 1000;//random integer between 1000 (inclusive) and 6000 (exclusive)
    console.log(time);
    setTimeout(() => {
      resolve("PromiseA");
    },time);
});
const promiseB = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 5000) + 1000;//random integer between 1000 (inclusive) and 6000 (exclusive)
    console.log(time);
    setTimeout(() => {
      resolve("PromiseB");
    },time);
});
Promise.any([promiseA, promiseB]).then((result) => {
    console.log("Promise.any winner:", result);
});

/*
3) you have the following code:
```js
const a = 7;
const response = await fetch("https://our-server.com");
const data = await response.json();
document.getElementById("user-data-el").innerHTML = data;
```
you have to create a promise that resolves the returned data, and use this promise to get the data
*/

async function ex3 (){
    const a = 7;
    //https://our-server.com
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
    const data = await response.json();
    return new Promise((res,rej)=>{
        if(a===7)
            res(data);
        else
            rej(error);
    });
}
ex3().then((data)=>{
    document.getElementById('user-data-el').innerHTML = data.setup + '<br>' + data.punchline;
}).catch((error)=> console.log(error));

