console.log("script start!!")

const allButtons = document.querySelectorAll(".my-buttons button")
console.log(allButtons)

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0
        for(let i=0; i<100000000; i++){
            num +=i
        }
        console.log(e.currentTarget.textContent, num)
    })
})




let outerVariable = 0
for(let i=0; i<1000000000; i++){
    outerVariable += i
}
console.log(outerVariable)

console.log("script start!!")