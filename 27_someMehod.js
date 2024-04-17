//<<<<<<< Every Mehod >>>>>>>>

let num = [,7,3,5,4,9,2]

//chech if any one element is even
// if any one element will be true it wil give true

const ans = num.some((ele)=>ele%2 === 0)

console.log(ans)


const userCart = [
    {id:"dj3", name:"shirt", price:234},
    {id:"dj4", name:"trowsers", price:600},
    {id:"dp3", name:"pant", price:444},
    {id:"dn3", name:"shoe", price:454},
]

const objans =  userCart.some((item)=>item.price<700)
console.log(objans)