// Primitive
// 7 datatype: Number, String, Boolean, null, undefined, Symbol, BigInt

const score = false;
const string = "Loop"
let Int = 345678909876543456789;
let BigInt = 345678909876543456789n;
const temp = null;
let isLoggedIn = false;
let notdefinedvariable;

console.log(typeof BigInt, typeof Int);
console.log(typeof notdefinedvariable);
console.log(typeof temp, "\n");


// Refrence (Non Premitive)
// Array, Objects, Functions

const animeHeros = ["Naruto", "Sasuke", "Jiraya", "Haruken"];
console.log(typeof animeHeros);

let varObj = {
    name: "Sachin",
    age: 29
}
console.log(typeof varObj);

const myFun = function(){
    console.log("Launde....!!");
    
}
console.log(typeof myFun);
/*
Note: JavaScript is a dynamically typed language.

According to the MDN Web Docs Glossary, this means the interpreter assigns types to variables 
automatically at runtime based on their value.
You do not need to explicitly declare data types when writing code 
*/


// Documentation: https://developer.mozilla.org/en-US/
// ECMA documention: https://262.ecma-international.org/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory and its types
// Stack (Primitive, copy of decalared variable), Heap (Non-Primitive, refernce of original value)

let myAnimeName = "Sachin"
let anotherName = myAnimeName
anotherName = "Alucard"

console.log(myAnimeName, "\n", anotherName);

let userOne = {
    email: "sachinssahu@gmail.com",
    upi: "8109188026@ybl"
}

let userTwo = userOne
userTwo.email = "alucard@gmail.com"

console.log(userOne.email, userTwo.email);