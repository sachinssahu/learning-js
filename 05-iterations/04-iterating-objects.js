const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} file extension is for ${myObject[key]}`);   
}

const prog = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in prog) {
    console.log(key);
    // prints keys, and keys of an array are indexes which starts from 0
}

for (const key in prog) {
    console.log(prog[key]);
}

const map = new Map() 
map.set('IN', "India")
map.set('QA', "QATAR")
map.set('SA', "Saudi")
map.set('IN', "India")

console.log(map);

// maps are not iteratable so for-in loop doesn't yeild object
for (const key in map) {
    console.log(key);
}
