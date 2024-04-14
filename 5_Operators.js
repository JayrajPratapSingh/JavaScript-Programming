//<<<<<<<<<<<<<<<<<<<< OPERATORS >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Type of Operators
 
// Data Types  ------------------------>

// Primitive data types =====>

// String ==> "Jayraj"
// Number ==> 3
// Boolean ==> True, False
// Undefined
// null
// BigInt
// Symbol

// typeOf Operator ==> this tells us the type of the data

let string = 9
console.log(`the data type is: ${typeof(string)}`)  // Use this or
console.log(`the data type is: ${typeof string}`)  // Use this both is good 

let newString = string + ""

console.log(newString)
console.log(typeof newString)  // gives a string

let num = "23"

console.log(typeof num)
console.log(typeof(parseInt(num)))
// To change in String to number +"23"

// console.log(typeof((+num)))
num2 = Number(num)
console.log(typeof(Number(num)))


// Converting into stiring
let num1 = 23
console.log(typeof(String(num)))

// Join two Stings

let str1 = "Jairaj"
let str2 = "Singh"

console.log(str1 + " "  +str2)

// adding two number by string

let strnum1 = "10"
let strnum2 = "17"

console.log(+strnum2 + +strnum1)

// template String

let age = 22;
let name = "harshit"

//print my name is harshit age is 22

console.log(`My name is ${name} age is ${age}`)

// Or
console.log("My name is " + name + " age is " + age)

// undefined

let myname;
console.log(typeof myname)  // it will give undefined because no value is assigned and aap const k sath nahi kar sakte kuch na kuch value assign karni padegi

// null value --> null means kuch nahi null value

let myVariable = null;
console.log(typeof myVariable, myVariable);
myVariable = "Jayraj"
console.log(typeof myVariable, myVariable)


// Note: type of null is object is a bug in javascript

console.log(typeof null)  // this will give object which is a bug in javascript




// BigInt --> introduced in 2021

let num5 = 123 ; // is there any limit in javascript to store a number if yes what is the limit
console.log(Number.MAX_SAFE_INTEGER) // it will give a limit

// if you are sure that your varible is storing more than safe integer then use BigInt

let numBigint =  BigInt(842723972983702347307402734048923407)
let numBig = 123n // this is also a bigint
let normalNum = 10 //
console.log(numBigint)

// You cant add bigInt and normal number you have to convet into bigint then you can add both the bigInt number 





//<<<<<<<<<Boolean and Comparison operators

let numa= 5;
let numb = 7;

console.log(numa > numb) // it will return false 
console.log(numa < numb)  // it will return true
console.log(numa >= numb)  // it will also give false
console.log(numa <= numb)  // it will give true


//<<<<<<<<<<<<<<<<<<< Double equla and tripal equla >>>>>>>>>>>>.


let numeq1 = 34
let numeq2 = "34"

console.log(numeq1 == numeq2) // gives true only compare number not the type
console.log(numeq1 === numeq2)  // gives false because it also compares the type

console.log(numeq1 !== numeq2)  // gives true













