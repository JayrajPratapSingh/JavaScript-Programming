//<<<<<<<<<< PROTO , [[prototype]] and prototype //

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



///<<<<<<<<<<<<<<<< PROTOTYPE    >>>>>>>>>>

// javascript me function function aur object dono ki tarah treat kar sakte hai

// we can know the name of function by name property

//functionName.name this will give function name 

// You can add your own properties 

// functionName.myOwnProperty = "very unique property"

//console.log(functionName.myOwnProperty)

// Function porvides more useful properties also

// when we create function then function gives us free space which is prototype
//prototype is a space as object which we can use 
// this prototype only provided by functions


// const obj1 = {
//     name:"Jayraj"
// }
 

// function hello(){
//     console.log("this is hello test function")
// }

// // console.log(hello.prototype) // {}
// // console.log(obj1.prototype) // undefined

// // How to use it 
// // Use it like Object

//  hello.prototype.abc = "Only for check"
//  hello.prototype.xyz = function(){
//     console.log("xyz property")
//  }
// console.log(hello.prototype)
// console.log(hello.prototype.xyz())

// const userMethods = {
//     about:function(){
//         return `${this.firstName}, age:${this.age}, email:${this.email}`
    
//     },
//     is18:function(){
//         return this.age >= 18
//     }
// }

function createUser(firstName, LastName,email, age, address){
    const user = Object.create(createUser.prototype) // userMethods will set in proto
    user.firstName =firstName
    user.LastName = LastName
    user.email = email
    user.age = age
    user.address = address 
    
    return user
    }
    
   createUser.prototype.about = function(){
           return `${this.firstName}, age:${this.age}, email:${this.email}`
        
        }

    createUser.prototype.is18 = function(){
                 return this.age >= 18
             }


             const user1 = createUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")
    
             console.log(user1.is18())
             console.log(user1.about())