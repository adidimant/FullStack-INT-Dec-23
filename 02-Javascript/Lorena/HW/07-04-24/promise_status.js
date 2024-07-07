//3) Write the function `getPromiseWithStatus`, the function gets a promise, and returns the promise with
// an extra field with its `status`: "pending"/"fulfilled"/"rejected"
//hint: use the .then,.catch functions on the received promise
//```js
//function getPromiseWithStatus(promise) {

//}


function getPromiseWithStatus() {
    return new Promise((resolve) => {
      promise.then((value) => {
        resolve({ status: 'fulfilled', value: value });
      }).catch((error) => {
        resolve({ status: 'rejected', reason: error });
      });
  
      // If the input promise is pending, resolve with status "pending"
      if (promise.status === undefined) {
        resolve({ status: 'pending' });
      }
    });
  }
  