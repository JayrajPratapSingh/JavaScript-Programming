//<<<<<<<< Array >>>>>>>>>>>>

// Reference Type

// What is an Array
// Array is Ordered collection of elements and items 
// Index starts with 0 - index means number of positon


let Fruit = ["apple", "Mango", "Banana"]

console.log(Fruit)
console.log(Fruit[0]) // ordered collection means we can access by its index


// in array you can store anything number, string, boolian and other

let Mix = [1, "apple", false, ["hi", 1, 3]] // any data type you can store in array

console.log(Mix)


// Changing Data In Array

Fruit[0] = "Guvava"

console.log(Fruit)


// Reference Type called Object in JavaScript

console.log(typeof Fruit)

// Want to check Array or Not

console.log(Array.isArray(Fruit))


//<------------------ ARRAY PUSH, POP, SHIFT, UNSHIFT -------------->

//Push --> ads element in last

Fruit.push("Aamras")

console.log(Fruit)

// Pop --> Remove item from Last

Mix.pop()

console.log(Mix)


//unshift --> Add element in starting

Mix.unshift(["Banaras", "Mumbai"])

console.log(Mix)



//shift --> Removes element from starting

Fruit.shift()
console.log(Fruit)


