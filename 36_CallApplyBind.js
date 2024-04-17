//<<<<<<<<<< CALL APPLY BIND  >>>>>>>>>

///<<<<<<<<<<<<<<<<< CALL      >>>>>>>>>>>>>>>>

// you can also call function as functionName.call()
// const user1 ={
//     "firstName":"Jayraj",
//     "age":"24",
//     "about": function(){
//         console.log(this.firstName, this.age)
//     }
// }

// const user2 ={
//     "firstName":"Hariom",
//     "age":"34",
   
// }

// now i want to use about for user2 how can i use it
// we do not have to copy


// user1.about.call(user2) //Hariom 34
// user1.about.call() //undefined undefined

// ager apalo this user1 ka use karana hai to user1 hi pass krna padega call me
// user1.about.call(user1) // jayraj 24


// const user1 ={
//     "firstName":"Jayraj",
//     "age":"24",
//     "about": function(hobby, fabSinger){
//         console.log(this.firstName, this.age, hobby, fabSinger)
//     }
// }

// const user2 ={
//     "firstName":"Hariom",
//     "age":"34",
   
// }

// // call's first argument hoga ki this ki binding kis k sath hogi aur age ham normal argument pass kar sakte hai
// user1.about.call(user2, "chess", "Arijit Singh")



////
//  function about(hobby, fabSinger){
//     console.log(this.firstName, this.age, hobby, fabSinger)
// }

// const user1 ={
//     "firstName":"Jayraj",
//     "age":"24",
    
// }

// const user2 ={
//     "firstName":"Hariom",
//     "age":"34",
   
// }

// // call's first argument hoga ki this ki binding kis k sath hogi aur age ham normal argument pass kar sakte hai
// about.call(user2, "chess", "Arijit Singh") // now you can use it direct if function is outside of object


// /////<<<<<<<<<<  APPLY   >>>>>>>>>>>


// ////
// function about(hobby, fabSinger){
//     console.log(this.firstName, this.age, hobby, fabSinger)
// }

// const user1 ={
//     "firstName":"Jayraj",
//     "age":"24",
    
// }

// const user2 ={
//     "firstName":"Hariom",
//     "age":"34",
   
// }
// // apply bhi call ki tarah hai bas ek ek pass karne ki jagah list ya array pass kar dena hai
// about.apply(user2, ["chess", "Arijit Singh"]) // now you can use it direct if function is outside of object






/////<<<<<<<<<<  BIND   >>>>>>>>>>>


////
function about(hobby, fabSinger){
    console.log(this.firstName, this.age, hobby, fabSinger)
}

const user1 ={
    "firstName":"Jayraj",
    "age":"24",
    
}

const user2 ={
    "firstName":"Hariom",
    "age":"34",
   
}
// bind ek function return karta hai

const fun = about.bind(user2, "chess", "Arijit Singh") // now you can use it direct if function is outside of object

fun()

