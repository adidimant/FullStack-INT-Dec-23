const promise = Promise.resolve([]);


const promise2 = new Promise((res) => {
    res([]);
});

const promise2 = Promise.reject('search again');

const promise2 = new Promise((res, rej) => {
    rej('search again');
});

promise2.then((value) => {
    console.log(value);
}).catch((error) => {});

// Forever pending promise:
const promise3 = new Promise((res, rej) => {});

// Promise.all:

// Simulation - user registered:
const saveUserInDB = async (user) => {
  return 1;
  // call and save the user in db
};

const notifyMail = async (user) => {
  return 2;
  // send email about registration
};

const sendSlackMessageToManagers = async (user) => {
  return 3;
  // send here the slack message using Slack company API
};

await saveUserInDB(user);
await notifyMail(user);
await sendSlackMessageToManagers(user);

try {
  const results = await Promise.all([
    saveUserInDB(user),
    notifyMail(user),
    sendSlackMessageToManagers(user)
  ]);
} catch(err) {
  console.log(err);
}

// Promise.any():

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"

const result = await Promise.any(promises).catch((err) => {console.log(err)});

// result contain the resolved value from the first promise (in the array) that was resolved
// if all the promises are rejected - then in the .catch method, the err is an array of Errors (the reasons, by the order of the provided promises)


// Promise.race:
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise5, promise6]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});


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
 * Use Promice.any on only rejected promises, and catch the error or print the resolved value
 
*/

const prom1 = new Promise((res, rej) =>{
  setTimeout(res, 100, 1);
})

const prom2 = new Promise((resolve, reject) => {
  reject(new Error("Promise 2 rejected!"));
});

const prom3 = Promise.resolve("promise3 resolved by Promise.resolve()!");

const prom4 = async () => {
  return "promise4 resolved by async function return statement!";
};

const prom5 = async () => {
  throw new Error("promise5 rejected by async throw new Error()!");
};

const prom6 = Promise.reject(new Error('Promise6 Rejected!'));

const resolvedPromises = [prom1, prom3, prom4()];
const allPromises = [prom1, prom2, prom3, prom4(), prom5(), prom6];

const results = await Promise.all(resolvedPromises);
console.log("Promise.all with only resolvedPromises", results);

const results2 = await Promise.all(allPromises).catch((errors) => {
  console.warn("Promise.all with resolved and rejected promises, the errors:", errors);
});

const result3 = await Promise.any(allPromises);
console.log("Promise.any on all promises, result: ", result3);

const result4 = await Promise.race(allPromises);
console.log("Promise.race on all promises, first promise resolved immediately, result:", result4);

const result5 = await Promise.race([
  prom6, ...allPromises
]).catch((error) => {
  console.warn("Promise.race on all promises, first promise rejected, error: ", error);
});

const result6 = await Promise.any([prom6, prom2, prom5()]).catch((errors) => {
  console.warn("Promise.any on only rejected promises, errors: ", errors);
});