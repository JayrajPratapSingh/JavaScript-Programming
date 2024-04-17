//<<<<<<<<<<<<<< OBJECTS Or OBJECT LITERALS >>>>>>>>>>>>>>>>>>


// Array is good but not Sufficient for real world data
// Object Stores Key value Pairs
//Object do not have indexs
// Object is Reference type
// if you take a number as key then key converted in string internally in obejects


// how to create an objects

const person = { name: "Harshit", address: "india", Phone: 3945304895, hobbies:["Guitar","Chess", "Cricket"] }

console.log(person);
console.log(typeof person)

// How to access data from obejct

console.log(person.name)
console.log(person.hobbies[0])


// How to add key value pairs in objects

person.gender = "male"

console.log(person)


// Bracket Notation
person["age"] = 25
console.log(person)
console.log(person["hobbies"][2])



// Difference between dot and bracket notation
// using bracket notaion we can access spaced key's values


// Loops In Objects


// For in Loop
// Object Keys

for(let key in person){
    console.log(key) // it will print all keys
}

for(let key in person){
    console.log(person[key]) // it will print all keys
}


//Object.keys

Object.keys(person) // it will return the array of keys

// now you can use for of loop

for(let key of Object.keys(person)){
    console.log(person[key])
}


// computed properties

const val1 = "Radha"
const val2 = "16"

const key1 = "name"
const key2 = "Age"

// you can't do it like

// const objct = {
//     key1:val1,
//     key2: val2
// } // it will print as it is

// you can do 

const objct = {
    [key1]:val1,
    [key2]:val2
}
console.log(objct)




