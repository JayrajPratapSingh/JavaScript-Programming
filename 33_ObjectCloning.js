//<<<<<<< Object Cloning >>>>>>>
// Object.assign

const person = {id:"dj3", name:"shirt", price:234}

const clonePerson = {...person} // Method one

const obje2 = Object.assign({},person) // Method 2

person.age = "23"
console.log(person)
console.log(obje2)
console.log(clonePerson)