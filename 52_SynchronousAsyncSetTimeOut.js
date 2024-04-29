//<<<<<<<<<<< Synchoronous And Asynchronous >>>>>>>>>>

/// Synchronous Programming

// console.log("script starts")

// for(let i=0; i<10000; i++){
//     console.log("inside loop")
// }  // jab tak loop khatam nahi hoga ye next task pe nahi jayega

// console.log("script end") // loop time le raha hai aur ye hamare is code ko block kar raha hai isliye ise blicking code bhi kahate hai

// line by line execute karna aur ek kaam khatam hine par hi dusra kaam start karna hi synchronous kahalata hai
// and javascript single threded Language hai


// Asynchoronous programming\

console.log("script start")
function hello(){
    console.log("Hello world")
}

setTimeout(hello, 2000)  // settime out ek function leta hai aur ek time dependecy leta hai ki kitni der bad is funtion ko run karna hai
// jo time dete hai wo minimum time dely hota hai kyu k callback que me jane k bad time kitana bhi lag sakta hai
// setime out block nahi karata hai ye async programming hai

console.log("Script End")

// pahale script start aaya fir script end then Hello world prit hua

/////./////////./////////../././././././..

// Aagr ham setTimeout ko browser me run kare to ek id deta hai is JS me variable me store kar sakte hai

const id = setTimeout(function(){console.log("Hello Jhuiyan")}, 1000)
console.log(id)