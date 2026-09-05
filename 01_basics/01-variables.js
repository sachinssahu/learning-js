const accountId = 20214136622
let accountEmail = "sachin.sahu@pagarbook.com"
var password = "1234567890"
accountCity = "Bangalore"
let accountState;

// accountId = 1234567890 // immutable
accountEmail = "sdfghj@sdfgh.asd"
password = "2345678"
accountCity = "Korba"

console.log(accountId);

/* 
console.table displays in tabular Format
pefer not to use var due issue in block scope and functional scope
*/

console.table([accountId, accountEmail, password, accountCity, accountState]);


