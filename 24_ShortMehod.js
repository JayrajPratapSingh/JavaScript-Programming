//<<<<<<<<<  Short Mehod   >>>>>>>>>
// string are sorted by ASCCI code 
// numbers are shorted as string


// const numbers = [2,3,504,4,600,7,7,708] 

// numbers.sort() // it does not make new array it changes in array
// // it will short the numbers according to ASCII values
// console.log(numbers)

// const usersName = ["charan","Jayraj", "Mohit", "Rahul", "Harshit"]

// usersName.sort()// it will short like dictionary but it will give priority which starts with capital letter because of ASCII value

// //['Harshit', 'Jayraj', 'Mohit', 'Rahul', 'charan'] first short Capital then small letters
// console.log(usersName)


const numbers = [2,3,504,4,600,7,7,708] 

//The ques is how can i find the acpected incrising or decrising order shorting

// numbers.sort((a,b)=>{
//     return a-b  // for accending order
// })


 numbers.sort((a,b)=>{
        return b-a  // for decending order
    })

console.log(numbers) //[2, 3, 4, 7, 7, 504, 600, 708]


//How it works

// it is taking value like a next b 
//then a-b (if it is positive)
// the position will change a by b 
// in case of negative it will do vice versa

// Real Life Example

const userCart = [
    {id:"dj3", name:"shirt", price:234},
    {id:"dj4", name:"trowsers", price:600},
    {id:"dp3", name:"pant", price:444},
    {id:"dn3", name:"shoe", price:454},
]

userCart.sort((a,b)=>{
   return a.price - b.price
})
//If you want to clone

const newCloneProdictSorted = userCart.slice(0).sort((a,b)=>{
    return b.price - a.price
 })
console.log(userCart)
console.log(newCloneProdictSorted)


