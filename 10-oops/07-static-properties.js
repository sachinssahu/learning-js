class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User name is: ${this.username}`);
        
    }
    // TypeError: user1.createId is not a function when console.log(user1.createId());
   static createId(){
        return `Id is: ${123}`
    }
}

const user1 = new User("sachin")
console.log(user1.logMe());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher("Math Sir", "math@dfg.com")
teacher1.logMe();
// console.log(teacher1.createId()); // TypeError: user1.createId is not a function
