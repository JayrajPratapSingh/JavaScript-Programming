const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
console.log(todoInput)
todoForm.addEventListener("submit",  (e)=>{
    e.preventDefault()
    // console.log(todoInput.value)
    const newTodoText = todoInput.value
    const newLi = document.createElement("li")
   const newLiItem = `
   <span class="text">${newTodoText}</span>
   <div class="todo-buttons">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
   </div>
`
newLi.innerHTML = newLiItem 
todoList.append(newLi)
// console.log(newLi)
    todoInput.value = ""
})


todoList.addEventListener("click", (e)=>{
    //  console.log(e.target.classList)
     if(e.target.classList.contains("done")){
       const liSpan =  e.target.parentNode.previousElementSibling
        // console.log(liSpan)
        liSpan.style.textDecoration = "line-through"
     }
     else if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode
        targetedLi.remove()
     }
})