const User = {
    _email: 'sachin@gmail',
    _password: "2345678SACHIN",

    get emails(){
        return `email by getter is ${this._email.toUpperCase()}`;
    },
    set emails(value){
        this._email = value;
    }
}

const coffee = Object.create(User)
console.log(coffee._email);
console.log(coffee.emails);