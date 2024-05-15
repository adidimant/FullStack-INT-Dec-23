const promise = new Promise((res, rej) => {
    try {
        res("promise is resolve")
    } catch(arr) {
        rej("reject-promise")
    }
});




const promise2 = new Promise((res, rej) => {
    try {
        res("promise 2 is resolve")
    } catch(arr) {
        rej("reject-promise2")
    }
});


const promise3 = new Promise((res, rej) => {
    try {
        res("promise 2 is resolve")
    } catch(arr) {
        rej("reject-promise2")
    }
});

const promise4 = new Promise((res, rej) => {
    let x = 6;
    if (x < 6) {
        res("good number")
    } else {
        rej("oohh no")
    }
})




const promises = [promise, promise2, promise3];
const promises2 = [promise, promise2, promise3, promise4];


function allPromisesRes(promises) {
    return new Promise((resolve, reject) => {
      let completedCount = 0;
      const results = [];
  
      promises.forEach((promise, index) => {
        promise.then(result => {
          results[index] = result;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        }).catch(error => {
          reject(error);
        });
      });
    });
  }
  