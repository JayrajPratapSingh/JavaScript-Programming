// cunstructor function
// ager aap ko pata karna hai new keyword lagega ya nahi to function k name par dekho agar capital se start hota hai to new keyword use hoga

// function CreateUser(firstName, LastName, email, age, address) {

//     this.firstName = firstName
//     this.LastName = LastName
//     this.email = email
//     this.age = age
//     this.address = address


// }

// CreateUser.prototype.about = function () {
//     return `${this.firstName}, age:${this.age}, email:${this.email}`

// }

// CreateUser.prototype.is18 = function () {
//     return this.age >= 18
// }


// const user1 = new CreateUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")
// console.log(user1)
// console.log(user1.is18())
// console.log(user1.about())


// line 4 se line 22 tak ka kaam ham class se bhi kar skte hai
// in javaScript classes are fake
// internally ye upar k jaise hi kaam karta hai

class CreateUser{
    constructor(firstName, LastName, email, age, address){ // ye cunstructor function ki tarah kaam karata hai ho hamare liye object create karega
        console.log("constructor called")
        this.firstName = firstName
            this.LastName = LastName
            this.email = email
            this.age = age
            this.address = address

    }

    // ab jo ham method prototype k andar set kar rahe the yah se start karenge aur bahot aasan hai
    about(){
        return `${this.firstName}, age:${this.age}, email:${this.email}`
    }
    is18(){
        return this.age >= 18
        
    }
    func(a){
        console.log(a)
    }
}
// jab bhi ham new keyword laga k constructor call karenge hamara constructor call hoga jitni bar new laga k call hoga utni bar cunstructor call hoga

const user1 = new CreateUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")
console.log(user1)
console.log(user1.is18)
console.log(Object.getPrototypeOf(user1))
user1.func("Jayraj")