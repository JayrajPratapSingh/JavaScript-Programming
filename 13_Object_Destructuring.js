//<<<<<<<<<<<< OBJECT DESTRUCTURING >>>>>>>>>>>>>>>>>

const band = {
    name: "kuch bhi",
    famousSong:"any thing",
    year:1999,
    day:"Sunday"
}

// const {name, famousSong} = band

// console.log(name, famousSong)

// ager app kisi aur variable me store karna chahate hai to

// const {name:var1, famousSong:var2} = band

console.log(var1, var2)

const {name, famousSong, ...otherObj} = band
console.log(otherObj) // bache huye key value isme aajayenge


