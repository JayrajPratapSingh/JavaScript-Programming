//<<<<<< Every Mehod  >>>>>>>

// Every mehod returns either true or false
// It will Return true if condition will be true for all value otherwise it will return false

let Arr = [2,4,6,8,10]
let Arre =  [2,4,7,8,10]
const ans = Arr.every((e)=> e%2===0)
const ans1 = Arre.every((e)=> e%2===0)


// console.log(ans)// true
// console.log(ans1)

const userCart = [
    {id:"dj3", name:"shirt", price:234},
    {id:"dj4", name:"trowsers", price:600},
    {id:"dp3", name:"pant", price:444},
    {id:"dn3", name:"shoe", price:454},
]

const objans =  userCart.every((item)=>item.price<700)
console.log(objans)
