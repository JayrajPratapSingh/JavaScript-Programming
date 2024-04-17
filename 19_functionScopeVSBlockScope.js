// <<<<<< Functional Scope VS Block Scope >>>>>

//let and const are block scope
// var is functional scope
//  {
//   the content between these tow beraces are called block scope
//  }

{
    let firstName = "Jayraj" // can't accessible outside of block
    var secondName = "Singh" // accessible any where
}

{
    let firstName = "Jayraj" // can't accessible outside of block only accessible inside of block 
    var secondName = "Singh" // accessible any where
 console.log(firstName)
}

// console.log(firstName) // it will give referece error

console.log(secondName) // Singh

// You can define two variable with same name in different blocks

