// intto to events
// click
// button press 
// mouse hover
// double Click
//  etc

// Click event
/////////////// First method

// onclick="console.log('you clicked me') // ye bhot purana tarika hia jisko ham use nhi karte ye html me use hota hai

////////////// Second method

// const headlineButton = document.querySelector(".btn-headline")
// console.dir(headlineButton)

// headlineButton.onclick = function(){
//     console.log("you clicked me bak bauraha")
// }
// ye tarika bhi nahi use karte hai kyu ki click pe ek se jayada bar nahi assign kar sakte hai

////////////// Third Mehod
// ye ek method hai addEventListener

const headlineButton = document.querySelector(".btn-headline")
console.dir(headlineButton)


// function clickMe(){
//     console.log("Ka e bauraha ketna bar click karba")
// }
// headlineButton.addEventListener("click",clickMe)

headlineButton.addEventListener("click", ()=>{
    console.log("you clicked me bauraha!")
})