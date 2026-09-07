const code = ['js', 'ruby', 'python', 'java', 'cpp']

code.forEach(function (item) {
    // in forEach it requires a callback function
    // callback function doesn't have a name
    console.log(item);
})

console.log("\n", "Now using arrow function");

code.forEach((val) => {
    console.log(val);
})

console.log("\n", "Now using defined function");

function printMe(item) {
    console.log(item);
}
code.forEach(printMe)

code.forEach((item, index, code) => {
    console.log(item, index, code);
})

const myCode = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCode.forEach((item, index) => {
    console.log(item.languageName);
    console.log(item.languageFile, "\n");
})