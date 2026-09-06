// singleton
Object.create   // creating objects through constructor method


//objects literals
const mySymb = Symbol("key101");


const authUser = {
    name: "Sachin", // JS process key values in string as well "name": "Sachin"
    "full name": "Sachin Sahu",
    [mySymb]: "mykey1",
    age: 29,
    location: "Korba",
    email: "sachinssahu@gmail.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday", "Friday"]
} 

console.log(authUser.email);
console.log(authUser["email"]);
// console.log(authUser."full name"); with . we can't access keys defined as string or keys having whiteSpace in between them
console.log(authUser["full name"]);
console.log(authUser[mySymb]);

authUser.email = "sachin.sahu@pagarbook.com"
// Object.freeze(authUser) // freeze the object make them immutable
authUser.email = "sachin@google.com" // after freeze if user tries to change values then its doesn't change nor gives error
console.log(authUser);

authUser.greeting = function(){
    console.log("Hello authUser");
}

authUser.greetingTwo = function(){
    console.log(`Hello authUser, ${this["full name"]}`);
}


console.log(authUser.greeting()); // [Function (anonymous)]
console.log(authUser.greetingTwo()); // undefined