/*
14/04/24 homework:
1) Implement function "all" - the function recieves an array of promises, and returns a new Promise, that is resolved only when all the promises are resolved, if one of them rejected - the returned promise is rejected.
2) Implement function "any" - the function recieves an array of promises, and returns a new Promise that resolves the resolved data from the first succeeded promise. if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.
3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise, that resolves the item that was resolved in the first success promise. if one of the promises failed - the returned promise is rejected with the rejected value.
4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
*/

function promAll(arr) {
  return new Promise((res, rej) => {
    const results = new Array(arr.length);
    let count = 0;

    arr.forEach((prom, index) => {
      prom
        .then((value) => {
          results[index] = value;
          count++;
          if (count == arr.length) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

function promAny(promises) {
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


function promRace(arr) {
  return new Promise((res, rej) => {
    arr.forEach((prom) => {
      let result;
      prom.then(
        (value) => {
          result = value;
          res(result);
        },
        (err) => {
          // the function that runs when the promise is rejected
          result = err;
          rej(err);
        }
      );
    });
  });
}