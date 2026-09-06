// IIFE: Immediately Invoked Function Expression
// A standard function waits for you to call it by name. An IIFE runs the second the browser or Node.js reads it.
// syntax: (function body)();


// Named IIFE
(function coffee() {
    console.log("coffee function executed");
})(); // end a iife with semicolon to end scope else will get TypeError: (intermediate value)(...) is not a function

(function coffee() {
    console.log("coffee two function executed");
})();

// UnNamed IIFE
( () => {
    console.log("nameless function executed");
})();

// IIFE with arguments can be named and unNamed both
( (name) => {
    console.log(`nameless function executed with arguement name having value ${name}`);
})("Sachin");

// Two IIFE can be written in same file by using ; to end scope scope of IIFE