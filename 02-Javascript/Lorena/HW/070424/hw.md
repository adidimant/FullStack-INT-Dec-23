** HW 07/04/24 **
1) Write a promise of your own with two ways: 1) standard way via new Promise, 2) write an async function
your promise & async function should contain something we didn't showed in class
show how you await the promise, gets the resolved value, and how you use .then for executing a function when the promise is resolved.

2) Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
when the first promise is resolved - it means that all the promises are resolved

3) Write the function `getPromiseWithStatus`, the function gets a promise, and returns the promise with an extra field with its `status`: "pending"/"fulfilled"/"rejected"
hint: use the .then,.catch functions on the received promise
```js
function getPromiseWithStatus(promise) {

}
```