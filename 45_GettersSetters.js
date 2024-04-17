//<<<<<<<<<<<<< Getters and Setters  >>>>>>>>>>>>>

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// let person1 = new Person("jani", "dusman", 34)
// console.log(person1.fullName())

// see we always use parenthesis for calling the method but what if i want to call method without parenthesis 
// now i have to use get before defining a method


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// let person1 = new Person("jani", "dusman", 34)
// console.log(person1.fullName) // ise ab as a property ki tarah use kar sakte hai ye internally call karega method ko hame parenthesis lagane ki jaroorat nahi hai



//<<<<<<<<<< Setters >>>>>


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     setName(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
// }
// let person1 = new Person("jani", "dusman", 34)
// // console.log(person1.fullName) // ise ab as a property ki tarah use kar sakte hai ye internally call karega method ko hame parenthesis lagane ki jaroorat nahi hai
// console.log(person1.fullName)// jani dusman
// person1.setName("Gajar", "Halwa") // ye ek trika hai set karne ka object creat hone k bad 
// console.log(person1.fullName) // Gajar Halwa --> 

// // Dusara tarika // Second Method

// person1.firstName = "Dhanbad"
// person1.lastName = "singh"
// console.log(person1.fullName) // Dhanbad singh


//Third Method

// I want if i do 
// person1.fullName  = "Jayraj Pratap"
// It should be setted 
// How can i do it let see


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
   set fullName(fullName){
// ["Jayraj","Singh"]
const [firstName,lastName] = fullName.split(" ")
this.firstName = firstName
this.lastName = lastName   
}
}
let person1 = new Person("jani", "dusman", 34)

person1.fullName = "Jayraj Pratap"
console.log(person1.fullName)