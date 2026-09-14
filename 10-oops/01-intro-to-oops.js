const users = {
  userName: "Sachin",
  logInCount: 20,
  signedIn: true,

  getUserDetails: function () {
    // console.log(`Got user details from dataBase.`);

    // node doesn't know userName because execution context is not able to find userName
    // console.log(`Username: ${userName}`);
    console.log(`Username: ${this.userName}`);
  },
  getCurrentContext: function () {
    console.log(
      `Current Context is as below and this is how we use .this \n ${this}`,
    );
    console.log(this);
  },
};

console.log(users.userName);
// console.log(users.logInCount);
// console.log(users.signedIn);
console.log(users.getUserDetails());
console.log(users.getCurrentContext());

console.log(`\nGlobal Context this as of now is as below:`);
console.log(this);

// This new keyword here is a constructor function. This helps to create multiple instances from a single object/class
// const promise01 = new Promise();
// const date = new Date();

function User(userName, logInCount, isLoggedIn) {
  this.userName = userName;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function (){
    console.log(`Heloo ${this.userName}`);
    
  }

//   return this;
// Even when this is not returned it does by default. Implicitly returned
}

// const userOne = User("sachin", 12, true)
// const userTwo = User("sachin sahu", 22, false)
// // userTwo overwrote values on userOne also, which is generally not intended

// console.log(userOne);
// console.log(typeof userOne);

const userOne = new User("sachin", 12, true)
const userTwo = new User("sachin sahu", 22, false)
// userTwo didn't overwrote values on userOne by using new constructor function

console.log(userOne);
console.log(userTwo);

// Notes on new constructor fucntion
// 1. creates a new object
// 2. call a constructor function
// 3. this keywords injects on object
// 4. properties are now avaiable on object

console.log(userOne.constructor);
// [Function: User]
console.log(userOne instanceof User); //true | User is a Function
console.log(userTwo instanceof Object); //true | Object is a Function
