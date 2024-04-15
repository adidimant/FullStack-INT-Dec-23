console.log(`first`)
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

const promise1 = new Promise((res, rej) =>{
    setTimeout(res, 100, 1)
})
const promise2 = new Promise((res, rej) =>{
    setTimeout(rej, 100, 2)
})
const promise3 = Promise.resolve(`Promise 3 resolved`)
const promise4 = async () =>{
    return new Promise((res,rej)=> res(`Promise 4 resolved`));
}
const promise5 = async () =>{
    return new Promise((res,rej)=> rej(`Promise 5 rejected`));
}
const promise6 = Promise.reject(`promise 6 rejected`)


//success because all the promises resolved
await Promise.all([promise1,promise3, promise4 ])
.then( values => console.log(values))
.catch(err =>{
    console.log(err)
})


// fails because not all the promises resolved
await Promise.all([promise1,promise2, promise3, promise4, promise5, promise6 ])
.then( values => console.log(`second all: ${values}`))
.catch(err =>{
    console.log(`Error at the second Promise.all ${err}`)
})

// prints the first promise to resolve
await Promise.any([promise1,promise2, promise3, promise4, promise5, promise6 ])
.then( value => console.log(`any: ${value}`))
.catch(err =>{
    console.log(`Error at the second Promise.all ${err}`)
})

export {}
