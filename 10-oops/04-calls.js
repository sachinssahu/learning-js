function setUserName(userName) {
    // did some dB task
    this.userName = userName
    console.log("called")
}

function createUsers (userName, email, password){
    setUserName.call(this, userName)

    this.email = email;
    this.password = password;
}

const user1 = new createUsers("sachin", "sachin@gmail.com", "1234567890")
console.log(user1);
