// Arrays -> copy operation creates shallow copy (shares same refrence) not a deep copy (have sepearate reference)

let myArr = [9, 8, 7, 6];
let Heros = ["Luffy", "Yuta"];

let myArr2 = new Array (1, 2, 3);

console.log(myArr2[0]); // indexed from zero

console.log(myArr.push(5)); // adds element at last index
console.log(myArr.push("sachin"));
console.log(myArr);

myArr.pop(); // removes values largest index
console.log(myArr);

myArr.unshift(22)
console.log(myArr);

myArr.shift(); // removes element at Index zero
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(22)); // -1 when value of element is not found
console.log(myArr.indexOf(7)); // prints index when element value is found

let newArr = myArr.join() // give a comma separted string


console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // string


console.log(newArr + '** sachin, 67897&^*(');

// Slice and Splice

const arr1 = [0, 1, 2, 3, 4, 5, 6]

let sliced = arr1.slice(1,3) // prints (arg1 as start index, arg2 as end index - 1) and doesn't change actual array
console.log(sliced);
console.log(`after slicing the arr1 ${arr1}`);

let spliced = arr1.splice(1,3) // (start index, end index) and then removes the spliced part from actual array
console.log(spliced);
console.log(`after splicing the arr1 ${arr1}`);



