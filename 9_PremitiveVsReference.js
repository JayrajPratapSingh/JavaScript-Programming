// <<<<<<<< Premitive VS Reference Type >>>>>>>>>>
// premitive type Behaviour 


let num1 = 6
let num2 = num1

console.log(num1)
console.log(num2)
num1++
console.log("after increament")
console.log(num1)  // 7
console.log(num2)  //  6

// In stack if we create variable and assign a value then it stores value in different variable 
// And if change the value of Num1 it will change so thay are different variable they will print diffrent value
// Ye jyada jagah bhi nahi lete
// Reference Type Behaviour

let array1 = [1, 4, 5]

let array2 = array1

console.log(array1)
console.log(array2)

array1.push("lafanga")

console.log("after changing in array")


console.log("array1 :",array1) // both will print same value because of 
console.log("array2 :",array2)

//There are tow types of storage memory which is Stack and heap
//What will store heap--> Array1 will store in heap
// What will Store Stack--> It will store poiner which is a address of Array1
// Now when we do Array2 = Array1 then Array2 k liye ek naya pointer banega
// So that Array2 Ko bhi Same address mil jayega
// Ab ham kisi bhi Variable k array me change karenge to change ek hi address pehoga to value bhi same hogi



//  Now Questin is how to Clone The array 


// let array3 = array1.slice(0)

let array3 = [].concat(array1)
console.log(array3)

// New Method of Cloning

// <----------- Spred Operator ------------>

let array4 = [...array1]
console.log("Array 4:", array4)

console.log(array1===array4) // give false because heap memory address is different


// CONCAT adding two arrays

// const ConcatedArray = array1.concat(array3)
// console.log("ConcatedArray:", ConcatedArray)

// also you can do
const ConcatedArray =[...array1, ...array4]

console.log("ConcatedArray:", ConcatedArray)



