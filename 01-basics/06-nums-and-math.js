const score = 22
const balance = new Number (420)

// console.log(score);
// console.log(typeof score);

console.log(balance);
console.log(typeof balance);

console.log(typeof balance.toString());
console.log(balance.toString().length);

const newBalance = new Number (420.8285567)
console.log(newBalance.toFixed(3));
console.log(newBalance.toPrecision(3));
console.log(newBalance.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString()); // US number system million, billion
console.log(hundreds.toLocaleString('en-IN'));


// ************************ Maths *************************
console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(newBalance));
console.log(Math.floor(newBalance));
console.log(Math.ceil(420.11111));
console.log(Math.random());


console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9), "\n");


/*
By default, JavaScript’s Math.random() only gives you a decimal number between 0 (inclusive) and 1 (exclusive), 
like 0.4829 or 0.9123. To get a random number within a custom range (like choosing a random number
between 1 and 10, or 50 and 100), you have to scale and shift the math.
*/

console.log(Math.random());
console.log((Math.random()*10)); // but this can also come 0.28382577865868286 to avoid this add 1
console.log((Math.random()*10) + 1, "\n");

// get random in a fixed range
min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min));
