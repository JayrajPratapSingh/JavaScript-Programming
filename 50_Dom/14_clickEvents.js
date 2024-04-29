/// Click Events

// const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click", function(){
//     console.log("you clickedme")
// })


//  const allButtons = document.querySelectorAll(".my-buttons button")

// for(let btn of allButtons){
// btn.addEventListener("click", function(){
//     console.log("you clicked me")
// })
// }  // this will work same for all

// I want to be specific for each button

// for(let btn of allButtons){
// btn.addEventListener("click", function(){
//     // console.dir(this)
//     // console.log(this.textContent)
//   
//     console.log(this.textContent)
//    
// })
// }

// allButtons.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// })


// jab bhi kisi element pe event listener add hoga
// js Engine === line by lin execute karta hai
// browser === js Engine + Extra Features
// browser === js Engine + Web APIs
// jb browser ko pata chala ki user ne event perform kiya 
// jo ham listen kar rahe the
// browser 2 kaam krega 
// 1.call back function js Engine ko dega
// 2.call back k sath jo bhi event hua hai uski bhi information bhi dega
// ye info hame object k form milegi
// browser khud se paas karta hai argument jo hame callback function k paramerter se milti hai
// standerd way me e ya event likh k prapt karte hai


 const allButtons = document.querySelectorAll(".my-buttons button")
console.log(allButtons)
for(let btn of allButtons){
btn.addEventListener("click", (e)=>{
   console.log(e.currentTarget) // terget ki jagah currentTarget use karenge to bhi same result milega
})
}

