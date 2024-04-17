// <<<<<<<<<<<<<<< New Keyword >>>>>>>>>

// function createUser(firstName, age){
//     this.firstName = firstName
//     this.age = age
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age) 
// }
// const user1 = new createUser("harshit", 14)

// // what new is doing
// // it is creating {} which is refer to this, this = {}
// // returns this measn empty object ko return karega
// //// this __proto__ ki value khud set kar dega prototype k equal jo ki ham Object.create set bana rahe the
// console.log(user1)

// user1.about()

// cunstructor function
// ager aap ko pata karna hai new keyword lagega ya nahi to function k name par dekho agar capital se start hota hai to new keyword use hoga

function CreateUser(firstName, LastName, email, age, address) {

    this.firstName = firstName
    this.LastName = LastName
    this.email = email
    this.age = age
    this.address = address


}

CreateUser.prototype.about = function () {
    return `${this.firstName}, age:${this.age}, email:${this.email}`

}

CreateUser.prototype.is18 = function () {
    return this.age >= 18
}


const user1 = new CreateUser("Hrshit", "koih", "harshit@gmail.com", 19, "Mumbai")
console.log(user1)
console.log(user1.is18())
console.log(user1.about())


// ab mai kya karu ki key sbke print kru

// for(let key in user1){
//     console.log(key)
// }  // ye kya krega ki prototype wale key bhi dega

// mai chahata hoo prototype wale key na aaye

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}