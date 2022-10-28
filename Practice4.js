console.log("Hello Priyanshu\n");

// Ques1 : What will the following statement print in javascript
// console.log("har\"".length);

console.log("har\"".length);
console.log('PRIYANSHU!');

// Different way to print statements
console.log(`priyanshu "sharma"`);
console.log("wow!");

// Ques2 : Explore the includes, startwith & end with function in a string 

let name = "PRIYANSHU";
console.log(name.startsWith("P"));
console.log(name.endsWith("u"));

// Ques3 : Write a program to convert a given string in lowercase

console.log(name.toLowerCase());
console.log(name.toUpperCase());

// Ques4 : Extract the amount out of this string "Please give rs 1000"

let a = "please give rs 1000";
let value = parseInt("please 1000");
console.log(value);

console.log(parseInt("1000"));
console.log(parseInt("he was 40"));    //Nan

// Ques5 : Try to change 4th character of a given string were you able to do it?
// Ans = No!

a[3] = "r";
console.log(a);