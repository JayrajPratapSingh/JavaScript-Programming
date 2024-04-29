// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest()
// console.log(xhr)
// step1

// xhr.open("GET", URL)
// console.log(xhr.readyState) // ye batata hai ki xhr ki state kya hai agar ye 0 hai to bas create hua hai open ke bad value 1 hojati hai
// 2 means header and status are also avalable
// 3 Downloading - response text holds partial data
// 4 done - Operation is complete

// xhr.onreadystatechange  = function(){
//     // console.log(xhr);
//     if(xhr.readyState === 4){
//         // console.log(xhr.readyState)
//         // console.log(xhr.response)
//         const response = xhr.response
//         const data =JSON.parse(response)
//         console.log(data)
//     }
// }
// ulternative

// xhr.onReady = function(){ // ye tabhi chalega jab readyState 4 hojaye to upar wali chij karne ki jaroorat nahi hai
// const response = xhr.response
// const data = JSON.parse(response)
// console.log(data)
// }


// xhr.send()



/// Error Hangling /////////////////////////////////////////////////////////////////////////

// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest()

// xhr.open("GET", URL)

// xhr.onload = ()=>{
// if(xhr.status >= 200 && xhr.status < 300){
//     const data = JSON.parse(xhr.response)
// console.log(data)
// const id = data[3].id
// const xhr2 = new XMLHttpRequest();
// const URL2 = `${URL}/${id}`
// console.log(URL2)
// xhr2.open("GET", URL2)
// xhr2.onload = ()=>{
//     const data2 = JSON.parse(xhr2.response)
//     console.log(data2)

// }
// xhr2.send()
// }
// else{
//     console.log("something went wrong")
// }
// }

// xhr.onerror = ()=>{
//     console.log("network error")
// }
// xhr.send()


// the above code is just like callback hell so we will deal with it by pormise


const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
             resolve(xhr.response)
            }
            else{
                reject(new Error("Something went Wrong"))
            }
        }
        xhr.send()
    })

}

sendRequest("GET", URL).then((res)=>{
const data = JSON.parse(res)
// console.log(data)
return data
}).then((data=>{
    // console.log(data[3].id)
    const id = data[3].id
    return id
})).then((id)=>{
const url = `${URL}/${id}`
console.log(url)
return sendRequest("GET", url)
}).then(newResponse=>{
    // console.log(newResponse)
    const newData = JSON.parse(newResponse) 
    console.log(newData)
})

