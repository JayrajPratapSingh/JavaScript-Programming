
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")



// setTimeout(()=>{
//     heading1.textContent = "Kuch kuch hota hai"
//     heading1.style.color = "rgb(204,15,116)"
// }, 4000)

// setTimeout(()=>{
//     heading2.textContent = "Kuch kuch hota hai"
//     heading2.style.color = "rgb(2,205,116)"
// }, 1000)

// agar aise hi chaining karni pade to mahanga padega

// isko ek aur tarike se kar salte hai
// Callback Hell


// setTimeout(()=>{
//     heading1.textContent = "heding 1"
//     heading1.style.color = "rgb(204,15,116)"

//     setTimeout(()=>{
//         heading2.textContent = "heding 2"
//         heading2.style.color = "rgb(2,205,116)"
//         setTimeout(()=>{
//             heading3.textContent = "heding 3"
//             heading3.style.color = "rgb(2,25,116)"
//             setTimeout(()=>{
//                 heading4.textContent = "heding 4"
//                 heading4.style.color = "rgb(2,205,16)"
//                 setTimeout(()=>{
//                     heading5.textContent = "heding 5"
//                     heading5.style.color = "rgb(2,5,11)"
//                     setTimeout(()=>{
//                         heading6.textContent = "heding 6"
//                         heading6.style.color = "rgb(2,25,116)"
//                         setTimeout(()=>{
//                             heading7.textContent = "heding 7"
//                             heading7.style.color = "rgb(201,205,116)"

//                         }, 2000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)


// ab aap ko ye code achcha nahi laagega tabhi to promises ki bari aayegi tabhi promises ko ijjat milegi

function changeText(element, text, color, time, OnSucessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (OnSucessCallback) {
                OnSucessCallback()
            }
        }
        else {
            if (onFailureCallback) {
                onFailureCallback()
            }
        }
    }, time)
}

// call back hell and pyramid of doom

changeText(heading1, "One", "violet", 2000, () => {

    changeText(heading2, "two", "red", 1000, () => {

        changeText(heading3, "Three", "orange", 2000, () => {
            changeText(heading4, "Four", "brown", 2000, () => {
                changeText(heading5, "Five", "blue", 2000, () => {
                    changeText(heading6, "Six", "green", 2000, () => {
                        changeText(heading7, "Seven", "yellow", 2000, () => {

                        }, () => {
                            console.log("YOur Element7 is not found")
                        })
                    }, () => {
                        console.log("YOur Element6 is not found")
                    })
                }, () => {
                    console.log("YOur Element5 is not found")
                })
            }, () => {
                console.log("YOur Element4 is not found")
            })
        }, () => {
            console.log("YOur Element3 is not found")
        })
    }, () => {
        console.log("YOur Element2 is not found")
    })
}, () => {
    console.log("YOur Element1 is not found")
})
