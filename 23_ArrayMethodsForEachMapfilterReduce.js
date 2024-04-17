// Arary Mehods 

// For Each
// it will take a callback 

const Array1 = [6,4,6,7,8,4,3,2]

function myFunc(number, index){
 console.log(`your index is ${index} and multiplication by 2 is: ${number}*2 = ${number*2}`)
}


Array1.forEach(myFunc)

// you can also define as anonimus function

Array1.forEach((num,i)=>{
    i += num
    
console.log(i)
})


const Info = [
    {name:"Jayraj", Age:34},
    {name:"Mohit", Age:20},
    {name:"Chatur", Age:54},
    {name:"Ram", Age:14},
]


Info.forEach((person)=>{
    console.log(person.name)
})

// Map -- it will also take callback fun in
// map returns the array of results 
// always use return in map callback function


function Mul(number){
    return number*number
}


const resArray = Array1.map(Mul)

console.log(resArray)

const resObj = Info.map((person)=>{
    return person.name
})

console.log(resObj)


// Filter Method
// Filter retuns true things or values

let newArrayres = Array1.filter((numbers)=>{
    return numbers >= 5
})

console.log("Filter",newArrayres)




// Reduce mehod

// Let say i want to sub of all numbers of Array1
// Array1.reduce((accumulator, currentvalue)=>{you logics}, initailValue if require)

const sum = Array1.reduce((accumulator, currentVal)=>{
    return accumulator+currentVal
})

console.log(sum)

// How it works 

// const Array1 = [6,4,6,7,8,4,3,2] // this is our array

// Stage 1
// accumulator    currentVal  return
//      6             4         10


// Stage 2
// accumulator    currentVal  return
//returnval-10         6        16

// Stage 3
// accumulator    currentVal  return
//returnval-16          7       23


// Stage 4
// accumulator    currentVal  return
//returnval-23          8      31

// Stage 5
// accumulator    currentVal  return
//returnval-31          4     35

// Stage 6
// accumulator    currentVal  return
//returnval-35          3     38

// Stage 7
// accumulator    currentVal  return
//returnval-38          2     40


// Real Life Example of reduce Method

const userCart = [
    {id:"dj3", name:"shirt", price:234},
    {id:"dj4", name:"trowsers", price:600},
    {id:"dp3", name:"pant", price:444},
    {id:"dn3", name:"shoe", price:454},
]


const totalP = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price
},0) // 0 will be initial value of totalPrice

console.log(totalP)



