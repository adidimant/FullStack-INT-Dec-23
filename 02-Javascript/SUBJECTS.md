prompt - for getting input from the user
variables
functions - several ways to declare a function, parameters
callback functions (passing function as a paremeter)
arrays
array methods
querySelectors
objects
date
timestamp
events
'this' keyword
.call, .bind, .apply
call, change
scopes
setTimeout
setInterval
for loops
'window' 
promises
async functions
promise methods
'new' keyword

const obj = {}
obj.firstName = 'Adi';
objj["4gfgyhtg"] = 'Bla bla';

const keys = Object.keys(obj)
const values = Object.values(obj);
const entries = Object.entries(obj);
[['firstName', 'Adi'], ["4gfgyhtg", 'Bla bla']]
const userId = entries[1][0];
const currentTime = Date.now()
const date1 = new Date("04/05/1997");
const difference = currentTime - date1.getTime(); // dates difference in miliseconds

document.addEventListener("keyup", async (e) => {
  await fetch("http://my-server.com", { body: e});
});

const myButton = document.getElementById("btn-1");
myButton.addEventListener("click", async (e) => {
  await fetch("http://my-server.com", { body: e});
});

<input onfocus="saveDataInLocalhost()">

await Promise.all([prom1, prom2, prom3]);
const value = await Promise.race([prom1, prom2, prom3]);
const value = await Promise.any([prom1, prom2, prom3]);