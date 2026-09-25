class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `pass through getter is ${this._password.toUpperCase()}tyuiop`;
    }
    set password(newPassword){
        this._password = newPassword.toUpperCase();
    }

    get email(){
        return `email through getter is ${this._email}`;
    }
    set email(newEmail){
        this._email = newEmail.toLowerCase();
    }
}

const sachin = new User ("SACHIN@GMAIL.COM", "12345asdfghjkl");
console.log(sachin);
console.log(sachin.email);
console.log(sachin.password);
