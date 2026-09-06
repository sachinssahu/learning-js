// Functions

function sayMyName (){
    console.log("s");
    console.log("a");
    console.log("c");
    console.log("h");
    console.log("i");
    console.log("n");
}

// sayMyName with () is a function reference
// sayMyName() is a function execution

sayMyName
sayMyName();


function addTwoNumber (number1, number2) {
    console.log(number1 + number2);   
}

addTwoNumber() // NaN
addTwoNumber(11,2)
addTwoNumber(11,"2")
addTwoNumber(11,"sachin")
addTwoNumber(11,null)


// while defining function we pass parameters and while executing function we pass arguments


let result = addTwoNumber(11,2)
console.log(`Result: ${result}`); // console.log gives undefined as function lacks a return statement

function addTwoNumbers (number1, number2) {
    // return number1 + number2
    let result = number1 + number2
    return result
    comsole.log("This is unreachable code as after return statement nothing in a function executes")
}

result = addTwoNumbers(11,2)
console.log(`Result: ${result}`);


function loginMessage (username) {
    return `${username} just logged in`
}

loginMessage("Sachin")
console.log(loginMessage("Sachin"))

function loginMessage2 (username) {
    if (username === undefined) { 
        console.log(`Please enter username`)
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage2())

function loginMessage3 (username) {
    if (!username) { 
        console.log(`Please enter username`)
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage3());

function loginMessage4 (username = "sahu") {
    if (username === undefined) { 
        console.log(`Please enter username`)
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage4());
console.log(loginMessage4("Sachinn"));
