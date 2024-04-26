const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "new todo"
const li2 = li.cloneNode(true) // ye hamre node ko clone kar dega but text content nahi dega iske liye true bhi add karna padega for deep cloning
ul.append(li)
ul.prepend(li2) // bas yahi prepend hoga kyu k ye last me hai dono append prepend nahi hoga yaha pe cloning karni padegi because they are on same node


