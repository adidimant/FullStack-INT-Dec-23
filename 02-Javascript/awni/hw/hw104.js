// // Promies.all == > All Promieses Should Be Resolved 

// const myFirstPromise = new Promise((resolve, reject) => {
//     let connect = true;
//     if(connect){
//         resolve("First Promise resolved")
//     }else{
//         reject("First Promise Rejected")
//     }
// });
// const mySecondPromise = new Promise((resolve, reject) => {
//     let settings = true;
//     if(settings){
//         resolve("Second Promise resolved")
//     }else{
//         reject("Second Promise Rejected")
//     }
// });

// // all Promieses should be resolved !!
// Promise.all([myFirstPromise,mySecondPromise]).then((result) => {
//     console.log(result);
// });


// =============> Promies.race <================= 

const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject('First Promise rejected')
    }, 500);
});
const mySecondPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Second Promise resolved')
    }, 100);
});
// myFirstPromise.then((result) => console.log((result)))
// mySecondPromise.then((result) => console.log((result)))

// One Promies Will Be Resolved !! ==> the Second one that has 100MS (if You got two promies that have the same goal!!  )
Promise.race([myFirstPromise,mySecondPromise]).then((result) => {
    console.log(result);
});





// ========> Promise.any <=========== *****

// const myFirstPromise = new Promise((resolve, reject) => {
//     let connect = false;
//     if(connect){
//         resolve("First Promise resolved")
//     }else{
//         reject("First Promise Rejected")
//     }
// });
// const mySecondPromise = new Promise((resolve, reject) => {
//     let settings = true;
//     if(settings){
//         resolve("Second Promise resolved")
//     }else{
//         reject("Second Promise Rejected")
//     }
// });

// // One of Promieses should be resolved !! (At Leset one of them should be resolved !)
// Promise.any([myFirstPromise,mySecondPromise]).then((result) => {
//     console.log(result);
// });








//////////////////////////////////////////////////////////////////////////////////////////////

// fetch("https://api.github.com/users/ElzeroWebSchool/repos").then(
//     (result) => {
//         let allRepos = result.json();
//         console.log(allRepos);
//         return allRepos;
//     })
//     .then(
//         (repos) => {
//             console.log(`Total Number Of Repos Is ${repos.length}`)
//             return repos;
//         })
//     .then(
//         (repos) => {
//             console.log(`First Repo Is ${repos[0].name}`)
//             return repos;
//         })
//     .then(
//         (repos) => {
//             console.log(`Last Repo Is ${repos[repos.length - 1].name}`)
//             return repos;
//         })
//     .then(
//         (repos) => {
//             for (let i = 0; i < repos.length; i++) {
//                 let newElement = document.createElement('div');
//                 let elemnentText = document.createTextNode(repos[i].name);
//                 newElement.appendChild(elemnentText);
//                 document.body.appendChild(newElement);
//             }
//         }
//     );


//////////////////////////////////////////////////////////////////////////////////////////

//  ===========> Promise.resolve <============


// const innerPromise = new Promise((resolve, reject) => {
//     if (2 + 1 === 4) {
//         resolve('Success!');
//     } else {
//         reject('Something went wrong..');
//     }
// });

// const outerPromise = Promise.resolve(innerPromise);

// outerPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//2)

// const myFirstPro = new Promise((resolve, reject) => {
//     let x = false;
//     if (x) {
//         resolve('Resolved 1')
//     } else {
//         reject('Rejected 1')
//     }
// });

// const mySecondPro = new Promise((resolve, reject) => {
//     let y = true;
//     if (y) {
//         resolve('Resolved 2')
//     } else {
//         reject('Rejected 2')
//     }
// });

// const myThirdPro = new Promise((resolve, reject) => {
//     let m = true;
//     if(m) {
//         resolve('Resolved 3')
//     }else{
//         reject('Rejected 3')
//     }
// });

// Promise.resolve([myFirstPro, mySecondPro, myThirdPro]).then((value) => console.log(value));


////////////////////////////////////////////////////////////////////////////////////

// const makeRequest = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = {
//                 success: true,
//                 message: "Request successful",
//             };
//             resolve(data);
//         }, 1000);
//     });
// };

// const requestPromise = makeRequest().then((data) => {
//     return Promise.resolve(data);
// });

// requestPromise
//     .then((data) => {
//         if (data.success) {
//             console.log(data.message);
//         } else {
//             throw new Error(data.message);
//         }
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });

///////////////////////////////////////////////////////////


// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(1);
//     }, 1000);
// });
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(2);
//     }, 2000);
// });
// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(3);
//     }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//     .then(function (values) {
//         console.log(values);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

////////////////////////////////////////////////////////////

// function getUserData(userId) {
//     return new Promise(function (resolve, reject) {
//         setTimeout( () => {
//             let userData = {
//                 id: userId,
//                 name: "Deepak Akin",
//                 age: 26,
//                 occupation: "Developer",
//             };
//             resolve(userData);
//         }, 1000);
//     });
// }

// let user1Promise = getUserData(1);
// let user2Promise = getUserData(2);
// let user3Promise = getUserData(3);

// Promise.all([user1Promise, user2Promise, user3Promise])
//     .then( (userDataArray) => console.log(userDataArray ))       
//     .catch( (error) =>  console.error(error));

//////////////////////////////////////////////////////////////////////

let firstPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello! ");
    });
};

let secondPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("Hi! ");
    });
};

let promiseExecution = async () => {
    let promise = await Promise.all([
        firstPromise(),
        secondPromise(),
    ]);
    console.log(promise);
};

promiseExecution();

///////////////////////////////////////////////////////////////////////////



// const myFirstPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let myAge = prompt('What Is Your Age?');
//             let myAgeInDays = myAge * 365;
//             resolve(myAgeInDays);
//         }, 1000);
//     });
// }

// const mySecondPromise = (myAgeInDays) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let myAgeInHours = myAgeInDays * 24;
//             resolve(myAgeInHours);
//         }, 1000);
//     });
// }

// const myThirdPromise = (myAgeInHours) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let myAgeInMins = myAgeInHours * 60;
//             resolve(myAgeInMins);
//         }, 1000);
//     });
// }

// const myFourthPromise = (myAgeInMins) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let myAgeInSec = myAgeInMins * 60;
//             resolve(myAgeInSec);
//         }, 1000);
//     });
// }

// const myFifthPromise = (myAgeInSec) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let myAgeInMilSeconds = myAgeInSec * 1000;
//             resolve(myAgeInMilSeconds);
//         }, 1000);
//     }).catch(err => {
//         console.log(err);
//     })
// }

// let myResult = async () => {
//     let ageInDays = await myFirstPromise();
//     console.log(ageInDays);

//     let ageInHours = await mySecondPromise(ageInDays);
//     console.log(ageInHours);

//     let ageInMins = await myThirdPromise(ageInHours);
//     console.log(ageInMins);

//     let ageInSec = await myFourthPromise(ageInMins);
//     console.log(ageInSec);

//     let ageInMilSec = await myFifthPromise(ageInSec);
//     console.log(ageInMilSec);
// };

// myResult();

// let myResult1 = async () => {
//     let ageInDays =  await myFirstPromise();
//     let ageInHours = await  mySecondPromise(ageInDays);
//     let ageInMins = await  myThirdPromise(ageInHours);
//     let ageInSec = await  myFourthPromise(ageInMins);
//     let ageInMilSec = await myFifthPromise(ageInSec);

//      Promise.all([ageInDays, ageInHours, ageInMins, ageInSec, ageInMilSec]).then((result) => {
//         console.log(result);
//     })
// }
// myResult1();


    

////////////////////////////////////////////////////////////////////////////


// let todos = fetch("https://jsonplaceholder.typicode.com/todos").then(resp => resp.json());
// let comments = fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json());
// let posts = fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json());

// const retrieveAll = async () => {
//     let results = await Promise.all([todos, comments, posts]);
//     console.log(results);
// }

// retrieveAll();


///////////////////////////////////////////////////////////////////////
//you have to create a promise that resolves the returned data, and use this promise to get the data\


// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i]);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// getData();


// const getDataSec = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             resolve(data);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// getDataSec().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error('Error fetching data:', error);
// });





// const fetchData = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch("https://our-server.com");
//             const data = await response.json();
//             resolve(data);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

// fetchData()
//     .then(data => {
//         document.getElementById("user-data-el").innerHTML = data;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

//////////////////////////////////////////////////////////////

// async function getUsers() {
//     let url = "https://jsonplaceholder.typicode.com/users";
//     try {
//         const api = await fetch(url);
//         if (!api.ok) {
//             return (`HTTP error! Status`);
//         }
//         const data = await api.json();
//         return new Promise((resolve, reject) => {
//             resolve(data.map(user => {
//                 return {
//                     id: user.id,
//                     user: user.name,
//                     username: user.username,
//                     address : user.address.city,
//                 }
//             }));
//         });
//     } catch (error) {
//         reject(error);

//     }
// }


// async function getPosts() {
//     let url = "https://jsonplaceholder.typicode.com/posts";
//     try {
//         const api = await fetch(url);
//         if (!api.ok) {
//             return (`Http error! Status`);
//         }
//         const data = await api.json();
//         return new Promise((resolve, reject) => {
//             resolve(data.slice(0, 10).map(posts => {
//                 return {
//                     id: posts.id,
//                     title: posts.title,
                    
//                 }
//             }));
//         });
//     } catch (error) {
//         reject(error);
//     }
// }


// async function getComment() {
//     let url = "https://jsonplaceholder.typicode.com/comments";
//     try {
//         const api = await fetch(url);
//         if (!api.ok) {
//             return (`Http error! Status`);
//         }
//         const data = await api.json();
//         return new Promise((resolve, reject) => {
//             resolve(data.slice(0, 10).map(user => {
//                 return {
//                     id : user.id,
//                     email : user.email,
//                 }
//             }));
//         });
//     } catch (error) {
//         reject(error);
//     }
// }

// Promise.all([getUsers(), getPosts(), getComment()]).then(result => {
//     console.log(result);
// })