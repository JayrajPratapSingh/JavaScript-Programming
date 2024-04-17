// //<<<<<<< Methods >>>>>>>>>>>>

// // function Inside objects

// const Person = {
//     "firstName": "jayraj",
//     "gender": "male",
//     "age":"34",
//     "about":function(){
//          console.log(`He is a great coder, His name is ${this.firstName}`) // for accessing any variable you have to use this.firstName otherwise it will give reference error
//      //// this wo object hai jo is function ko call kar raha hai
//     // matlab Person wo object hai jo is function ko call kar raha hai
//     // ab kya kro smajhne k liye simply this print koro
//     console.log(this)   // {firstName: 'jayraj', gender: 'male', age: '34', about: ƒ} // this is object of person
// }
// }


// //console.log(Person.about) // it will give total function

// Person.about()


// // this ki value tab nahi pata lagti jab ham code likhte hai ye tab pata lagti hai jab ham run kar rahe hote hai

// const person1 = {
//     "firstName":"Jayraj",
//     "age":"25",
//     "about":personInfo
// }

// const person2 = {
//     "firstName":"Jayraj",
//     "age":"25",
//     "about":personInfo
// }

// const person3 = {
//     "firstName":"Jayraj",
//     "age":"25",
//     "about":personInfo
// }

// function personInfo(){
//     console.log(`My name is ${this.firstName} and age is ${this.age}`)
// }

// person1.about()
// person2.about()
// person3.about()



///<<<<<<<<<<< UnderStand This  >>>>>>>>>>

// console.log(this)// this will print window object which is javascript object
// console.log(window) // it will give same object like window both are same

// console.log(this === window) /// gives true

// if you make a function and call it like method then it will give window object because you .js page it takes a objct
// in window object you will find various mehtods

// function myFunk(){
//     // console.log(this) // this will also print window object which is huge object
//     console.log("hello world") 
    
// }
// myFunk()
// // now in browser console write window you will find a myFunc object also there
// // Means you can also call window.myFunk()

// window.myFunk() // matlab myfunk window object call kar raha hai

// // this kai bar kya karata hi ki problem create karta hai uske liye ham use strict mode use kar lete hai 
// // to ye undefined deta hai

function myFunk(){
    "use strict"  // top pe bhi use kar sate hai file k
    console.log(this) // undefined
    
}