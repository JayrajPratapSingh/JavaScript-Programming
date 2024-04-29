//<<<<<<<<<<<< Static list VS Live List  >>>>>>>>>>>>>>>>>>
// querySelctorAll hame static list degi aur ye node list hoti hai
// getElementsBySomethig hame live list degi aur ye HTML collection list hoti hai

// const listItems = document.querySelectorAll(".todo-list li")
const ul = document.querySelector(".todo-list")

 const listItems = ul.getElementsByTagName("li")
const li6 = document.createElement("li")
li6.textContent = "item 6"
// const ul = document.querySelector(".todo-list")
ul.append(li6)
console.log(listItems )