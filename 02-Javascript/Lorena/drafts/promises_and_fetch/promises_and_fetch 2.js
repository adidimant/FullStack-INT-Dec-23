function doTask1(effortLevel) {
    return new Promise((resolve, reject) => {
        if (effortLevel > 10)
        resolve( "Task 1 completed");
    else
        reject( "Task 1 failed");

});
}

let effortLevel = 5;
doTask1(effortLevel).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log("oh no! The promise was rejected!");
    console.log(message);
})



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = true ? { data: 'we have data :)' } : null;
        if (data) {
            resolve(data);
      } else {
            reject(data);
      }
    }, 1000);
});

promise.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
    console.error('oh oh...');
});