// Promise.resove
// Promise Chaning

// const MyPromise = Promise.resolve(5) // ye ek value lega aur jo resoved hoga 

// MyPromise.then((value)=>{
//     console.log(value)
// })


//then()
// then method ek promise return karta hai 


function MyPromise(){
    return new Promise(function(resolve, reject){
        resolve("fook deb")
    })
}


MyPromise().then((value)=>{
console.log(value)
value += " baar"
return value // yaha value return nahi ho rahi ye promise retun karata hai isliye then laga k chaining kar sakte hai
}).then((newVal)=>{
    console.log(newVal)
    newVal += " bakalol"
    return newVal
}).then((val)=>{
    console.log(val)
})