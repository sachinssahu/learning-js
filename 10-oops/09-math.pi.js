// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


const coffee = {
    name: "black coffee",
    isAvailable: true,
    price: 180,


    orderCoffee: function(){
        console.log(`ordering to make a coffee`);
        
    }
}
// single property
Object.defineProperty(coffee, "name", {
    // writable: false,
    enumerable: false,
    // configurable: false,
})
// multiple property
Object.defineProperties(coffee, {
    "isAvailable": {
        enumerable: false
    },
    "price": {
        writable: false
    }
})

coffee.price = 4000
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key, value] of Object.entries(coffee)) {
    if (typeof(value) !== 'function') {
        console.log(`${key} : ${value}`);        
    }
}