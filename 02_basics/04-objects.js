// const authUser = new Object()

const authUser = {}

authUser.id = 1
authUser.name = "Sachin Sahu"
authUser.isLoggedIn = false

console.log(authUser);

const authUser2 = {
    email: "sachinssahu@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sachin",
            lastName: "Sahu"
        }
    }
}

console.log(authUser2.fullName);
console.log(authUser2.fullName.userFullName);
console.log(authUser2.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

let obj3 = {obj1, obj2}
console.log(obj3);

obj3 = Object.assign(obj1, obj2)
console.log(obj3);

obj3 = Object.assign({}, obj1, obj2) // (target, source) here {} is empty object -> target, all else are source
console.log(obj3);

obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "1aa@aaa.aa"
    },
    {
        id: 2,
        email: "2aa@aaa.aa"
    },
    {
        id: 3,
        email: "3aa@aaa.aa"
    }
]

console.log(user[1].email);
console.log(Object.keys(authUser)); // outputs as array of keys
console.log(Object.values(authUser)); // outputs as array of values
console.log(Object.entries(authUser)); // outputs as array of array of key-value pair
console.log(Object.keys(authUser).length); // length of Object is always 1, so converts keys in array and then check length

console.log(authUser.hasOwnProperty("isLoggedIn")); // give answer in boolean 
console.log(authUser.hasOwnProperty("isLog")); // false when not found
