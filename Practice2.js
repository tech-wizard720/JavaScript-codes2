// STRING METHODS

// Types of Declaration
var str = "Priyanshu"
let str2 = 'PRIYANSHU'
let str3 = `priyanshu`
console.log(str);
console.log(str2);
console.log(str3);

console.log(str.length);


// If you want to use any quotation in between the string then 
// you can use ESCAPE SEQUENCE CHARACTER

var str = 'D\'souza';    // \' -> ESCAPE SEQUENCE OPERATOR
console.log(str);

// STRING FUNCTIONS WE're GONNA USE
console.log(str.toUpperCase());
console.log(str2.toLowerCase());

let lname = "sharma"

console.log(str.concat(" " + lname));


// TEMPLATE 
let value1 = 1;
let value2 = 3;
let value3 = 4;


// STRING INTERPOLATION
let result = `the values are ${value1}, ${value2} & ${value3}`;
console.log(result);
