function ex2() {
    //console.log('123');
    // Define the URL to fetch data from
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit';
    /*const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';*/ // demonstrating response not ok

    // Perform the fetch operation and handle the response using promises
    fetch(apiUrl)
    .then((response) => {
        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        
        // Parse the response body as JSON
        return response.json();
    })
    .then((data) => {
        // Handle the JSON data received from the API
        console.log('Joke received:', data.joke);
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error('Fetch error:', error);
    });
}

function ex3() {
    /*async function fetchData() {
        const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit';
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data; // Return the data fetched from the API
    }
    
    // Call the fetchData function to get the data using async/await
    (async () => {
        try {
            const jokeData = await fetchData(); // Wait for the data to be fetched
            document.getElementById("user-data-el").innerHTML = jokeData.joke; // Use the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    })();*/

    function fetchData() {
        const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit';
        return fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                return data; // Return the fetched data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error; // Re-throw the error to handle it outside the function if needed
            });
    }
    
    // Call the fetchData function to get the data using async/await
    (async () => {
        try {
            const jokeData = await Promise.resolve(fetchData()); // Use Promise.resolve to resolve the promise returned by fetchData
            document.getElementById("user-data-el").innerHTML = jokeData.joke; // Use the fetched data
        } catch (error) {
            console.error('Error handling data:', error);
        }
    })();
}

/*
    const a = 7;
    const response = await fetch("https://our-server.com");
    const data = await response.json();
    document.getElementById("user-data-el").innerHTML = data;
    

}

/*HW 10/04/24:
1) Read about the static function: Promise.all, Promise.any, Promise.race, Promise.resolve, Promise.reject
the Promise class exposes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
2) Implement your own ideas for 3 different async functions and 2 different promises (one of the promises should be Promise.resolve())
show an example of calling Promise.all, Promise.race and Promise.any about those promises and explain the results of your code.
3) you have the following code:
```js
const a = 7;
const response = await fetch("https://our-server.com");
const data = await response.json();
document.getElementById("user-data-el").innerHTML = data;
```
you have to create a promise that resolves the returned data, and use this promise to get the data

https://api.openweathermap.org/data/2.5/weather- needs subscription
https://v2.jokeapi.dev/joke/{category}
https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit
http://numbersapi.com/{number}/{type}
https://www.jerusalemapi.com/api/v1/

*/
