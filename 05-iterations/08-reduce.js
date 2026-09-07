// reduce

const myNums = [1, 2, 3]
const initialValue = 0;

let myTotal = myNums.reduce( function (acc, curVal) {
    console.log(`Accumulator value is: ${acc} and CurrentValue is: ${curVal}`);
    console.log(`performing acc + curVal = ${acc} + ${curVal} = ${acc+curVal}, this is now new value sent to accumulator`);
    return acc + curVal;
}, 0)
console.log(myTotal);

myTotal = myNums.reduce( (acc, curVal) => acc + curVal, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Shampoo",
        price: 299,
        unit: 1
    },
    {
        itemName: "Sugar",
        price: 80,
        unit: 2
    },
    {
        itemName: "Salt",
        price: 20,
        unit: 3
    },
]

let cartTotal = shoppingCart.reduce( (acc, item) => {
    // console.table([acc, item.unit, item.price, (item.unit * item.price)])
    console.table({
        subtotal: acc, 
        item: item.itemName,
        qty: item.unit, 
        price: item.price, 
        itemTotal: (item.unit * item.price)})
    return acc + (item.unit * item.price)
}, 0)
console.log(`Cart total value is INR${cartTotal}`);
