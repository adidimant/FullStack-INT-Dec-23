function promiseWithCondition(condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve('Condition is true - Promise resolved');
    } else {
      reject('Condition is false - Promise rejected');
    }
  });
}


promiseWithCondition(true).then(result => {
  console.log(result)
}).catch(error => {
  console.error(error);
});

async function asyncFunctionWithVariable(variable) {
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  if (variable > 5) {
    return 'Variable is greater than 5';
  } else {
    throw new Error('Variable is not greater than 5');
  }
}


(async () => {
  try {
    const result = await asyncFunctionWithVariable(10);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();


const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); 
});


const secondPromise = result => new Promise((resolve, reject) => {
  setTimeout(() => resolve(result + 1), 1000); 
});


const thirdPromise = result => new Promise((resolve, reject) => {
  setTimeout(() => resolve(result + 1), 1000); 
});


const fourthPromise = result => new Promise((resolve, reject) => {
  setTimeout(() => resolve(result + 1), 1000); 
});

firstPromise
  .then(secondPromise)
  .then(thirdPromise)
  .then(fourthPromise)
  .then(result => console.log(`Final result: ${result}`))
  .catch(error => console.error(`An error occurred: ${error}`));





