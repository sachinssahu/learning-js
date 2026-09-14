let myName = "sachin";

console.log(myName.length);
// console.log(myName.trueLength());

let myHero = ["Thor", "IronMan"];

let heroPower = {
  Thor: "Hammer",
  IronMan: "Brain",
  getThorPower: function () {
    console.log(`Thor's power is ${this.Thor}`);
  },
};

Object.prototype.sachin = () => {
  console.log("sachin is present in all objects");
};
Array.prototype.sachin2 = () => {
  console.log("sachin2 is present in all arrays");
};

// heroPower.getThorPower()
heroPower.sachin();
// heroPower.sachin2() //TypeError: heroPower.sachin2 is not a function
myHero.sachin2();

// INHERITANCE

const user = {
  userName: "sachin",
  email: "sachin@gamil.com",
};

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JavaScript",
  fullTime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = user;

// MODERN SYNTAX
Object.setPrototypeOf(TeacherSupport, Teacher)

myName = "sachin         ";

String.prototype.trueLength = function (){
    // console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength();

"sachin sahu       ".trueLength()