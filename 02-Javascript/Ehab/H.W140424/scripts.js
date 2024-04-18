/*
1) Implement function "all" - the function recieves an array of promises, and returns a new Promise, 
that is resolved only when all the promises are resolved, 
if one of them rejected - the returned promise is rejected.
*/
function all(promises){
    return new Promise(async(res,rej)=>{
        let counter =0;
        for(let i=0;i < promises.length;i++){
            await promises[i].then(()=>{
                counter++;
            }).catch(()=> {
                rej('rejected');
            });
        }
        if(counter === promises.length){
            res('resolved');
        }
        
    });
}
const promise1 = Promise.resolve(111);
const promise2 = Promise.resolve(222);
const promise3 = Promise.resolve(333);
const promise4 = Promise.reject();
all([promise1,promise2,promise3,promise4]).then((value)=> console.log(value)).catch((value)=> console.log(value));//rejected
all([promise1,promise2,promise3]).then((value)=> console.log(value)).catch((value)=> console.log(value));//resolved

/*
2) Implement function "any" - the function recieves an array of promises, and returns a new Promise 
that resolves the resolved data from the first succeeded promise. 
if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.
*/

function any(promises) {
    return new Promise((res, rej) => {
        const errors = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i]
            .then(value => {
                res(value); 
            })
            .catch(error => {
                errors.push(error);
                if (errors.length === promises.length) {
                    rej(errors);
                }
            });
        }
    });
}
const promise5 = new Promise((res,rej) => setTimeout(res,4000,'promise5'));
const promise6 = new Promise((res,rej) => setTimeout(res,1000,'promise6'));
const promise7 = Promise.reject('reject promise 7');
const promise8 = Promise.reject('reject promise 8');
const allPromises = [promise5,promise6,promise7,promise8];
const allPromisesReject=[promise7,promise8];
any(allPromises).then((value)=> console.log(value)).catch((value)=> console.log(value));
//any(allPromisesReject).then((value)=> console.log(value)).catch((value)=> console.log(value));
/*
3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise, 
that resolves the item that was resolved in the first success promise. 
if one of the promises failed - the returned promise is rejected with the rejected value.
*/

function race(promises){
    return new Promise(async(res, rej) => {
        let resolvedValue;
        let counter = 0;
        let flag =false;
        for (let i = 0; i < promises.length; i++) {
            await promises[i].then((value) => {
                counter++;
                if(!flag){
                    resolvedValue = value;
                    flag=true;
                }
            }).catch(error => {
                rej('rejected: '+error);
                return;
            });
        }
        if(counter === promises.length){
            res(resolvedValue);
        }
    });
}
const promise9 = new Promise((res,rej) => setTimeout(res,1000,'promise9'));
const promise10 = new Promise((res,rej) => setTimeout(res,4000,'promise10'));
const promise11 = new Promise((res,rej) => setTimeout(rej,5000,'promise11'));
race([promise9, promise10,promise11]).then(value => console.log(value)).catch(err => console.log(err));

/*
4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
*/

function promiseResolve(value){
    return new Promise((res,rej) => res(value));
}
promiseResolve(10).then(value => console.log(value));

function promiseReject(value){
    return new Promise((res,rej) => rej(value));
}
promiseReject(11).catch(value => console.log(value));