// for-of loop

// ["", "", ""]
// [{}, {}, {}]

const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
    console.log(num);
}

let myArray2 = ["Naruto", "Sasuke", "Kurama"]

for (const i of myArray2) {
    console.log(i);
}

let hellos = "hello"

for (const hello of hellos) {
    console.log(`Each char of string: ${hello}`);
}

// Maps
// hold unqiue key-value pairs in order in which inserted in a map

const map = new Map()
map.set('IN', "India")
map.set('QA', "QATAR")
map.set('SA', "Saudi")
map.set('IN', "India")

console.log(map);

// prints array of key-value pair
for (const key of map) {
    console.log(key);
}

// destructure key-value pair and it is native syntax to do so
for (const [key, value] of map) {
    console.log(key, "?", value);
}

const myObject = {
    'game1': "NFS",
    'game2': "POP WW"
}

// TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, "?", value);   
// }

// Need a different way to iterate through objects
