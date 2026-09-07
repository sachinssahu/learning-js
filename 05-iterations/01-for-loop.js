// for

// Syntax:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 5; i++) {
    const element = i; 
    if (element == 3) {
        console.log("3 is a prime number");
    } 
    console.log(element);
}

for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop start value i: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value j: ${j} and value i: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);   
    }
}

let myArray = ["Naruto", "Sasuke", "Kurama"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("dectected 5 now executing break keyword");
        break;
    }
    console.log(`Value of index is: ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("dectected 5 now executing continue keyword");
        continue;
    }
    console.log(`Value of index is: ${index}`);
}