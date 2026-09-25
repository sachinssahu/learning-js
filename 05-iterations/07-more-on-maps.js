// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let result = myNums.map( (nums) => nums + 10)
// console.log(result);

// result = myNums.map( (nums) => {return nums - 11})
// console.log(result);

// // chaining methods over methods

// let result1 = myNums
//                     .map( (num) => num * 10)
//                     .map( (num) => num + 2)
//                     .filter( (num) => num % 12 === 0)
// console.log(result1);


let seqs = [
  { id: 1, tripId: 1, stopId: 11, seq: 0, arrivalAt: null,  departureAt: null, isSkipped: false },
  { id: 2, tripId: 1, stopId: 21, seq: 1, arrivalAt: null,   departureAt: null, isSkipped: false },
  { id: 3, tripId: 1, stopId: 31, seq: 2, arrivalAt: null,  departureAt: null, isSkipped: false },
  { id: 4, tripId: 1, stopId: 41, seq: 3, arrivalAt: null,  departureAt: null, isSkipped: false },
  { id: 5, tripId: 1, stopId: 51, seq: 4, arrivalAt: null,  departureAt: null, isSkipped: false },
  { id: 6, tripId: 1, stopId: 61, seq: 5, arrivalAt: null,  departureAt: null, isSkipped: false },
  { id: 7, tripId: 1, stopId: 71, seq: 6, arrivalAt: null,  departureAt: null, isSkipped: false },
]

let seqMap = seqs.map( (seqs) => {console.log(seqs.seq)})

console.log(seqMap);
