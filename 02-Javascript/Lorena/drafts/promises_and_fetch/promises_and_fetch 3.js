
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