// switch-case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 30

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break; 
// as soon as it gets a match then swtich block executes all the lines of code below it except default so dont forget to put break statement
    case 4:
        console.log("apr");
        break;

    default:
        console.log(`no month found for ${month}`); 
        break;
}


const monthName = "mar"

switch (monthName) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("mar");
        break; 
// as soon as it gets a match then swtich block executes all the lines of code below it except default so dont forget to put break statement
    case "apr":
        console.log("apr");
        break;

    default:
        console.log(`no month found for ${month}`); 
        break;
}