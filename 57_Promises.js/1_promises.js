// Promise

console.log("script starts")

const bucket = ["dal", "chaval", "chay", "coffie", "pasta", "nasta", "vegitables", "salt", "oil"]

// man lo aap ne fride rice mangi mai bucket me check karunga ki fride rice banane ka saman hai k nahi
// to maine promise to kiya banane ka but bucket k upar depend karata hai ki de paunga ya nahi
// Agar hai to sari need fullfilled hai to mai bana k de dunga 
// Agar mujhe nahi mila jaroorat ka saman nahi de paunga 
// milana nahi milana ye status ho gaye
// value hamari fride rice ho gai


// ham ek Promise keyword ka use karte promise create karne k liye ye ek callback function leta hai
// ye call back function 2 aur callback function leta hai jo ki resolve and reject hai
const frideRice  = new Promise((resolve, reject)=>{
    if(bucket.includes("chaval") && bucket.includes("salt") && bucket.includes("oil") && bucket.includes("vegitables")){
        resolve("Fride Rice")
    }
    else{
        reject("Couldn't do it")
    }
     
})


// array aur frideRice ko ek function makeFrideRice(){arr..... retun fridRice .......} me daal ke fride rice ko return kar k bhi use kar sakte hai
// makeFrideRice().then().catch() 

// Produced

// Consume

//how to consume
// ham ise consume kar sakte hai than se ye do call back leta hai pahala resove k liye and secind for error
// frideRice.then((myFrideRice)=>{
//     console.log("lets eat", myFrideRice)
// },(error)=>{
//     console.log(error)
// }) 

// Second method aap chaning kar sakte hai catch k sath
// Catch block error catch karne ka kaam karega agar kuch error aaya to 
// ye task asynchronous hote hai

frideRice.then((myFrideRice)=>{
    console.log("lets eat", myFrideRice)
}).catch((error)=>{
    console.log(error)
}) 


// for proof that is is Async

for(let i=0; i<100; i++){
    console.log(Math.floor(Math.random()*10))
}
 
setTimeout(()=>{
    console.log("hello form set time out")
}, 0)

console.log("Script Ends")

// Promises add hoti hai micro task queue me and event ise priority deta hai