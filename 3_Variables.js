//<<<<<<<<<<<<<<<<<<<<<<<< Variables >>>>>>>>>>>>>>>>>>>>>>>>

/* 
Variable can store some information 
We can use that iformation later
We can change that information later
*/

"use strict";

//Use Stirict bahot sari galatiyan karne se bachata hai jo ki ham aage dekhte rahenge

//--------> declare a variable ---->
var firstName = "jayraj's Coding";

//use a variable 
// Note : variable name is case sensitive so you cant cahnge any letter cap to small or small to cap if you do that then you will face a error 

console.log(firstName);

//change value
// Note : for changing a value of a variavle you do not need to write var agian

firstName = "Shravan's Coding";

console.log( firstName);

//Uncaught ReferenceError: firstname is not     3_Variables.js:27  its a error file name 3_Variavles.js line number 27 me  reference galat hai jo defined hi nahi hai


/**
 * Rules For Naming variable
 * 
 * You can not start with a number like --> 3home Not valid home3 is vald 
 * 
 * Give unexpected token
 * 
 * 
 */

var value1 = 10;
console.log(value1 /2)


// you can use _ or $ symbol in starting of variable name except this you cant use spaciel cahrector in starting

var $value = 40  //valid

console.log($value*2)  //valid

// you can not use space in valriable name

// name_variable --> this is called snake case writing

//nameVariavle ---> this is called camel case writing

//Convention not rule means you should follow this
//Start with small letter and use camelCase


//<<<<<<<<<<<<<<<<<<<<<<<< let keyword >>>>>>>>>>>>>>>>>>>>>>>>>

//declare variables with let keyword 

var stName = "Hariom"
var stName = "Mohit"

let name = "Jaiom"
// let name = "Hello"  // gives an error name already has been declared but in case of var there is no error

console.log(stName)
console.log(name)


//block scope vs functional scope


//declare constant

const pi = 3.14;
// pi = 3.4  //Assignment to constat variable error you can not change value
console.log(pi)