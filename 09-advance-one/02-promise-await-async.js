/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Promise: An object that holds a placeholder for a task that is still running (like downloading a file). 
It will eventually succeed (resolve) or fail (reject). 
A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

Await: A keyword used inside an async function to wait for a Promise to finish, 
making the code look like regular, step-by-step (synchronous) code
*/

const promise01 = new Promise(function (resolve, reject) {
  // Do Async Calls
  // dB Calls
  // Cryptography
  // Network Call

  setTimeout(() => {
    console.log("Aync task is complete");
    resolve();
  }, 1000);
});

promise01.then(function () {
  console.log("Promise is consumed");
});
// console.log("\n");

// promise with then in a bubbling format
const promise02 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Aync Task 2 resolved");
});
// console.log("\n");

// handling a response received by resolve over Promise
const promise03 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sachin", email: "sachinssahu@gmail.com" });
  }, 1000);
});

promise03.then(function (user) {
  console.log(user);
});
// console.log("\n");

// using multiple then catch and finally.
const promise04 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Sahu", email: "sachinssahu@gmail.com" });
    } else {
      reject("Something went wrong !!");
    }
  }, 1000);
});

promise04
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });
// console.log("\n");

// Promise resolution by async await
const promise05 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Naruto", email: "konoha@village.kage" });
    } else {
      reject("ERROR: Promise 5 rejcted");
    }
  }, 1000);
});

async function consumePromise05() {
  try {
    const response = await promise05;
    console.log(response);
    console.log(typeof response);
  } catch (error) {
    console.log(error);
  }
}
// Don't forget to call it! otherwise 
// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, 
// or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Promise 5 rejcted".
consumePromise05();

// get response from real API
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        // respoonse also takes times to get converted into json so we need wait response.json()
        const data = await response.json()
        console.log(`Name received from 1st async-await from an API is: ${data[0].name}`);
    } catch (error) {
        console.log(`E: ${error}`);   
    }
}

getAllUsers();

// same with then-catch-finally
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(`Name received from 2nd async-await from an API is: ${data[0].name}`);
})
.catch((error) => { console.log(error) })