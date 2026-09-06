const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "AquaMan", "GreenLantern"]

// marvelHeros.push(dcHeros) // ['Thor','IronMan','SpiderMan',[ 'SuperMan', 'AquaMan', 'GreenLantern' ]]

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros) // concat gives a new array
// console.log(allHeros);

const allHerosSpread = [...marvelHeros, ...dcHeros] // ... sperads arrays into each element
console.log(allHerosSpread);

const arr = [1, 2, 3, 4, 5, [6, 7, 8], 6, 7, [9, 0, [4, 5, 6,]]]
const flatArr = arr.flat(Infinity)

console.log(flatArr);

console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin"));
console.log(Array.from({name: "Sachin"})); // doesn't know either keys or values to be converted into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
