//<<<<<<<<< How JavaScript works  >>>>>>>>
// <<<<<<<<<<<<< Compilation  Phase 1>>>>>>>>>>>>>

// code execute hone se phale sare code ko ek bar dekhata hai jise compilation kahate hai
// ye sabse pahle hota hai
// Compilation phase bhi bol sakte hai
 

// Compilation k bhi 3 part hote hai

//1-> Tockenising/Lexing -> hamara code chote chote tukdo me toot jata hai in chunks ko Token bolte hai
//2-> Parsing  -> In chote chote tukdo ko smajh a ek AST(Astrax Syntax Tree) banata hai 
//3-> Code genration --> is AST ki madad se hamara code executable form me genrate hota hai

// Why compilation
// Ecma script k documetation me ye kahi nahi likha ki code compile karana hai
// 1-documetation me ye likha hai ki pahle Early error checking honi chahiye
// 2-Aur fir jitne bhi variabel hai unka scope kya hoi wo bhi pata hona chahiye - Determining apropriate scopes for variables
// in 2 kamo ko karne k liye parse karna hi padega

// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = ."Jayraj"  // ab dot se kya hoga ki hamare code ki pahli line execute hone se pahle ho error aajayega because of compolation

// jab hamara code parse hota hai to vo dekh leta hai ki kitane variable hai scope kaya hai
// Koi function hai ya nahi agar nahi hai to wo globle scope me hota hai
// matlab javascript k pass instruction hai ki ek varible hai firstName jo ki globle scope me hai

// Note: Sare Errors nahi pakata

// <<<<<<<<<<<<<<   Code Execution  Phase 2 >>>>>>>>>>>>
// code compile hone k bad code execute hoga
// Code ko excute karne k liye pahle Globle Execution contex create hota hai
// Globle Execution context k 2 phase hote hai

//1- Creation Phase // Memory creation
// creation phase me phale variables ki balue undefined set hoti hai and this ki value window set hoti hai aur window ki value ek object set hoti hai jo bhut badi hoti hai


//2- Code Execution phase

// console.log(this) // {objct}
// console.log(window) // {object}
// console.log(firstName) // undefined
// var firstName = "Jayraj" // in Memory cration firstName = "Jayraj"
// console.log(firstName) // Jayraj

// ager koi function hai to wo creation phase me at it is store kar leta hai
// aur ise before initialization or after initialization kabhi bhi call kar sakte hai 
// but jo function variable k form me bante hai jaise arrow function// function expression to ye undefined hi set hota hai
// Ye Globle Execution Stack me add hota hai 
// Jab sare ececutions ho jate hai to ye waha se pop up hoke khatam ho jata hai
 

// var se ban to jata hai undefined set hota hai
// let and const se ban to jata hai uninitialised set hota hai -- you will get reference err if you are pronting before initialization
// Let and const ki hoisting hoti hai matlab creation k time ye memory me hote hai execute hone se pahle


// TDZ - Temporal Dead Zone - koi variable jab tak uninitialize rahta hai aur jub initialize ho jata hai is bech k time ko temporal dead zone kahate hai
// const k sath aap bas defined nahi kar sakte vaue kuch na kuch assign karni padti hai

// on Execution Phase function will staore as array like object means it have length and index
// and fist parameter me first argument set hoga and second parameter me second argument
// and function Execution context bhi stack me push hoga
// function ka exectuion khatam hone k baad ye bhi call stack se nikal jata hai.


// How javascript code executs
// What is globle execution context
// What is local execution context
// clousers 

