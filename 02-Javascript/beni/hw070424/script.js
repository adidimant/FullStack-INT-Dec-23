/**
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
 */

const img = document.getElementById("dog-pic");

// 1.1). via new Promise:
const getData = new Promise((res) => {
  const data = fetch("https://dog.ceo/api/breeds/image/random");
  res(data);
});

const checkData = new Promise((res) => {
  getData
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      res(getData);
    })
    .catch((error) => console.error("Something went wrong:", error));
});

const getJson = new Promise((res) => {
  const json = checkData.then((data) => data.json());
  res(json);
});

const getImageUrl = new Promise((res) => {
  const imageUrl = getJson.then((url) => url.message);
  res(imageUrl);
});

// 1.2). via async function:
async function getDogPic() {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const response = await data.json();
    const url = response.message;
    img.src = url;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

//2). promise chain:
// getData.then(() => checkData.then(() => getJson.then(() => getImageUrl.then((url) => console.log(url)))));
getImageUrl.then((url) => {
  img.src = url;
});

//3). function to get a promise's status:
function getPromiseWithStatus(promise) {
  promise.status = "pending";
  promise
    .then(() => {
      promise.status = "resolved";
      return promise;
    })
    .catch(() => {
      promise.status = "rejected";
      return promise;
    });
  return promise;
}

const pr = new Promise((res, rej) => {
  setTimeout(res, 4000);
});

const prStatus = getPromiseWithStatus(pr);

prStatus
  .then(() => {
    console.log(prStatus.status);
  })
  .catch(() => {
    console.log(prStatus.status);
  });
