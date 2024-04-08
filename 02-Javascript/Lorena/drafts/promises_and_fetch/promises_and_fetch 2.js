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
