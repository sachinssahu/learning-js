const name = "Sachin"
const animeTitleCovered = 200

// console.log(name + animeTitleCovered +  " Value");
// not recommended use string interpollation

console.log(`My name is ${name} and I have watched ${animeTitleCovered} anime titles till now.`);

const animeTitle = new String('Jujutsu Kaisen: Culling Games Part I');

console.log(animeTitle);
// console.log(animeTitle[0]);
// console.log(animeTitle.__proto__);
// // define string as String Object and check prototype to check list of already avaiable function for object
// console.log(animeTitle.__proto__.toUpperCase);

console.log(animeTitle.length);
console.log(animeTitle.toUpperCase());
console.log(animeTitle.charAt(2));
console.log(animeTitle.indexOf('J'));
console.log(animeTitle.indexOf('j'));

const newString = animeTitle.substring(0, 4) // will include only 0,1,2,3 in total 4 characters
console.log(newString);


const anotherString = animeTitle.substring(-36, 4) 
// The reason anotherString is not "rt I" comes down to how JavaScript's .substring() method handles negative numbers.
// so above effectively becomes const anotherString = animeTitle.substring(0, 4) 
// can be acheived by const anotherString = animeTitle.slice(-4) 
console.log(anotherString);
console.log(animeTitle.slice(-6));

const lol = "       lots of laughter       "
console.log(lol);
console.log(lol.trim());

const url = "https://github.com/sachinssahu/learning%20js"
console.log(url.replace('%20', '-'));
console.log(url.includes('sahu'));

console.log(animeTitle.split(' '));
console.log(animeTitle.split(' ', 4));


// ++++++++++++++++++++++ Extras ++++++++++++++++++++++
const emptyPrimitive = "";
if (emptyPrimitive) {
  console.log("This won't run"); // Correct
}

const emptyObject = new String("");
if (emptyObject) {
  console.log("This WILL run!"); // Bug! An object is always truthy.
}

console.log("Sachin" === new String("Sachin")); // false (string vs object)
