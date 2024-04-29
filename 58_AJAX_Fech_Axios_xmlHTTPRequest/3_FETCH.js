const URL = "https://jsonplaceholder.typicode.com/posts"
// bydefauld get request karta hai
fetch(URL).then((response)=>{
// console.log(response.json()) // json ek method is fech promise ka
if(response.ok){
    return response.json()

}
else{
    throw new Error("Something went wrong")  // Error throw karega aur ye chij ab milegi catch blick me kyu k new Error throw kiya hai
}
}).then(data=>{
    console.log(data) // jiski mujhe jarurat thi ab milega sara data
}).catch((error)=>{
    console.log(error)
      /// fech reject nahi karega matlab ye print nahi hoga catch nahi chalega but fech reject tab karega jab network problem aarahi ho
    // iske liye upar hi if else conditon laga denge kyu k koi erro milne par respone me ek ok property hoti hai uska use kar sakte hai
})
// console.log(whatisthis) // fetch return karega ek promise dekhane k liye fech ko whatisthis variable me store karo


/////////////////////////

//AGar hame POST PUT DELETE method use karna ho to fech me ek second chij pass karte hai jo ki key value pair hota hai jisme ham method , header, body etc pass kar sakte hai

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
     
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response)=>{
    // console.log(response.json()) 
    if(response.ok){
        return response.json()
    
    }
    else{
        throw new Error("Something went wrong") 
    }
    }).then(data=>{
        console.log(data) 
    }).catch((error)=>{
        console.log(error)
    })
    