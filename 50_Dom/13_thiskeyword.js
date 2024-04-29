// This Keyword
const headlineButton = document.querySelector(".btn-headline")
 //id we use arrow funciton then the value of this will be window object
 // but with function keyword it will give the current headlineButton

headlineButton.addEventListener("click", function(){
    console.log("you clicked me bauraha!")
    console.log("value of this")
    console.log(this)
})