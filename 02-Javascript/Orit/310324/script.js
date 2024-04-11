function ex1() {
    
}

function ex2(x) {
    // Fetch data from the API
    fetch('https://randomuser.me/api/?results=10')
    .then(response => {
    // Check if the response is successful
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Parse JSON response
    return response.json();
    })
    .then(data => {
    // Extract results from the response
    const results = data.results;

    // Process the results as needed
    console.log(results);

    // Now you can work with the 'results' variable containing the fetched data

    if (x==1) {
        console.log('hello');
        function one(data) {
            //console.log('123');
            const shortenData = data.map(item => ({
                fullName: `${item.name.title} ${item.name.first} ${item.name.last}`,
                id: `${item.id.name} ${item.id.value}`
              }));
              
              console.log(shortenData);
        };
        one(results);
    } else if (x==2) {
        function two(data) {
            const usersWithComplexPasswords = data.filter(user => {
                const password = user.login.password;
                // Check if password is at least 6 characters long and contains special characters
                return password.length >= 6 /*&& /[!@#$%^&*(),.?":{}|<>]/.test(password)*/;
              });
          
              // Log users with complex passwords
              console.log(usersWithComplexPasswords);
        }
        two(results);
    } else if (x==3) {
        function three(data) {
            console.log('hello');
            const youngestResult = data.reduce((youngest, current) => {
                // Compare the 'dob.age' property of each object
                if (youngest) {
                    return current.dob.age < youngest.dob.age ? current : youngest;
                } 
                return current;                
              });
              
              console.log(youngestResult);
        }
        three(results);
    }
    })
    .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
    });
    
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