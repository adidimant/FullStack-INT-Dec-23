/**
 * @param {*} promise - a promise to check
 * @returns a promise with `status` field, that says the status of the promise (at the moment the function called)
 */
function getPromiseWithStatus(promise) {
  let isPending = true;
  let isFulfilled = false;
  let isRejected = false;
  promise.status = 'pending';

  const outerPromise = new Promise((res) => {
    promise.then(() => {
      isPending = false;
      isFulfilled = true;
      console.log('entered .then');
      res();
    }).catch(() => {
      isPending = false;
      isRejected = true;
      console.log('entered .catch');
      res();
    }).finally(() => {
      res();
    });
  });

  outerPromise.then(() => {
    if (isFulfilled) {
      promise.status = 'fulfilled';
      console.log('entered fulfilled');
    } else { // isRejected == true
      promise.status = 'rejected';
      console.log('entered rejected');
    }
  });

  return promise;
}



const obj = {
  key1: 'som-value',
  lastName: 'Lorena',
};

obj.lastName = 'Frank';
obj.newField = 'Adi';

// some operation
obj.status = 'fulfilled';

obj = {
  status: 'fulfilled'
};