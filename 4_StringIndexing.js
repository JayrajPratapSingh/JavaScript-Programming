// <<<<<<<<<<<<<<<<<< STRING INDEXING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let firstName = "Jayraj"
 

// J   a   y   r   a   j
// 0   1   2   3   4   5

// print name of the charector using index

console.log(firstName[4])

//Print the length of the string

console.log(firstName.length)  // it will prit 6 for 6 charectors

//last Index : 

console.log( firstName[firstName.length-1])


//<<<<<<<<<<<<<<<<Method to work with string >>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("METHOD OF STRING")

let secondName = "   Jayraj Singh  "

// Trim --> This method is use to remove extra spaces
console.log(secondName)
console.log(secondName.length)
console.log(secondName.trim())
console.log(secondName.length)  // gives same length 

secondName = secondName.trim()

console.log(secondName.length)  // now it will give you 12


// toUpperCase ==> all charecters will change in uppercase

console.log(secondName.toUpperCase())

//toLowerCase ==> all charecters will change in uppercase

console.log(secondName.toLowerCase())


// Slice  ==> let say if you want some charecters from the given name so you can use slice method

// start Index =0
// end Index = 5  for jayraj only to slice so 5+1 = 6
// the last index will be excluded and the start index will be included

console.log(secondName.slice(0,6)) // this will print Jayraj
console.log(secondName.slice(1))  // go till end from index 1