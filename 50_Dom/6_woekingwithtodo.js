const todoList = document.querySelector(".todo-list")
// todoList.innerHTML = "<li>Item 2</li>" // ye poora item exchange ker dega Item 2 se
todoList.innerHTML = todoList.innerHTML + "<li>Item 2</li>" // ye poora item add ker dega
todoList.innerHTML +=  "<li>Item 3</li>" 

// agar poora innerHTML change karna ho to kar skte ho but add karne k line mat karna
// ye kam to achcha kar raha hai lekin aise use nahi karna hai kyu k performance per asar padata hai
// kyu k ye piche har innerHTML ko render karta hai khud k sath


// iske liye dusra tarika hai crateElement sare developer yahi use karte hai



