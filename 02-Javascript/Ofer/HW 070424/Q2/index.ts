console.log(`first`)

/*
2) Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
when the first promise is resolved - it means that all the promises are resolved
*/
const myPromise1 = new Promise((res, rej) =>{
    console.log(`Promise 1 started!`)
    setTimeout(() =>{
        Promise.any([myPromise2, myPromise3, myPromise4]).then((values) =>{
            console.log(`all promises 1 to 4 finished and returned values: ${values}`)
            res(`Promise 1 Resolved`)
        })

    },1000)

})
const myPromise2 = new Promise((res, rej) =>{
    console.log(`Promise 2 started`)
    setTimeout(res, 1000, `Promise 2 Resolved`)
})
const myPromise3 = new Promise((res, rej) =>{
    console.log(`Promise 3 started`)
    setTimeout(res, 7000, `promise 3 finished`)
})

const myPromise4 = Promise.resolve(`Promise 4 Resolved`)
