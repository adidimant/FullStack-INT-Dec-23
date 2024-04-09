/* 1. Write a promise of your own with two ways: 

1) standard way via new Promise */

const myPromise = new Promise(function(resolve, reject) { 
try {
    console.log("My promise has started");
    setTimeout(resolve, 3000);
} catch (error) {
    reject(error);  
  }
});

myPromise.then(() => console.log("timer finished!"));


//Explain for me//
 /* 
 promise is created using the Promise constructor. Inside the constructor, 
 a function is passed with resolve and reject parameters. 
 These parameters are functions that can be called to indicate the fulfillment or rejection of the promise.
Inside the function, there is a setTimeout function that waits for 3000 milliseconds (3 seconds).
 After the timeout, the resolve function is called, indicating that the promise has been fulfilled.
When the promise is fulfilled, the then method is called on it,
 and the function passed to then is executed. In this case, it logs "timer finished!" to the console.
So, after 3 seconds, "timer finished!" will be printed to the console, indicating that the promise has been resolved. */

//-------------------------------------------------------------------------------------------------------------------------------//

/* 1. 2) write an async function your promise & async function should contain something we didn't showed in class
show how you await the promise, gets the resolved value, and how you use .then for executing a function when the promise is resolved. */

async function fetchData() {
    // Create a new promise that resolves after a timeout - יוצר הבטחה חדשה שנפתרת לאחר פסק זמן של 2 שניות
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolve the promise with a value -  פותר את ההבטחה עם ערך
            resolve("Data fetched successfully");
        }, 2000); 
    });

    try {
        // Await the promise to get the resolved value -  ממתין לקבל את הערך שנפתר
        const resolvedValue = await myPromise;
        console.log("Resolved value:", resolvedValue);

        // Return the resolved value - מחזיר את הערך שנפתר
        return resolvedValue;
    } catch (error) {
        // Handle any errors - במידה ויש שגיאה
        console.error("Error:", error);
    }
}

// Call the async function and handle the returned promise - קורא לפונקצייה האסינכרון ומטפל בהבטחה שהוחזרה
fetchData()
   .then((resolvedValue) => {
        console.log("Received resolved value in .then():", resolvedValue);
        // Execute further actions with the resolved value - מבצע פעולות נוספות עם הערך שנפתר
    })
    .catch((error) => {
        console.error("Error in promise chain:", error);
    });

//Explain for me//
    /* We define an async function called fetchData.
    Inside this function, we create a new promise (myPromise) that resolves after a timeout of 2 seconds.
    We use await to wait for the promise (myPromise) to resolve and store the resolved value in resolvedValue.
    We log the resolved value to the console.
    The async function returns the resolved value.
    We call the fetchData function and use .then() to handle the resolved promise, logging the resolved value received in the .then() block.
    We also use .catch() to handle any errors that may occur during the execution of the async function or promise chain. */

//-------------------------------------------------------------------------------------------------------------------------------//


/* 2. Write a "promise chain" - you need to write 4 different promises, that 1 promise is calling the next one
when the first promise is resolved - it means that all the promises are resolved */


// Promise 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1 is resolved");
      resolve("Promise 1 resolved");
    }, 3000);
  });
  
  // Promise 2
  const promise2 = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 2 is resolved with data:", data);
        resolve("Promise 2 resolved");
      }, 3000);
    });
  };
  
  // Promise 3
  const promise3 = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 3 is resolved with data:", data);
        resolve("Promise 3 resolved");
      }, 3000);
    });
  };
  
  // Promise 4
  const promise4 = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 4 is resolved with data:", data);
        resolve("Promise 4 resolved");
      }, 3000);
    });
  };
  
  // Promise chain
  promise1
    .then((result) => promise2(result))
    .then((result) => promise3(result))
    .then((result) => promise4(result))
    .then((finalResult) => {
      console.log("All promises are resolved:", finalResult);
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
    });
  

//Explain for me//

/* Promise 1 is a basic promise that resolves after 3 second.
Promise 2, 3, and 4 are functions that return promises and are called with the data passed from the previous promise.
Each promise resolves after 3 second and logs a message with the data it received.
The promises are chained together using .then().
Finally, when all promises are resolved, the last .then() block executes, logging a message indicating that all promises are resolved. */

//Explain for me about .then() //

/* `.then()` is the role method of JavaScript promises to handle the results of asynchronous operations.
 When we have a promise that is in fulfilled status, we want to perform additional operations on its result,
  without waiting to block the other performances of the program. Therefore, we use `.then()`.
When a promise has completed its operation successfully (a promise has been received),
 the `.then()` function receives the value found inside the promise and performs some kind of action or treatment on it. 
 It can be printing the value to the screen, handling the response from the server, 
 or any other action we want to perform according to the result we received.
For example, if we have a function that is executed asynchronously,
 such as making an HTTP request or accessing a database, we can use `.then()` to handle the
  result received after the asynchronous operation.*/

//-------------------------------------------------------------------------------------------------------------------------------//

/* 3. Write the function `getPromiseWithStatus`, the function gets a promise, 
and returns the promise with an extra field with its `status`: "pending"/"fulfilled"/"rejected"
hint: use the .then,.catch functions on the received promise */

function getPromiseWithStatus(promise) {
    // Create a new promise - יוצר הבטחה חדשה
    return new Promise((resolve, reject) => {
        // Set status to pending initially - מגדיר את הסטטוס להמתנה בתחילה
        let status = "pending";

        // Attach a .then() to the received promise - מצרף להבטחה שהתקבלה 
        promise.then((result) => {
            // If the promise is fulfilled, set status to fulfilled - אם ההבטחה מתקיימת, מגדיר את הסטטוס למימוש
            status = "fulfilled";
            // Resolve with the result - פותר עם התוצאה
            resolve({status, result});
        }).catch((error) => {
            // If the promise is rejected, set status to rejected - אם ההבטחה נדחתה, מגדיר את הסטטוס ״דחייה״ 
            status = "rejected";
            // Reject with the error - דחה עם השגיאה
            reject({status, error});
        });
    });
}

const originalPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation - הדמיית פעולה אסינכרונית
    setTimeout(() => {
        resolve("Data");
    }, 4000);
});

const promiseWithStatus = getPromiseWithStatus(originalPromise);

promiseWithStatus.then((result) => {
    console.log("Status:", result.status); // Status: fulfilled 
    console.log("Result:", result.result); // Result: Data
}).catch((error) => {
    console.error("Status:", error.status); // Status: rejected
    console.error("Error:", error.error); // Error: Error message
});


//Explain for me//

/* I've created a function called `getPromiseWithStatus` which takes a promise (passed as a parameter) 
and returns a new promise with an additional field called `status`. 
The `status` field indicates the state of the promise - whether it's pending, fulfilled, or rejected.

The function utilizes the `.then()` and `.catch()` functions on the original promise passed as a parameter.
 Inside each of these functions, we update the value of the `status` variable according to 
 the state of the promise (whether it's fulfilled or rejected), 
 and use the `resolve()` or `reject()` function to return the new promise accordingly. */

 // Explanation of the code //
/*Here's a breakdown of the code:

1. Define the `getPromiseWithStatus` function.
2. Create a new promise inside the function.
3. Attach `.then()` and `.catch()` handlers to the original promise.
4. Inside each handler, update the `status` variable based on the state of the promise.
5. Use `resolve()` or `reject()` to return the new promise with the updated status.

This approach allows for tracking the status of the promise while it's being processed asynchronously, providing more insight into its state during execution.*/







