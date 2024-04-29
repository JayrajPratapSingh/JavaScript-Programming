// keypress event
//Mouseover event

// Keypress event

const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(e.key)
})

// Mouseover

const mainButton = document.querySelector(".btn-headline")

mainButton.addEventListener("mouseover", ()=>{
    console.log("Mouse Over Event Occur")
})

// MouseLeave
mainButton.addEventListener("mouseleave", ()=>{
    console.log("Mouse Leave Event Occur")
})
