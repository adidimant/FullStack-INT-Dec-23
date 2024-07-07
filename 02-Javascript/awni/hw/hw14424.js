// // 1)

// function all(promises) {
//     return new Promise((resolve, reject) => {
//         Promise.all(promises).then(results => {
//             resolve(results)
//         }).catch(error => {
//             reject(error)
//         });
//     });
// };

// const promises = [
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject("Error"), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000))
// ]

// all(promises).then(results => {
//     console.log("All Promises Resolved", results);
// }).catch(error => {
//     console.error("One Of The Promiese Rejected", error);
// });


// // 2)

// function any(promises1) {
//     return new Promise((resolve, reject) => {
//         Promise.any(promises1).then(results => {
//             resolve(results)
//         }).catch(errors => {
//             reject(errors)
//         });
//     });
// };

// const promises1 = [
//     new Promise(resolve => resolve("First Promise Resolved!!")),
//     new Promise((resolve, reject) => {
//         let x = 5;
//         if (x < 5) {
//             resolve("Second Promise Resolved")
//         } else {
//             reject("Second Promise Rejected")
//         };
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Third Promise Resolved!!")
//         }, 2000);
//     }).catch(error => {
//         reject(error)
//     }),
// ]


// async function main() {
//     await any(promises1).then(results => {
//         console.log(results)
//     }).catch(error => {
//         console.error(error);
//     });

// }
// main();

// // 3)

// function race(promises1) {
//     return new Promise((resolve, reject) => {
//         Promise.race(promises1).then(results => {
//             resolve(results)
//         }).catch(error => {
//             console.error("Promise.race Rejected ! ", error)
//         });
//     });
// };

// async function main1() {
//     await race(promises1).then(results => {
//         console.log(results)
//     }).catch(error => {
//         console.error(error)
//     });
// };


// main1()


// 4) 

function promiseResolved(promise) {
    return new Promise((resolve, reject) => {
        promise.then(results => {
            resolve(true);
        }).catch(() => {
            resolve(false);
        });
    });
};

const successfulPromise = Promise.resolve("Success!");
const failedPromise = Promise.reject("Error!!");

promiseResolved(successfulPromise).then(results => {
    console.log("Is The Promise Resolved", results)
});

promiseResolved(failedPromise).then(results => {
    console.log("Is The Promise Resolved", results)
});

// 1)

function all(promises) {
    return new Promise((resolve, reject) => {
      const resolvedValues = [];
      let resolvedCount = 0;
  
      promises.forEach((promise, index) => {
        promise
          .then(value => {
            resolvedValues[index] = value;
            resolvedCount++;
            if (resolvedCount === promises.length) {
              resolve(resolvedValues);
            }
          })
          .catch(reject); 
      });
    });
  }
  
  const promises = [
    Promise.resolve('First'),
    new Promise(resolve => setTimeout(() => resolve('Second'), 1000)),
    Promise.resolve('Third')
  ];
  
  all(promises)
    .then(values => {
      console.log('All promises resolved:', values);
    })
    .catch(error => {
      console.error('One of the promises rejected:', error);
    });