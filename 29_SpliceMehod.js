// <<<<<<<< Splice Mehod >>>>>>>

// Start, Delete, Insert

const array = ["item1", "item2", "item3", "item4"]

// Delete
// array.splice(1,1)
// const deleteditem = array.splice(1,1)
// console.log(deleteditem)
// console.log(array)

//Insert

// array.splice(1, 1, "inserted Item")
// const deleteditem = array.splice(1, 1, "inserted Item")
// console.log(deleteditem)
// console.log(array)



// Insert delete together

const deleteditem = array.splice(1, 2, "insertedItem1", "insertedItem2")
console.log(deleteditem)
console.log(array)