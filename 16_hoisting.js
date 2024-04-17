//<<<<<<<<<<<<<< Hoisting  >>>>>>>>>>>>
// We can call function before it's declaration
//But it works only with function declaration not with function expression and arrow function
// if you acces then it will give you can not access function before initialization
// this behaviour is called hoisting

console.log(Hello("Raju"))


function Hello(name){
    return `Hello ${name} ! How are you`
}


let a 
console.log(a) // gives undefined

console.log(b) // reference error can not access b before initializtion

let b = 8

console.log(c)// reference error c is not defined
