// Date

let myDate = new Date()

console.log(typeof myDate);
console.log(myDate); // 2026-09-05T01:59:08.643Z  |  in TZ UTC
console.log(myDate.toString()); // Sat Sep 05 2026 02:00:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sat Sep 05 2026
console.log(myDate.toLocaleString()); // 9/5/2026, 2:01:04 AM

let myCreatedDate = new Date(2026, 0, 23);
console.log(myCreatedDate); // 2026-01-23T00:00:00.000Z
console.log(myCreatedDate.toString()); // Fri Jan 23 2026 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toDateString()); // Fri Jan 23 2026

let myCreatedDate2 = new Date(2026, 0, 23, 5, 30); // when date is defined as argument based input then month satrts with ZERO
console.log(myCreatedDate2); // 2026-01-23T05:30:00.000Z
console.log(myCreatedDate2.toLocaleString()); // 1/23/2026, 5:30:00 AM
console.log(myCreatedDate2.toDateString()); // Fri Jan 23 2026

let myCreatedDate3 = new Date("2026-06-22"); // when date are defined in some dateString format then month starts from ONE
console.log(myCreatedDate3); // 2026-06-22T00:00:00.000Z
console.log(myCreatedDate3.toLocaleString()); // 6/22/2026, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1788574052053
console.log(myCreatedDate3.getTime()); // 1782086400000
console.log(Math.floor(myCreatedDate3.getTime()/1000)); // 1782086400

console.log(myDate.getMonth()); // Output: 8 for September Month
console.log(myDate.getDay()); // Output: 6 Fri Jan 23 2026 00:00:00 GMT+0000 (Coordinated Universal Time)

let myNewDate = myDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "long",
    timeZone: 
})
console.log(myNewDate);
