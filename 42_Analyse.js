let arr  = [1,2,3,4] // hm aise create karte hai kyu k ye short hai

// arr. have so many methods which comes from prototype
// prototype sirf function ka hota hai
// internally javascript kya karta hai ki new Array(1,2,3,4) call karta hai
// let arr = new Array(1,2,3,4)


// console.log(arr.prototype) // isme arrya milega

//sort method se banaye gaye array ka prototype janane k liye 
console.log(Object.getPrototypeOf(arr))
console.log(arr)

// you can also set prototype as array
// functionName.prototype = []
// functionName.prototype.push(1)