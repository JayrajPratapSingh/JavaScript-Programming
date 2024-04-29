// Event bubbling // Event Propogation
// Event Capturing
// Event Deligation

console.log("hello World")



// Event bubbling // Event Propogation


const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// child.addEventListener("click",()=>{
//     console.log("why you clicked on child")
// })

// // hoga kya ki mai click karunga child pe but sath hi sath parent pe bhi click hoga aur uska event bhi chlega

// parent.addEventListener("click",()=>{
//     console.log("why you clicked on parent")
// })

// // agar child pe click krenge to grandparent bhi ka evetn bhi call hoga


// grandParent.addEventListener("click",()=>{
//     console.log("why you clicked on grandparent")
// })

// isi process ko event Bubbling Kahate hai

// Event Capturing
// pahle capturing event print hoga aur body se suru hoke child tak jayega fir bubbling start hogi aur child se parent ki or jayega 

// child.addEventListener("click",()=>{
//     console.log("Capture on child")
// }, true)


// parent.addEventListener("click",()=>{
//     console.log("Capture on parent")
// }, true)



// grandParent.addEventListener("click",()=>{
//     console.log("Capture on grandparent")
// }, true)


// document.body.addEventListener("click", ()=>{
//     console.log("Capture on Document Body")
// }, true)

// // Not Capturing

// child.addEventListener("click",()=>{
//     console.log("Capture on child")
// })


// parent.addEventListener("click",()=>{
//     console.log("Capture on parent")
// })



// grandParent.addEventListener("click",()=>{
//     console.log("Capture on grandparent")
// })


// document.body.addEventListener("click", ()=>{
//     console.log("Capture on Document Body")
// })


// Event Deligation


// grandParent.addEventListener("click",()=>{
//     console.log("you clicked on Something")
// }) // isme call hoga grandparent ka event bhale hi ham click karenge child pe


// grandParent.addEventListener("click",(e)=>{
//     console.log(e)  // ye pointerEvent object dega jisme target me wahi milega jis pe ham click karenge div.child.box this is important 
// }) 


grandParent.addEventListener("click",(e)=>{
    console.log(e.target.textContent) // ye kya karega bhale hi hamne grandparent pe evet laga rakha hai lekin jispe ham click karenge us container ka HTML dedega

}) // ayhi event deligation kahlata hai