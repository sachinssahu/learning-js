// JavaScript Execution Context
/*

{} Global Execution Context -> this on browser it is Window
Types of Execution Context:
1. Global EC
2. Function EC
3. Eval EC

Execution is done in Phases as below:
1. Memory Creation Phase or Creation Phase | memory is allocated to variables with doing any operation
2. Execution Phase


Let us consider a file test.js which contains below code.

//SOF
let val1 = 10
let val2 = 5
function addNum (num1, num2){
let total = num1 +num2
return total
}
let result1 = addNum (val1, val2)
let result2 = addNum (10, 2)
//EOF

Then code execution happens as below:
1. Global Execution(Global Environment): gets allocated under this
2. Memory Phase: collects all the variables:
2a. 
line1: val1 -> undefined
line2: val2 -> undefined
line3-6: addNum -> defination
line7: result1 -> undefined, result2 -> undefined
3. Execution Phase:
3a.
val1 -> 10
val5 -> 5
addNum -> no excution as definition is already hold
on line7: it see function execution then it will create a new variable environment + execution thread kind of a sanbox
in which a separate Memory Phase and Excution Phase will happen.
Memory phase of addNum:
num1 -> undefined
num2 -> undefined
total -> undefined
Execution phase of addNum:
num1 -> 10
num2 -> 2
total -> num1 + num2 | total = 12
total -> 15 then get returned to Global Execution Context
after return it deleted addNum variable environment + execution thread in which we did memory + execution phase

on Line8: it see function execution then it will create a new variable environment + execution thread kind of a sanbox
in which a separate Memory Phase and Excution Phase will happen.
Memory phase of addNum:
num1 -> undefined
num2 -> undefined
total -> undefined
Execution phase of addNum:
num1 -> val1 -> 10
num2 -> val2 -> 5
total -> num1 + num2 | total = 15
total -> 15 then get returned to Global Execution Context
after return it deleted addNum variable environment + execution thread in which we did memory + execution phase



* Call Stack *
LIFO Last In First out concept goes.
In call stack


2: result2 -> addNum -> goes in then out
1: result1 -> addNum -> goes in then out
bottom: Global Execution Context


* Call Stack *
LIFO Last In First out concept goes.
assume there is a function one() inside we called two() inside which we call three()
In call stack

3: three()
2: two()
1: one()
bottom: Global Execution Context
*/


/*
================================================================================
🌐 JAVASCRIPT EXECUTION CONTEXT NOTES
================================================================================

Whenever JavaScript runs your code, it creates an Execution Context (an environment 
to handle the execution). There are three types:
1. Global Execution Context: The default environment (in browsers, `this` points to `Window`).
2. Function Execution Context: Created every time a function is called.
3. Eval Execution Context: Created inside `eval` strings (rarely used).

JavaScript executes code in two main phases:
1. Memory Creation Phase (Creation Phase): JavaScript scans the code and allocates 
   memory space for all variables and functions before running any code. Variables 
   are given a placeholder value of `undefined`, and functions store their complete code definition.
2. Execution Phase: Code runs line by line, and actual values are assigned to variables.


--------------------------------------------------------------------------------
🔍 STEP-BY-STEP CODE WALKTHROUGH
--------------------------------------------------------------------------------

Consider this code in a file named `test.js`:

let val1 = 10
let val2 = 5

function addNum (num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


--- PHASE 1: Global Execution & Memory Phase ---
* The Global Execution Context is created.
* Memory Phase collects all variables and functions:
  - val1 -> undefined
  - val2 -> undefined
  - addNum -> [Stores full function definition]
  - result1 -> undefined
  - result2 -> undefined


--- PHASE 2: Execution Phase (Line by Line) ---
* val1 gets assigned 10
* val2 gets assigned 5
* The addNum function definition is skipped here (already stored in memory)

-> When it hits Line 7 (`result1 = addNum(val1, val2)`):
   JavaScript creates a brand-new mini-environment (a Variable Environment + Thread 
   of Execution sandbox) for this function call:
   
   [Memory phase of addNum:]
   - num1 -> undefined
   - num2 -> undefined
   - total -> undefined
   
   [Execution phase of addNum:]
   - num1 gets val1 (10), num2 gets val2 (5)
   - total = num1 + num2 -> 10 + 5 = 15
   - 15 is returned to the Global Execution Context and saved into result1.
   - Cleanup: Once returned, this temporary function sandbox is completely deleted.

-> When it hits Line 8 (`result2 = addNum(10, 2)`):
   A brand-new temporary sandbox is created again:
   
   [Memory phase of addNum:]
   - num1 -> undefined, num2 -> undefined, total -> undefined
   
   [Execution phase of addNum:]
   - num1 gets 10, num2 gets 2
   - total = num1 + num2 -> 10 + 2 = 12
   - 12 is returned and saved into result2.
   - The temporary sandbox is deleted again.


--------------------------------------------------------------------------------
🥞 THE CALL STACK
--------------------------------------------------------------------------------

JavaScript uses a Call Stack to keep track of what code is currently running. 
It follows the LIFO (Last In, First Out) principle—meaning the last function to 
go into the stack is the first one to finish and pop out.

1. Call Stack for our code:
   3. result2 (addNum) -> enters stack, runs, returns, and pops out.
   2. result1 (addNum) -> enters stack, runs, returns, and pops out.
   1. Bottom: Global Execution Context (stays until program finishes).

2. Call Stack with nested functions (e.g., one() calls two() calls three()):
   3. three() -> (Runs last, finishes and pops out first)
   2. two() 
   1. one() 
   0. Bottom: Global Execution Context
================================================================================
*/