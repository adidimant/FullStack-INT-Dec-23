function ex1() {
    const users = [
        {
            id: 1,
            name: 'John',
            city: 'New York',
            country: 'USA',
        },
        {
            id: 2,
            name: 'Alice',
            age: 25,
            city: 'London',
            country: 'UK',
            occupation: 'Designer'
        },
        {
            id: 3,
            name: 'Michael',
            age: 35,
            city: 'Paris',
            country: 'France',
            occupation: 'Manager'
        }
      ];

      function filterObjectsWithFiveKeys(array) {
        return array.filter(obj => Object.keys(obj).length >= 5);
    }

    const filteredArray = filterObjectsWithFiveKeys(users);

    console.log(filteredArray);
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
2) consider the following example:
const response = await fetch("https://randomuser.me/api/?results=10");
const data = await response.json();

2.3) get the youngest people from the data.*/