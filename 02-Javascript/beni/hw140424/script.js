/**
 * 14/04/24 homework:
1) Implement function "all" - the function recieves an array of promises, and returns a new Promise, that is resolved only when all the promises are resolved, if one of them rejected - the returned promise is rejected.
2) Implement function "any" - the function recieves an array of promises, and returns a new Promise that resolves the resolved data from the first succeeded promise. if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.
3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise, that resolves the item that was resolved in the first success promise. if one of the promises failed - the returned promise is rejected with the rejected value.
4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
 */

/**
 * 1) Implement function "all" - the function recieves an array of promises, and returns a new Promisme,
 * that is resolved only when all the promises are resolved, if one of them rejected - the returned promise is rejected.
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

/**
 * 2) Implement function "any" - the function recieves an array of promises, and returns a new Promise that resolves the resolved data from the first succeeded promise.
 * if no promises succeeded (resolved) - the returned promise is rejected that rejects all the errors in array.
 */
function promAny(arr) {
  return new Promise((res, rej) => {
    const results = [];
    const errors = [];
    let count = 0;
    let errCount = 0;

    arr.forEach((prom, index) => {
      prom
        .then((value) => {
          results.push(value);
          count++;
          if (count > 0) {
            res(results[0]);
          }
        })
        .catch((err) => {
          errors[index] = err;
          errCount++;
          if (errCount == arr.length) {
            rej(errors);
          }
        });
    });
  });
}

/**
 * 3) [Bonus] - Implement "race" function, recieves an array of promises, and returns a resolved promise, that resolves the item that was resolved in the first success promise.
 * if one of the promises failed - the returned promise is rejected with the rejected value.
 */
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
          result = err;
          rej(err);
        }
      );
    });
  });
}

// 4) implement Promise.resolve function and Promise.reject function (call them promiseResolve() and promiseReject()).
function promiseResolve(prom) {
  return new Promise((res) => {
    res(prom);
  });
}
function promiseReject(prom) {
  return new Promise((res, rej) => {
    rej(prom);
  });
}

const prom1 = new Promise((res, rej) => {
  const getRes = () => {
    return res("prom1 is resolved");
  };
  const getRej = () => {
    return rej("prom1 is rejected");
  };
  setTimeout(getRej, 2000);
});

const prom2 = new Promise((res, rej) => {
  const getRes = () => {
    return res("prom2 is resolved!");
  };
  setTimeout(getRes, 1500);
});

const prom3 = Promise.reject("prom3 is rejected!");

const proms = [prom1, prom2, prom3];

const results = await promAll(proms);
const all2 = Promise.all(proms);
const any = promAny(proms);
const any2 = Promise.any(proms);
const race = promRace(proms);
const race2 = Promise.race(proms);
const resPromise = promiseResolve("resolved promise");
const rejPromise = promiseReject("rejected promise");
