// <<<<<< UnderStanding Callback  >>>>>>>>

// sabse jayada use asynchronous programming me use hota hai

// function myFunc(callback){
//     console.log("function is doing some task 1")
//     callback()
// }

// function myFunc2(){
//     console.log("function is doing task 2")
// }

// myFunc(myFunc2)  // direct functio n bhi lish sakte hai

///////////////////////////////////////////////////////////////////////

// InSunchronous

function getTowNumbers(number1, number2, callback){
console.log(number1, number2)
callback(number1, number2)
}

function addtowNumbers(num1, num2){
console.log(num1+num2)
}

getTowNumbers(4,5, addtowNumbers) 




