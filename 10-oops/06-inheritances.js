class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // refers to parent class

    this.email = email;
    this.password = password;
  }
  TeachClass() {
    console.log(`${this.username} teaches SQL`);
  }
}

const user1 = new Teacher("Sachin Teacher", "@gma.com", "1234567890");
console.log(user1);
console.log(user1.TeachClass());

const user2 = new User("Sahu Teacher")
console.log(user2);
console.log(user2.logMe());

//inherited behaviour
console.log(user1.logMe()); // from parent to child
// console.log(user2.TeachClass()); // can't inherit from child to parent : TypeError: user2.TeachClass is not a function



// check equality of two instances
console.log(`Is user1 === user2: ${user1 === user2}`); // false | two instance of two diffrent classes are not equal
console.log(`Is user1 === Teacher: ${user1 === Teacher}`); // false | instance can't be equal to a class
console.log(`Is user2 === User: ${user2 === User}`); // false | instance can't be equal to a class

const user3 = new Teacher("sachin Teacher 2", "@gmail.com", "45678765")

console.log(`Is user1 === user3: ${user1 === user3}`); // false | Two instances of same object can't be equal

console.log(`Is user1 instanceof Teacher: ${user1 instanceof Teacher}`); // true
console.log(`user2 instanceof Teacher: ${user2 instanceof Teacher}`); // false
