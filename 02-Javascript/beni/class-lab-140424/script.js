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

const promise1 = new Promise((res) => {
  res("promise1 resolved by res()!");
});

const promise2 = new Promise((res, rej) => {
  rej("promise2 rejected by rej()!");
});

const promise3 = Promise.resolve("promise3 resolved by Promise.resolve()!");

const promise4 = async () => {
  return "promise4 resolved by async function return statement!";
};

const promise5 = async () => {
  throw new Error("promise5 rejected by async throw new Error()!");
};

const promise6 = Promise.reject("promise6 rejected by Promise.reject()!");

const allProms = [promise1, promise2, promise3, promise4(), promise5(), promise6];
const allProms2 = [promise6, promise1, promise2, promise3, promise4(), promise5()];
const resProms = [promise1, promise3, promise4()];
const rejProms = [promise2, promise5(), promise6];

Promise.all(resProms).then((value) => {
  console.log("resolved Promise.all() value", value);
});

Promise.all(rejProms).catch((err) => {
  console.log("rejected Promise.all() error:", err);
});

Promise.any(allProms).then((value) => {
  console.log("first promise resolved in any:", value);
});

Promise.race(allProms).then((value) => {
  console.log("first promise resolved in race:", value);
});

Promise.race(allProms2)
  .then((value) => {
    console.log("this will never log");
  })
  .catch((err) => {
    console.log("first promise rejected in race:", err);
  });
