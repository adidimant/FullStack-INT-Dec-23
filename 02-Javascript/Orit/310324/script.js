function ex1() {
    function printName() {
        document.getElementById('orit').innerText += 'Orit ';
    }
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            printName();
            resolve(); // Resolve the promise after printName is executed
          }, 3000)
      });
    
<<<<<<< HEAD
      myPromise.then(function() {
        console.log("Promise resolved");
      }).catch(function() {
        console.log("Promise rejected");
      });
}

function ex2() {
    /*async function printFullName() {
        setTimeout(function() {
            document.getElementById('full').innerText += 'Orit Frank';
            resolve(); // Resolve the promise after printName is executed
          }, 5000)
        document.getElementById('full').innerText += 'Orit Frank';
        return 'My name is Orit Frank.'; 
    }
    
    // Call the async function
    printFullName()
        .then(data => {
            console.log('My full name is: ', data);
        })
        .catch(error => {
            console.error('Error fetching name:', error);
        });*/

    async function printFullName() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                document.getElementById('full').innerText += 'Orit Frank';
                resolve('My name is Orit Frank.'); // Resolve the promise after printName is executed
            }, 3000);
        });
    }
    
    // Call the async function
    (async () => {
        try {
            const fullName = await printFullName();
            console.log('My full name is:', fullName);
        } catch (error) {
            console.error('Error fetching name:', error);
        }
    })();
}

/*
** HW 07/04/24 **
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
=======
}
>>>>>>> d08b494145962d4857ecc2599f719f0d1426444f
