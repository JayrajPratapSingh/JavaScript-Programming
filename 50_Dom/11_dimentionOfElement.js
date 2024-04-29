// How to get dimention of element 
const sectionTodo = document.querySelector(".todo-section")
const info = sectionTodo.getBoundingClientRect() // iske bad . laga ke height and width ya other property nikal sakte hai
console.log(info)