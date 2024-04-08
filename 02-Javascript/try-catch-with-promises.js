/*
 You can create promises in two ways:
 1) let myPromise = new Promise(function(myResolve, myReject) {
      // "Producing Code" (May take some time)

      myResolve(); // when successful
      myReject();  // when error
    });
  2) async function - starts a code execution that is happening on its time. it returns a promise.

  The difference between await and .then (on promises):
    - await <promise> - stops in this line, blocking the execution (waiting until the promise is resolved [/fulfilled])
    - <promise>.then - not stopping in the line (continue the code block), but when the promise is resolved - executes the function inside the then()
*/

const func1 = () => {
  return; // empty function (returns undefined)
};

// first step:

function func2() {
  console.log("started fetching from server");
  fetch("https://randomuser.me/api/?results=10", { method: "POST", body: { username: "adi.123@gmail.com", password: "777666" }})
  console.log("finished fetching from server");
}

function main() {
  try {
    func2();
    console.log("algorithm finished successfully");
  } catch(err) {
    console.error("algorithm failed", err);
  }
}

/*
logs:
started fetching from server
finished fetching from server
algorithm finished successfully
*/

// step two:

function func2() {
  console.log("started fetching from server");
  fetch("https://randomuser.me/api/?results=10", { method: "GET"}).then(async (value) => console.log("http fetch call finished with content", await value.json()));
  console.log("finished fetching from server");
}

function main() {
  try {
    func2();
    console.log("algorithm finished successfully");
  } catch(err) {
    console.error("algorithm failed", err);
  }
}

/*
logs:
started fetching from server
finished fetching from server
algorithm finished successfully
http fetch call finished with content, data{}
*/

// step three:

async function func2() {
  console.log("started fetching from server");
  const response = await fetch("https://randomuser.me/api/?results=10", { method: "GET"});
  console.log("http fetch call finished with content", await response.json());
  console.log("finished fetching from server");
}

function main() {
  try {
    func2();
    console.log("algorithm finished successfully");
  } catch(err) {
    console.error("algorithm failed", err);
  }
}

/*
logs:
started fetching from server
algorithm finished successfully (since we didn't await before func2 - as an async function)
http fetch call finished with content, data{}
finished fetching from server
*/

// step three:

async function func3() {
  console.log("started fetching from server");
  const response = await fetch("https://randomuser.me/api/?results=10", { method: "GET"});
  console.log("http fetch call finished with content", await response.json());
  console.log("finished fetching from server");
}

async function main() {
  try {
    await func3();
    console.log("algorithm finished successfully");
  } catch(err) {
    console.error("algorithm failed", err);
  }
}

/*
logs:
started fetching from server
http fetch call finished with content, data{}
finished fetching from server
algorithm finished successfully (since we didn't await before func2 - as an async function)
*/
