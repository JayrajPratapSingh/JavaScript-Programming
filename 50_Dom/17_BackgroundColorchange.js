const mainButton = document.querySelector("button")
// console.log(mainButton)
const currentColor = document.querySelector(".current-color")
const body = document.body

function randomColorGenrator(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor
}

mainButton.addEventListener("click",(e)=>{
    const randomColor = randomColorGenrator() 
    // console.log(randomColor)
    body.style.backgroundColor = randomColor
    currentColor.textContent = randomColor
})