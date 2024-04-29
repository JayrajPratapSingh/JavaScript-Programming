//async and await promise ka hi kaam karta hai bas syntax change ho jata hai

const URL = "https://jsonplaceholder.typicode.com/posts"
async function getPosts(){
const response = await fetch(URL)
if(!response.ok){
    throw new Error("something went wrong")
}
const data = await response.json()  // ye ek promise return karta hai to mai fir say await laga sakta hoo
// console.log(response)
// console.log(data)
return data // yah kya hoga ki ye simple function ki tarah nahi return karega ye ek promise return karega agar data pana hai to function call kar k then method use karana hoga
}

// const retruned = getPosts()
// console.log(retruned)// return karata hai ek promise

// Getting data

 getPosts().then(data=>{
    console.log(data)
}).catch(err=>console.log(err))