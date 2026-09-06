let email = "sachin@gmail.com"

if (email) {
    console.log("got user email");
} else {
    console.log("don't have user email");      
}

email = ""

if (email) {
    console.log("got user email");
} else {
    console.log("don't have user email against empty string");      
}

email = []

if (email) {
    console.log("got user email against empty array");
} else {
    console.log("don't have user email");      
}

// falsy value are as below apart from them everything else is truthy value
// false, 0,  -0, BigInt 0n, "", null, undefined, NaN

// truthy values are as below
// "0", 'false', " " string with a whitespace, [], {}, function(){}

email = []

if (email.length === 0) {
    console.log("array is empty");
} else {
    console.log("don't have user email");      
}

email = {}

if (Object.keys(email).length === 0) {
    console.log("object's keys array is empty");
} else {
    console.log("don't have user email");      
}

console.log(false == 0); //true
console.log(false == ''); //true
console.log(0 == ''); //true


// Nullish Coalescing Operator ??

let val1
val1 = 5 ?? 10 // 5
val1 = null ?? 15 // 15 first non-null value
val1 = null ?? 15  ?? 22 // 15 first non-null or defined value
val1 = undefined ?? 22 // 22 first non-null or defined value

console.log(val1); 

// Terninary Operator
// condition > true : false


const coldCoffeePrice = 200
coldCoffeePrice <= 140 ? console.log("less than 140") : console.log("more than 140");


