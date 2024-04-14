let myPromise = new Promise(function(res, rej) {
  try {
      console.log("starting executing promise");
      setTimeout(res, 4000);
  } catch(err) {
      rej(err);// when error
  } 
});

myPromise.then(() => console.log("timer finished!"));

// Or:
async function main() {
  await myPromise;
  console.log("timer finished!");
}

main();

// -----------

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise2 = new Promise(function(resolve, reject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    setTimeout(() => resolve("OK"), 8000);
  } else {
    reject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);});

// Or you can also:
myPromise.then(
  function(value) {myDisplayer(value);} // value = "OK", the resolved value
).catch(function(error) {myDisplayer(error);});
console.log('log1'); // prints "log1" immediately, but registering the "task" that inside the .then function

const response = await myPromise; // response = "OK"
console.log('log2');


// Simulating an error in promise:

let promise = new Promise((res, rej) => {
  rej("failed");
});

await promise; // rejected promise, error thrown and never prints "finished"
console.log("finished");

// A promise that forever in "pending" state, never resolved

let promise2 = new Promise((res, rej) => {
  console.log("hey!");
  res("ok");
});

const promiseStatus = await promise2;
console.log('status', promiseStatus);
console.log("finished");

const myAsyncFun = async () => {
  const a = 7;
  const response = await fetch("https://our-server.com");
  const data = await response.json();
  document.getElementById("user-data-el").innerHTML = data;
  return data;
};

const myAsyncFun2 = async () => {
  console.log('hey!');
  undefined.firstName;
};

myAsyncFun2().then((value) => console.log('fulfilled')).catch((error) => console.log(error));

const data = await myAsyncFun();
// waiting until myAsyncFun() promise is resolved
console.log("asd");

const a = 6;
let b = calculateSomething(); // 2s
let taxRefund = calcTaxRefund(); // 1.5s

// the same implementation as a promise (that's what javascript is doing for us in async function)
const promise4 = new Promise(async (res, rej) => {
  try {
    const a = 7;
    const response = await fetch("https://our-server.com");
    const data = await response.json();
    document.getElementById("user-data-el").innerHTML = data;
    res(data);
  } catch(err) {
    rej(err);
  }
});

promise4.then((value) => {

}).catch((error) => {

}).finally((valueOrError) => {

});

async function refreshDataFromServer() {
  const newData = await fetch('yourserver.com/api/posts');
  return await newData.json();
}

const value = refreshDataFromServer(); // value is promise!!! this is not the data
const resolvedData = await value;