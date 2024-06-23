14/04/24 homework:
1) Implement function "all" - the function recieves an array of promises, and returns a new Promise, that is resolved only when all the promises are resolved, if one of them rejected - the returned promise is rejected.
2) Implement function "any" - the function recieves an array of promises, and returns a new Promise that resolves the resolved data from the first succeeded promise. if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.
3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise, that resolves the item that was resolved in the first success promise. if one of the promises failed - the returned promise is rejected with the rejected value.
4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
