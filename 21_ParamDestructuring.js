//<<<<<< Param Destructuring  >>>>>>

// Mostly used in object and react

const person = {
    name:"Jayraj",
    age: "25"
}
// function NewFun(details){
// console.log(details.name)
// console.log(details.age)
// }

// NewFun(person)


function personDetails({name, age}){
    console.log(`your name is ${name} and your age is ${age}`)
}

personDetails(person)