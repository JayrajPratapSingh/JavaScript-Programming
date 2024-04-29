const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "Yellow"
    })
})