const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = myNums.map( (nums) => nums + 10)
console.log(result);

result = myNums.map( (nums) => {return nums - 11})
console.log(result);

// chaining methods over methods

let result1 = myNums
                    .map( (num) => num * 10)
                    .map( (num) => num + 2)
                    .filter( (num) => num % 12 === 0)
console.log(result1);
