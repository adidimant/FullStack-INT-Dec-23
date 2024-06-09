HW 10/04/24:
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
