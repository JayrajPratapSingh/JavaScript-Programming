const TodoSection = document.querySelector(".todo-section")
console.log(TodoSection.classList) // it will give the list of class
// adding a class 
TodoSection.classList.add("bg-dark") // it will add bg-dark class name
// TodoSection.classList.remove("container") // remove container class name

console.log(TodoSection.classList) 

// koi class exist karti hai ya nahi ye dekhne k liye contain property ka use karte hai
console.log(TodoSection.classList.contains("container")) // true

// toggle property kya karta hai ki ager koi class hai to remove kar dega nahi hai to add kar dega

// TodoSection.classList.toggle("container")
// console.log(TodoSection.classList) // container already hai to ise remove kar dega
