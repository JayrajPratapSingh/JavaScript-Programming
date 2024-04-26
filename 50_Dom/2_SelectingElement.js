// Selecting a element by GetElementById
// ye bs Id k liye kaam karta hai
// ek id ek bar se jayada repete nahi ho sakti
// console.log(document.getElementById("main-heading")) // ye method element ki id lega as argument
// hame lagta hai ye html return kar raha hai but ye ek achchi represention hai 
// console.dir(document.getElementById("main-heading")) // actual me hame ye return karta hai jo ki ek object hai nahi yakin to typeof se check kar sakte hai


// const mainHeading = document.getElementById("main-heading")

//Selecting Element by query Selector
// ye kisi k liye bhi kaam karega Id, class, tags
// waise hi select karte hai jaise css me karte hai lik with class with . and id with #
// classes aap multiple de sakte hai
const mainHeading = document.querySelector("#main-heading")
const formTodo = document.querySelector(".form-todo")
const navs = document.querySelector(".navs") // first navs milega
const multiplenavs = document.querySelectorAll(".navs") // sare navs milenge node List naam k array ki tarah hota hai but array nahi hota


console.log(mainHeading)
console.log(formTodo)
console.log(navs)
console.log(multiplenavs)