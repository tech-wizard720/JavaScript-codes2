const { lookup } = require("dns");

console.log("Hello world This is priyanshu!");
console.log(5+6);

/*

// DATATYPES in Js
1. let     : FREQUENTLY USED (ACT AS A BLOCK VAR)
2. var     : RARELY USED     (ACT AS A GLOBAL VAR)
3. const   : MODERATE USED   (CONSTANT Through out the program)


*/


// CREATING A FUNCTION IN OLD WAY
function sum(){
  let a =6;
  let b =7;
  console.log(a+b);
}

// CREATING A FUNCTION IN NEW WAY
const sum2=()=>{
  var c= 4;
  var d = 5;
  console.log(c+d);
}

// PARAMETERIZED FUNCTION
const sum3=(a1,a2)=>{
  return a1+a2;
}

//calling the parameterized function
console.log("CALLED PARAMETERIZED FUNCTION ",sum3(7,9));


// creating an Object
let student = {
  name: "priyanshu",
  roll: 34,
  std : 10
}

// console.log(student[name]);
console.log(student.std);
student['lname'] = "sharma";      // Adding a key in the existing object
console.log(student);


// TYPES OF FOR LOOPS IN JAVASCRIPT
//      1. Simple For loop
//      2. For in loop
//      3. For of loop


// SIMPLE FOR LOOP : used as it is like other programming languages
for(let i=0;i<4;i++){
  console.log(i);
}

// for in loop : Mostly used for particular object variable
for(let a in student){
  console.log("the value of ",a, " is ",student[a]);
}
console.log("GOT THE POINT?")


// for of loop : Widely used for a string or an Array
for(let b of "PRIYANSHU"){
  console.log(b);
}


// let's create an array
let arr = [2,4,6.53,4,"sharma"];
for(let value of arr){
  console.log(value);
}

