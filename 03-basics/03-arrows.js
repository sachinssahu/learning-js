// THIS and arrow function

const user = {
    username: "Sachin",
    age: 29,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website !!`); 
        // this refers to current context of scope in this case line 4 to 10 between first curly brackets of object
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Sahu"
user.welcomeMessage()

console.log(this);
/* 
Browser: this is the window (because your code runs in a browser tab with a webpage).
Node.js: this is empty {} (because your code runs on a computer without a browser interface).
*/


function coffee () {
    let brand = "Davidoff"
    // console.log(this); 
    // The reason you saw the giant [global] object instead of undefined is because you are running this code in Node.js without "Strict Mode" turned on.
    // console.log(this.brand); // undefined
    
}
// coffee()

const coffee2 = function coffee () {
    let brand = "Davidoff"
    // console.log(this);
    // The reason you saw the giant [global] object instead of undefined is because you are running this code in Node.js without "Strict Mode" turned on.
    // console.log(this.brand); // undefined
    
}
// coffee2()

const coffee3 = () => {
    let brand = "Davidoff"
    // console.log(this);
    console.log(brand);
    // console.log(this.brand); // undefined
    
}
coffee3()

// normal arrow function
const addOne = (num1) => {
    return num1 + 1
}
console.log(addOne(22));

// implicite return, remove {} and return keyword move then to a single line statement
const addTwo = (num1) => (num1 + 2)
console.log(addTwo(22));

let addTwoNum = (num1, num2) => {username: "Sachin"}
console.log(addTwoNum(1,2)); // undefined because object declared above is not enclosed in a curly braces

addTwoNum = (num1, num2) => ({username: "Sachin"})
console.log(addTwoNum(1,2)); // O/P: { username: 'Sachin' }