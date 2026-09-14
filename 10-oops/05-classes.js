// This is happening after ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}asdfghjkl`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("sachin", "@gmail.com", "123456")
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// Behind the scene

// function User (username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

// User.prototype.encryptPassword = function(){
//         return `${this.password}asdfghjkl`;
//     }

// User.prototype.changeUsername = function() {
//         return `${this.username.toUpperCase()}`;
//     }

// const user2 = new User("sachin2", "@gmail.com", "123456")
// console.log(user2.encryptPassword());
// console.log(user2.changeUsername());
