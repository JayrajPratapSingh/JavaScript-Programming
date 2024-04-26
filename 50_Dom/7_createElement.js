// document.crerateElement
// append
// prepend
// remove
// const newTodoItem = document.createElement("li")
//method 1
// const newTodoText = document.createTextNode("Tech Student")
//method 2
// newTodoItem.textContent = "Teach Student"
// const todoList = document.querySelector(".todo-list")

// newTodoItem.append(newTodoText)
// todoList.append(newTodoItem)
// console.log(newTodoItem)

// prepend also make new list item but it ads in starting
// todoList.prepend(newTodoItem)


// removing todo 1

// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()



// Before method
// const newTodoItem = document.createElement("li")
// const newTodoText = document.createTextNode("Tech Student")
// newTodoItem.textContent = "Before Item"
// const todoList = document.querySelector(".todo-list")
// todoList.before(newTodoItem)


// after method
// newTodoItem.textContent = "After Item"
// const todoList = document.querySelector(".todo-list")
// todoList.after(newTodoItem)



// <<<<<<<<<<<<<<<  Other Method to Create element  >>>>>>>>>>>

// elem.insertAdjacentHTML(position,text)
// beforeBegin
//afterBegin
//beforeEnd
//afterEnd


// const todoList = document.querySelector(".todo-list")
// todoList.insertAdjacentHTML("beforeend", "<li>Hello master </li>")
// todoList.insertAdjacentHTML("afterbegin", "<li>Hello master </li>")
