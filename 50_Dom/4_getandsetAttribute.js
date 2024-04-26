// get and set 
// const link = document.querySelector("a")
// console.log(link.getAttribute("href")) // #home
// console.log(link.getAttribute("href").slice(1)) // #home


// const inputElement = document.querySelector("form-todo input")
// console.log(inputElement.getAttribute("type")) // text
// link.setAttribute("href", "www.google.com") // 


// Get multiple elements by using getElement by className
//get multiple elements by using querySelectorall
// const navItems = document.getElementsByClassName("nav-items") // will give HTML array

// console.log(navItems[2])

// const navItems = document.querySelectorAll(".nav-items") // will give Node list

//<<<<<<<<<<<<<<<<<<<<<< LOOP  >>>>>>>>>>>>>>>>>>>>>>>>>>>>


const navItems = document.getElementsByTagName("a") // will give HTML array
console.log(navItems.length)
for(let i=0; i<navItems.length; i++){
    console.log(navItems[i])
    const navItem = navItems[i]
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "green"
}
// for loop chalane k 3 tarike hai

// simple for 
// for of
//for each  // for each nhi use kar skate HTML collection k liye


// NodeList k sath foreach use kar sakte hai

// make array from HTML Collection or Nodelist

// const newArr = Array.from("list name here")


//<<<<<<<<<<<<<<<< InnerHTML  >>>>>>>>>>>>>>>> 

// innerHTML meas inside a tag anythis exists is a innerHTML even nested this also

const headline = document.querySelector(".head-line")
headline.innerHTML = "<h1>kya pagalpanti hai ye </h1>"

// attiribute me double or single quote use class = /"btn/" aise use karte hai baad me / ignore ho jata hai


// <<<<<<<<<< ROOT NODE >>>>>>>>>>

const RootNode = document.getRootNode()
const htmlElemetntNode = RootNode.childNodes[0] 
console.log(htmlElemetntNode) // <!Doctype html >

// Child relationship
console.log(htmlElemetntNode.childNodes) //NodeList(3) [head, text, body]
console.log(htmlElemetntNode.childNodes[0])
console.log(htmlElemetntNode.childNodes[1])
console.log(htmlElemetntNode.childNodes[2])

// parent node check parent relationshipt

console.log(htmlElemetntNode.parentNodeNodes) // one level up html

// sibling relationship

console.log(htmlElemetntNode.nextSibling) //#text

console.log(htmlElemetntNode.nextSibling.nextSibling) //<body>...</body>

console.log(htmlElemetntNode.nextSibling.textContent) //ye space dega aur document me /n hota hai

// browser white-space ko default normal set karta hai isliye space nahi dikhata agar pre set kar de to ye dilkhane lagega ye css ki property hai

// direct to see Element node sibling 

console.log(htmlElemetntNode.nextElementSibling) //ye direct body dega textnode ko ignore karega




