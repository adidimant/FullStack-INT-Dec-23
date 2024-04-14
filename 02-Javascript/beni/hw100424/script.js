/**
 * HW 10/04/24:
1) Read about the static function: Promise.all, Promise.any, Promise.race, Promise.resolve, Promise.reject
the Promise class exposes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
2) Implement your own ideas for 3 different async functions and 2 different promises (one of the promises should be Promise.resolve())
show an example of calling Promise.all, Promise.race and Promise.any about those promises and explain the results of your code.
3) you have the following code:
```js
const a = 7;
const response = await fetch("https://our-server.com");
const data = await response.json();
document.getElementById("user-data-el").innerHTML = data;
```
you have to create a promise that resolves the returned data, and use this promise to get the data

 */

// 2.1). Implement own ideas for 3 different async functions and 2 different promises, one of the promises should be Promise.resolve():
async function getCatFact() {
  const api = await fetch("https://catfact.ninja/fact").catch((error) => console.error("Error fetching joke api!", error));
  const data = await api.json();
  return new Promise((res) => {
    res(`Random cat fact: ${data.fact}`);
  });
}

async function getActivity() {
  const api = await fetch("https://www.boredapi.com/api/activity").catch((error) => console.error(error));
  const data = await api.json();

  return new Promise((res, rej) => {
    if (!api.ok || data.error) {
      rej("Error fetching activity api");
    }
    res(`Try this activity: ${data.activity}`);
  });
}

async function getJoke() {
  const api = await fetch("https://official-joke-api.appspot.com/jokes/random");
  const data = await api.json();

  return new Promise((res, rej) => {
    if (!api.ok) {
      rej("Failed to fetch joke");
    }
    res(`Here's a joke: ${data.setup} ${data.punchline}`);
  });
}

const getBpi = new Promise((res, rej) => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((json) =>
      res(`1 Bitcoin = ${json.bpi.USD.rate}$ as of ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} at ${new Date().getHours()}:${new Date().getMinutes()}`)
    )
    .catch((err) => {
      console.error("Error fetching Bitcoin Price Index:", err);
      rej(err);
    });
});

const getSeven = Promise.resolve(7);

// 2.2) show an example of calling Promise.all, Promise.race and Promise.any about those promises and explain the results of your code:

// Promise.all([]) will return resolved ONLY when ALL promises passed in the method's array are resolved (proceeding to the Promise.all([]).then() method).
// If EVEN ONE of the promises are rejected, the Promise.all([]) method will be rejected (proceeding to the Promise.all([]).catch() method).
Promise.all([getCatFact(), getActivity(), getJoke(), getBpi, getSeven])
  .then((values) => {
    console.log("Promise all:", values);
  })
  .catch((err) => {
    console.error("Error resolving all promises:", err);
  });

// Promise.race([]) will return the FIRST promise to get EITHER resolved OR rejected.
// If the first result it gets is some promise's resolve, it will settle with that resolve value and proceed to the Promise.race([]).then() method.
// If the first result it gets is some promise's reject, it will settle with that reject value and proceed to the Promise.race([]).catch() method.
Promise.race([getCatFact(), getActivity(), getJoke(), getBpi, getSeven])
  .then((resolved) => {
    console.log("Promise race:", resolved);
  })
  .catch((rejected) => {
    console.err("A promise was first rejected:", rejected);
  });

// Promise.any([]) will return the FIRST promise to get resolved, it will settle with that resolve value and proceed to the Promise.any([]).then() method.
// IF ALL promises are rejected, it will reject and proceed to the Promise.any([]).catch() method, and contain an array of all of the inputs' reject reasons.
Promise.any([getCatFact(), getActivity(), getJoke(), getBpi, getSeven])
  .then((result) => {
    console.log("Promise any:", result);
  })
  .catch((err) => {
    console.error("All promises were rejected:", err);
  });

/**
   * 3) you have the following code:
```js
const a = 7;
const response = await fetch("https://our-server.com");
const data = await response.json();
document.getElementById("user-data-el").innerHTML = data;
```
you have to create a promise that resolves the returned data, and use this promise to get the data
 */
async function getData() {
  const a = 7;
  const response = await fetch("https://our-server.com");
  const data = await response.json();
  return new Promise((res, rej) => {
    if (a == 7) {
      res(data);
    }
    rej();
  });
}
getData()
  .then((response) => {
    document.getElementById("user-data-el").innerHTML = response;
  })
  .catch((error) => {
    console.error("Error getting data:", error);
  });
