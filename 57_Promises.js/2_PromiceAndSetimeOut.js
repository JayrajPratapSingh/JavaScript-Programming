// Promise and SetTimeOut
// I want to resolve / reject promice after 2 second

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = true
        setTimeout(()=>{
           if(value){
            resolve()
           }
           else{
            reject()
           }
        },2000)
    })
}

myPromise().then(()=>{
    console.log("resolved")
}).catch("Bhak tori k error a gail")

setTimeout(()=>{
    console.log("This is set time out")
}, 0)