// if

if (true) {
    console.log("executes only when condition is true");
}

if (false) {
    console.log("doesn't executes when condition is false");
}

const isUserLoggedIn = true
const temperature = 41

if (isUserLoggedIn) {
    console.log("you are logged in");   
}

// <, >, <=, >=, ==, !=, ===, !==

if (2 == "2") {
    console.log("true because type check is explicitly not done use ===");
}

if (temperature < 50) {
    console.log("less than 50");
} else {
    console.log("more than 50");
    
}

const score = 200
if (score > 100) {
    const power = "FLY"
    console.log(`Power ${power} is accquired`);
}

// console.log(power); //ReferenceError: power is not defined

const balance = 1000;

if (balance > 500) console.log("implicite scope, in a single line");

if (balance > 700) console.log("implicite scope in a single line and "),
console.log("scope is defined by semicolon and new lines of code is added by using comma");

if (balance < 500) {
    console.log("less than 500");   
} else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 950) {
    console.log("less than 950");
} else {
    console.log("less than 1200");   
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to shop");
}

if (loggedInFromEmail || loggedInFromEmail) {
    console.log("User logged in");
}
