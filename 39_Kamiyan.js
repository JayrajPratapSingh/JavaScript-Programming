///<<<<<<<<<< PROTO and PROTOTYPE  >>>>>>>>>>>

// const user = {
//     "firstName":"Rohit",
//     "LastName":"Kumar",
//     "email":"rohitdrx@gmail.com",
//     "age":"19",
//     address:"Kathiwada",
//     about:function(){
//         return `${this.firstName}, age:${this.age}, email:${this.email}`

//     },
//     is18:function(){
//         return this.age >= 18
//     }
// }

// let say myjhe aise millions of objects chahiye

// so hum iske liye ek function bnayenge jo ki input or parameter lega firstName Lastname age email, address
// add key value pare 
// return Object


// function createUser(firstName, LastName,email, age, address){
// const user ={}
// user.firstName =firstName
// user.LastName = LastName
// user.email = email
// user.age = age
// user.address = address 
// user.about = function(){
//     return `${this.firstName}, age:${this.age}, email:${this.email}`

// }
// user.is18 = function(){
//     return this.age >= 18
// }

// return user
// }

// const user1 = createUser("Hrshit", "koih", "harshit@gmail.com", 12, "Mumbai")
// console.log(user1.is18())
// console.log(user1.about())



// isme Kmiya bhot hai

// agar ham aise hi bahot sare user1, user2 , user3 banayenge to sabke liye methods banenge
// method jitne jayada honge memory fill utni jayada hogo


// const userMethods = {
//     about:function(){
//         return `${this.firstName}, age:${this.age}, email:${this.email}`
    
//     },
//     is18:function(){
//         return this.age >= 18
//     }
// }

// function createUser(firstName, LastName,email, age, address){
//     const user ={}
//     user.firstName =firstName
//     user.LastName = LastName
//     user.email = email
//     user.age = age
//     user.address = address 
//    user.about = userMethods.about
//    user.is18 = userMethods.is18  // this is reference actual code is stored somewhere eles
    
//     return user
//     }
    
//     const user1 = createUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")

//     console.log(user1.is18())
//     console.log(user1.about())



    //// Abhi bhi problem hai

    // ab man lo mujhe bhot sare method add karne ho userMehod me tab kay hoga mujhe bunction me user me bhi bhot sare mehtod add karne padenge


    // Now we need to understand one thing

    // const obj1 ={
    //     "key1":"value1",
    //     "key2": "value2",
    // }

    // const obj2 ={
    //     "key3":"value3",
       
    // }

    // console.log(obj2.key1) // ye dega undefined but mai chahata hoo ki ye jaye obj1 k paas key1 ko doodhne

    // const obj2 ={}

    // obj2.key3 = "value3" // we can create this
    

    // there is one more way to create object

// const obj2 = Object.create(obj1)
    

// // console.log(obj2) // {} but we know that there is some connection in obj1 and obj2
// obj2.key3 = "value3" // we can create this
// console.log(obj2) // it will give {key3: 'value3'}

// // ab javascript wo kaam karegi jo mai chahata tha pahale wo check karegi key1 ko obj2 me then obj1 me
// console.log(obj2.key1) // value1
// // obj2.key2 = "unique"

// console.log(obj2.key2)// ab ye key2 unique print karega

// console.log(obj2) 

// javascript kya karta hai ki jo chij obj2 me nahi rahti
// uska refrence __proto__ me dal deti hai isme kuch na kuch reference hota hai
// ab obj2 ka proto obj1 k key value pairs hai

// now ecma script did this as [[prototype]] 
// __proto__ or [[prototype]] ek hi baat hai

// but javascript me ek aur chij hoti hai prototype 
// prototype is different ye functions me hoti hai it is not [[prototype]]


// console.log("__proto__",obj2.__proto__) //{key1: 'value1', key2: 'value2'}



/// ab ham taiyar hai kami ko door karne k liye

const userMethods = {
        about:function(){
            return `${this.firstName}, age:${this.age}, email:${this.email}`
        
        },
        is18:function(){
            return this.age >= 18
        }
    }
    
    function createUser(firstName, LastName,email, age, address){
        const user = Object.create(userMethods) // userMethods will set in proto
        user.firstName =firstName
        user.LastName = LastName
        user.email = email
        user.age = age
        user.address = address 
        
        return user
        }
        
        const user1 = createUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")
    
        console.log(user1.is18())
        console.log(user1.about())