
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")


// function changeText(element, text, color, time, OnSucessCallback, onFailureCallback) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             if (OnSucessCallback) {
//                 OnSucessCallback()
//             }
//         }
//         else {
//             if (onFailureCallback) {
//                 onFailureCallback()
//             }
//         }
//     }), time
// }

// // call back hell and pyramid of doom

// changeText(heading1, "One", "violet", 2000, () => {

//     changeText(heading2, "two", "red", 1000, () => {

//         changeText(heading3, "Three", "orange", 2000, () => {
//             changeText(heading4, "Four", "brown", 2000, () => {
//                 changeText(heading5, "Five", "blue", 2000, () => {
//                     changeText(heading6, "Six", "green", 2000, () => {
//                         changeText(heading7, "Seven", "yellow", 2000, () => {

//                         }, () => {
//                             console.log("YOur Element7 is not found")
//                         })
//                     }, () => {
//                         console.log("YOur Element6 is not found")
//                     })
//                 }, () => {
//                     console.log("YOur Element5 is not found")
//                 })
//             }, () => {
//                 console.log("YOur Element4 is not found")
//             })
//         }, () => {
//             console.log("YOur Element3 is not found")
//         })
//     }, () => {
//         console.log("YOur Element2 is not found")
//     })
// }, () => {
//     console.log("YOur Element1 is not found")
// })


// Is pyramid doom problem ko solve karenge Promise k through taki simplyfy ho sake


function changeText(element, text, color, time) {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
               resolve()
            }
            else {
                reject("element not found 404")
            }
        }, time)
    })
}

changeText(heading1,"one",  "red", 1000).then(()=>{
    return changeText(heading2, "tow", "Purple", 2000)
}).then(()=>{
    return changeText(heading3, "three", "Green", 1000)
}).then(()=>{
    return changeText(heading4, "Four", "Orange", 1000)

}).then(()=>{
    return changeText(heading5, "Five", "Blue", 2000)

}).then(()=>{
    return changeText(heading6, "Six", "yellow", 1000)

}).then(()=>{
    return changeText(heading7, "Seven", "gray", 1000)

}).catch((error)=>{
    console.log(error)
})
// koi bhi promise reject hone par wahi pe kam ruk jayega aur catch block chalega error aajayega