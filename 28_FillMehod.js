//<<<<<<<<< Fill Mehod >>>>>>>>>
// Use1 - this will fill the element with array of length which you want 

const array = new Array(10).fill(-1) //[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

console.log(array)

// Use2- Replacement

const myArray = [1,2,3,4,5,6,7,]

// array.fill(value, start, end) end will be excluded

myArray.fill(0, 2, 4)
console.log(myArray)
