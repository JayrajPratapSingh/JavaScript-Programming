// <<<<<<<< Map Object  >>>>

// it is not a method it is object
// Map is an iterable
// stores data in order fashion
// dublicate keys are not allowed like objects
//Also stores key value pairs
//
//DIFFERENCE B/T MAP and OBJECT
//
//Object only have string or symbol as key
//In map you can use anything as key
// like array, number, string\

// const person = new Map()

// // adding key value pairs in map

// person.set("firstName", "Chuha")
// person.set("Age", "23")
// person.set(1,"one")
// person.set([1,2], "chachundar") //{'firstName' => 'Chuha', 'Age' => '23', 1 => 'one', Array(2) => 'chachundar'}
// console.log(person)
// // getting a element
// console.log(person.get("firstName")) // chuha


// // Getting all keys

// console.log(person.keys()) //{'firstName', 'Age', 1, Array(2)} // now you can loop it

// for(let key of person.keys()){
//     console.log(key)
// }


// /// destructuring

// for (let [key, value] of person){
//     console.log(key, value)
// }


// // make a new Map direct input


// const user =new Map([["mohit", "dust hai"], ["rahul", "achcha bachcha hai"]])
// console.log(user)


///setting obejct => object

const Person1 = {
    "name":"Jayraj",
    "id":"2"
}

const personInfo = new Map()

personInfo.set(Person1,{"age":"24", "gender":"male"})
console.log(Person1.id)

console.log(personInfo)
console.log(personInfo.get(Person1).gender)
