// {} is a scope, 

// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30
    d = 40

}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // prints 30 because var
console.log(d); // prints 30 because d is variable as well


let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("block scope: ", a)
}

console.log("global scope: ", a)


// Nested Scopes
function one () {
    const username = "Sachin"
    function two () {
        const website = "hiAnime.at"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined   
    two()
}
one()


if (true) {
    const userName = "Sachin"
    if (userName === "Sachin") {
        const website = "hiAnime.at"
        console.log(userName + " " + website);
    }
    // console.log(website); // ReferenceError: website is not defined
}

// console.log(userName); // ReferenceError: userName is not defined

console.log(addOne(5));

function addOne (num) { // normal function
    return num + 1
}

addOne(5)

// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) { // expression or hoisting
    return num + 2
}

addTwo(5)