function ex1() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 90, 'promise1'));
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'promise2'));
    const promise3 = Promise.resolve("promise3 resolved by Promise.resolve()!");
    const promise4 = async () => {
        return "promise4 resolved by async function return statement!";
    };

    let promises = [promise1, promise3, promise4()];

    function implementAll(promises) {
        return new Promise((resolve, reject) => {
            let results = [];
            let counter = 0;
    
            promises.forEach((promise, index) => {
                promise.then((value) => {
                    results[index] = '<br>' + value;
                    counter++;
                    if (counter === promises.length) {
                        resolve(results);
                    }
                }).catch((error) => {  //otherwise catch error of rejected promise
                    reject(error);
                });
            });
        });
    }
    
    implementAll(promises)
        .then((results) => {
            document.getElementById('orit').innerHTML = '<p>All promises resolved:' + results + '</p>';
            console.log('All promises resolved:', results);
        })
        .catch((error) => {
            document.getElementById('orit').innerHTML = '<p>One or more promises rejected:' + error + '</p>';
            console.error('One or more promises rejected:', error);
        });
}

function ex2() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 90, 'promise1'));
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'promise2'));
    const promise3 = Promise.resolve("promise3 resolved by Promise.resolve()!");
    const promise4 = async () => {
        return "promise4 resolved by async function return statement!";
    };
    const promise5 = async () => {
        throw new Error("promise5 rejected by async throw new Error()!");
    };
    const promise6 = Promise.reject(new Error('Promise6 Rejected!'));

    let promises1 = [promise1, promise2, promise3, promise4()];
    let promises = [promise2, promise5(), promise6];

    function implementAny(promises) {
        return new Promise((resolve, reject) => {
            let results = [];
            let resolved = false;
            let counter = 0;
    
            promises.forEach((promise, index) => {
                promise.then((value) => {
                    if (!resolved) {
                        resolved = true;
                        resolve(value);
                    }
                }).catch((error) => {
                    results[index] = '<br>' + error;
                    if (++counter === promises.length) {
                        reject(results);
                    }
                });
            });
        });
    }
    
    
    implementAny(promises)
        .then((results) => {
            document.getElementById('orit2').innerHTML = '<p>The promise resolved is:' + results + '</p>';
            console.log('The promise resolved is:', results);
        })
        .catch((error) => {
            document.getElementById('orit2').innerHTML = '<p>All promises rejected:' + error + '</p>';
            console.error('All promises rejected:', error);
        });
}

function ex3() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 90, 'promise1')); // Has a timeout so won't resolve first
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'promise2'));
    const promise3 = Promise.resolve("promise3 resolved by Promise.resolve()!");
    const promise4 = async () => {
        return "promise4 resolved by async function return statement!";
    };
    const promise5 = async () => {
        throw new Error("promise5 rejected by async throw new Error()!");
    };
    //const promise6 = Promise.reject(new Error('Promise6 Rejected!'));

    let promises = [promise1, promise2, promise3, promise4()];

    function implementRace(promisesArray) {
        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                // If a promise resolves or rejects, resolve or reject the race promise
                promise.then(resolve).catch(reject);
            });
        });
    }
    
    implementRace(promises)
        .then((value) => {
            console.log('Resolved:', value); // This will log 'resolved1' because it's the first promise to resolve
        })
        .catch((reason) => {
            console.error('Rejected:', reason); 
        });
}


/* 14/04/24 homework:
4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
 */