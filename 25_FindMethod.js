//<<<<<<<<< FIND METHOD  >>>>>>>>>>

// It returns First True Value Accurance

const pets = ["Lion", "dog", "cat", "Horse"]



const ans = pets.find((str)=>{
return str.length === 3
})

console.log(ans)


/// Some Real Life Exp

const userCart = [
    {id:"dj3", name:"shirt", price:234},
    {id:"dj4", name:"trowsers", price:600},
    {id:"dp3", name:"pant", price:444},
    {id:"dn3", name:"shoe", price:454},
]
const newuser = userCart.find((user)=>user.id === "dj4")
console.log(newuser)//{id:"dj4", name:"trowsers", price:600}